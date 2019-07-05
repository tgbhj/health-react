import React, {Fragment} from 'react'
import {Row, Col} from 'antd'

class Cooperation extends React.Component {
    state = {
        items: [
            {
                id: 1,
                body: '美域翻译'
            },
            {
                id: 2,
                body: '亚历山大翻译公司'
            },
            {
                id: 3,
                body: 'EliteTransLingo Omar'
            },
            {
                id: 4,
                body: 'NurseRegistry'
            },
            {
                id: 5,
                body: 'Munchery'
            },
            {
                id: 6,
                body: 'Honor'
            },
            {
                id: 7,
                body: 'U.S. Air Ambulance'
            },
            {
                id: 8,
                body: 'B.E.S.T Care Provider'
            },
            {
                id: 9,
                body: 'Meals of Marin'
            },
            {
                id: 10,
                body: 'Munchery'
            },
            {
                id: 11,
                body: 'a grace sub acute & skilled care'
            },
            {
                id: 12,
                body: 'San Tomas Convalescent Hospital'
            },
            {
                id: 13,
                body: 'Terraces at Los Altos'
            },
            {
                id: 14,
                body: 'Plug & Play accounting Hanniell'
            },
            {
                id: 15,
                body: 'Hill Physicians'
            },
            {
                id: 16,
                body: 'UnitedHealthcare'
            },
            {
                id: 17,
                body: 'Kaiser Medical Foundatio'
            },
            {
                id: 18,
                body: 'Palo Alto Medical Foundation'
            },
            {
                id: 19,
                body: 'CareIndeed'
            },
            {
                id: 20,
                body: 'Santa Clara County Health Care System'
            }
        ]
    };

    render() {
        return <Fragment>
            <Row style={{paddingTop: 10}}>
                <Col>
                    <b style={{fontSize: 17}}>合作服务</b>
                </Col>
            </Row>
            <Row gutter={10} style={{paddingTop: 10}}>
                {
                    this.state.items.map(item => {
                        return <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6} key={item.id}>
                            {item.body}
                        </Col>
                    })
                }
            </Row>
        </Fragment>
    }
}

export default Cooperation