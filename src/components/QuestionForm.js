import React from 'react'
import {Form, Input, Button, Row, Col, notification} from 'antd'
import axios from 'axios'
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

class QuestForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios({
                    method: 'post', url: '/api/answer', headers: {'token': this.props.token},
                    data: {
                        content: this.props.form.getFieldValue('content'),
                        _id: this.props._id
                    }
                }).then(res => {
                    if (res.data.code === 20000) {
                        notification.success({
                            message: '答案已提交',
                            description: '',
                            duration: 2
                        });
                        setTimeout(() => {
                            window.location.reload()
                        }, 2000)
                    } else {
                        notification.error({
                            message: '系统错误',
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
        return <Form onSubmit={this.handleSubmit}>
            <FormItem>
                <Row gutter={8}>
                    <Col span={16}>
                        {this.props.form.getFieldDecorator('content', {
                            rules: [{
                                min: 1, max: 200, message: '长度在1到200个字符'
                            }, {
                                required: true, message: '请回答问题'
                            }]
                        })(
                            <TextArea placeholder="回答问题" autosize style={{marginBottom: 3}}/>
                        )}
                    </Col>
                    <Col span={8}>
                        <Button type='primary' htmlType="submit" disabled={hasErrors(this.props.form.getFieldsError())}>提交</Button>
                    </Col>
                </Row>
            </FormItem>
        </Form>
    }
}

const QuestionForm = Form.create()(QuestForm);

export default connect(mapStateToProps)(QuestionForm)