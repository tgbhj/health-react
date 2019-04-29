import React from 'react'
import {withRouter} from 'react-router-dom'
import {Form, Button, Input, Icon, Row, Col, DatePicker, notification, Radio} from 'antd'
import axios from "axios"
import {connect} from 'react-redux'
import {disabled} from '../actions/user_ui'
import moment from 'moment'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function mapStateToProps(state) {
    return {
        disabled: state.userUi.disabled
    }
}

class UserInfoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.put('/api/edit', {
                    _id: this.props.match.params.id,
                    userInfo: this.props.form.getFieldsValue()
                }).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '保存成功',
                            description: '',
                            duration: 2
                        });
                        setTimeout(() => {
                            window.location.reload()
                        }, 2000)
                    } else {
                        notification.error({
                            message: '保存失败',
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

    editButton = () => {
        this.props.dispatch(disabled(false))
    };

    Greeting() {
        if (this.props.disabled === false) {
            return <Button type='primary' htmlType='submit' disabled={hasErrors(this.props.form.getFieldsError())}>
                <Icon type="save"/>保存
            </Button>
        } else {
            return <Button type='primary' disabled>
                <Icon type="save"/>保存
            </Button>
        }
    }

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <FormItem label='用户名'>
                {this.props.form.getFieldDecorator('username', {
                    rules: [{
                        min: 1, max: 20, message: '长度在1到20个字符'
                    }, {
                        required: true, whitespace: true, message: '请输入用户名'
                    }],
                    initialValue: this.props.user.username
                })(
                    <Input prefix={<Icon type="user"/>} placeholder="用户名" disabled={this.props.disabled}/>
                )}
            </FormItem>
            <FormItem label='手机号'>
                {this.props.form.getFieldDecorator('phone', {
                    rules: [{
                        min: 1, max: 11, message: '长度1到11个数字'
                    }, {
                        required: true, message: '请输入手机号码'
                    }],
                    initialValue: this.props.user.phone
                })(
                    <Input type="number" prefix={<Icon type="mobile"/>} placeholder="手机号"
                           disabled/>
                )}
            </FormItem>
            <FormItem label='积分'>
                <Input prefix={<Icon type="credit-card"/>} placeholder="虚拟币" disabled
                       value={this.props.user.virtual}/>
            </FormItem>
            <FormItem label='邮箱'>
                {this.props.form.getFieldDecorator('email', {
                    rules: [{
                        min: 1, max: 30, message: '长度在1到30个字符'
                    }, {
                        required: true, whitespace: true, message: '请输入邮箱'
                    }],
                    initialValue: this.props.user.email
                })(
                    <Input type="email" prefix={<Icon type="mail"/>} placeholder="邮箱"
                           disabled={this.props.disabled}/>
                )}
            </FormItem>
            <FormItem label='出生日期'>
                {this.props.form.getFieldDecorator('birthday', {
                    rules: [{
                        required: true, message: '请选择出生日期'
                    }],
                    initialValue: moment(this.props.user.birthday)
                })(
                    <DatePicker placeholder='请选择出生日期' disabled={this.props.disabled}/>
                )}
            </FormItem>
            <FormItem label='性别'>
                {this.props.form.getFieldDecorator('sex', {
                    rules: [{
                        required: true, message: '请选择性别'
                    }],
                    initialValue: this.props.user.sex
                })(
                    <RadioGroup disabled={this.props.disabled}>
                        <Radio value={0}>女</Radio>
                        <Radio value={1}>男</Radio>
                    </RadioGroup>
                )}
            </FormItem>
            <FormItem style={{textAlign: 'center', margin: '0 auto'}}>
                <Row>
                    <Col span={12}>
                        <Button type='primary' onClick={this.editButton}>
                            <Icon type="edit"/>修改
                        </Button>
                    </Col>
                    <Col span={12}>
                        {
                            this.Greeting()
                        }
                    </Col>
                </Row>
            </FormItem>
        </Form>
    }
}

const UserInfo = Form.create()(UserInfoForm);

export default connect(mapStateToProps)(withRouter(UserInfo))