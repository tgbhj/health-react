import React, {Fragment} from 'react'
import {Row, Col, Modal, Button, Tabs} from 'antd'
import RegForm from './Reg'
import SignForm from './Sign'
import {userDialog} from '../actions/user_ui'
import {connect} from 'react-redux'
import ErrorBoundary from '../components/ErrorBoundary'

const {TabPane} = Tabs;

function mapStateToProps(state) {
    return {
        dialogVisible: state.userUi.dialogVisible
    }
}

class RegSign extends React.Component {
    render() {
        return <Fragment>
            <Button type="danger" onClick={() => this.props.dispatch(userDialog(true))}>登录</Button>
            <Modal visible={this.props.dialogVisible} footer={null}
                   onCancel={() => this.props.dispatch(userDialog(false))}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="登录" key="1">
                        <Row type="flex" justify="center" align="middle">
                            <Col xs={22} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <ErrorBoundary>
                                    <SignForm/>
                                </ErrorBoundary>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="注册" key="2">
                        <Row type="flex" justify="center" align="middle">
                            <Col xs={22} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <ErrorBoundary>
                                    <RegForm/>
                                </ErrorBoundary>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </Modal>
        </Fragment>
    }
}

export default connect(mapStateToProps)(RegSign)