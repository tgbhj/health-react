import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {List, Icon, Button, Row, Col, Skeleton, Typography} from 'antd'
import {getInfo} from '../actions/page'
import {indexInfo} from '../actions/page_ui'
import {connect} from 'react-redux'
import moment from 'moment'

const {Paragraph} = Typography;

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

function mapStateToProps(state) {
    return {
        info: state.pageTodo.info,
        info_loading: state.pageUi.info_loading
    }
}

class IndexInfo extends React.Component {
    async componentDidMount() {
        await this.props.dispatch(getInfo());
        await this.props.dispatch(indexInfo(false));
    }

    render() {
        if (this.props.info_loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 10, paddingBottom: 10}}>
                    <Col>
                        <b style={{fontSize: 17}}>医学资讯</b>
                        <Button type="danger" style={{float: 'right'}} href='/infos'>更多</Button>
                    </Col>
                </Row>
                <List itemLayout="vertical" dataSource={this.props.info} bordered size="small"
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
                                      <Paragraph ellipsis={{rows: 4, expandable: false}}>{item.detail}</Paragraph>
                                  </Skeleton>
                              </Link>
                          </List.Item>
                      )}
                />
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(IndexInfo)