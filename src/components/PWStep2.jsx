import React from 'react'
import {Form, Button, Input, notification, Icon} from 'antd'
import axios from "axios"
import {connect} from 'react-redux'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class PWStep2 extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.put('/api/second', {
                    phone: this.props.phone,
                    password: this.props.form.getFieldValue('password')
                }).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '新密码设置成功',
                            description: '',
                            duration: 2
                        });
                        setTimeout(() => {
                            window.location.href = '/'
                        }, 2000)
                    } else {
                        notification.error({
                            message: '系统错误',
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
                {this.props.form.getFieldDecorator('password', {
                    rules: [{
                        min: 6, max: 18, message: '长度在6到18个字符'
                    }, {
                        required: true, whitespace: true, message: '请输入密码'
                    }]
                })(
                    <Input type="password" prefix={<Icon type="lock"/>} placeholder="设置密码"/>
                )}
            </FormItem>
            <FormItem>
                <Button type='primary' block htmlType="submit"
                        disabled={hasErrors(this.props.form.getFieldsError())}>完成</Button>
            </FormItem>
        </Form>
    }
}

const Step2 = Form.create()(PWStep2);

export default connect()(Step2)