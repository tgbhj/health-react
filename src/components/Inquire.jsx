import React from 'react'
import {Form, Button, DatePicker, notification} from 'antd'
import axios from 'axios'
import {addBirthday} from '../actions/huatai'
import {connect} from 'react-redux'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function mapStateToProps(state) {
    return {
        birthday: state.huataiTodo.birthday
    }
}

class InquireForm extends React.Component {
    onChange = (date, dateString) => {
        this.props.dispatch(addBirthday(dateString))
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.post('/api/inquire', {
                    birthday: this.props.birthday,
                    plan: this.props.radio
                })
                    .then(res => {
                        if (res.data.code === 20000) {
                            this.props.handleCurrent(1);
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
            <FormItem label='出生日期'>
                {this.props.form.getFieldDecorator('birthday', {
                    rules: [{
                        required: true, message: '请选择出生日期'
                    }]
                })(
                    <DatePicker placeholder='请选择出生日期' onChange={this.onChange}/>
                )}
            </FormItem>
            <FormItem>
                <Button type='primary' htmlType="submit" disabled={hasErrors(this.props.form.getFieldsError())}>下一步</Button>
            </FormItem>
        </Form>
    }
}

const Inquire = Form.create()(InquireForm);

export default connect(mapStateToProps)(Inquire)