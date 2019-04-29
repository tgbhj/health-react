import React, {Fragment} from 'react'
import {Row, Col} from 'antd'
import ReChargeForm from '../components/ReChargeForm'
import ErrorBoundary from '../components/ErrorBoundary'

class ReCharge extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Fragment>
            <Row style={{paddingTop: 10}}>
                <Col>
                    <b style={{fontSize: 20}}>SEEiHealth充值中心</b>
                </Col>
            </Row>
            <Row style={{paddingTop: 10}}>
                <Col xs={22} sm={8} md={8} lg={8} xl={8} xxl={8}>
                    <ErrorBoundary>
                        <ReChargeForm/>
                    </ErrorBoundary>
                </Col>
            </Row>
        </Fragment>
    }
}

export default ReCharge