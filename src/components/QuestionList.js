import React from 'react'
import {Table, Button, notification} from 'antd'
import axios from "axios"
import {getUser} from '../actions/user'
import {getQuestData} from '../actions/question'
import {questionlistDisabled} from '../actions/question_ui'
import {connect} from 'react-redux'

const {Column} = Table;

function mapStateToProps(state) {
    return {
        token: state.userTodo.token,
        user: state.userTodo.user,
        data: state.questionTodo.data,
        disabled: state.questionUi.disabled
    }
}

class QuestionList extends React.Component {
    async componentDidMount() {
        if (this.props.token != null) {
            await this.props.dispatch(getUser(this.props.token));
            await this.props.dispatch(questionlistDisabled(false))
        }
        await this.props.dispatch(getQuestData());
    }

    accept = (e, questionId) => {
        axios.post('/api/accept', {userId: this.props.user._id, questionId: questionId})
            .then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: '接受订单成功',
                        description: '',
                        duration: 2
                    });
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
                } else {
                    notification.error({
                        message: '无法接受订单',
                        description: '',
                        duration: 2
                    });
                }
            })
            .catch(err => {
                console.log(err)
            })
    };

    render() {
        return <Table dataSource={this.props.data} rowKey='_id'
                      expandedRowRender={record => <p style={{margin: 0}}>{record.detail}</p>}
                      pagination={{simple: true, total: this.props.data.length, size: 'small'}}>
            <Column title="ID" dataIndex="_id"/>
            <Column title="咨询标题" dataIndex="title"/>
            <Column title="咨询时间" dataIndex="createTime"/>
            <Column title="操作" key="action" render={(text, record) => (
                <Button type="danger" size='small' onClick={(e) => this.accept(e, record._id)}
                        disabled={this.props.disabled}>接单</Button>
            )}
            />
        </Table>
    }
}

export default connect(mapStateToProps)(QuestionList)