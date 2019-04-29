import React from 'react'
import axios from 'axios/index'
import {Link} from 'react-router-dom'
import {Button, Form, Icon, Input, notification} from 'antd'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Sign extends React.Component {
    constructor(props) {
        super(props)
    }

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
                        });
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        })
    };

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
                <Link to="/findPassword">忘记密码?</Link>
                <Button type="primary" block htmlType="submit"
                        disabled={hasErrors(this.props.form.getFieldsError())}>登录</Button>
            </FormItem>
        </Form>
    }
}

const SignForm = Form.create()(Sign);

export default SignForm