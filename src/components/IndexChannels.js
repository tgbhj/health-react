import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Card, Col, Row, Icon, Button} from 'antd'
import {getChannels} from '../actions/page'
import {indexChannels} from '../actions/page_ui'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        channels: state.pageTodo.channels,
        channels_loading: state.pageUi.channels_loading
    }
}

class IndexChannels extends React.Component {
    async componentDidMount() {
        await this.props.dispatch(getChannels());
        await this.props.dispatch(indexChannels(false));
    }

    render() {
        if (this.props.channels_loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 10}}>
                    <Col>
                        <b style={{fontSize: 17}}>公益直播</b>
                        <Button type="danger" style={{float: 'right'}} href='/channels'>更多</Button>
                    </Col>
                </Row>
                <Row gutter={10} style={{paddingTop: 10}}>
                    {
                        this.props.channels.map(item => {
                            return <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} key={item._id}
                                        style={{paddingBottom: 5}}>
                                <Link to={'/channel/' + item._id}>
                                    <Card hoverable cover={<img src={item.poster}/>} bodyStyle={{padding: 20}}
                                          bordered={false} loading={this.props.channels_loading}>{item.title}</Card>
                                </Link>
                            </Col>
                        })
                    }
                </Row>
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(IndexChannels)