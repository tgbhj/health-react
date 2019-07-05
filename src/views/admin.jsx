import React from 'react'
import {Link} from 'react-router-dom'
import {Layout} from 'antd'
import './layout.css'
import logo from '../images/Logo_seeihealth.png'
import Foot from '../components/Foot'
import Back from '../components/Back'
import AdminNav from '../components/AdminNav'
import AdminTabs from '../components/AdminTabs'
import ErrorBoundary from '../components/ErrorBoundary'

const {Header, Content, Footer} = Layout;

function admin() {
    return <Layout className="layout">
        <Header>
            <Link to='/'>
                <img src={logo} className="logo"/>
            </Link>
            <ErrorBoundary>
                <AdminNav/>
            </ErrorBoundary>
        </Header>
        <Content className="content">
            <ErrorBoundary>
                <AdminTabs/>
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

export default admin;