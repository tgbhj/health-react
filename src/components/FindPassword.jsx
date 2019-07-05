import React from 'react'
import {Row, Col, Divider, Steps} from 'antd'
import Step1 from './PWStep1'
import Step2 from './PWStep2'
import ErrorBoundary from './ErrorBoundary'

const {Step} = Steps;

class FindPassword extends React.Component {
    state = {
        current: 0,
        phone: 1
    };

    handleCurrent(val) {
        this.setState({current: val})
    }

    handlePhone(val) {
        this.setState({phone: val})
    }

    render() {
        return <Row type="flex" justify="center" align="middle">
            <Col xs={22} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <h1>找回密码</h1>
                <Steps current={this.state.current}>
                    <ErrorBoundary>
                        <Step title="第一步"/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Step title="第二步"/>
                    </ErrorBoundary>
                </Steps>
                <Divider/>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    {this.state.current === 0 ? <Step1 handleCurrent={val => this.handleCurrent(val)}
                                                       handlePhone={val => this.handlePhone(val)}/> :
                        <Step2 phone={this.state.phone}/>}
                </Col>
            </Col>
        </Row>
    }
}

export default FindPassword