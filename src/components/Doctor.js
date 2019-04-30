import React from 'react'
import {withRouter} from 'react-router-dom'
import {Icon, Card, Row, Col, Button, Modal, Skeleton} from 'antd'
import Consult from './Consult'
import {getDoctor} from '../actions/doctor'
import {doctorLoading, doctorDialog} from '../actions/doctor_ui'
import {connect} from 'react-redux'
import ErrorBoundary from '../components/ErrorBoundary'

const {Meta} = Card;

const IconText = ({type, text, _this}) => (
    <span>
    <Icon type={type} onClick={() => _this.props.dispatch(doctorDialog(true))}/>
    <Button onClick={() => _this.props.dispatch(doctorDialog(true))} style={{
        backgroundColor: '#fafafa',
        borderColor: '#fafafa',
        fontSize: 16,
        height: 0,
        lineHeight: 1
    }}>{text}</Button>
  </span>
);

const IconText1 = ({type, text}) => (
    <span>
    <Icon type={type}/>
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
        doctor: state.doctorTodo.doctor,
        doctor_loading: state.doctorUi.doctor_loading,
        dialogVisible: state.doctorUi.dialogVisible
    }
}

class Doctor extends React.Component {
    async componentDidMount() {
        await this.props.dispatch(getDoctor(this.props.match.params.id));
        await this.props.dispatch(doctorLoading(false));
    }

    render() {
        if (this.props.doctor_loading) {
            return <Icon type="loading"/>
        } else {
            return <Row style={{paddingTop: 20}}>
                <Col span={24}>
                    <Card hoverable loading={this.props.doctor_loading}
                          actions={[<IconText type='message' text='一对一咨询' _this={this}/>,
                              <IconText1 type='video-camera' text='直播'/>]}>
                        <Modal visible={this.props.dialogVisible} footer={null}
                               onCancel={() => this.props.dispatch(doctorDialog(false))}>
                            <Row type="flex" justify="center" align="middle">
                                <Col xs={22} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <ErrorBoundary>
                                        <Consult/>
                                    </ErrorBoundary>
                                </Col>
                            </Row>
                        </Modal>
                        <Skeleton loading={this.props.doctor_loading} avatar active>
                            <Meta avatar={<img src={this.props.doctor.face}/>} style={{paddingBottom: 15}}/>
                            <p>姓名：{this.props.doctor.name}</p>
                            <p>职称：{this.props.doctor.title}</p>
                            <p>科室：{this.props.doctor.specialty}</p>
                            <p>学历：{this.props.doctor.education}</p>
                            <p>专业：{this.props.doctor.profession}</p>
                            <p>所属医院：{this.props.doctor.hospital}</p>
                            <p>经历：{this.props.doctor.experience}</p>
                        </Skeleton>
                    </Card>
                </Col>
            </Row>
        }
    }
}

export default connect(mapStateToProps)(withRouter(Doctor))