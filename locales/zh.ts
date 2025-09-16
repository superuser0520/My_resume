import type { Skill, Experience, Project, DevelopmentItem, EducationItem } from '../types';

export const navLinks = [
    { name: '关于', href: '#about' },
    { name: '技能', href: '#skills' },
    { name: '经历', href: '#experience' },
    { name: '工作项目', href: '#work-projects' },
    { name: '学术项目', href: '#academic-projects' },
    { name: '职业发展', href: '#development' },
    { name: 'AI 工具', href: '#ai-panel-tool' },
    { name: '教育背景', href: '#education' },
    { name: '游戏', href: '#game' },
    { name: '联系方式', href: '#contact' },
];

export const hero = {
    title: "精密工程与自动化创新者",
    subtitle: "作为一名对机械充满终身热情的机械设计师与自动化工程师，我专注于将复杂的工业挑战转化为高效、智能的解决方案。我的专长在于设计先进的自动化系统，领导项目从概念到落地，并不断推动技术边界以提高生产力与安全性。",
    button: "查看我的工作",
    resumeButton: "下载简历"
};

export const sectionTitles = {
    skills: "核心竞争力",
    experience: "职业历程",
    workProjects: "主要工作项目",
    academicProjects: "学术创新",
    development: "持续成长与认可",
    aiPanelTool: "精选工具：AI 面板设计师",
    education: "教育背景",
    references: "专业推荐",
    contact: "联系我",
    game: "招聘官游戏厅",
    workProjectsDisclaimer: "免责声明：由于公司保密原因，所有项目图片仅供参考。"
};

export const aiPanelTool = {
  title: "人工智能电气面板设计",
  description: "我开发了一款前沿工具，利用人工智能通过简单的文本提示来设计自动化电气面板。该应用程序简化了设计流程，使工程师能够以前所未有的速度和效率生成原理图和布局。探索电气设计的未来。",
  button: "启动 AI 设计器",
  imageUrl: "https://i.imgur.com/eRvPS3F.png"
};

export const skillsData: Skill[] = [
    { name: 'SolidWorks 建模', level: 9, description: '精通复杂机械系统的高级3D建模和装配设计。', tooltip: '包括零件建模、大型装配管理、焊接件、钣金以及使用GD&T创建详细制造图纸的专业知识。' },
    { name: 'AutoCAD 制图', level: 8, description: '熟练掌握2D技术制图、草图绘制和详细设计文档。', tooltip: '在根据ANSI和ISO等行业标准创建P&ID图、电气原理图和机械布局方面经验丰富。' },
    { name: 'PLC 编程', level: 7, description: '在工业自动化PLC逻辑开发和故障排除方面经验丰富，尤其擅长三菱PLC。', tooltip: '在三菱GX Works2/3和西门子TIA Portal等平台上，具备梯形图、功能块图和结构化文本的实践经验。' },
    { name: 'Microsoft Office', level: 9, description: '精通使用Microsoft Office套件进行数据分析、报告和项目文档编制。', tooltip: '精通Excel进行数据分析（数据透视表、VLOOKUP）、PowerPoint进行演示以及Word进行技术文档编写。' },
    { name: '项目管理技能', level: 9, description: '具备从概念到完成管理项目的成熟能力，包括预算、排程和团队协调。', tooltip: '利用甘特图、关键路径分析和敏捷方法论等工具，确保项目按时、按预算交付。' },
    { name: '六西格玛精益制造技能', level: 9, description: '应用精益六西格玛原则优化制造流程、减少浪费、提高效率和质量。', tooltip: '获得绿带认证，在DMAIC、价值流图、5S和改善活动方面有实践经验，以推动持续改进。' },
    { name: 'Vibe 编程', level: 8, description: '利用提示工程和AI开发定制工具，以提高工程效率并加速问题解决。', tooltip: '使用大型语言模型（LLM）进行快速原型设计、代码生成、数据分析脚本编写和自动化技术文档。' }
];

export const experienceData: Experience[] = [
    {
        company: 'SHIMANO SINGAPORE PTE LTD',
        logoUrl: 'https://1000logos.net/wp-content/uploads/2020/09/Shimano-Logo.jpg?v=1.1',
        roles: [
            {
                title: '高级自动化工程师 I',
                period: '24年7月 - 至今',
                details: [],
                type: 'Full-time',
            },
            {
                title: '自动化工程师 II',
                period: '23年7月 - 24年7月',
                details: [],
                type: 'Full-time',
            },
            {
                title: '自动化工程师 I',
                period: '22年3月 - 23年6月',
                details: [
                    '领导冲压与成型机的机械设计，从概念、3D建模到最终的2D图纸。',
                    '通过制定包括成本、投资和优化计划在内的综合项目提案，成功获得一个30万新元的项目，投资回报期为10个月。',
                    '为PLC逻辑（三菱PLC）提供现场故障排除和改进支持。',
                    '管理项目执行并监督现场活动，确保无缝集成和及时交付。',
                    '与内部部门、供应商和供应商协调，确保项目成功。',
                    '为本地和海外工厂设计洁净室车间布局和工作流程，优化空间和物料流。',
                    '计算仓库流程吞吐量和利用率，以识别和实施效率改进。',
                    '为传送带和包装线的上下游设备执行机械设计。',
                    '牵头一个大型自动化项目的提案开发，获得300万新元资金，投资回报期为8.6个月。',
                    '为ERP、WMS、RMS和PLC系统制定系统集成计划，以实现协同操作。',
                    '确保安全合规并规划人机协作工作环境。',
                    '管理自动导引车（AGV）的现场部署和持续改进计划。'
                ],
                type: 'Full-time',
            }
        ]
    },
    {
        company: 'ARMSTRONG SDN BHD',
        logoUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQH75S6hkgK_mg/company-logo_200_200/company-logo_200_200/0/1631343921130?e=2147483647&v=beta&t=wOGNmI8EYs-h87Y12DFyvXbLSz5pRHK4QJPCknB6WGc&v=1.1',
        roles: [
            {
                title: '工艺工程师',
                period: '21年9月 - 22年2月',
                details: [
                    '为后固化、DI清洗和洁净室包装过程提供关键技术支持。',
                    '确保所有橡胶产品符合严格的客户清洁度要求（符合ISO 8洁净室标准）。',
                    '在工艺工程部门内管理自动化项目并发起成本节约计划。'
                ],
                type: 'Full-time',
            }
        ]
    },
    {
        company: 'HERSHEY MALAYSIA SDN BHD',
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0R3docEDPinwIXeJ9BPauQM0TlR0A6_3F6w&s?v=1.1',
        roles: [
            {
                title: '生产工程师实习生',
                period: '20年9月 - 20年12月',
                details: [
                    '在洁净室环境中协助快速消费品制造操作。',
                    '识别流程瓶颈并为运营改进开发创新解决方案。',
                    '从概念到完成参与包装自动化项目，应用工程知识和时间管理技能。',
                    '监控和分析生产线性能指标，制定全面的改进计划。',
                    '为食品包装自动化和转换优化做出贡献，以最大化制造效率。'
                ],
                type: 'Internship',
            }
        ]
    }
];

export const workProjectsData: Project[] = [
    {
        title: '端到端物流AMR自动化',
        concept: '利用自主移动机器人（AMR）车队，设计了一个全自动的端到端物流工作流程。',
        details: '将AMR车队与现有的WMS和ERP系统集成，构建了一个无缝的通信网络，以最大化从仓库到生产的物料运输效率。',
        imageUrl: 'https://rozitek.com/wp-content/uploads/2023/01/Intralogistic-Rozitek-robot-agv-amr-he-thong-AI.webp?v=1.1',
        technologies: ['AMR', 'WMS集成', 'ERP集成', '系统架构', 'SolidWorks']
    },
    {
        title: 'ASRS与AMR无线集成',
        concept: '集成了自动存储与检索系统（ASRS）与AMR，以实现全自主托盘处理。',
        details: '通过在ASRS和AMR之间建立稳健的Modbus TCP无线链接，实现了托盘处理的自动化，消除了托盘堆叠和拆解过程中的所有人工干预。',
        imageUrl: 'https://i.imgur.com/odYCRsK.jpeg?v=1.1',
        technologies: ['ASRS', 'AMR', 'Modbus TCP', 'PLC', '系统集成']
    },
    {
        title: '货到人（GTP）拣选系统',
        concept: '实施了一个集成的AMR系统，创建了“货架到人”的工作流程，极大地减少了操作员的行走时间。',
        details: '该GTP系统指挥AMR检索并将整个货架单元运输到专用的拣选站，显著提高了订单履行速度并改善了工作场所的人体工程学。',
        imageUrl: 'https://v8d2f4g2.delivery.rocketcdn.me/wp-content/uploads/2023/05/Geek.jpg?v=1.1',
        technologies: ['货到人', 'AMR', 'WMS', '人体工程学', '物流优化']
    },
    {
        title: '生产线AMR集成',
        concept: '开发了一个使用AMR与PLC控制的机械集成的自动化生产供应流程。',
        details: '该项目重点关注操作安全和效率，涉及用于机器握手的PLC编程，并为协作式人机工作环境实施了强大的安全协议。',
        imageUrl: 'https://i.imgur.com/aYgOICL.jpeg?v=1.1',
        technologies: ['AMR', 'PLC编程', 'SolidWorks', '安全系统', '机器集成']
    },
    {
        title: '自动化木制托盘堆叠与分配器',
        concept: '设计并调试了一套用于分配和收集木制托盘的自动化系统，以满足供应链需求。',
        details: '该解决方案提供按需托盘，通过Modbus TCP与中央AMR车队管理系统无线集成，以优化工作流程并减少操作空闲时间。',
        imageUrl: 'https://i.imgur.com/F0fYqbl.jpeg?v=1.1',
        technologies: ['自动化', '机器人技术', 'SolidWorks', 'Modbus TCP', 'AMR集成']
    },
    {
        title: '自动化托盘缠绕系统',
        concept: '开发了一个完全由AMR启动和服务的自动化托盘缠绕站。',
        details: '该系统使AMR能够将装载好的托盘运输到缠绕机并自动启动缠绕周期。通信通过Modbus TCP无线处理，创建了一个无需人工操作的包装步骤。',
        imageUrl: 'https://i.imgur.com/T46V6Qv.jpeg?v=1.1',
        technologies: ['托盘缠绕', 'AMR', 'Modbus TCP', '自动化', 'PLC']
    }
];

export const academicProjectsData: Project[] = [
    {
        title: '用回收材料制作的易拉罐压扁器',
        concept: '设计并制造了一个易拉罐压扁器，以方便铝罐的回收。',
        impact: '通过100%使用回收材料建造，提升了用户便利性并促进了环境可持续性。',
        imageUrl: 'https://i.imgur.com/4GKF1ai.jpeg?v=1.1',
        technologies: ['SolidWorks', '机械设计', '回收利用', '制造']
    },
    {
        title: '塑料粉碎机',
        concept: '开发了一台旨在减少塑料废物体積的塑料粉碎机。',
        impact: '通过将较大的塑料物品转化为较小的颗粒状碎片，显著降低了塑料回收的成本。',
        imageUrl: 'https://i.imgur.com/HvQ6XL6.jpeg?v=1.1',
        technologies: ['机械设计', 'SolidWorks', '废物管理']
    },
    {
        title: '经济型台锯',
        concept: '设计并制造了一台多功能家用木工台锯。',
        impact: '在有限的预算内成功完成了项目，符合工具可及性和实用性的可持续发展目标。',
        imageUrl: 'https://i.imgur.com/LilPdPA.jpeg?v=1.1',
        technologies: ['木工', '机械设计', '制造']
    },
    {
        title: '毕业设计：苹果削皮生产线',
        concept: '构思并设计了一台工业级苹果削皮机及整条生产线。',
        keyFeatures: ['集成了用于故障预测的运动动画。', '对市场上的苹果加工产品提出了改进。', '为清晰理解，包含了生产线动画。'],
        imageUrl: 'https://i.imgur.com/qaNv0Xw.png?v=1.1',
        technologies: ['SolidWorks', '运动动画', '生产线设计', 'Python']
    },
    {
        title: '毕业论文：发电前臂机',
        concept: '基于前臂锻炼机的原理，设计并制造了一种发电装置。',
        process: '确定了发电的最佳尺寸，选择了优质组件进行组装，并研究了影响功率输出的关键参数。',
        methodology: '使用SOLIDWORKS软件对整个原型进行建模，并制造了一个功能性原型进行实验验证。',
        imageUrl: 'https://i.imgur.com/V8v4Ayp.png?v=1.1',
        technologies: ['SolidWorks', '原型制作', '发电', '机械设计']
    }
];

export const developmentData: DevelopmentItem[] = [
    { category: 'Professional Development', item: '项目管理专业人士 (PMP)' },
    { category: 'Professional Development', item: '应用控制电路诊断技能' },
    { category: 'Professional Development', item: '六西格玛黑带 (由Shimano黑带大师认证)' },
    { category: 'Professional Development', item: 'DraftSight 布局规划' },
    { category: 'Professional Development', item: '执行PLC编程' },
    { category: 'Professional Development', item: '安川工业机器人操作' },
    { category: 'Professional Development', item: 'WSQ Python 基础' },
    { category: 'Professional Development', item: 'GD&T 与公差叠加分析' },
    { category: 'Additional Achievement', item: '现场巡视工业安全实施 (Shimano)' },
    { category: 'Additional Achievement', item: '24年度第二最佳SGA项目奖获得者 (Shimano)' },
    { category: 'Additional Achievement', item: '2016至2022年TRUST奖学金持有者 (UCSI)' }
];

export const educationData: EducationItem[] = [
    { degree: "机械工程学士学位", institution: "UCSI大学", period: "2017-2021", imageUrl: "https://i.imgur.com/nqKMg1J.png?v=1.1" },
    { degree: "理科预科", institution: "UCSI大学", period: "2016-2017", imageUrl: "https://i.imgur.com/nqKMg1J.png?v=1.1" },
    { degree: "SPM", institution: "SMK Taman University", period: "2011-2015", imageUrl: "https://i.imgur.com/fz1P118.png?v=1.1" }
];

export const references = {
    title: "可根据要求提供推荐信。",
    body: "为保护推荐人的隐私，请直接与我联系以获取他们的信息。我很乐意提供。"
};

export const contact = {
    intro: "我随时乐于讨论新项目、创意想法或成为宏伟愿景一部分的机会。欢迎随时通过以下表格或我的其他渠道与我联系。",
    email: "发送邮件"
};

export const contactForm = {
    nameLabel: "您的姓名",
    namePlaceholder: "例如, 张三",
    emailLabel: "您的电子邮件",
    emailPlaceholder: "例如, zhang.san@example.com",
    subjectLabel: "主题",
    subjectPlaceholder: "例如, 工作机会",
    phoneLabel: "电话号码 (可选)",
    phonePlaceholder: "例如, +86 123-4567-8901",
    messageLabel: "您的留言",
    messagePlaceholder: "您好，我想就...与您联系",
    sendButton: "发送消息",
    sendingButton: "发送中...",
    successMessage: "感谢您的留言！我会尽快回复您。",
    errorMessage: "哎呀！出了点问题。请重试。",
    altContact: "或者，通过我的其他渠道联系我：",
    validation: {
        nameRequired: "姓名为必填项。",
        emailRequired: "电子邮件为必填项。",
        emailInvalid: "请输入有效的电子邮件地址。",
        subjectRequired: "主题为必填项。",
        messageRequired: "留言为必填项。",
    }
};

export const game = {
    catchGame: {
        title: "接住零件",
        description: "展示你的反应能力！接住掉落的零件来得分。",
        goal: (score: number) => `获得 ${score} 分即可获胜！`,
        start: "开始游戏",
        wonTitle: "挑战完成！",
        wonBody: "你的反应真棒！希望能与您建立联系。",
        playAgain: "再玩一次",
    },
    score: "分数",
};

export const footer = {
    builtWith: "由 React 和 Tailwind CSS 构建。"
};

export const projectModal = {
    tech: "技术与工具",
    concept: "概念",
    details: "详情",
    impact: "影响",
    process: "过程",
    methodology: "方法论",
    keyFeatures: "主要特点"
};

export const dev = {
    profDev: "职业发展",
    achieve: "其他成就"
};

export const proficiencyLevels = {
    expert: "专家",
    advanced: "高级",
    proficient: "熟练",
    intermediate: "中级",
    beginner: "初级"
};

export const roleTypes = {
    internship: '实习'
};