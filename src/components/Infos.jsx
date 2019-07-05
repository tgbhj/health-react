import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Col, Row, Icon, Pagination, List, Skeleton, Typography} from 'antd'
import {getInformations} from '../actions/info'
import {infosLoading, infoIndex} from '../actions/info_ui'
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
        info: state.infoTodo.informations,
        infos_loading: state.infoUi.infos_loading,
        info_index: state.infoUi.info_index
    }
}

class Infos extends React.Component {
    state = {
        current: 1
    };

    async componentDidMount() {
        await this.props.dispatch(getInformations(1));
        await this.props.dispatch(infosLoading(false));
    }

    handleChange = (page, pageSize) => {
        this.props.dispatch(infoIndex(this.props.info.slice((page - 1) * 20, page * 20)));
        this.setState({current: page})
    };

    render() {
        if (this.props.infos_loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 10, paddingBottom: 10}}>
                    <Col>
                        <b style={{fontSize: 17}}>医学资讯</b>
                    </Col>
                </Row>
                <List itemLayout="vertical" dataSource={this.props.info_index} bordered size="small"
                      style={{backgroundColor: 'rgb(255, 255, 255)'}} loading={this.props.infos_loading}
                      renderItem={item => (
                          <List.Item
                              key={item.id}
                              actions={[<IconText type="star" text={item.collect.length}/>,
                                  <IconText type="like" text={item.like.length}/>,
                                  <IconText type="eye" text={item.view}/>]}
                              extra={<Link to={'/info/' + item._id}><img width={272} src={item.image}/></Link>}
                          >
                              <Link to={'/info/' + item._id}>
                                  <Skeleton loading={this.props.infos_loading} active avatar>
                                      <List.Item.Meta
                                          title={item.title}
                                          description={moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')}
                                      />
                                      <Paragraph ellipsis={{rows: 3, expandable: false}}>{item.detail}</Paragraph>
                                  </Skeleton>
                              </Link>
                          </List.Item>
                      )}
                />
                <Pagination simple total={this.props.info.length} onChange={this.handleChange} size="small"
                            pageSize={10} current={this.state.current}
                            style={{textAlign: 'center', margin: '15px auto 0'}}/>
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(Infos)