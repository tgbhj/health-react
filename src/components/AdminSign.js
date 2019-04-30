import React from 'react'
import {Row, Col, Modal, Button, notification, Form, Input, Icon} from 'antd'
import axios from "axios"
import {adminUi} from '../actions/admin_ui'
import {connect} from 'react-redux'

const FormItem = Form.Item;

function mapStateToProps(state) {
    return {
        dialogVisible: state.adminUi.dialogVisible
    }
}

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SignForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.post('/api/sign', {
                    phone: this.props.form.getFieldValue('phone'),
                    password: this.props.form.getFieldValue('password')
                }).then(res => {
                    if (res.data.code === 20000) {
                        localStorage.setItem("health-token", res.data.cb.token);
                        window.location.reload();
                    } else {
                        notification.error({
                            message: '账号或密码错误',
                            description: '',
                            duration: 2
                        })
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        })
    };

    render() {
        return <div>
            <Button type="danger" onClick={() => this.props.dispatch(adminUi(true))}>登录</Button>
            <Modal visible={this.props.dialogVisible} footer={null}
                   onCancel={() => this.props.dispatch(adminUi(false))}>
                <Row type="flex" justify="center" align="middle">
                    <Col xs={22} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {this.props.form.getFieldDecorator('phone', {
                                    rules: [{
                                        min: 11, max: 11, message: '长度为11个字符'
                                    }, {
                                        required: true, message: '请输入手机号'
                                    }]
                                })(
                                    <Input type="number" prefix={<Icon type="mobile"/>} placeholder="手机号"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {this.props.form.getFieldDecorator('password', {
                                    rules: [{
                                        min: 6, max: 18, message: '长度在6到18个字符'
                                    }, {
                                        required: true, whitespace: true, message: '请输入密码'
                                    }]
                                })(
                                    <Input type="password" prefix={<Icon type="lock"/>} placeholder="密码"/>
                                )}
                            </FormItem>
                            <FormItem>
                                <a href="">忘记密码?</a>
                                <Button type="primary" block htmlType="submit"
                                        disabled={hasErrors(this.props.form.getFieldsError())}>登录</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </div>
    }
}

const AdminSign = Form.create()(SignForm);

export default connect(mapStateToProps)(AdminSign)