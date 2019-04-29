import React from 'react'
import {Link} from 'react-router-dom'
import {Layout, Row, Col, Tabs} from 'antd'
import './layout.css'
import logo from '../images/Logo_seeihealth.png'
import NavMenu from '../components/NavMenu'
import Foot from '../components/Foot'
import Back from '../components/Back'
import RegForm from '../components/Reg'
import SignForm from '../components/Sign'
import ErrorBoundary from '../components/ErrorBoundary'

const {Header, Content, Footer} = Layout;
const TabPane = Tabs.TabPane;

function login() {
    return <Layout className="layout">
        <Header>
            <Link to='/'>
                <img src={logo} className="logo"/>
            </Link>
            <NavMenu/>
        </Header>
        <Content className="content">
            <Tabs defaultActiveKey="1">
                <TabPane tab="登录" key="1">
                    <Row type="flex" justify="center" align="middle">
                        <Col xs={{span: 22}} sm={{span: 8}} md={{span: 8}}
                             lg={{span: 8}} xl={{span: 8}} xxl={{span: 8}}>
                            <ErrorBoundary>
                                <SignForm/>
                            </ErrorBoundary>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="注册" key="2">
                    <Row type="flex" justify="center" align="middle">
                        <Col xs={{span: 22}} sm={{span: 8}} md={{span: 8}}
                             lg={{span: 8}} xl={{span: 8}} xxl={{span: 8}}>
                            <ErrorBoundary>
                                <RegForm/>
                            </ErrorBoundary>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
            <Back/>
        </Content>
        <Footer className="footer">
            <Foot/>
        </Footer>
    </Layout>
}

export default login