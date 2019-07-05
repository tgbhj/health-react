import React from 'react'
import {Row, Col, Tabs} from 'antd'
import QuestForm from './Quest'
import QuestionList from './QuestionList'
import Doctors from './Doctors'
import {getUser} from '../actions/user'
import {connect} from 'react-redux'
import ErrorBoundary from './ErrorBoundary'

const {TabPane} = Tabs;

function mapStateToProps(state) {
    return {
        token: state.userTodo.token,
        user: state.userTodo.user
    }
}

class Questions extends React.Component {
    async componentDidMount() {
        if (this.props.token != null) {
            await this.props.dispatch(getUser(this.props.token))
        }
    }

    Greeting() {
        if (Object.keys(this.props.user).length !== 0 && this.props.user.type === 0) {
            return <TabPane tab="快速咨询" key='2'>
                <Row type="flex" justify="center" align="middle">
                    <Col xs={22} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <ErrorBoundary>
                            <QuestForm/>
                        </ErrorBoundary>
                    </Col>
                </Row>
            </TabPane>
        }
    }

    Greeting1() {
        if (Object.keys(this.props.user).length !== 0 && this.props.user.type === 0) {
            return <TabPane tab="一对一咨询" key='3'>
                <Row type="flex" justify="center" align="middle">
                    <Col span={22}>
                        <ErrorBoundary>
                            <Doctors/>
                        </ErrorBoundary>
                    </Col>
                </Row>
            </TabPane>
        }
    }

    render() {
        return <Tabs defaultActiveKey="1">
            <TabPane tab="咨询列表" key='1'>
                <Row type="flex" justify="center" align="middle">
                    <Col span={22}>
                        <ErrorBoundary>
                            <QuestionList/>
                        </ErrorBoundary>
                    </Col>
                </Row>
            </TabPane>
            {
                this.Greeting()
            }
            {
                this.Greeting1()
            }
        </Tabs>
    }
}

export default connect(mapStateToProps)(Questions)