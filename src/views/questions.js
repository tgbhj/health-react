import React from 'react'
import {Link} from 'react-router-dom'
import {Layout} from 'antd'
import './layout.css'
import logo from '../images/Logo_seeihealth.png'
import NavMenu from '../components/NavMenu'
import Foot from '../components/Foot'
import Back from '../components/Back'
import Questions from '../components/Questions'
import ErrorBoundary from '../components/ErrorBoundary'

const {Header, Content, Footer} = Layout;

function questions() {
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
                <Questions/>
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

export default questions