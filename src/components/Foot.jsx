import React from 'react'
import {Row, Col} from 'antd'

class Foot extends React.Component {
    render() {
        return <Row>
            <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <Col span={24}>
                    <span>友情链接</span>
                </Col>
                <Col span={24}>
                    <a href="https://www.seei.tv" target='_blank'><span>嘻爱网直播平台</span></a>
                </Col>
                <Col span={24}>
                    <a href="http://www.adinno.org" target='_blank'><span>上海港聚信息科技有限公司</span></a>
                </Col>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <Col span={24}>
                    <span>公司地址</span>
                </Col>
                <Col span={24}>
                    <span>办公地址：上海市杨浦区营口路578号海尚杰座一号楼1306室</span>
                </Col>
                <Col span={24}>
                    <span>注册地址：上海自由贸易试验区富特东一路458号一幢楼一层137室</span>
                </Col>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <Col span={24}>
                    <span>客服电话</span>
                </Col>
                <Col span={24}>
                    <span>021-55229560</span>
                </Col>
            </Col>
            <Col span={24} style={{paddingTop: 5}}>
                <span>Copyright@2016 All Rights Reserved 版权所有：上海港聚信息科技有限公司 沪ICP备14010527-4</span>
            </Col>
        </Row>
    }
}

export default Foot