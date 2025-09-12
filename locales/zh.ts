import type { Skill, Experience, Project, DevelopmentItem, EducationItem } from '../types';

export const navLinks = [
    { name: '关于', href: '#about' },
    { name: '技能', href: '#skills' },
    { name: '经历', href: '#experience' },
    { name: '工作项目', href: '#work-projects' },
    { name: '学术项目', href: '#academic-projects' },
    { name: '职业发展', href: '#development' },
    { name: '教育背景', href: '#education' },
    { name: '游戏', href: '#game' },
    { name: '联系方式', href: '#contact' },
];

export const hero = {
    title: "通过精密工程与自动化创新解决方案",
    subtitle: "作为一名机械设计师和自动化工程师，我从12岁起就对机械充满了深厚的热情。我擅长将复杂的挑战转化为高效、创新的解决方案。我的专业领域涵盖研究、项目制造以及先进自动化系统的实施。我对知识的持续渴望和推动技术边界的承诺驱使我取得卓越的成果。我相信“成功不是终点，失败也非末日”，并始终迎接新挑战，以提升我的能力并交付有影响力的工程解决方案。",
    button: "查看我的工作"
};

export const sectionTitles = {
    skills: "核心竞争力",
    experience: "职业历程",
    workProjects: "主要工作项目",
    academicProjects: "学术创新",
    development: "持续成长与认可",
    education: "教育背景",
    references: "专业推荐",
    contact: "联系我",
    game: "招聘官挑战：接住齿轮！"
};

export const skillsData: Skill[] = [
    { name: 'SolidWorks 建模', level: 9, description: '精通复杂机械系统的高级3D建模和装配设计。' },
    { name: 'AutoCAD 制图', level: 8, description: '熟练掌握2D技术制图、草图绘制和详细设计文档。' },
    { name: 'PLC 编程', level: 7, description: '在工业自动化PLC逻辑开发和故障排除方面经验丰富，尤其擅长三菱PLC。' },
    { name: 'Microsoft Office', level: 9, description: '精通使用Microsoft Office套件进行数据分析、报告和项目文档编制。' },
    { name: '项目管理技能', level: 9, description: '具备从概念到完成管理项目的成熟能力，包括预算、排程和团队协调。' },
    { name: '六西格玛精益制造技能', level: 9, description: '应用精益六西格玛原则优化制造流程、减少浪费、提高效率和质量。' },
    { name: 'Vibe 编程', level: 8, description: '应用提示工程为工程目的开发工具和应用程序，通过AI驱动的解决方案提高效率和解决问题的能力。' }
];

export const experienceData: Experience[] = [
    {
        company: 'SHIMANO SINGAPORE PTE LTD',
        logoUrl: 'https://1000logos.net/wp-content/uploads/2020/09/Shimano-Logo.jpg',
        roles: [
            {
                title: '高级工程师',
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
                    '领导冲压与成型机自动化的机械设计，包括概念草图、3D SolidWorks建模和2D图纸注释。',
                    '为提案制定全面的项目成本、投资和人力优化计划，成功获得一个30万新元的项目，投资回报期为10个月。',
                    '为PLC编程（三菱PLC）提供现场故障排除和改进支持。',
                    '管理项目执行并监督现场活动，确保无缝集成和及时交付。',
                    '促进与部门、供应商和供应商的内外联络，确保项目成功。',
                    '设计本地和海外洁净室车间工作流程和布局，优化空间和物料流。',
                    '执行仓库流程吞吐量和利用率计算以提高效率。',
                    '为传送带和包装线执行上下游机械设计。',
                    '开创项目成本核算、投资、供应商采购和人力优化提案，获得一个300万新元的项目，投资回报期为8.6个月。',
                    '开发跨ERP、WMS、RMS和PLC系统的系统集成计划。',
                    '确保安全合规并规划人机协作环境。',
                    '管理自动导引车的现场部署和长期改进计划。'
                ],
                type: 'Full-time',
            }
        ]
    },
    {
        company: 'ARMSTRONG SDN BHD',
        logoUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQH75S6hkgK_mg/company-logo_200_200/company-logo_200_200/0/1631343921130?e=2147483647&v=beta&t=wOGNmI8EYs-h87Y12DFyvXbLSz5pRHK4QJPCknB6WGc',
        roles: [
            {
                title: '工艺工程师',
                period: '21年9月 - 22年2月',
                details: [
                    '为后固化、DI清洗和洁净室包装过程提供关键技术支持。',
                    '确保所有橡胶产品符合严格的客户清洁度要求（符合ISO8洁净室标准）。',
                    '在工艺工程部门内管理自动化项目并发起成本节约计划。'
                ],
                type: 'Full-time',
            }
        ]
    },
    {
        company: 'HERSHEY MALAYSIA SDN BHD',
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0R3docEDPinwIXeJ9BPauQM0TlR0A6_3F6w&s',
        roles: [
            {
                title: '生产工程师实习生',
                period: '20年9月 - 20年12月',
                details: [
                    '在洁净室环境中积极协助快速消费品制造操作。',
                    '识别流程瓶颈，了解根本原因，并为运营改进开发创新解决方案。',
                    '从最初概念到完成，全面参与包装自动化项目，应用有效的时间管理技能和工程知识。',
                    '监控和分析生产线流程性能指标，制定全面的改进计划。',
                    '为各生产线提供最大化制造流程效率的解决方案，为食品包装自动化和转换优化做出贡献。'
                ],
                type: 'Internship',
            }
        ]
    }
];

export const workProjectsData: Project[] = [
    {
        title: '端到端物流AMR自动化',
        value: '300万新元以上',
        concept: '设计了一个全面的全自动物流工作流程，利用自主移动机器人（AMR）车队简化从仓储到生产线的物料运输。',
        details: '这个大型项目涉及设计整个供应链流程，将AMR与现有的WMS和ERP系统集成，并确保所有系统层之间的无缝、无间隙通信以实现最高效率。',
        imageUrl: 'https://picsum.photos/seed/logistics-amr/600/400',
        technologies: ['AMR', 'WMS集成', 'ERP集成', '系统架构', 'SolidWorks']
    },
    {
        title: 'ASRS与AMR无线集成',
        value: '50万新元以上',
        concept: '为实现全自主托盘处理，设计了自动存储与检索系统（ASRS）和AMR之间的无缝集成。',
        details: '使用Modbus TCP协议建立了强大的无线通信链接。该系统可自动将塑料托盘堆叠到木制托盘上进行ASRS存储，以及在出库操作时进行反向解绑过程，从而消除了人工搬运。',
        imageUrl: 'https://picsum.photos/seed/asrs/600/400',
        technologies: ['ASRS', 'AMR', 'Modbus TCP', 'PLC', '系统集成']
    },
    {
        title: '货到人（GTP）拣选系统',
        value: '100万新元以上',
        concept: '实施了一个集成的AMR系统，创建了“货架到人”的工作流程，极大地减少了拣选操作中的操作员行走时间。',
        details: '该GTP系统指挥AMR检索并运输整个货架单元到专用的拣选站，显著提高了订单履行速度，减少了错误，并改善了员工的人体工程学条件。',
        imageUrl: 'https://picsum.photos/seed/gtp/600/400',
        technologies: ['货到人', 'AMR', 'WMS', '人体工程学', '物流优化']
    },
    {
        title: '生产线AMR集成',
        value: '30万新元以上',
        concept: '开发了一个使用AMR与PLC控制的机械集成的全自动生产供应流程，将物料直接运送到装配站。',
        details: '该项目重点关注操作安全和效率。它涉及用于机器握手的PLC编程，并实施强大的安全协议，以确保安全、协作的人机工作环境。',
        imageUrl: 'https://picsum.photos/seed/production-amr/600/400',
        technologies: ['AMR', 'PLC编程', 'SolidWorks', '安全系统', '机器集成']
    },
    {
        title: '自动化木制托盘堆叠与分配器',
        value: '15万新元以上',
        concept: '设计并调试了一套用于分配和收集木制托盘的自动化系统，以满足各种供应链运营需求。',
        details: '该解决方案为生产和物流提供按需托盘，通过Modbus TCP与中央AMR车队管理系统无线集成，以优化工作流程并减少空闲时间。',
        imageUrl: 'https://picsum.photos/seed/pallet-stocker/600/400',
        technologies: ['自动化', '机器人技术', 'SolidWorks', 'Modbus TCP', 'AMR集成']
    },
    {
        title: '自动化托盘缠绕系统',
        value: '10万新元以上',
        concept: '开发了一个完全由AMR启动和服务的自动化托盘缠绕站。',
        details: '该系统允许AMR将装载好的托盘运输到缠绕机，机器在机器人到达后自动启动缠绕周期。通信通过Modbus TCP无线处理，创建了一个无需人工操作的最终包装步骤。',
        imageUrl: 'https://picsum.photos/seed/wrapper/600/400',
        technologies: ['托盘缠绕', 'AMR', 'Modbus TCP', '自动化', 'PLC']
    }
];

export const academicProjectsData: Project[] = [
    {
        title: '用回收材料制作的易拉罐压扁器',
        concept: '设计并制造了一个易拉罐压扁器，以方便铝罐的回收。',
        impact: '通过100%使用回收材料建造，提升了用户便利性并促进了环境可持续性。',
        imageUrl: 'https://picsum.photos/seed/cancrusher/600/400',
        technologies: ['SolidWorks', '机械设计', '回收利用', '制造']
    },
    {
        title: '塑料粉碎机',
        concept: '开发了一台旨在减少塑料废物体积的塑料粉碎机。',
        impact: '通过将较大的塑料物品转化为较小的颗粒状碎片，显著降低了塑料回收的成本。',
        imageUrl: 'https://picsum.photos/seed/shredder/600/400',
        technologies: ['机械设计', 'SolidWorks', '废物管理']
    },
    {
        title: '经济型台锯',
        concept: '设计并制造了一台多功能家用木工台锯。',
        impact: '在有限的预算内成功完成了项目，符合工具可及性和实用性的可持续发展目标。',
        imageUrl: 'https://picsum.photos/seed/tablesaw/600/400',
        technologies: ['木工', '机械设计', '制造']
    },
    {
        title: '毕业设计：苹果削皮生产线',
        concept: '构思并设计了一台工业级苹果削皮机及整条生产线。',
        keyFeatures: ['集成了用于故障预测的运动动画。', '对市场上的苹果加工产品提出了改进。', '为清晰理解，包含了生产线动画。'],
        imageUrl: 'https://picsum.photos/seed/appleline/600/400',
        technologies: ['SolidWorks', '运动动画', '生产线设计', 'Python']
    },
    {
        title: '毕业论文：发电前臂机',
        concept: '基于前臂锻炼机的原理，设计并制造了一种发电装置。',
        process: '确定了发电的最佳尺寸，选择了优质组件进行组装，并研究了影响功率输出的关键参数。',
        methodology: '使用SOLIDWORKS软件对整个原型进行建模，并制造了一个功能性原型进行实验验证。',
        imageUrl: 'https://picsum.photos/seed/forearm/600/400',
        technologies: ['SolidWorks', '原型制作', '发电', '机械设计']
    }
];

export const developmentData: DevelopmentItem[] = [
    { category: 'Professional Development', item: '项目管理专业人士 (PMP)' },
    { category: 'Professional Development', item: '应用控制电路诊断技能' },
    { category: 'Professional Development', item: '六西格玛绿带 (由Shimano黑带大师认证)' },
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
    { degree: "机械工程学士学位", institution: "UCSI大学", period: "2017-2021", details: "CGPA: 3.48" },
    { degree: "理科预科", institution: "UCSI大学", period: "2016-2017", details: "CGPA: 3.64" },
    { degree: "SPM", institution: "SMK Taman University", period: "2011-2015", details: "成绩: 5A 2A-3B+" }
];

export const references = {
    title: "可根据要求提供推荐信。",
    body: "为保护推荐人的隐私，请直接与我联系以获取他们的信息。我很乐意提供。"
};

export const contact = {
    intro: "我随时乐于讨论新项目、创意想法或成为宏伟愿景一部分的机会。欢迎随时与我联系。",
    email: "发送邮件"
};

export const game = {
    challenge: "准备好休息一下了吗？",
    goal: (score: number) => `获得 ${score} 分以完成挑战！`,
    start: "开始游戏",
    wonTitle: "挑战完成！",
    wonBody: "你的反应真棒！希望能与您建立联系。",
    playAgain: "再玩一次",
    score: "分数"
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

export const roleTypes = {
    internship: '实习'
};