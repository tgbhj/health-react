import React from 'react'
import {Form, Avatar, notification, Button} from 'antd'
import {FilePond, registerPlugin} from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import './filepond.css'
import FilepondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import axios from "axios"

registerPlugin(FilepondPluginFileValidateType);

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class UploadFace extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.post('/api/saveFace', {
                    _id: this.props.id
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
        return <Form onSubmit={this.handleSubmit}>
            <FormItem label='当前头像'>
                <Avatar src={this.props.msg} size="large"/>
            </FormItem>
            <FormItem label='修改头像'>
                <FilePond allowMultiple={false} maxFiles={1} server='/api/uploadFace' name='face'
                          labelIdle='选择文件并上传' acceptedFileTypes="image/*" required/>
            </FormItem>
            <FormItem>
                <Button type="primary" block htmlType="submit"
                        disabled={hasErrors(this.props.form.getFieldsError())}>保存</Button>
            </FormItem>
        </Form>
    }
}

const Face = Form.create()(UploadFace);

export default Face