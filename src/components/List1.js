import React from 'react'

class List1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            html: '<div class="article-flash">\n' +
                '         <p class="MsoNormal" align="center" style="text-indent:22.7500pt;text-align:center;">\n' +
                '\t<b>华泰</b><b>财产保险有限公司</b><b></b> \n' +
                '</p>\n' +
                '<p class="MsoNormal" align="center" style="text-indent:22.7500pt;text-align:center;">\n' +
                '\t<b>百万医疗</b><b>重</b><b>大</b><b>疾病绿通服务重大疾病清单</b><b></b> \n' +
                '</p>\n' +
                '<p class="MsoNormal" align="center" style="text-indent:22.7500pt;text-align:center;">\n' +
                '\t<b>&nbsp;</b> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:22.7500pt;">\n' +
                '\t<b>重大疾病</b>：本合同中所指重大疾病是指被保险人在保险期间内经专科医生明确诊断初次患下列疾病或初次达到下列疾病状态或在医院初次接受下列手术：\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t1）&nbsp;<b>恶性肿瘤：</b><span>指恶性细胞不受控制的进行性增长和扩散，浸润和破坏周围正常组织，可以经血管、淋巴管和体腔扩散转移到身体其它部位的疾病。经病理学检查结果明确诊断，临床诊断属于世界卫生组织《疾病和有关健康问题的国际统计分类》（</span>ICD-10）的恶性肿瘤范畴。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:22.7000pt;">\n' +
                '\t<span>下列疾病不在保障范围内：</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:22.7000pt;">\n' +
                '\t<span>（</span>1）原位癌；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:22.7000pt;">\n' +
                '\t<span>（</span>2）相当于Binet分期方案A期程度的慢性淋巴细胞白血病；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:22.7000pt;">\n' +
                '\t<span>（</span>3）相当于Ann Arbor分期方案I期程度的何杰金氏病；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:22.7000pt;">\n' +
                '\t<span>（</span>4）皮肤癌（不包括恶性黑色素瘤及已发生转移的皮肤癌）；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:22.7000pt;">\n' +
                '\t<span>（</span>5）TNM分期为T<sub>1</sub>N<sub>0</sub>M<sub>0</sub><span>期或更轻分期的前列腺癌；</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:22.7000pt;">\n' +
                '\t<span>（</span>6）感染艾滋病病毒或患艾滋病期间所患恶性肿瘤。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t2）&nbsp;<b>急性心肌梗塞：</b><span>指因冠状动脉阻塞导致的相应区域供血不足造成部分心肌坏死。须满足下列至少三项条件：</span> \n' +
                '</p>\n' +
                '<p class="15" align="justify" style="text-indent:22.7000pt;text-align:justify;">\n' +
                '\t<span>（</span>1）典型临床表现，例如急性胸痛等；\n' +
                '</p>\n' +
                '<p class="15" align="justify" style="text-indent:22.7000pt;text-align:justify;">\n' +
                '\t<span>（</span>2）新近的心电图改变提示急性心肌梗塞；\n' +
                '</p>\n' +
                '<p class="15" align="justify" style="text-indent:22.7000pt;text-align:justify;">\n' +
                '\t<span>（</span>3）心肌酶或肌钙蛋白有诊断意义的升高，或呈符合急性心肌梗塞的动态性变化；\n' +
                '</p>\n' +
                '<p class="15" align="justify" style="text-indent:22.7000pt;text-align:justify;">\n' +
                '\t<span>（</span>4）发病90天后，经检查证实左心室功能降低，如左心室射血分数低于50%。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t3）&nbsp;<b>脑中风后遗症</b><b>：</b>指因脑血管的突发病变引起脑血管出血、栓塞或梗塞，并导致神经系统永久性的功能障碍。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>神经系统永久性的功能障碍，指疾病确诊</span>180天后，仍遗留下列一种或一种以上障碍：\n' +
                '</p>\n' +
                '<p class="15" align="justify" style="text-indent:22.7000pt;text-align:justify;">\n' +
                '\t<span>（</span>1）一肢或一肢以上肢体机能完全丧失；\n' +
                '</p>\n' +
                '<p class="15" align="justify" style="text-indent:22.7000pt;text-align:justify;">\n' +
                '\t<span>（</span>2）语言能力或咀嚼吞咽能力完全丧失；\n' +
                '</p>\n' +
                '<p class="15" align="justify" style="text-indent:22.7000pt;text-align:justify;">\n' +
                '\t<span>（</span>3）自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>六项基本日常生活活动是指：（</span>1）穿衣：自己能够穿衣及脱衣；（2）移动：自己从一个房间到另一个房间；（3）行动：自己上下床或上下轮椅；（4）如厕：自己控制进行大小便；（5）进食：自己从已准备好的碗或碟中取食物放入口中；（6）洗澡：自己进行淋浴或盆浴。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t4）&nbsp;<b>重大器官移植术或造血干细胞移植术：</b><b></b> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>重大器官移植术，指因相应器官功能衰竭，已经实施了肾脏、肝脏、心脏或肺脏的异体移植手术。</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t造血干细胞移植术，指因造血功能损害或造血系统恶性肿瘤，已经实施了造血干细胞（包括骨髓造血干细胞、外周血造血干细胞和脐血造血干细胞）的异体移植手术。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t5）&nbsp;<b>冠状动脉搭桥术（或称冠状动脉旁路移植术）</b><span>：指为治疗严重的冠心病，实际实施了开胸进行的冠状动脉血管旁路移植的手术。</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t冠状动脉支架植入术、心导管球囊扩张术、激光射频技术及其它非开胸的介入手术、腔镜手术不在保障范围内\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t6）&nbsp;<b>终末期肾病（或称慢性肾功能衰竭尿毒症期）</b><span>：指双肾功能慢性不可逆性衰竭，达到尿毒症期，经诊断后已经进行了至少</span>90天的规律性透析治疗或实施了肾脏移植手术\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t7）&nbsp;<b>多个肢体缺失</b>：指因疾病或意外伤害导致两个或两个以上肢体自腕关节或踝关节近端（靠近躯干端）以上完全性断离。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t8）&nbsp;<b>急性或亚急性重症肝炎：</b><span>指因肝炎病毒感染引起肝脏组织弥漫性坏死，导致急性肝功能衰竭，且经血清学或病毒学检查证实，并须满足下列全部条件：</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>1）重度黄疸或黄疸迅速加重；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>2）肝性脑病；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>3）B超或其它影像学检查显示肝脏体积急速萎缩；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>4）肝功能指标进行性恶化。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t9）&nbsp;<b>良性脑肿瘤：</b><span>指脑的良性肿瘤，已经引起颅内压增高，临床表现为视神经乳头水肿、精神症状、癫痫及运动感觉障碍等，并危及生命。须由头颅断层扫描（</span>CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实，并须满足下列至少一项条件：\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>1）实际实施了开颅进行的脑肿瘤完全切除或部分切除的手术；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>2）实际实施了对脑肿瘤进行的放射治疗。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t脑垂体瘤、脑囊肿、脑血管性疾病不在保障范围内。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t10）&nbsp;<b>慢性肝功能衰竭失代偿期：</b><span>指因慢性肝脏疾病导致肝功能衰竭。须满足下列全部条件：</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>1）持续性黄疸；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>2）腹水；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>3）肝性脑病；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>4）充血性脾肿大伴脾功能亢进或食管胃底静脉曲张。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t因酗酒或药物滥用导致的肝功能衰竭不在保障范围内。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t11）&nbsp;<b>脑炎后遗症或脑膜炎后遗症：</b><span>指因患脑炎或脑膜炎导致的神经系统永久性的功能障碍。神经系统永久性的功能障碍，指疾病确诊</span>180天后，仍遗留下列一种或一种以上障碍：\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:22.6500pt;">\n' +
                '\t<span>（</span>1）一肢或一肢以上肢体机能完全丧失（指肢体的三大关节中的两大关节僵硬，或不能随意识活动。肢体是指包括肩关节的整个上肢或包括髋关节的整个下肢）； <b></b> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>2）语言能力或咀嚼吞咽能力完全丧失（语言能力完全丧失，指无法发出四种语音（包括口唇音、齿舌音、口盖音和喉头音）中的任何三种、或声带全部切除，或因大脑语言中枢受伤害而患失语症。 <b></b> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>咀嚼吞咽能力完全丧失，指因牙齿以外的原因导致器质障碍或机能障碍，以致不能作咀嚼吞咽运动，除流质食物外不能摄取或吞咽的状态。）；</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>3）自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t12）&nbsp;<b>深度昏迷：</b><span>指因疾病或意外伤害导致意识丧失</span>,对外界刺激和体内需求均无反应,昏迷程度按照格拉斯哥昏迷分级（Glasgow coma scale）结果为5分或5分以下，且已经持续使用呼吸机及其它生命维持系统96小时以上。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t因酗酒或药物滥用导致的深度昏迷不在保障范围内。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t13）&nbsp;<b>双耳失聪：</b><span>指因疾病或意外伤害导致双耳听力永久不可逆（指自疾病确诊或意外伤害发生之日起，经过积极治疗</span>180天后，仍无法通过现有医疗手段恢复。）性丧失，在500赫兹、1000赫兹和2000赫兹语音频率下，平均听阈大于90分贝，且经纯音听力测试、声导抗检测或听觉诱发电位检测等证实。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t14）&nbsp;<b>双目失明：</b><span>指因疾病或意外伤害导致双眼视力永久不可逆性丧失，双眼中较好眼须满足下列至少一项条件：</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>1）眼球缺失或摘除；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>2）矫正视力低于0.02（采用国际标准视力表，如果使用其它视力表应进行换算）；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>3）视野半径小于5度。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t15）&nbsp;<b>瘫痪：</b><span>指因疾病或意外伤害导致两肢或两肢以上肢体机能永久完全丧失。肢体机能永久完全丧失，指疾病确诊</span>180天后或意外伤害发生180天后，每肢三大关节中的两大关节仍然完全僵硬，或不能随意识活动。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t16）&nbsp;<b>心脏瓣膜手术：</b>指为治疗心脏瓣膜疾病，实际实施了开胸进行的心脏瓣膜置换或修复的手术。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t17）&nbsp;<b>严重阿尔茨海默病：</b><span>指因大脑进行性、不可逆性改变导致智能严重衰退或丧失，临床表现为明显的认知能力障碍、行为异常和社交能力减退，其日常生活必须持续受到他人监护。须由头颅断层扫描（</span>CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实，且自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t神经官能症和精神疾病不在保障范围内。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t18）&nbsp;<b>严重脑损伤：</b><span>指因头部遭受机械性外力，引起脑重要部位损伤，导致神经系统永久性的功能障碍。须由头颅断层扫描（</span>CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实。神经系统永久性的功能障碍，指脑损伤180天后，仍遗留下列一种或一种以上障碍：\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>1）一肢或一肢以上肢体机能完全丧失；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>2）语言能力或咀嚼吞咽能力完全丧失；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>3）自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t19）&nbsp;<b>严重帕金森病：</b>&nbsp;<span>是一种中枢神经系统的退行性疾病，临床表现为震颤麻痹、共济失调等。须满足下列全部条件：</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>1）药物治疗无法控制病情；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>2）自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t继发性帕金森综合征不在保障范围内。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t20）&nbsp;<b><span>严重</span>Ⅲ度烧伤：</b><span>烧伤程度为</span>Ⅲ度，且Ⅲ度烧伤的面积达到全身体表面积的20％或20％以上。体表面积根据《中国新九分法》计算。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t21）&nbsp;<b>严重原发性肺动脉高压：</b>&nbsp;<span>指不明原因的肺动脉压力持续性增高，进行性发展而导致的慢性疾病，已经造成永久不可逆性的体力活动能力受限，达到美国纽约心脏病学会心功能状态分级</span>IV级，且静息状态下肺动脉平均压超过30mmHg。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t22）&nbsp;<b>严重运动神经元病：</b>&nbsp;<span>是一组中枢神经系统运动神经元的进行性变性疾病，包括进行性脊肌萎缩症、进行性延髓麻痹症、原发性侧索硬化症、肌萎缩性侧索硬化症。须满足自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上的条件。</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t23）&nbsp;<b>语言能力丧失：</b>&nbsp;<span>指因疾病或意外伤害导致完全丧失语言能力，经过积极治疗至少</span>12个月（声带完全切除不受此时间限制），仍无法通过现有医疗手段恢复。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>精神心理因素所致的语言能力丧失不在保障范围内。</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t24）&nbsp;<b>重型再生障碍性贫血：</b>&nbsp;<span>指因骨髓造血功能慢性持续性衰竭导致的贫血、中性粒细胞减少及血小板减少。须满足下列全部条件：</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>1）骨髓穿刺检查或骨髓活检结果支持诊断；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t<span>（</span>2）外周血象须具备以下三项条件：\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t① 中性粒细胞绝对值≤0.5×10<sup>9</sup>/L ；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t② 网织红细胞＜1%；\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t③ 血小板绝对值≤20×10<sup>9</sup>/L。\n' +
                '</p>\n' +
                '<p class="MsoNormal" style="margin-left:-1.4000pt;text-indent:22.7000pt;">\n' +
                '\t25）&nbsp;<b><span>主动脉手术：</span> </b><span>指为治疗主动脉疾病，实际实施了开胸或开腹进行的切除、置换、修补病损主动脉血管的手术。主动脉指胸主动脉和腹主动脉，不包括胸主动脉和腹主动脉的分支血管。</span> \n' +
                '</p>\n' +
                '<p class="MsoNormal" style="text-indent:21.0000pt;">\n' +
                '\t动脉内血管成形术不在保障范围内。\n' +
                '</p>\n' +
                '        </div>'
        }
    }

    render() {
        return <div dangerouslySetInnerHTML={{__html: this.state.html}}/>
    }
}

export default List1