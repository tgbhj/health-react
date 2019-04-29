import React from 'react'
import {Link} from 'react-router-dom'
import {Layout, Row, Col} from 'antd'
import './layout.css'
import logo from '../images/Logo_seeihealth.png'
import NavMenu from '../components/NavMenu'
import Foot from '../components/Foot'
import Carousels from '../components/Carousels'
import IndexVideos from '../components/IndexVideos'
import IndexChannels from '../components/IndexChannels'
import IndexDoc from '../components/IndexDoc'
import IndexInfo from '../components/IndexInfo'
import Hospital from '../components/Hospital'
import Cooperation from '../components/Cooperation'
import Back from '../components/Back'
import IndexQuest from '../components/IndexQuest'
import IndexInsur from '../components/IndexInsur'
import IndexMed from '../components/IndexMed'
import ErrorBoundary from '../components/ErrorBoundary'

const {Header, Content, Footer} = Layout;

function index() {
    return <Layout>
        <Header>
            <Link to='/'>
                <img src={logo} className="logo"/>
            </Link>
            <NavMenu/>
        </Header>
        <Content className="content">
            <Row>
                <Col span={22} offset={1}>
                    <Carousels/>
                    <ErrorBoundary>
                        <IndexQuest/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <IndexDoc/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <IndexInsur/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <IndexChannels/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <IndexVideos/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <IndexInfo/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <IndexMed/>
                    </ErrorBoundary>
                    <Hospital/>
                    <Cooperation/>
                </Col>
            </Row>
            <Back/>
        </Content>
        <Footer className="footer">
            <Foot/>
        </Footer>
    </Layout>
}

export default index;