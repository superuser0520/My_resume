import type { Skill, Experience, Project, DevelopmentItem, EducationItem } from './types';

export const skillsData: Skill[] = [
    { name: 'SolidWorks Modeling', level: 9, description: 'Proficient in advanced 3D modeling and assembly design for complex mechanical systems.' },
    { name: 'AutoCAD Drawing', level: 8, description: 'Skilled in 2D technical drawing, drafting, and detailed design documentation.' },
    { name: 'PLC Programming', level: 7, description: 'Experienced in developing and troubleshooting PLC logic for industrial automation, particularly with Mitsubishi PLCs.' },
    { name: 'Microsoft Office', level: 9, description: 'Expert in using Microsoft Office Suite for data analysis, reporting, and project documentation.' },
    { name: 'Project Management Skill', level: 9, description: 'Proven ability to manage projects from conceptualization to completion, including budgeting, scheduling, and team coordination.' },
    { name: '6 Sigma Lean Manufacturing Skill', level: 9, description: 'Applied Lean Six Sigma principles to optimize manufacturing processes, reduce waste, and improve efficiency and quality.' },
    { name: 'Vibe Coding', level: 8, description: 'Applied prompt engineering to develop tools and applications for engineering purposes, enhancing efficiency and problem-solving through AI-driven solutions.' }
];

export const experienceData: Experience[] = [
    {
        company: 'SHIMANO SINGAPORE PTE LTD',
        logoUrl: 'https://logos-world.net/wp-content/uploads/2020/11/Shimano-Logo-White.png',
        roles: [
            {
                title: 'Senior Engineer',
                period: 'July \'24 - Present',
                details: [],
                type: 'Full-time',
            },
            {
                title: 'AUTOMATION ENGINEER II',
                period: 'July \'23 - July \'24',
                details: [],
                type: 'Full-time',
            },
            {
                title: 'AUTOMATION ENGINEER I',
                period: 'March \'22 - June \'23',
                details: [
                    'Led mechanical design for PRESS & FORMING machine automation, including concept drafting, 3D SolidWorks modeling, and 2D drawing annotation.',
                    'Developed comprehensive project costing, investment, and manpower optimization plans for proposals, successfully securing a SGD 300k project with a 10-month ROI.',
                    'Provided on-site support for troubleshooting and improvement on PLC Programming (Mitsubishi PLC).',
                    'Managed project execution and supervised on-site activities, ensuring seamless integration and timely delivery.',
                    'Facilitated internal and external liaison with departments, vendors, and suppliers for project success.',
                    'Designed local and overseas cleanroom shopfloor workflows and layouts, optimizing space and material flow.',
                    'Performed warehouse process throughput and utilization calculations to enhance efficiency.',
                    'Executed upstream and downstream mechanical designing for conveyor and packaging lines.',
                    'Pioneered project costing, investment, vendor sourcing, and manpower optimization for proposals, securing a SGD 3 million project with an 8.6-month ROI.',
                    'Developed system integration plans across ERP, WMS, RMS, and PLC systems.',
                    'Ensured safety compliance and planned for human-robot collaborative environments.',
                    'Managed on-site deployment and long-term improvement initiatives for automated guided vehicles.'
                ],
                type: 'Full-time',
            }
        ]
    },
    {
        company: 'ARMSTRONG SDN BHD',
        logoUrl: 'https://www.armstrong.com.my/wp-content/uploads/2021/08/logo-armstrong.png',
        roles: [
            {
                title: 'PROCESS ENGINEER',
                period: 'Sept \'21 - Feb \'22',
                details: [
                    'Provided critical technical support for Post Curing, DI Wash, and Cleanroom Packaging processes.',
                    'Ensured all rubber products met stringent customer cleanliness requirements (ISO8 Cleanroom compliance).',
                    'Managed automation projects and spearheaded cost-saving initiatives within the process engineering department.'
                ],
                type: 'Full-time',
            }
        ]
    },
    {
        company: 'HERSHEY MALAYSIA SDN BHD',
        logoUrl: 'https://www.thehersheycompany.com/content/dam/corporate-us/images/logos/hershey-logo-white.png',
        roles: [
            {
                title: 'PRODUCTION ENGINEER INTERN',
                period: 'Sept \'20 - Dec \'20',
                details: [
                    'Actively assisted in FMCG manufacturing operations within a cleanroom environment.',
                    'Identified process bottlenecks, understood root causes, and developed innovative solutions for operational improvement.',
                    'Fully participated in packaging automation projects from initial concept to completion, applying effective time-management skills and engineering knowledge.',
                    'Monitored and analyzed line process performance metrics to formulate comprehensive improvement plans.',
                    'Provided solutions to maximize manufacturing process efficiency across various production lines, contributing to food packaging automation & changeover optimization.'
                ],
                type: 'Internship',
            }
        ]
    }
];

export const workProjectsData: Project[] = [
    {
        title: 'Logistic AMR Automation',
        value: '3 mil SGD and above',
        concept: 'Designed and built a fully automated supply chain flow using customized automation and AMRs, seamlessly integrated to achieve gap-free communication.',
        details: 'Linked different layer systems, including Fleet Management System, WMS, and Sales system, with various protocols. A key achievement was the creation of a sequence diagram that visualized the complex data flow, which was crucial for stakeholder alignment and successful implementation.',
        imageUrl: 'https://picsum.photos/seed/logistics/600/400',
        technologies: ['SolidWorks', 'PLC', 'WMS', 'ERP Integration', 'AMR']
    },
    {
        title: 'Production AMR Automation',
        value: '300k SGD and above',
        concept: 'Designed and built a fully automated production supply flow using AMRs with PLC control. Ensured seamless safety with feasible control from an operational point of view.',
        details: 'The project focused heavily on integrating robust safety features. This included proximity sensors, emergency stop protocols, and light curtains that worked in tandem with the PLC logic to ensure a safe collaborative environment for humans and robots.',
        imageUrl: 'https://picsum.photos/seed/production/600/400',
        technologies: ['PLC Programming', 'AMR', 'SolidWorks', 'Safety Systems']
    },
    {
        title: 'Stamping Machine Material Handling Automation',
        value: '200k SGD and above',
        concept: 'Conceptualized and commissioned a sprocket handling and palletizing machine, automating the material flow.',
        details: 'This automation solution significantly reduced manual labor and increased throughput. A key metric of success was the reduction in cycle time by over 40%, leading to substantial efficiency gains on the production line.',
        imageUrl: 'https://picsum.photos/seed/stamping/600/400',
        technologies: ['SolidWorks', 'PLC', 'Automation', 'Robotics']
    }
];

export const academicProjectsData: Project[] = [
    {
        title: 'CAN CRUSHER BUILT FROM RECYCLED MATERIALS',
        concept: 'Designed and fabricated a can crusher to facilitate easier recycling of aluminum cans.',
        impact: 'Enhanced user convenience and promoted environmental sustainability by utilizing 100% recycled materials in its construction.',
        imageUrl: 'https://picsum.photos/seed/cancrusher/600/400',
        technologies: ['SolidWorks', 'Mechanical Design', 'Recycling', 'Fabrication']
    },
    {
        title: 'PLASTIC SHREDDER',
        concept: 'Developed a plastic shredder aimed at reducing plastic waste volume.',
        impact: 'Significantly reduced the cost of plastic recycling by converting larger plastic items into smaller, granulate pieces.',
        imageUrl: 'https://picsum.photos/seed/shredder/600/400',
        technologies: ['Mechanical Design', 'SolidWorks', 'Waste Management']
    },
    {
        title: 'ECONOMIC TABLE SAW',
        concept: 'Designed and built a versatile woodworking table saw for home use.',
        impact: 'Successfully completed the project within a limited budget, aligning with sustainable development goals for tool accessibility and utility.',
        imageUrl: 'https://picsum.photos/seed/tablesaw/600/400',
        technologies: ['Woodworking', 'Mechanical Design', 'Fabrication']
    },
    {
        title: 'CAPSTONE: APPLE PEELING PRODUCTION LINE',
        concept: 'Conceptualized and designed an industrial-level apple peeling machine and an entire production line.',
        keyFeatures: ['Incorporated motion animation for failure forecasting.', 'Provided improvements to the apple processing product in the market.', 'Included manufacturing line animations for clarity and understanding.'],
        imageUrl: 'https://picsum.photos/seed/appleline/600/400',
        technologies: ['SolidWorks', 'Motion Animation', 'Production Line Design', 'Python']
    },
    {
        title: 'FYP: POWER GENERATOR FOREARM MACHINE',
        concept: 'Designed and fabricated a power-generating mechanism based on the principles of a forearm exercise machine.',
        process: 'Determined optimal dimensions for power generation, selected components for superior assembly, and investigated key parameters influencing power output.',
        methodology: 'Modeled the entire prototype using SOLIDWORKS software and fabricated a functional prototype for experimental validation.',
        imageUrl: 'https://picsum.photos/seed/forearm/600/400',
        technologies: ['SolidWorks', 'Prototyping', 'Power Generation', 'Mechanical Design']
    }
];

export const developmentData: DevelopmentItem[] = [
    { category: 'Professional Development', item: 'Project Management Professional (PMP)' },
    { category: 'Professional Development', item: 'Applied Control Circuit Diagnostic Skill' },
    { category: 'Professional Development', item: 'Greenbelt in Six Sigma (Certified by Shimano Master Black Belt)' },
    { category: 'Professional Development', item: 'DraftSight Layout Planning' },
    { category: 'Professional Development', item: 'Performed PLC Programming' },
    { category: 'Professional Development', item: 'Yaskawa Industrial Robot Operating' },
    { category: 'Professional Development', item: 'WSQ Python Fundamentals' },
    { category: 'Professional Development', item: 'GD&T & Tolerance Stack-Up Analysis' },
    { category: 'Additional Achievement', item: 'Gemba Walk Industrial Safety Implement (Shimano)' },
    { category: 'Additional Achievement', item: '2nd Best SGA Project Award Winner Y24 (Shimano)' },
    { category: 'Additional Achievement', item: 'TRUST SCHOLARSHIP HOLDER FROM 2016 TO 2022 (UCSI)' }
];

// FIX: Added 'imageUrl' property to each object to satisfy the EducationItem type.
export const educationData: EducationItem[] = [
    { degree: "Bachelor's Degree in Mechanical Engineering", institution: "UCSI University", period: "2017-2021", details: "CGPA: 3.48", imageUrl: "https://cdn.prod.website-files.com/641ae14b3ffc4f10f12ecaff/681b065272fbe162401cbc9d_UCSI%20Logo.png" },
    { degree: "Foundation in Science", institution: "UCSI University", period: "2016-2017", details: "CGPA: 3.64", imageUrl: "https://cdn.prod.website-files.com/641ae14b3ffc4f10f12ecaff/681b065272fbe162401cbc9d_UCSI%20Logo.png" },
    { degree: "SPM", institution: "SMK Taman University", period: "2011-2015", details: "Result: 5A 2A-3B+", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDPtUNS1fvcWxQZbwJxYZOU1VrZEbdjTcvg&s" }
];

export const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work Projects', href: '#work-projects' },
    { name: 'Academic Projects', href: '#academic-projects' },
    { name: 'Development', href: '#development' },
    { name: 'Education', href: '#education' },
    { name: 'Game', href: '#game' },
    { name: 'Contact', href: '#contact' },
];