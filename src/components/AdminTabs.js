import React from 'react'
import {Tabs, Table, Card, Tag, Row, Col, Progress, notification} from 'antd'
import UploadVideo from './UploadVideo'
import {
    addChannels,
    addDoctors,
    addInfo,
    addSYS,
    addVideos,
    addUsers,
    addQuestionState1,
    addQuestionState2,
    addQuestionState3,
    addDocUsers
} from '../actions/admin'
import axios from 'axios'
import {addUser} from '../actions/user'
import {connect} from 'react-redux'
import ErrorBoundary from '../components/ErrorBoundary'

const {Column} = Table;
const TabPane = Tabs.TabPane;

function mapStateToProps(state) {
    return {
        token: state.userTodo.token,
        user: state.userTodo.user,
        docUsers: state.adminTodo.docUsers,
        users: state.adminTodo.users,
        videos: state.adminTodo.videos,
        channels: state.adminTodo.channels,
        healthInfo: state.adminTodo.healthInfo,
        doctors: state.adminTodo.doctors,
        questionState1: state.adminTodo.questionState1,
        questionState2: state.adminTodo.questionState2,
        questionState3: state.adminTodo.questionState3,
        sys: state.adminTodo.sys
    }
}

class AdminTabs extends React.Component {
    async getUser() {
        await axios.get('/api/user', {headers: {'token': this.props.token}})
            .then(res => {
                if (res.data.code === 20000) {
                    this.props.dispatch(addUser(res.data.cb));
                } else {
                    notification.error({
                        message: 'Token过期',
                        description: '',
                        duration: 2
                    });
                    localStorage.removeItem('health-token');
                    window.location.reload()
                }
            }).catch(err => {
                console.log(err)
            })
    }

    async getAdmin() {
        await axios.get('/api/admin').then(res => {
            this.props.dispatch(addUsers(res.data.users));
            this.props.dispatch(addDocUsers(res.data.docUsers));
            this.props.dispatch(addVideos(res.data.videos));
            this.props.dispatch(addChannels(res.data.channels));
            this.props.dispatch(addInfo(res.data.healthInfo));
            this.props.dispatch(addDoctors(res.data.doctors));
            this.props.dispatch(addQuestionState1(res.data.questionState1));
            this.props.dispatch(addQuestionState2(res.data.questionState2));
            this.props.dispatch(addQuestionState3(res.data.questionState3));
            this.props.dispatch(addSYS(res.data.sys));
        }).catch(err => {
            console.log(err)
        })
    }

    async componentDidMount() {
        if (this.props.token != null) {
            await this.getUser();
            if (this.props.user.admin === 1) {
                await this.getAdmin()
            }
        }
    }

    render() {
        return <Tabs>
            <TabPane tab='总览' key={1}>
                <Row>
                    <Col span={22} offset={1}>
                        <Row gutter={10}>
                            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} style={{paddingTop: 5}}>
                                <Card hoverable bordered={false} title='服务器信息'>
                                    <p>系统及版本</p>
                                    <Tag style={{marginBottom: 15}}>{this.props.sys.type}_{this.props.sys.release}</Tag>
                                    <p>CPU</p>
                                    <Tag style={{marginBottom: 15}}>{this.props.sys.cpusmodel}</Tag>
                                    <p>CPU核心数量</p>
                                    <Tag style={{marginBottom: 15}}>{this.props.sys.cpuslength}</Tag>
                                    <p>CPU架构</p>
                                    <Tag style={{marginBottom: 15}}>{this.props.sys.arch}</Tag>
                                    <p>内存</p>
                                    <Tag
                                        style={{marginBottom: 15}}>共{Math.round(this.props.sys.totalmem / 1024 / 1024)}MB</Tag>
                                    <p/>
                                    <Progress type="dashboard"
                                              percent={Math.round((Math.round(this.props.sys.totalmem / 1024 / 1024) - Math.round(this.props.sys.freemem / 1024 / 1024)) / Math.round(this.props.sys.totalmem / 1024 / 1024) * 100)}/>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} style={{paddingTop: 5}}>
                                <Card hoverable bordered={false} title='网站信息'>
                                    <p>用户总数</p>
                                    <Tag
                                        style={{marginBottom: 15}}>{this.props.users.length + this.props.docUsers.length}</Tag>
                                    <p>视频总数</p>
                                    <Tag style={{marginBottom: 15}}>{this.props.videos.length}</Tag>
                                    <p>直播间总数</p>
                                    <Tag style={{marginBottom: 15}}>{this.props.channels.length}</Tag>
                                    <p>医学资讯总数</p>
                                    <Tag style={{marginBottom: 15}}>{this.props.healthInfo.length}</Tag>
                                    <p>医生总数</p>
                                    <Tag style={{marginBottom: 15}}>{this.props.doctors.length}</Tag>
                                    <p>问题总数</p>
                                    <Tag style={{marginBottom: 15}}>
                                        {this.props.questionState1.length + this.props.questionState2.length + this.props.questionState3.length}
                                    </Tag>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab='用户' key={2}>
                <Tabs tabPosition='left'>
                    <TabPane tab="一般用户" key={1}>
                        <Row>
                            <Col>
                                <Table dataSource={this.props.users} rowKey='_id'
                                       pagination={{simple: true, total: this.props.users.length, size: 'small'}}>
                                    <Column title='ID' dataIndex='_id'/>
                                    <Column title='用户名' dataIndex='username'/>
                                    <Column title='直播权限' dataIndex='jurisdiction'/>
                                    <Column title='vip' dataIndex='vip'/>
                                    <Column title='注册时间' dataIndex='regTime'/>
                                </Table>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="医生用户" key={2}>
                        <Row>
                            <Col>
                                <Table dataSource={this.props.docUsers} rowKey='_id'
                                       pagination={{simple: true, total: this.props.docUsers.length, size: 'small'}}>
                                    <Column title='ID' dataIndex='_id'/>
                                    <Column title='用户名' dataIndex='username'/>
                                    <Column title='直播权限' dataIndex='jurisdiction'/>
                                    <Column title='vip' dataIndex='vip'/>
                                    <Column title='注册时间' dataIndex='regTime'/>
                                </Table>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </TabPane>
            <TabPane tab='视频' key={3}>
                <Row>
                    <Col span={22} offset={1}>
                        <Table dataSource={this.props.videos} rowKey='_id'
                               pagination={{simple: true, total: this.props.videos.length, size: 'small'}}>
                            <Column title='ID' dataIndex='_id'/>
                            <Column title='文件名' dataIndex='name'/>
                            <Column title='标题' dataIndex='title'/>
                            <Column title='上传时间' dataIndex='createTime'/>
                        </Table>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab='直播' key={4}>
                <Row>
                    <Col span={22} offset={1}>
                        <Table dataSource={this.props.channels} rowKey='_id'
                               pagination={{simple: true, total: this.props.channels.length, size: 'small'}}>
                            <Column title='ID' dataIndex='_id'/>
                            <Column title='状态' dataIndex='state'/>
                            <Column title='标题' dataIndex='title'/>
                            <Column title='创建用户' dataIndex='user.username'/>
                            <Column title='创建时间' dataIndex='createTime'/>
                        </Table>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab='医生' key={5}>
                <Row>
                    <Col span={22} offset={1}>
                        <Table dataSource={this.props.doctors} rowKey='_id'
                               pagination={{simple: true, total: this.props.doctors.length, size: 'small'}}>
                            <Column title='ID' dataIndex='_id'/>
                            <Column title='姓名' dataIndex='name'/>
                            <Column title='科室' dataIndex='specialty'/>
                            <Column title='职称' dataIndex='title'/>
                            <Column title='学历' dataIndex='education'/>
                            <Column title='医院' dataIndex='hospital'/>
                        </Table>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab='问题' key={6}>
                <Tabs tabPosition='left'>
                    <TabPane tab="已回答的问题" key={1}>
                        <Row>
                            <Col>
                                <Table dataSource={this.props.questionState3} rowKey='_id'
                                       pagination={{
                                           simple: true,
                                           total: this.props.questionState3.length,
                                           size: 'small'
                                       }}
                                       expandedRowRender={record => <div>
                                           <p style={{margin: 0}}>{'问题：' + record.detail}</p>
                                           <p style={{margin: 0}}>{'回答：' + record.answer.content}</p></div>}>
                                    <Column title='ID' dataIndex='_id'/>
                                    <Column title='标题' dataIndex='title'/>
                                    <Column title='提问时间' dataIndex='createTime'/>
                                    <Column title='回答时间' dataIndex='answer.time'/>
                                </Table>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="接单未回答的问题" key={2}>
                        <Row>
                            <Col>
                                <Table dataSource={this.props.questionState2} rowKey='_id'
                                       pagination={{
                                           simple: true,
                                           total: this.props.questionState2.length,
                                           size: 'small'
                                       }}>
                                    <Column title='ID' dataIndex='_id'/>
                                    <Column title='标题' dataIndex='title'/>
                                    <Column title='提问时间' dataIndex='createTime'/>
                                    <Column title='问题' dataIndex='detail'/>
                                </Table>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="未接单的问题" key={3}>
                        <Row>
                            <Col>
                                <Table dataSource={this.props.questionState1} rowKey='_id'
                                       pagination={{
                                           simple: true,
                                           total: this.props.questionState1.length,
                                           size: 'small'
                                       }}>
                                    <Column title='ID' dataIndex='_id'/>
                                    <Column title='标题' dataIndex='title'/>
                                    <Column title='提问时间' dataIndex='createTime'/>
                                    <Column title='问题' dataIndex='detail'/>
                                </Table>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </TabPane>
            <TabPane tab='视频上传' key={7}>
                <ErrorBoundary>
                    <UploadVideo/>
                </ErrorBoundary>
            </TabPane>
        </Tabs>
    }
}

export default connect(mapStateToProps)(AdminTabs)