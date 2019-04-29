import React from 'react'
import {Link} from 'react-router-dom'
import {Layout, Row, Col} from 'antd'
import './layout.css'
import logo from '../images/Logo_seeihealth.png'
import NavMenu from '../components/NavMenu'
import Foot from '../components/Foot'
import Back from '../components/Back'
import Channel from '../components/Channel'
import ErrorBoundary from '../components/ErrorBoundary'

const {Header, Content, Footer} = Layout;

function channel() {
    return <Layout className="layout">
        <Header>
            <Link to='/'>
                <img src={logo} className="logo"/>
            </Link>
            <NavMenu/>
        </Header>
        <Content className="content">
            <Row>
                <Col span={22} offset={1}>
                    <ErrorBoundary>
                        <Channel/>
                    </ErrorBoundary>
                </Col>
            </Row>
            <Back/>
        </Content>
        <Footer className="footer">
            <Foot/>
        </Footer>
    </Layout>
}

export default channel