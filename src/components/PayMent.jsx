import React from 'react'
import {Button} from 'antd'

class PayMent extends React.Component {
    handleClick = () => {
        window.location.href = 'http://222.73.36.73:8080/api/payment?userId=' + this.props.userId;
    };

    render() {
        return <Button type='primary' onClick={this.handleClick}>支付</Button>
    }
}

export default PayMent