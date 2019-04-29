import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Card, Col, Row, Icon, Button, Avatar, Skeleton} from 'antd'
import {getDoctors} from '../actions/page'
import {indexDOC} from '../actions/page_ui'
import {connect} from 'react-redux'

const {Meta} = Card;
const IconText = ({type, text, url, id}) => (
    <span>
    <Icon type={type} onClick={(e) => urlChange(e, url, id)}/>
    <Button onClick={(e) => urlChange(e, url, id)} style={{
        backgroundColor: '#fafafa',
        borderColor: '#fafafa',
        fontSize: 16,
        height: 0,
        lineHeight: 1
    }}>{text}</Button>
  </span>
);

function mapStateToProps(state) {
    return {
        doctors: state.pageTodo.doctors,
        doc_loading: state.pageUi.doc_loading
    }
}

function urlChange(e, url, id) {
    window.location.href = url + id
}

class IndexDoc extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.dispatch(getDoctors());
        await this.props.dispatch(indexDOC(false));
    }

    render() {
        if (this.props.doc_loading) {
            return <Icon type="loading"/>
        } else {
            return <Fragment>
                <Row style={{paddingTop: 10}}>
                    <Col>
                        <b style={{fontSize: 17}}>常驻医生</b>
                        <Button type="danger" style={{float: 'right'}} href='/doctors'>更多</Button>
                    </Col>
                </Row>
                <Row gutter={10} style={{paddingTop: 10}}>
                    {
                        this.props.doctors.map(item => {
                            return <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6} key={item._id}
                                        style={{paddingBottom: 5}}>
                                <Card hoverable loading={this.props.doc_loading}
                                      actions={[<IconText type='message' text='一对一咨询' url='/doctor/' id={item._id}/>,
                                          <IconText type='video-camera' text='直播'/>]}>
                                    <Link to={'/doctor/' + item._id}>
                                        <Skeleton loading={this.props.doc_loading} avatar active>
                                            <Meta
                                                avatar={<Avatar src={item.face} size="large"/>}
                                                title={item.name}
                                                description={item.specialty}
                                            />
                                        </Skeleton>
                                    </Link>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </Fragment>
        }
    }
}

export default connect(mapStateToProps)(IndexDoc)