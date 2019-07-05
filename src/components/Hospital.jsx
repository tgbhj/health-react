import React, {Fragment} from 'react'
import {Row, Col, Popover} from 'antd'

class Hospital extends React.Component {
    state = {
        items: [
            {
                id: 1,
                title: '加州大学旧金山分院医学中心',
                img: require('../images/ucsf_exterior.jpg'),
                content: '加州大学旧金山分院医学中心是全美医院排名前十的医院（US News WorldReport）。作为一家学术性研究中心，其领导的研究将推动医学的突破性进展、推进全新的技术与高质量护理。提供的先进治疗手段，其中许多是由旧金山分院的专家和科研人员所研发的。'
            },
            {
                id: 2,
                title: '哈佛医学院教学附属布列根和妇女医院',
                img: require('../images/wemenHospital.jpg'),
                content: '布列根和妇女医院历史悠久，为美国哈佛大学医学院的第二大附属医院，由3家哈佛大学医学院附属医院：彼得•本特•布列根医院（成立于1913年）、罗伯特•布雷克•布列根医院（成立于1914年）和波士顿妇女医院（始于1832年），于1980年合并而成。'
            },
            {
                id: 3,
                title: '哈佛医学院教学附属丹娜法伯癌症研究院',
                img: require('../images/丹娜法伯.jpg'),
                content: '丹娜法伯癌症研究院是美国哈佛大学医学院的癌症专科附属医院，在癌症基因定位治疗、癌症免疫治疗、癌症内分泌治疗、癌症生物治疗、癌症疫苗等临床方面占据行业领导地位。成人肿瘤的治疗享誉全美；儿童肿瘤的治疗更是历年在全美医院排名中名列前茅。'
            },
            {
                id: 4,
                title: 'MD安德森癌症中心',
                img: require('../images/hospital-ads.jpg'),
                content: 'M.D.安德森癌症中心(MD Anderson CancerCenter)，始建于1941年，位于美国南部德克萨斯州的休斯顿市，是世界公认的权威的肿瘤专科医院，是1971年美国“国家癌症行动”计划指定的最早的3个率先成为综合癌症治疗中心的医院之一，也是目前39个肿瘤医学会指定的综合性癌症治疗中心之一;是世界权威的癌症诊治、研究中心。'
            },
            {
                id: 5,
                title: '梅奥诊所',
                img: require('../images/梅奥.jpg'),
                content: '梅奥诊所是一家非盈利性的医疗机构，在医疗护理、医学研究和教育领域处于世界领先地位。梅奥诊所的医生涵盖了几乎所有的专科领域，他们拥有丰富的临床经验，为常见疾病患者和罕见疾病患者提供诊疗服务。高质量的医患交流、对细节的关注、看病的高效率确保患者体验独一无二的医疗保健服务。'
            },
            {
                id: 6,
                title: '克利夫兰诊所',
                img: require('../images/克利夫兰.jpg'),
                content: '克利夫兰诊所连续21年全美心脏排名占据榜首位置。2008年，克利夫兰诊所成为美国率先签署“联合国全球契约”的医疗服务提供机构。世界上第一例冠状动脉造影、第一例冠状动脉搭桥手术、第一例成功的咽喉移植手术、第一例近似全脸的移植手术都是由克利夫兰诊所完成的。'
            },
            {
                id: 7,
                title: '哈佛医学院教学附属波士顿儿童医院',
                img: require('../images/hospital-bsdet.jpg'),
                content: '波士顿儿童医院是美国大型儿童医院，在历年全美儿童医院综合排名中名列榜首。小儿癌症历年稳居全美领先地位。此外，在儿童心脏、儿童神经、儿童骨科、儿童内分泌、儿童泌尿、儿童肺科等领域也稳居全美前两位。'
            },
            {
                id: 8,
                title: '纽约长老会医院',
                img: require('../images/niuyue1.jpg'),
                content: '是美国大型、综合性医院之一，拥有2478张床位。2013年，医院的住院和门诊人数达到200多万人次，2013-14排名评选中，纽约长老会医院在纽约三州地区最佳医院中排名第1，并连续被评为全美首屈一指的医疗机构之一。'
            },
            {
                id: 9,
                title: '洛杉矶-西达-赛奈医疗中心',
                img: require('../images/luoshanji.jpg'),
                content: '是美国西岸最大的非营利性医院，2014年的连续19年中，洛杉矶西奈医院在美国国家研究协会(NRC)的大洛杉矶地区综合医疗质量排名中蝉联第一，其优势学科心脏和心脏外科、癌症治疗以及神经科学等皆处于全美领导地位。由于其杰出的医疗和护理服务，洛杉矶西奈医院更是好莱坞明星们的就医首选。'
            },
            {
                id: 10,
                title: '纪念斯隆凯特琳癌症中心',
                img: require('../images/jinianshilong.jpg'),
                content: '纪念斯隆-凯特琳癌症中心是世界上历史最悠久、规模最大的私立癌症中心。130余年来，该中心一直致力于卓越的患者护理，创新的研究和一流的医学教育项目，现已成为美国国家癌症研究所(NationalCancer Institute)指定的45所综合癌症中心之一，迎来了先进科学、临床研究和治疗的蓬勃发展。'
            }
        ]
    };

    render() {
        return <Fragment>
            <Row style={{paddingTop: 10}}>
                <Col>
                    <b style={{fontSize: 17}}>权威医院</b>
                </Col>
            </Row>
            <Row gutter={10} style={{paddingTop: 10}}>
                {
                    this.state.items.map(item => {
                        return <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} key={item.id}>
                            <Popover content={item.content} title={item.title}>
                                <img src={item.img} style={{width: '100%', height: '100%', paddingBottom: 5}}/>
                            </Popover>
                        </Col>
                    })
                }
            </Row>
        </Fragment>
    }
}

export default Hospital