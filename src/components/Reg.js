import React from 'react'
import axios from 'axios'
import {Row, Col, Button, Form, Icon, Input, notification} from 'antd'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Reg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            second: 60
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.post('/api/reg', {
                    phone: this.props.form.getFieldValue('phone'),
                    password: this.props.form.getFieldValue('password'),
                    VCode: this.props.form.getFieldValue('vCode')
                }).then(res => {
                    localStorage.setItem("health-token", res.data.cb.token);
                    window.location.reload();
                }).catch(err => {
                    console.log(err)
                })
            }
        })
    };

    getVCode = () => {
        if (this.props.form.getFieldValue('phone') === undefined) {
            notification.error({
                message: '手机号不能为空',
                description: '',
                duration: 2
            })
        } else if (this.props.form.getFieldValue('phone').length !== 11) {
            notification.error({
                message: '手机号长度错误',
                description: '',
                duration: 2
            });
        } else {
            axios.post('/api/code', {
                phone: this.props.form.getFieldValue('phone')
            }).then(res => {
                if (res.data.code === 20000) {
                    this.setState({disabled: true});
                    this.timer = setInterval(() => {
                        this.setState((preState) => ({
                            second: preState.second - 1
                        }), () => {
                            if (this.state.second === 0) {
                                this.setState({second: 60});
                                this.setState({disabled: false});
                                clearInterval(this.timer);
                                return <Button type="danger" disabled={this.state.disabled} onClick={this.getVCode}>验证码</Button>
                            }
                        });
                    }, 1000);
                    notification.success({
                        message: '验证码已发送',
                        description: '',
                        duration: 2
                    });
                } else {
                    notification.error({
                        message: '验证码发送失败',
                        description: '',
                        duration: 2
                    });
                }
            }).catch(err => {
                console.log(err)
            })
        }
    };

    Greeting() {
        if (this.state.disabled === true) {
            return <Button disabled={this.state.disabled}>{this.state.second}S</Button>
        } else {
            return <Button type="danger" disabled={this.state.disabled} onClick={this.getVCode}>验证码</Button>
        }
    }

    render() {
        return <Form onSubmit={this.handleSubmit}>
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
                <Row gutter={10}>
                    <Col span={16}>
                        {this.props.form.getFieldDecorator('vCode', {
                            rules: [{
                                min: 6, max: 6, message: '长度为6个字符'
                            }, {
                                required: true, message: '请输入验证码'
                            }]
                        })(
                            <Input type="number" placeholder="验证码"/>
                        )}
                    </Col>
                    <Col span={8}>
                        {
                            this.Greeting()
                        }
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <Button type="primary" block htmlType="submit"
                        disabled={hasErrors(this.props.form.getFieldsError())}>注册</Button>
            </FormItem>
            <FormItem>
                <div style={{textAlign: 'center'}}>
                    <a href='/agreement' target='_blank'>用户协议</a>
                </div>
            </FormItem>
        </Form>
    }
}

const RegForm = Form.create()(Reg);

export default RegForm