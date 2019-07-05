import React, {Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import {Form, Button, Input, notification, Radio, Modal} from 'antd'
import axios from "axios/index"
import {getUser} from '../actions/user'
import {consultQrcode} from '../actions/question'
import {consultDialog, consultPayType} from '../actions/question_ui'
import {connect} from 'react-redux'

const FormItem = Form.Item;
const {TextArea} = Input;
const RadioGroup = Radio.Group;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function mapStateToProps(state) {
    return {
        token: state.userTodo.token,
        user: state.userTodo.user,
        qrcode: state.questionTodo.consult_qrcode,
        dialogVisible: state.questionUi.consult_dialog,
        payType: state.questionUi.consult_payType
    }
}

class ConsultForm extends React.Component {
    async getConsult() {
        return await axios({
            method: 'post', url: '/api/consult', headers: {'token': this.props.token},
            data: {
                title: this.props.form.getFieldValue('title'),
                detail: this.props.form.getFieldValue('detail'),
                doctorId: this.props.match.params.id
            }
        })
    }

    async payPage() {
        if (this.props.payType === 1) {
            return await axios.get('/api/alipay/pagePay?totalAmount=10&subject=付费提问&body=付费提问&user_id=' + this.props.user._id)
        } else if (this.props.payType === 2) {
            return await axios.post('/api/wxpay/pay', {totalFee: '10', body: '付费提问', user_id: this.props.user._id})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                if (this.props.token != null) {
                    await this.props.dispatch(getUser(this.props.token));
                    if (Object.keys(this.props.user).length !== 0) {
                        await this.getConsult().then(async res => {
                            if (res.data.code === 20000) {
                                notification.success({
                                    message: '问题提交成功',
                                    description: '',
                                    duration: 2
                                });
                                this.props.dispatch(consultPayType(this.props.form.getFieldValue('pay')));
                                await this.payPage().then(res => {
                                    if (res.data.status === 'success') {
                                        if (res.data.url !== undefined) {
                                            window.open(res.data.url)
                                        } else {
                                            this.props.dispatch(consultQrcode(res.data.qrcode));
                                            this.props.dispatch(consultDialog(true));
                                        }
                                    } else {
                                        notification.error({
                                            message: 'Error',
                                            description: '',
                                            duration: 2
                                        });
                                    }
                                }).catch(err => {
                                    console.log(err)
                                })
                            } else if (res.data.code === 50008) {
                                notification.error({
                                    message: 'Token已过期',
                                    description: '',
                                    duration: 2
                                })
                            } else {
                                notification.error({
                                    message: 'UnKnow-Error',
                                    description: '',
                                    duration: 2
                                })
                            }
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                } else {
                    notification.error({
                        message: '请先登录',
                        description: '',
                        duration: 2
                    })
                }
            }
        })
    };

    render() {
        return <Fragment>
            <Form onSubmit={this.handleSubmit}>
                <FormItem label='疾病/症状'>
                    {this.props.form.getFieldDecorator('title', {
                        rules: [{
                            min: 1, max: 20, message: '长度为1到20个字符'
                        }, {
                            required: true, message: '请输入疾病/症状'
                        }]
                    })(
                        <Input placeholder="疾病/症状"/>
                    )}
                </FormItem>
                <FormItem label='病情及疑问'>
                    {this.props.form.getFieldDecorator('detail', {
                        rules: [{
                            min: 1, max: 200, message: '长度为1到200个字符'
                        }, {
                            required: true, message: '请输入病情及疑问'
                        }]
                    })(
                        <TextArea autosize placeholder="病情及疑问"/>
                    )}
                </FormItem>
                <FormItem label='支付方式'>
                    {this.props.form.getFieldDecorator('pay', {
                        rules: [{
                            required: true, message: '请选择支付方式'
                        }]
                    })(
                        <RadioGroup>
                            <Radio value={1}>支付宝</Radio>
                            <Radio value={2}>微信</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem>
                    <Button type='primary' htmlType='submit' block
                            disabled={hasErrors(this.props.form.getFieldsError())}>付费提问</Button>
                </FormItem>
            </Form>
            <Modal visible={this.props.dialogVisible} footer={null}
                   onCancel={() => this.props.dispatch(consultDialog(false))}>
                <p>付费提问</p>
                <img src={this.props.qrcode}/>
            </Modal>
        </Fragment>
    }
}

const Consult = Form.create()(ConsultForm);

export default connect(mapStateToProps)(withRouter(Consult))