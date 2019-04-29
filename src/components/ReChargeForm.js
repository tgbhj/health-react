import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button, Form, Input, Modal, notification, Radio} from "antd"
import {qrcodeDialog, wxQrcode} from "../actions/user_ui"
import axios from "axios"
import {connect} from 'react-redux'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function mapStateToProps(state) {
    return {
        qrcode: state.userUi.qrcode,
        dialog: state.userUi.dialog
    }
}

class ReChargeForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                if (this.props.form.getFieldValue('money') >= 10) {
                    if (this.props.form.getFieldValue('pay') === 1) {
                        await axios.get('/api/alipay/pagePay?totalAmount=' + this.props.form.getFieldValue('money') + '&subject=积分充值&body=积分充值&user_id=' + this.props.match.params.id)
                            .then(res => {
                                if (res.data.status === 'success') {
                                    window.open(res.data.url)
                                } else {
                                    notification.error({
                                        message: 'Error',
                                        description: '',
                                        duration: 2
                                    });
                                }
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    } else if (this.props.form.getFieldValue('pay') === 2) {
                        await axios.post('/api/wxpay/pay', {
                            totalFee: this.props.form.getFieldValue('money'),
                            body: '积分充值',
                            user_id: this.props.match.params.id
                        }).then(res => {
                            console.log(res.data);
                            if (res.data.status === 'success') {
                                this.props.dispatch(wxQrcode(res.data.qrcode));
                                this.props.dispatch(qrcodeDialog(true));
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
                    }
                } else {
                    notification.error({
                        message: '充值金额必须大于10元',
                        description: '',
                        duration: 2
                    });
                }
            }
        })
    };

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <FormItem>
                {this.props.form.getFieldDecorator('money', {
                    rules: [{
                        min: 2, max: 5, message: '长度为2到10个字符'
                    }, {
                        required: true, message: '请输入金额'
                    }]
                })(
                    <Input type='number' placeholder="充值金额"/>
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
                <Button type="primary" htmlType='submit' block
                        disabled={hasErrors(this.props.form.getFieldsError())}>充值</Button>
            </FormItem>
            <Modal visible={this.props.dialog} footer={null}
                   onCancel={() => this.props.dispatch(qrcodeDialog(false))}>
                <p>积分充值</p>
                <p>充值金额：{this.props.form.getFieldValue('money')}元</p>
                <img src={this.props.qrcode}/>
            </Modal>
        </Form>
    }
}

const RCForm = Form.create()(ReChargeForm);

export default connect(mapStateToProps)(withRouter(RCForm))