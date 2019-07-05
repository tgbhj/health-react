import React from 'react'
import {Button, Card, Row, Col} from 'antd'

class HuaTaiPay extends React.Component {
    back = () => {
        window.location.href = '/'
    };

    render() {
        return <Row type="flex" justify="center" align="middle" style={{paddingTop: 160}}>
            <Col>
                <Card hoverable>
                    <h3>交易完成！</h3>
                    <Button onClick={this.back}>返回首页</Button>
                </Card>
            </Col>
        </Row>
    }
}

export default HuaTaiPay