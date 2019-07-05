import React, {Fragment} from 'react'
import {Card, Row, Col, Button} from 'antd'
import {getInsure} from '../actions/huatai'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        insure: state.huataiTodo.insure
    }
}

class IndexInsur extends React.Component {
    async componentDidMount() {
        await this.props.dispatch(getInsure())
    }

    render() {
        return <Fragment>
            <Row style={{paddingTop: 10}}>
                <Col>
                    <b style={{fontSize: 17}}>华泰健康险</b>
                </Col>
            </Row>
            <Row style={{paddingTop: 10}} type="flex" justify="space-around">
                {
                    this.props.insure.map(item => {
                        return <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8} key={item._id}
                                    style={{paddingBottom: 5}}>
                            <Card hoverable bordered={false}>
                                <p>{item.title}</p>
                                <p>{item.content}</p>
                                <p>{item.time}</p>
                                <p>{item.price}</p>
                                <Button style={{float: 'right'}} href='/insurance'>立即投保</Button>
                            </Card>
                        </Col>
                    })
                }
            </Row>
        </Fragment>
    }
}

export default connect(mapStateToProps)(IndexInsur)