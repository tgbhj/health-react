import React from 'react'
import {Row, Col, Input} from 'antd'

const Search = Input.Search;

function to() {
    window.location.href = '/questions'
}

function IndexQuest() {
    return <Row>
        <Col xs={24} sm={{span: 12, offset: 6}} md={{span: 12, offset: 6}} lg={{span: 12, offset: 6}}
             xl={{span: 12, offset: 6}} xxl={{span: 12, offset: 6}} style={{paddingTop: 20, paddingBottom: 10}}>
            <Search placeholder="在线咨询" enterButton="在线咨询" size="large" onSearch={to}/>
        </Col>
    </Row>
}

export default IndexQuest