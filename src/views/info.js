import React from 'react'
import {Link} from 'react-router-dom'
import {Layout, Row, Col} from 'antd'
import './layout.css'
import logo from '../images/Logo_seeihealth.png'
import NavMenu from '../components/NavMenu'
import Foot from '../components/Foot'
import Back from '../components/Back'
import Info from '../components/Info'
import ErrorBoundary from '../components/ErrorBoundary'

const {Header, Content, Footer} = Layout;

function info() {
    return <Layout className="layout">
        <Header>
            <Link to='/'>
                <img src={logo} className="logo"/>
            </Link>
            <ErrorBoundary>
                <NavMenu/>
            </ErrorBoundary>
        </Header>
        <Content className="content">
            <Row>
                <Col span={22} offset={1}>
                    <ErrorBoundary>
                        <Info/>
                    </ErrorBoundary>
                </Col>
            </Row>
            <Back/>
        </Content>
        <Footer className="footer">
            <ErrorBoundary>
                <Foot/>
            </ErrorBoundary>
        </Footer>
    </Layout>
}

export default info;