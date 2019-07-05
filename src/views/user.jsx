import React from 'react'
import {Link} from 'react-router-dom'
import {Layout} from 'antd'
import './layout.css'
import logo from '../images/Logo_seeihealth.png'
import NavMenu from '../components/NavMenu'
import Foot from '../components/Foot'
import Back from '../components/Back'
import User from '../components/User'
import ErrorBoundary from '../components/ErrorBoundary'

const {Header, Content, Footer} = Layout;

function user() {
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
            <ErrorBoundary>
                <User/>
            </ErrorBoundary>
            <Back/>
        </Content>
        <Footer className="footer">
            <ErrorBoundary>
                <Foot/>
            </ErrorBoundary>
        </Footer>
    </Layout>
}

export default user