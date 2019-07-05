import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Card, Col, Row, Icon, Button} from 'antd'
import {getVideos} from '../actions/page'
import {indexVideos} from '../actions/page_ui'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        videos: state.pageTodo.videos,
        videos_loading: state.pageUi.videos_loading
    }
}

class IndexVideos extends React.Component {
    async componentDidMount() {
        await this.props.dispatch(getVideos());
        await this.props.dispatch(indexVideos(false));
    }

    render() {
        if (this.props.videos_loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 10}}>
                    <Col>
                        <b style={{fontSize: 17}}>医学视频</b>
                        <Button type="danger" style={{float: 'right'}} href='/videos'>更多</Button>
                    </Col>
                </Row>
                <Row gutter={10} style={{paddingTop: 10}}>
                    {
                        this.props.videos.map(item => {
                            return <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} key={item._id}
                                        style={{paddingBottom: 5}}>
                                <Link to={'/video/' + item._id}>
                                    <Card hoverable cover={<img src={item.poster}/>} bodyStyle={{padding: 20}}
                                          bordered={false} loading={this.props.videos_loading}>{item.title}</Card>
                                </Link>
                            </Col>
                        })
                    }
                </Row>
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(IndexVideos)