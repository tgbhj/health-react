import React from 'react'
import {Button, Form, Input, notification} from "antd"
import axios from "axios"
import {connect} from 'react-redux'

const FormItem = Form.Item;
const {TextArea} = Input;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function mapStateToProps(state) {
    return {
        token: state.userTodo.token
    }
}

class CreateForm extends React.Component {
    createChannel = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.post('/api/channel', {
                    title: this.props.form.getFieldValue('title'),
                    detail: this.props.form.getFieldValue('detail')
                }, {headers: {token: this.props.token}}).then(res => {
                    console.log(res.data);
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '创建成功',
                            description: '',
                            duration: 2
                        });
                        window.location.reload();
                    } else {
                        notification.error({
                            message: '创建失败',
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
        return <Form onSubmit={this.createChannel}>
            <FormItem>
                {this.props.form.getFieldDecorator('title', {
                    rules: [{
                        min: 1, max: 18, message: '长度为1-18个字符'
                    }, {
                        required: true, message: '请输入直播间标题'
                    }]
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
                    }]
                })(
                    <TextArea type="detail" placeholder="直播间信息"/>
                )}
            </FormItem>
            <FormItem>
                <Button type="primary" block htmlType="submit"
                        disabled={hasErrors(this.props.form.getFieldsError())}>创建</Button>
            </FormItem>
        </Form>
    }
}

const CreateChannel = Form.create()(CreateForm);

export default connect(mapStateToProps)(CreateChannel)