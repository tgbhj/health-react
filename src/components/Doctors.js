import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Card, Col, Row, Icon, Avatar, Pagination, Button, Skeleton} from 'antd'
import {getDoctors} from '../actions/doctor'
import {doctorsLoading, doctorsIndex} from '../actions/doctor_ui'
import {connect} from 'react-redux'

const {Meta} = Card;
const IconText = ({type, text, url, id}) => (
    <span>
    <Icon type={type} onClick={(e) => urlChange(e, url, id)}/>
    <Button onClick={(e) => urlChange(e, url, id)} style={{
        backgroundColor: '#fafafa',
        borderColor: '#fafafa',
        fontSize: 16,
        height: 0,
        lineHeight: 1
    }}>{text}</Button>
  </span>
);

function urlChange(e, url, id) {
    window.location.href = url + id
}

function mapStateToProps(state) {
    return {
        doctors: state.doctorTodo.doctors,
        doctors_loading: state.doctorUi.doctors_loading,
        doctors_index: state.doctorUi.doctors_index
    }
}

class Doctors extends React.Component {
    state = {
        current: 1
    };

    async componentDidMount() {
        await this.props.dispatch(getDoctors(1));
        await this.props.dispatch(doctorsLoading(false));
    }

    handleChange = (page, pageSize) => {
        this.props.dispatch(doctorsIndex(this.props.doctors.slice((page - 1) * 20, page * 20)));
        this.setState({current: page})
    };

    render() {
        if (this.props.doctors_loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 10}}>
                    <Col>
                        <b style={{fontSize: 17}}>常驻医生</b>
                    </Col>
                </Row>
                <Row gutter={10} style={{paddingTop: 10}}>
                    {
                        this.props.doctors_index.map(item => {
                            return <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6} key={item._id}
                                        style={{paddingBottom: 5}}>
                                <Card hoverable loading={this.props.doctors_loading}
                                      actions={[<IconText type='message' text='一对一咨询' url='/doctor/' id={item._id}/>,
                                          <IconText type='video-camera' text='直播'/>]}>
                                    <Link to={'/doctor/' + item._id}>
                                        <Skeleton loading={this.props.doctors_loading} avatar active>
                                            <Meta
                                                avatar={<Avatar src={item.face} size="large"/>}
                                                title={item.name}
                                                description={item.specialty}
                                            />
                                        </Skeleton>
                                    </Link>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
                <Pagination simple total={this.props.doctors.length} onChange={this.handleChange} size="small"
                            pageSize={20} current={this.state.current}
                            style={{textAlign: 'center', margin: '15px auto 0'}}/>
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(Doctors)