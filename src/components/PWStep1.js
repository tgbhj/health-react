import React from 'react'
import {Form, Button, Input, Row, Col, notification, Icon} from 'antd'
import axios from "axios"

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class PWStep1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: 0,
            disabled: false,
            second: 60
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({phone: this.props.form.getFieldValue('phone')});
                axios.post('/api/first', {
                    phone: this.props.form.getFieldValue('phone'),
                    VCode: this.props.form.getFieldValue('vCode')
                }).then(res => {
                    if (res.data.code === 20000) {
                        this.props.handleCurrent(1);
                        this.props.handlePhone(this.state.phone)
                    } else if (res.data.code === 50003) {
                        notification.error({
                            message: '验证码不存在或过期',
                            description: '',
                            duration: 2
                        });
                    } else if (res.data.code === 50007) {
                        notification.error({
                            message: '此号码未注册',
                            description: '',
                            duration: 2
                        });
                    } else {
                        notification.error({
                            message: '验证码错误',
                            description: '',
                            duration: 2
                        });
                    }
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
                <Button type='primary' block htmlType="submit"
                        disabled={hasErrors(this.props.form.getFieldsError())}>下一步</Button>
            </FormItem>
        </Form>
    }
}

const Step1 = Form.create()(PWStep1);

export default Step1