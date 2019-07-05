import React, {Fragment} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {Row, Col, Card, Icon, Avatar} from 'antd'
import QuestionForm from './QuestionForm'
import {getQuestion} from '../actions/question'
import {questionLoading} from '../actions/question_ui'
import {getUser} from '../actions/user'
import {connect} from 'react-redux'
import ErrorBoundary from './ErrorBoundary'
import moment from 'moment'

const {Meta} = Card;

function mapStateToProps(state) {
    return {
        token: state.userTodo.token,
        user: state.userTodo.user,
        question: state.questionTodo.question,
        loading: state.questionUi.loading
    }
}

class Question extends React.Component {
    async componentDidMount() {
        if (this.props.token != null) {
            await this.props.dispatch(getUser(this.props.token));
        }
        await this.props.dispatch(getQuestion(this.props.match.params.id));
        await this.props.dispatch(questionLoading(false));
    }

    Greeting() {
        if (this.props.question.state === 1) {
            if (this.props.user.type === 1) {
                return <Row style={{marginTop: 10}}>
                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <ErrorBoundary>
                            <QuestionForm _id={this.props.match.params.id}/>
                        </ErrorBoundary>
                    </Col>
                </Row>
            } else {
                return <span>等待医生回答</span>
            }
        } else if (this.props.question.state === 2) {
            return <Row style={{marginTop: 10}}>
                <Col span={24} style={{paddingBottom: 5}}>
                    <Card hoverable bordered={false}>
                        <Link to={'/doctor/' + this.props.question.answer.doctor._id}>
                            <Meta
                                avatar={<Avatar src={this.props.question.answer.doctor.face} size="large"/>}
                                title={this.props.question.answer.doctor.name}
                                description={this.props.question.answer.doctor.hospital + ' ' + this.props.question.answer.doctor.specialty}
                            />
                        </Link>
                        <h3 style={{marginTop: 15}}>{this.props.question.answer.content}</h3>
                        <p>{moment(this.props.question.answer.time).format('YYYY-MM-DD HH:mm:ss')}</p>
                    </Card>
                </Col>
            </Row>
        } else {
            return <span>等待医生接单</span>
        }
    }

    render() {
        if (this.props.loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 20}}>
                    <Col>
                        <b style={{fontSize: 17}}>患者咨询</b>
                    </Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col span={24}>
                        <Card hoverable bordered={false} title={this.props.question.title} loading={this.props.loading}>
                            <p>{this.props.question.detail}</p>
                            <p>{moment(this.props.question.createTime).format('YYYY-MM-DD HH:mm:ss')}</p>
                        </Card>
                    </Col>
                </Row>
                <Row style={{paddingTop: 20}}>
                    <Col>
                        <b style={{fontSize: 17}}>医生解答</b>
                    </Col>
                </Row>
                {
                    this.Greeting()
                }
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(withRouter(Question))