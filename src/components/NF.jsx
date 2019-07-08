import React from 'react'
import { Result, Button } from 'antd'

class NF extends React.Component {
    render() {
        return <Result status="404" title="404"
            subTitle="页面不存在"
            extra={<Button type="primary" href='/'>返回</Button>}
        />
    }
}

export default NF