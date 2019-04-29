import React from 'react'
import {Form, notification, Button, Row, Col, Input} from 'antd'
import axios from "axios"
import {FilePond, registerPlugin} from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import './filepond.css'
import FilepondPluginFileValidateType from 'filepond-plugin-file-validate-type'

registerPlugin(FilepondPluginFileValidateType);

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class VideoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.post('/api/saveVideo', {
                    title: this.props.form.getFieldValue('title')
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

    render() {
        return <Row type="flex" justify="center" align="middle">
            <Col xs={22} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {this.props.form.getFieldDecorator('title', {
                            rules: [{
                                min: 1, max: 20, message: '长度为1到20个字符'
                            }, {
                                required: true, message: '请输入视频标题'
                            }]
                        })(
                            <Input placeholder="视频标题"/>
                        )}
                    </FormItem>
                    <FormItem label='视频上传'>
                        <FilePond allowMultiple={false} maxFiles={1} server='/api/uploadVideo' name='video'
                                  labelIdle='选择文件并上传' acceptedFileTypes="video/mp4" required/>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" block htmlType="submit"
                                disabled={hasErrors(this.props.form.getFieldsError())}>保存</Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    }
}

const UploadVideo = Form.create()(VideoForm);

export default UploadVideo