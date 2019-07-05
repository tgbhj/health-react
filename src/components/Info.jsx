import React from 'react'
import {withRouter} from 'react-router-dom'
import {Row, Col, Card, Icon, Skeleton, notification, Button} from 'antd'
import axios from 'axios'
import './Info.css'
import {addInformation} from '../actions/info'
import {infoLoading} from '../actions/info_ui'
import {getUser} from "../actions/user"
import {connect} from 'react-redux'
import moment from 'moment'

const {Meta} = Card;

const StarIcon = ({type, text, id, _this, theme}) => (
    <span>
    <Icon type={type} theme={theme} onClick={() => collect(_this, id)} style={{color: '#FFD700'}}/>
    <Button onClick={() => collect(_this, id)} style={{
        backgroundColor: '#fafafa',
        borderColor: '#fafafa',
        fontSize: 16,
        height: 0,
        lineHeight: 1
    }}>{text}</Button>
  </span>
);

const LikeText = ({type, text, id, _this, theme}) => (
    <span>
    <Icon type={type} theme={theme} onClick={() => like(_this, id)} style={{color: '#FF0000'}}/>
    <Button onClick={() => like(_this, id)} style={{
        backgroundColor: '#fafafa',
        borderColor: '#fafafa',
        fontSize: 16,
        height: 0,
        lineHeight: 1
    }}>{text}</Button>
  </span>
);

const ViewText = ({type, text}) => (
    <span>
    <Icon type={type} style={{color: '#000000'}}/>
    <Button style={{
        backgroundColor: '#fafafa',
        borderColor: '#fafafa',
        fontSize: 16,
        height: 0,
        lineHeight: 1
    }}>{text}</Button>
  </span>
);

function mapStateToProps(state) {
    return {
        token: state.userTodo.token,
        user: state.userTodo.user,
        information: state.infoTodo.information,
        info_loading: state.infoUi.info_loading,
        user_info: state.userTodo.user_info
    }
}

async function like(_this, id) {
    if (_this.state.likeTheme === 'outlined') {
        await userLike(_this, id);
        await infoLike(_this, id);
    } else {
        await delUserLike(_this, id);
        await delLike(_this, id);
    }
}

function userLike(_this, id) {
    if (_this.props.token != null) {
        axios.post('/api/userLike', {infoId: id}, {headers: {'token': _this.props.token}})
            .then(() => {
                _this.props.dispatch(getUser(_this.props.token))
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        notification.error({
            message: '请先登录',
            description: '',
            duration: 2
        });
    }
}

function infoLike(_this, id) {
    if (Object.keys(_this.props.user).length !== 0) {
        axios.post('/api/setLike', {infoId: id, userId: _this.props.user._id})
            .then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '点赞成功',
                        description: '',
                        duration: 2
                    });
                    window.location.reload();
                } else {
                    notification.error({
                        message: '点赞失败',
                        description: '',
                        duration: 2
                    });
                }
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        notification.error({
            message: '请先登录',
            description: '',
            duration: 2
        });
    }
}

function delUserLike(_this, id) {
    if (_this.props.token != null) {
        axios.post('/api/delUserLike', {infoId: id}, {headers: {'token': _this.props.token}})
            .then(() => {
                _this.props.dispatch(getUser(_this.props.token))
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        notification.error({
            message: '请先登录',
            description: '',
            duration: 2
        });
    }
}

function delLike(_this, id) {
    if (Object.keys(_this.props.user).length !== 0) {
        axios.post('/api/delLike', {infoId: id, userId: _this.props.user._id})
            .then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '取消点赞成功',
                        description: '',
                        duration: 2
                    });
                    window.location.reload();
                } else {
                    notification.error({
                        message: '取消点赞失败',
                        description: '',
                        duration: 2
                    });
                }
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        notification.error({
            message: '请先登录',
            description: '',
            duration: 2
        });
    }
}

async function collect(_this, id) {
    if (_this.state.collectTheme === 'outlined') {
        await userCollect(_this, id);
        await infoCollect(_this, id);
    } else {
        await delUserCollect(_this, id);
        await delCollect(_this, id);
    }
}

function userCollect(_this, id) {
    if (_this.props.token != null) {
        axios.post('/api/userCollect', {infoId: id}, {headers: {'token': _this.props.token}})
            .then(() => {
                _this.props.dispatch(getUser(_this.props.token))
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        notification.error({
            message: '请先登录',
            description: '',
            duration: 2
        });
    }
}

function infoCollect(_this, id) {
    if (Object.keys(_this.props.user).length !== 0) {
        axios.post('/api/setCollect', {infoId: id, userId: _this.props.user._id})
            .then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '收藏成功',
                        description: '',
                        duration: 2
                    });
                    window.location.reload();
                } else {
                    notification.error({
                        message: '收藏失败',
                        description: '',
                        duration: 2
                    });
                }
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        notification.error({
            message: '请先登录',
            description: '',
            duration: 2
        });
    }
}

function delUserCollect(_this, id) {
    if (_this.props.token != null) {
        axios.post('/api/delUserCollect', {infoId: id}, {headers: {'token': _this.props.token}})
            .then(() => {
                _this.props.dispatch(getUser(_this.props.token))
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        notification.error({
            message: '请先登录',
            description: '',
            duration: 2
        });
    }
}

function delCollect(_this, id) {
    if (Object.keys(_this.props.user).length !== 0) {
        axios.post('/api/delCollect', {infoId: id, userId: _this.props.user._id})
            .then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '取消收藏成功',
                        description: '',
                        duration: 2
                    });
                    window.location.reload();
                } else {
                    notification.error({
                        message: '取消收藏失败',
                        description: '',
                        duration: 2
                    });
                }
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        notification.error({
            message: '请先登录',
            description: '',
            duration: 2
        });
    }
}

class Info extends React.Component {
    state = {
        collectTheme: 'outlined',
        likeTheme: 'outlined'
    };

    async getInfo() {
        await axios.get('/api/info', {headers: {'id': this.props.match.params.id}})
            .then(res => {
                this.props.dispatch(addInformation(res.data.cb));
                this.props.dispatch(infoLoading(false));
            })
            .catch(err => {
                console.log(err)
            })
    }

    async componentDidMount() {
        await this.getInfo();
        let collectId = this.props.information.collect.findIndex(() => {
            return this.props.user._id;
        });
        if (collectId !== -1) {
            this.setState({collectTheme: 'filled'});
        }
        let likeId = this.props.information.like.findIndex(() => {
            return this.props.user._id;
        });
        if (likeId !== -1) {
            this.setState({likeTheme: 'filled'});
        }
    }

    render() {
        if (this.props.info_loading) {
            return <Icon type="loading"/>
        } else {
            return <Row style={{paddingTop: 20}}>
                <Col span={24}>
                    <Card hoverable loading={this.props.info_loading}
                          actions={[<StarIcon type="star" theme={this.state.collectTheme}
                                              text={this.props.information.collect.length}
                                              _this={this} id={this.props.information._id}/>,
                              <LikeText type="like" theme={this.state.likeTheme} text={this.props.information.like.length}
                                        _this={this} id={this.props.information._id}/>,
                              <ViewText type="eye" text={this.props.information.view}/>]}>
                        <h2 style={{textAlign: 'center', margin: '0 auto'}}>{this.props.information.title}</h2>
                        <p style={{textAlign: 'center', margin: '0 auto'}}>
                            {moment(this.props.information.createTime).format('YYYY-MM-DD HH:mm:ss')}
                        </p>
                        <Skeleton loading={this.props.info_loading} avatar active>
                            <Meta
                                avatar={<img src={this.props.information.image}/>}
                                style={{paddingTop: 15, paddingBottom: 15, textAlign: 'center', margin: '0 auto'}}/>
                            <p>{this.props.information.detail}</p>
                        </Skeleton>
                    </Card>
                </Col>
            </Row>
        }
    }
}

export default connect(mapStateToProps)(withRouter(Info))