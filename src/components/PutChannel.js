import React from 'react'
import {Button, Form, Input, notification, Radio} from "antd"
import axios from "axios"
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
        userChannel: state.userTodo.userChannel
    }
}

class PutForm extends React.Component {
    putChannel = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(typeof this.props.form.getFieldValue('state'));
                axios.put('/api/channel', {
                    title: this.props.form.getFieldValue('title'),
                    detail: this.props.form.getFieldValue('detail'),
                    state: this.props.form.getFieldValue('state')
                }, {headers: {token: this.props.token}}).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '修改成功',
                            description: '',
                            duration: 2
                        });
                        window.location.reload();
                    } else {
                        notification.error({
                            message: '修改失败',
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
            <h1>直播间信息</h1>
            <Form onSubmit={this.putChannel}>
                <FormItem>
                    {this.props.form.getFieldDecorator('title', {
                        rules: [{
                            min: 1, max: 18, message: '长度为1-18个字符'
                        }, {
                            required: true, message: '请输入直播间标题'
                        }],
                        initialValue: this.props.userChannel.title
                    })(
                        <Input type="title" placeholder="直播间标题"/>
                    )}
                </FormItem>
                <FormItem>
                    {this.props.form.getFieldDecorator('detail', {
                        rules: [{
                            min: 1, max: 200, message: '长度在1-200个字符'
                        }, {
                            required: true, message: '请输入直播间信息'
                        }],
                        initialValue: this.props.userChannel.detail
                    })(
                        <TextArea type="detail" placeholder="直播间信息"/>
                    )}
                </FormItem>
                <FormItem>
                    {this.props.form.getFieldDecorator('state', {
                        rules: [{
                            required: true, message: '请输入直播间信息'
                        }],
                        initialValue: this.props.userChannel.state
                    })(
                        <RadioGroup>
                            <Radio value={0}>未直播</Radio>
                            <Radio value={1}>直播</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" block htmlType="submit"
                            disabled={hasErrors(this.props.form.getFieldsError())}>修改</Button>
                </FormItem>
            </Form>
        </div>
    }
}

const PutChannel = Form.create()(PutForm);

export default connect(mapStateToProps)(PutChannel)