import React from 'react'
import {Form, Input, Button, notification, Radio} from 'antd'
import axios from 'axios'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class InsureForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.post('/api/insure', {
                    name: this.props.form.getFieldValue('name'),
                    sex: this.props.form.getFieldValue('sex'),
                    IdCard: this.props.form.getFieldValue('IdCard'),
                    phone: this.props.form.getFieldValue('phone'),
                    userId: this.props.userId
                })
                    .then(res => {
                        if (res.data.code === 20000) {
                            this.props.handleCurrent(2);
                        } else {
                            notification.error({
                                message: res.data.msg,
                                description: '',
                                duration: 2
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
    };

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <FormItem label='姓名'>
                {this.props.form.getFieldDecorator('name', {
                    rules: [{
                        required: true, whitespace: true, message: '请输入姓名'
                    }, {
                        mix: 2, max: 6, message: '长度为2-6个字符'
                    }]
                })(
                    <Input placeholder='请输入姓名'/>
                )}
            </FormItem>
            <FormItem label='性别'>
                {this.props.form.getFieldDecorator('sex', {
                    rules: [{
                        required: true, message: '请选择性别'
                    }]
                })(
                    <RadioGroup>
                        <Radio value={0}>男</Radio>
                        <Radio value={1}>女</Radio>
                        <Radio value={2}>其他</Radio>
                    </RadioGroup>
                )}
            </FormItem>
            <FormItem label='身份证号'>
                {this.props.form.getFieldDecorator('IdCard', {
                    rules: [{
                        required: true, whitespace: true, message: '请输入身份证'
                    }, {
                        mix: 15, max: 18, message: '长度为18个字符'
                    }, {
                        pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '身份证不合法'
                    }]
                })(
                    <Input placeholder='请输入身份证'/>
                )}
            </FormItem>
            <FormItem label='手机号码'>
                {this.props.form.getFieldDecorator('phone', {
                    rules: [{
                        required: true, message: '请输入手机号码'
                    }, {
                        min: 11, max: 11, message: '长度为11个字符'
                    }]
                })(
                    <Input type='number' placeholder='请输入手机号码'/>
                )}
            </FormItem>
            <FormItem>
                <Button type='primary' htmlType="submit" disabled={hasErrors(this.props.form.getFieldsError())}>下一步</Button>
            </FormItem>
        </Form>
    }
}

const Insure = Form.create()(InsureForm);

export default Insure