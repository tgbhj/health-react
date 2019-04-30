import React, {Fragment} from 'react'
import {Card, Col, Row, Icon, Pagination} from 'antd'
import {getMed} from '../actions/info'
import {medLoading, medIndex} from '../actions/info_ui'
import {connect} from 'react-redux'
import moment from 'moment'

const mapStateToProps = state => {
    return {
        med: state.infoTodo.med,
        med_loading: state.infoUi.med_loading,
        med_index: state.infoUi.med_index
    }
};

class Medicines extends React.Component {
    state = {
        current: 1
    };

    async componentDidMount() {
        await this.props.dispatch(getMed(1));
        await this.props.dispatch(medLoading(false));
    }

    handleChange = (page, pageSize) => {
        this.props.dispatch(medIndex(this.props.med.slice((page - 1) * 20, page * 20)));
        this.setState({current: page})
    };

    render() {
        if (this.props.med_loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 10}}>
                    <Col>
                        <b style={{fontSize: 17}}>国外处方药</b>
                    </Col>
                </Row>
                <Row gutter={10} style={{paddingTop: 10}}>
                    {
                        this.props.med_index.map(item => {
                            return <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6} key={item._id}
                                        style={{paddingBottom: 5}}>
                                <Card hoverable bordered={false} loading={this.props.med_loading}
                                      title={item.medicine} style={{height: '290px'}}>
                                    <p>有效成分:{item.component}</p>
                                    <p>适用症状:{item.disease}</p>
                                    <p>所属公司:{item.company}</p>
                                    <p>批准时间:{moment(item.approval).format('YYYY-MM-DD HH:mm:ss')}</p>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
                <Pagination simple total={this.props.med.length} onChange={this.handleChange} size="small"
                            pageSize={20} current={this.state.current}
                            style={{textAlign: 'center', margin: '15px auto 0'}}/>
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(Medicines)