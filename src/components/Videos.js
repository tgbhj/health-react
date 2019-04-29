import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Card, Col, Row, Icon, Pagination} from 'antd'
import {getVideos} from '../actions/vod_live'
import {videosLoading, videosIndex} from '../actions/vod_live_ui'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        videos: state.vodliveTodo.videos,
        videos_loading: state.vodliveUi.videos_loading,
        videos_index: state.vodliveUi.videos_index
    }
}

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1
        }
    }

    async componentDidMount() {
        await this.props.dispatch(getVideos(1));
        await this.props.dispatch(videosLoading(false));
    }

    handleChange = (page, pageSize) => {
        this.props.dispatch(videosIndex(this.props.videos.slice((page - 1) * 20, page * 20)));
        this.setState({current: page});
    };

    render() {
        if (this.props.videos_loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 10}}>
                    <Col>
                        <b style={{fontSize: 17}}>医学视频</b>
                    </Col>
                </Row>
                <Row gutter={10} style={{paddingTop: 10}}>
                    {
                        this.props.videos_index.map(item => {
                            return <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} key={item._id}
                                        style={{paddingBottom: 5}}>
                                <Link to={'/video/' + item._id}>
                                    <Card hoverable cover={<img src={item.poster}/>}
                                          bordered={false} loading={this.props.videos_loading}>{item.title}</Card>
                                </Link>
                            </Col>
                        })
                    }
                </Row>
                <Pagination simple total={this.props.videos.length} onChange={this.handleChange} size="small"
                            pageSize={20} current={this.state.current}
                            style={{textAlign: 'center', margin: '15px auto 0'}}/>
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(Videos)