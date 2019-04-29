import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Card, Col, Row, Icon, Pagination} from 'antd'
import {getChannels} from '../actions/vod_live'
import {channelsLoading, channelsIndex} from '../actions/vod_live_ui'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        channels: state.vodliveTodo.channels,
        channels_loading: state.vodliveUi.channels_loading,
        channels_idnex: state.vodliveUi.channels_idnex
    }
}

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1
        }
    }

    async componentDidMount() {
        await this.props.dispatch(getChannels(1));
        await this.props.dispatch(channelsLoading(false));
    }

    handleChange = (page, pageSize) => {
        this.props.dispatch(channelsIndex(this.props.channels.slice((page - 1) * 20, page * 20)));
        this.setState({current: page});
    };

    render() {
        if (this.props.channels_loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 10}}>
                    <Col>
                        <b style={{fontSize: 17}}>公益直播</b>
                    </Col>
                </Row>
                <Row gutter={10} style={{paddingTop: 10}}>
                    {
                        this.props.channels_idnex.map(item => {
                            return <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} key={item._id}
                                        style={{paddingBottom: 5}}>
                                <Link to={'/channel/' + item._id}>
                                    <Card hoverable cover={<img src={item.poster}/>}
                                          bordered={false} loading={this.props.channels_loading}>{item.title}</Card>
                                </Link>
                            </Col>
                        })
                    }
                </Row>
                <Pagination simple total={this.props.channels.length} onChange={this.handleChange} size="small"
                            pageSize={20} current={this.state.current}
                            style={{textAlign: 'center', margin: '15px auto 0'}}/>
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(Channels)