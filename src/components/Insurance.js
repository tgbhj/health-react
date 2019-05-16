import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Radio, Steps, Tabs, Table} from 'antd'
import huitaiImg from '../images/20171031154227.png'
import Inquire from './Inquire'
import Insure from './Insure'
import Payment from './PayMent'
import {getUser} from '../actions/user'
import {connect} from 'react-redux'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Step = Steps.Step;
const TabPane = Tabs.TabPane;
const {Column} = Table;

function mapStateToProps(state) {
    return {
        token: state.userTodo.token,
        user: state.userTodo.user
    }
}

class Insurance extends React.Component {
    state = {
        radio: 'B',
        current: 0,
        table: [
            {
                id: 1,
                name: '一般医疗保险金',
                money: '3,000,000',
                content: '住院医疗，特殊门诊，住院前7天后30天门急诊，门诊手术100%给付'
            },
            {
                id: 2,
                name: '恶性肿瘤医疗保险金',
                money: '3,000,000',
                content: '住院医疗，特殊门诊，住院前7天后30天门急诊，门诊手术100%给付'
            },
            {
                id: 3,
                name: '意外伤害住院津贴',
                money: '18,000',
                content: '100元/天（每次住院免赔3天，每次最长90天，每个保险年度不超过180天）'
            }
        ]
    };

    onChange = (e) => {
        this.setState({radio: e.target.value})
    };

    premiumChange() {
        if (this.state.radio === 'B') {
            return <h2>保费：￥289(无社保)起</h2>
        } else if (this.state.radio === 'A') {
            return <h2>保费：￥136(有社保)起</h2>
        }
    }

    handleCurrent(val) {
        this.setState({current: val})
    }

    formChange() {
        if (Object.keys(this.props.user).length !== 0) {
            if (this.state.current === 0) {
                return <Inquire handleCurrent={val => this.handleCurrent(val)} radio={this.state.radio}/>
            } else if (this.state.current === 1) {
                return <Insure handleCurrent={val => this.handleCurrent(val)} userId={this.props.user._id}/>
            } else {
                return <Payment userId={this.props.user._id}/>
            }
        } else {
            return <span>请先登录</span>
        }
    }

    async componentDidMount() {
        if (this.props.token != null) {
            await this.props.dispatch(getUser(this.props.token))
        }
    }

    render() {
        return <Fragment>
            <Row gutter={10} style={{marginTop: 20}}>
                <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8} style={{paddingBottom: 5}}>
                    <img src={huitaiImg} style={{width: '100%', height: '100%'}}/>
                </Col>
                <Col xs={24} sm={16} md={16} lg={16} xl={16} xxl={16}>
                    <RadioGroup onChange={this.onChange} defaultValue="B" style={{paddingBottom: 5}}>
                        <RadioButton value="B">无社保款</RadioButton>
                        <RadioButton value="A">有社保款</RadioButton>
                    </RadioGroup>
                    {
                        this.premiumChange()
                    }
                    <Steps current={this.state.current} style={{paddingBottom: 10}}>
                        <Step title="第一步"/>
                        <Step title="第二步"/>
                        <Step title="第三步"/>
                    </Steps>
                    {
                        this.formChange()
                    }
                </Col>
            </Row>
            <Tabs>
                <TabPane tab='产品详情' key='1'>
                    <Row style={{paddingBottom: 15}}>
                        <Col xs={24} sm={7} md={7} lg={7} xl={7} xxl={7}>
                            <b>适用人群：</b><span>癌症/医疗/意外均保｜特殊门诊/不限社保</span>
                        </Col>
                        <Col xs={24} sm={3} md={3} lg={3} xl={3} xxl={3}>
                            <b>保险期限：</b><span>365天</span>
                        </Col>
                    </Row>
                    <Table dataSource={this.state.table} rowKey='id' pagination={false}>
                        <Column title="保障项目" dataIndex="name"/>
                        <Column title="保障金额" dataIndex="money"/>
                        <Column title="保障内容" dataIndex="content"/>
                    </Table>
                </TabPane>
                <TabPane tab='投保须知' key='2'>
                    <h2>本产品为泰然无忧百万医疗保险，报备文件编号为(华泰财险)(备-医疗保险)【2017】(主)_008号</h2>
                    <p>由华泰财产保险有限公司承保,公司经营区域:北京、上海、天津、重庆、江苏、广东、陕西、四川、云南、辽宁、浙江、河北、湖南、湖北、安徽、山西、福建、山东、广西、河南、江西、深圳、青岛、大连、宁波、贵州、内蒙、厦门、黑龙江、新疆</p>
                    <h3>1.阅读条款</h3>
                    <p>投保前请您认真阅读本保险计划的适用条款：
                        <a href="http://shop.ehuatai.com/events/237/华泰财险个人中高端医疗费用保险条款.html">
                            <label className="in-label">《华泰财险个人中高端医疗费用保险条款》</label>
                        </a>
                        <a href="http://shop.ehuatai.com/events/236/华泰（备案）[2009]N20号-附加意外伤害住院津贴保险条款.html">
                            <label className="in-label">《附加意外伤害住院津贴保险条款》</label>
                        </a>
                        ，特别留意保险责任及除外责任以及投保人、被保险人如实告知义务。
                    </p>
                    <h3>2.投保人</h3>
                    <p>18周岁以上有完全民事行为能力人，并与被保险人存在可保利益</p>
                    <p>--本产品投保人与被保险关系须为：本人、配偶、子女、父母；</p>
                    <h3>3.被保险人</h3>
                    <p>初次投保时年龄为30天（含）至60周岁（含），身体健康的自然人，可续保至80周岁；</p>
                    <p>
                        <a href="http://shop.ehuatai.com/pages/assure/staff-type.html">
                            <label className="in-label">《华泰财险职业类别表》</label>
                        </a>
                        中的 1-4 类人员；
                    </p>
                    <h3>4.等待期</h3>
                    <p>本产品的等待期为30天</p>
                    <p>--其中扁桃腺、甲状腺、疝气、女性生殖系统疾病的检查与治疗等待期为120天；</p>
                    <p>--意外医疗及连续投保无等待期；</p>
                    <h3>5.犹豫期：本产品的犹豫期为48小时</h3>
                    <p>保单生效后的48小时内退保可以免除手续费</p>
                    <h3>6.社保</h3>
                    <p>是指包括新型农村合作医疗、城镇职工基本医疗保险、城镇居民基本医疗保险、少儿医保等政府举办的基本医疗保障项目；</p>
                    <h3>7.免赔额</h3>
                    <p>有社保款：一般医疗保险金年免赔额1万，确诊恶性肿瘤且住院，豁免确诊日后及续保年度恶性肿瘤保险金的免赔额；</p>
                    <p>无社保款：一般医疗保险金年免赔额1万，确诊恶性肿瘤且住院，豁免确诊日后及续保年度恶性肿瘤保险金的免赔额；</p>
                    <p>有社保0免赔款：一般医疗保险金及恶性肿瘤保险金均无免赔额；</p>
                    <h3>8</h3>
                    <p>有社保款：请根据实际情况确认是否有社会医疗保险，以有社会医疗保险身份参保，但未以社会医疗保险身份就诊并结算的，本保险按照应赔付金额的60%进行赔付；</p>
                    <p>无社保款：请根据实际情况确认是否有社会医疗保险，以有社会医疗保险身份参保，但未以社会医疗保险身份就诊并结算的，本保险按照应赔付金额的60%进行赔付；</p>
                    <p>有社保0免赔款：该产品仅适用于有社会医疗保险身份参保，但未以社会医疗保险身份就诊并结算的，本保险按照应赔付金额的60%进行赔付；</p>
                    <h3>9.本保单仅限1-4类职业投保，因超出上述职业类别出险的为除外责任</h3>
                    <h3>10</h3>
                    <p>投保人/被保险人选择投保本产品成功后即认为投保人/被保险人认可华泰保险提供的免费重大疾病绿色通道+国内二次诊疗+住院垫付服务，同意华泰保险将保单信息提供给指定的第三方服务机构，以便保证在您需要的时候可以快速有效的给您提供服务。</p>
                    <h3>11</h3>
                    <p>免费重大疾病绿色通道+国内二次诊疗+住院垫付服务的重大疾病范围详见
                        <a href="http://shop.ehuatai.com/events/259/百万医疗重大疾病绿通服务重大疾病清单.html">
                            <label className="in-label">《重大疾病清单》</label>
                        </a>、
                        <a
                            href="http://shop.ehuatai.com/events/262/重疾绿通医院清单.html">
                            <label className="in-label">《重疾绿通医院清单》</label>
                        </a>、
                        <a
                            href="http://shop.ehuatai.com/events/263/垫付医院清单.html">
                            <label className="in-label">《垫付医院清单》</label>
                        </a>。
                    </p>
                    <h3>12.退保规则</h3>
                    <p>投保人要求解除本合同时，自保险人接到保险合同解除申请书之日次日零时起，本合同的效力终止。保险人收到证明文件和资料之日起30日内退还未满期净保险费。未满期净保险费=保险费×[1-(保险单已经过天数/保险期间天数)]×（1-35%），经过天数不足一天的按一天计算；</p>
                    <h3>13.医院</h3>
                    <p>--二级或以上的综合性或专科医院或保险人认可的医疗机构，且仅限于上述医院的普通部，不包括如下机构或医疗服务：</p>
                    <p>-- 特需医疗、外宾医疗、干部病房、联合病房、国际医疗中心、VIP部、联合医院；</p>
                    <p>-- 诊所、康复中心、家庭病床、护理机构；</p>
                    <p>--休养、戒酒、戒毒中心。</p>
                    <h3>14.本产品每一被保险人同一保险期间限投保1份，多投无效</h3>
                    <h3>15.保障区域：</h3>
                    <p>本产品医疗责任保障区域限于中国境内，不包括港澳台地区；</p>
                    <h3>16.部分除外责任</h3>
                    <p>--被保险人在初次投保或非连续投保前所患既往症；</p>
                    <p>--等待期内出现的疾病、症状或体征；等待期内接受检查但在等待期后确诊的疾病；</p>
                    <p>--合同生效前\等待期内已接受或曾被医生建议需采取诊疗措施的任何疾病或症状；</p>
                </TabPane>
                <TabPane tab='常见问题' key='3'>
                    <h3>1.Q：这个产品有犹豫期吗？</h3>
                    <p>A：本产品的犹豫期为48小时，保单生效后的48小时内退保可以免除手续费。</p>
                    <h3>2.Q：这个产品的等待期是几天？</h3>
                    <p>A： 本产品的等待期为30天，其中扁桃腺、甲状腺、疝气、女性生殖系统疾病的检查与治疗等待期为120天；--意外医疗及连续投保无等待期。</p>
                    <h3>3.Q：每年都有等待期吗？</h3>
                    <p>A：情况一：及时续保：无等待期。即上年保险到期前完成续保工作的称为及时续保，或连续投保（保险期间结束前30日内均可办理续保工作）；
                        情况二：首次投保&超时续保：重新计算等待期。即上年保险到期前未完成续保工作的称为超时续保，或非连续投保。为了您及您的家人可以及时得到连续的保障，请在上年保险到期前完成续保工作。</p>
                    <h3>4.Q：所有的住院费用都可以报销么？</h3>
                    <p>A：华泰泰然无忧保险致力于解决国人“病不起”的问题，对于保障范围内的医疗费用中自费和自付超过1万元的部分，除责任免除条款约定的情形外，无论是否属于医保范围，均可报销，已通过医保或商业保险获得的赔付部分，不予赔付。最高报销金额为300万元。因恶性肿瘤住院，无免赔额，更有保额翻倍，高达600万元，报销比例100%。另外在保险期间内，被保险人因遭受意外伤害事故住院接受治疗的，保险人还支付被保险人住院津贴补偿，100元/天（每次住院免赔3天，每次最长90天，每个保险年度不超过180天）。</p>
                    <h3>5.Q：在哪些医院接受治疗可以获得赔付？</h3>
                    <p>A：被保险人因意外或疾病在中华人民共和国境内（不含港澳台）二级及以上医院，或被保险人认可的医院（不含特需病房、外宾病房或其它不属于社会医疗保险范畴的高级病房）接受住院、住院前7天内出院后30天内门急诊、门诊手术治疗和特殊门诊治疗的，华泰泰然无忧保险将报销被保险人需个人支付的、必须且合理的医疗费用。</p>
                    <h3>6.Q：投保前已经生的病可以报销么？</h3>
                    <p>A：不可以。 为了使大家可以用最优的保费获得最高的保障，在发生疾病时真正获得高额医疗费用报销，本险种不接受带病投保的行为。投保前已患有的疾病以及症状，均不属于保障范围。</p>
                    <h3>7.Q：曾经理赔过还可以续保么？续保是否有等待期和重新填写健康告知？</h3>
                    <p>A：华泰泰然无忧百万医疗保障计划不会因为被保险人的健康状况变化或历史理赔情况而拒绝被保险人连续投保或者单独调整被保险人的连续投保保费。投保人可在保单到期前联系华泰客服、门店或相关业务人员完成续保，无等待期也无需重新填写健康告知。保险合同期日满前会通过短信告知投保人进行续保。</p>
                    <h3>8.Q：一般医疗保险金和恶性肿瘤保险金可以共用的吗？</h3>
                    <p>A：因恶性肿瘤以外原因就医，在扣除免赔额后，必须使用一般医疗保险金（300 万），不可使用恶性肿瘤保险金；患恶性肿瘤就医，先使用一般医疗保险金（300
                        万），一般医疗保险金额度使用完毕后，再使用恶性肿瘤保险金（300 万），即恶性肿瘤保险金有 600 万额度。</p>
                    <h3>9.Q：如果客户有社保，以有社保身份购买这个产品，但是实际就医过程中并没有使用社保，如何理赔？</h3>
                    <p>A：若被保险人以有社会医疗保险身份投保，但未以社会医疗保险身份就诊并结算的，本保险按照应赔付金额的60%进行赔付。举个例子：小李有社保，在**人寿购买了住院保险，同时购买了泰然无忧-百万医疗保障计划。某次住院及特殊门诊花费合理费用5.6万，其中由于异地就医并没有使用社保，**人寿报销0.8万，小李可到华泰报销以下金额：[5.6-0.8-(1-0.8)]*0.6=2.76万，按赔付金额的60%进行赔付。本次医疗费用，小李自付部分为：5.6-0.8-2.76=2.04万。</p>
                    <h3>10.Q：医保外的药有赔付么？</h3>
                    <p>A：简单的说医保外的药是可以赔付的，只要是实际发生的合理且必要的由医生开具的具有国家药品监督管理部门核发的药品批准文号或者进口药品注册证书、医药产品注册证书的国产或进口药品的费用。但不包括营养补充类药品，免疫功能调节类药品，美容及减肥类药品，预防类药品，以及下列中药类药品：（详见条款：释义十三、药品费）</p>
                    <h3>11.Q：要是保单今年已经到期了，还没出院，怎么办？</h3>
                    <p>A：如果是保单保期届满前住院的客户，在前一个保单届满前及时续保了，在前一张保单满期后30日内的费用在这张保单理赔；后续再产生的费用在新的保单赔付。</p>
                    <h3>12.Q: 本产品是保证续保的吗？</h3>
                    <p>A：本保险合同为一年期非保证续保合同。条款承诺不会因为被保险人的健康状况变化或者历史理赔情况而拒绝被保险人续保，且续保时不会单独调整被保险人的保险费。如被保险人超过80周岁或本保险合同统一停售，则不再接受续保。</p>
                </TabPane>
            </Tabs>
        </Fragment>
    }
}

export default connect(mapStateToProps)(Insurance)