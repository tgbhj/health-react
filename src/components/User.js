import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Tabs, Button, Steps, Divider, Table, Collapse, List, Skeleton, Icon, Typography} from 'antd'
import Step1 from './PWStep1'
import Step2 from './PWStep2'
import Face from './UploadFace'
import UserInfo from './UserInfo'
import CreateChannel from './CreateChannel'
import PutChannel from './PutChannel'
import {getUser, getPolicy, getQuestions, getUserInfo, getUserChannel} from '../actions/user'
import {connect} from 'react-redux'
import ErrorBoundary from '../components/ErrorBoundary'
import moment from 'moment'

const Panel = Collapse.Panel;
const {TabPane} = Tabs;
const {Step} = Steps;
const {Column} = Table;
const {Paragraph} = Typography;

const customPanelStyle = {
    background: '#FFFFFF',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

function mapStateToProps(state) {
    return {
        token: state.userTodo.token,
        user: state.userTodo.user,
        questions: state.userTodo.questions,
        policy: state.userTodo.policy,
        user_info: state.userTodo.user_info,
        userChannel: state.userTodo.userChannel
    }
}

class User extends React.Component {
    state = {
        current: 0,
        phone: 0
    };

    async componentDidMount() {
        if (this.props.token != null) {
            await this.props.dispatch(getUser(this.props.token));
            await this.props.dispatch(getQuestions(this.props.token));
            await this.props.dispatch(getPolicy(this.props.token));
            await this.props.dispatch(getUserInfo(this.props.token));
            await this.props.dispatch(getUserChannel(this.props.token));
        }
    }

    handleCurrent(val) {
        this.setState({current: val})
    }

    handlePhone(val) {
        this.setState({phone: val})
    }

    Greeting() {
        if (Object.keys(this.props.userChannel).length === 0) {
            return <TabPane tab='创建直播间' key='7'>
                <Row type="flex" justify="center" align="middle" style={{marginTop: '10px'}}>
                    <Col xs={22} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <ErrorBoundary>
                            <CreateChannel/>
                        </ErrorBoundary>
                    </Col>
                </Row>
            </TabPane>
        } else {
            return <TabPane tab='修改直播间' key='7'>
                <Row type="flex" justify="center" align="middle" style={{marginTop: '10px'}}>
                    <Col xs={22} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <ErrorBoundary>
                            <PutChannel/>
                        </ErrorBoundary>
                    </Col>
                </Row>
            </TabPane>
        }
    }

    render() {
        return <Tabs tabPosition='left'>
            <TabPane tab="用户信息" key='1'>
                <Row type="flex" justify="center" align="middle" style={{marginTop: '10px'}}>
                    <Col xs={22} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <ErrorBoundary>
                            <UserInfo user={this.props.user}/>
                        </ErrorBoundary>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab="修改密码" key='2'>
                <Row type="flex" justify="center" align="middle" style={{marginTop: '15px'}}>
                    <Col xs={22} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Steps current={this.state.current}>
                            <Step title="第一步"/>
                            <Step title="第二步"/>
                        </Steps>
                        <Divider/>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            {this.state.current === 0 ?
                                <ErrorBoundary><Step1 handleCurrent={val => this.handleCurrent(val)}
                                                      handlePhone={val => this.handlePhone(val)}/></ErrorBoundary> :
                                <ErrorBoundary><Step2 phone={this.state.phone}/></ErrorBoundary>}
                        </Col>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab='修改头像' key='3'>
                <Row type="flex" justify="center" align="middle" style={{marginTop: '10px'}}>
                    <Col xs={22} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <ErrorBoundary>
                            <Face msg={this.props.user.face} id={this.props.user._id}/>
                        </ErrorBoundary>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab='咨询记录' key='4'>
                <Table dataSource={this.props.questions} rowKey='_id' style={{marginTop: '10px'}}
                       pagination={{simple: true, total: this.props.questions.length, size: 'small'}}>
                    <Column title="ID" dataIndex="_id"/>
                    <Column title="问题" dataIndex="title"/>
                    <Column title="提问时间" dataIndex="createTime"/>
                    <Column title="回答时间" dataIndex="answer.time"/>
                    <Column title="操作" key="action" render={(text, record) => (
                        <Button type="danger" size='small' href={'/question/' + record._id}>查看</Button>
                    )}
                    />
                </Table>
            </TabPane>
            <TabPane tab='保险购买记录' key='5'>
                <Row type="flex" justify="center" align="middle" style={{marginTop: '15px'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                            {
                                this.props.policy.map(item => {
                                    return <Panel header={item.policyNO + '号保单'} key={item._id}
                                                  style={customPanelStyle}>
                                        <p>保单序列号：{item.orderId}</p>
                                        <p>保单号：{item.policyNO}</p>
                                        <p>保险类型(A:有社保，B:无社保)：{item.plan}</p>
                                        <p>投保人：{item.recognize}</p>
                                        <p>保险起期：{item.effectivTime}</p>
                                        <p>保险止期：{item.terminalTime}</p>
                                        <p>电子保单下载地址：<a href={item.policyAddress}>{item.policyAddress}</a></p>
                                    </Panel>
                                })
                            }
                        </Collapse>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab='收藏' key='6'>
                <Row type="flex" justify="center" align="middle" style={{marginTop: '10px'}}>
                    <Col span={22}>
                        <List itemLayout="vertical" dataSource={this.props.user_info.collect} bordered size="small"
                              style={{backgroundColor: 'rgb(255, 255, 255)'}} loading={this.props.loading}
                              renderItem={item => (
                                  <List.Item
                                      key={item.id}
                                      actions={[<IconText type="star" text={item.collect.length}/>,
                                          <IconText type="like" text={item.like.length}/>,
                                          <IconText type="eye" text={item.view}/>]}
                                      extra={<Link to={'/info/' + item._id}><img width={272} src={item.image}/></Link>}
                                  >
                                      <Link to={'/info/' + item._id}>
                                          <Skeleton loading={this.props.info_loading} active avatar>
                                              <List.Item.Meta
                                                  title={item.title}
                                                  description={moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')}
                                              />
                                              <Paragraph
                                                  ellipsis={{rows: 3, expandable: false}}>{item.detail}</Paragraph>
                                          </Skeleton>
                                      </Link>
                                  </List.Item>
                              )}
                        />
                    </Col>
                </Row>
            </TabPane>
            {
                this.Greeting()
            }
        </Tabs>
    }
}

export default connect(mapStateToProps)(User)