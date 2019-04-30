import React, {Fragment} from 'react'
import {Card, Col, Row, Icon, Button} from 'antd'
import {getMed} from '../actions/page'
import {indexMed} from '../actions/page_ui'
import {connect} from 'react-redux'
import moment from 'moment'

function mapStateToProps(state) {
    return {
        med: state.pageTodo.med,
        med_loading: state.pageUi.med_loading
    }
}

class IndexMed extends React.Component {
    async componentDidMount() {
        await this.props.dispatch(getMed());
        await this.props.dispatch(indexMed(false));
    }

    render() {
        if (this.props.med_loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 10}}>
                    <Col>
                        <b style={{fontSize: 17}}>国外处方药</b>
                        <Button type="danger" style={{float: 'right'}} href='/medicines'>更多</Button>
                    </Col>
                </Row>
                <Row gutter={10} style={{paddingTop: 10}}>
                    {
                        this.props.med.map(item => {
                            return <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6} key={item._id}
                                        style={{paddingBottom: 5}}>
                                <Card hoverable bordered={false} loading={this.props.med_loading}
                                      title={item.medicine} style={{height: '290px'}}>
                                    <p>有效成分:{item.component}</p>
                                    <p>适用症状:{item.disease}</p>
                                    <p>所属公司:{item.company}</p>
                                    <p>批准时间:{moment(item.approval).format('YYYY-MM-DD')}</p>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(IndexMed)