import type { Skill, Experience, Project, DevelopmentItem, EducationItem } from '../types';

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

export const hero = {
    title: "Precision Engineering & Automation Innovator",
    subtitle: "A Mechanical Designer and Automation Engineer with a lifelong passion for mechanics. I specialize in transforming complex industrial challenges into efficient, intelligent solutions. My expertise lies in designing advanced automation systems, leading projects from concept to completion, and pushing technological boundaries to drive productivity and safety.",
    button: "View My Work",
    resumeButton: "Download CV"
};

export const sectionTitles = {
    skills: "Core Competencies",
    experience: "Professional Journey",
    workProjects: "Key Work Projects",
    academicProjects: "Academic Innovations",
    development: "Continuous Growth & Recognition",
    education: "Educational Background",
    references: "Professional Reference",
    contact: "Get In Touch",
    game: "Recruiter's Arcade",
    workProjectsDisclaimer: "Disclaimer: All project images are for illustration purposes only due to company confidentiality."
};

export const skillsData: Skill[] = [
    { name: 'SolidWorks Modeling', level: 9, description: 'Proficient in advanced 3D modeling and assembly design for complex mechanical systems.', tooltip: 'Includes expertise in part modeling, large assembly management, weldments, sheet metal, and creating detailed manufacturing drawings with GD&T.' },
    { name: 'AutoCAD Drawing', level: 8, description: 'Skilled in 2D technical drawing, drafting, and detailed design documentation.', tooltip: 'Experienced in creating P&ID diagrams, electrical schematics, and mechanical layouts according to industry standards like ANSI and ISO.' },
    { name: 'PLC Programming', level: 7, description: 'Experienced in developing and troubleshooting PLC logic for industrial automation, particularly with Mitsubishi PLCs.', tooltip: 'Hands-on experience with ladder logic, function block diagrams, and structured text on platforms like Mitsubishi GX Works2/3 and Siemens TIA Portal.' },
    { name: 'Microsoft Office', level: 9, description: 'Expert in using Microsoft Office Suite for data analysis, reporting, and project documentation.', tooltip: 'Advanced proficiency in Excel for data analysis (PivotTables, VLOOKUP), PowerPoint for presentations, and Word for technical documentation.' },
    { name: 'Project Management Skill', level: 9, description: 'Proven ability to manage projects from conceptualization to completion, including budgeting, scheduling, and team coordination.', tooltip: 'Utilizing tools like Gantt charts, critical path analysis, and Agile methodologies to ensure projects are delivered on time and within budget.' },
    { name: '6 Sigma Lean Manufacturing Skill', level: 9, description: 'Applied Lean Six Sigma principles to optimize manufacturing processes, reduce waste, and improve efficiency and quality.', tooltip: 'Certified Greenbelt with practical experience in DMAIC, value stream mapping, 5S, and Kaizen events to drive continuous improvement.' },
    { name: 'Vibe Coding', level: 8, description: 'Leveraging prompt engineering and AI to develop custom tools that enhance engineering efficiency and accelerate problem-solving.', tooltip: 'Using large language models (LLMs) for rapid prototyping, code generation, data analysis scripting, and automating technical documentation.' }
];

export const experienceData: Experience[] = [
    {
        company: 'SHIMANO SINGAPORE PTE LTD',
        logoUrl: 'https://1000logos.net/wp-content/uploads/2020/09/Shimano-Logo.jpg?v=1.1',
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
                    'Led mechanical design for press and forming machine automation, from concept and 3D modeling to final 2D drawings.',
                    'Secured a SGD 300k project with a 10-month ROI by developing comprehensive project proposals including costing, investment, and optimization plans.',
                    'Provided on-site support for troubleshooting and improving PLC logic (Mitsubishi PLC).',
                    'Managed project execution and supervised on-site activities to ensure seamless integration and timely delivery.',
                    'Coordinated with internal departments, vendors, and suppliers to ensure project success.',
                    'Designed cleanroom shopfloor layouts and workflows for local and overseas sites, optimizing space and material flow.',
                    'Calculated warehouse process throughput and utilization to identify and implement efficiency improvements.',
                    'Executed mechanical design for both upstream and downstream conveyor and packaging line equipment.',
                    'Spearheaded proposal development for a large-scale automation project, securing SGD 3 million in funding with an 8.6-month ROI.',
                    'Developed system integration plans across ERP, WMS, RMS, and PLC systems for cohesive operation.',
                    'Ensured safety compliance and planned for a human-robot collaborative work environment.',
                    'Managed on-site deployment and continuous improvement initiatives for automated guided vehicles (AGVs).'
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
                title: 'PROCESS ENGINEER',
                period: 'Sept \'21 - Feb \'22',
                details: [
                    'Provided critical technical support for Post Curing, DI Wash, and Cleanroom Packaging processes.',
                    'Ensured all rubber products met stringent customer cleanliness requirements (ISO 8 Cleanroom compliance).',
                    'Managed automation projects and spearheaded cost-saving initiatives within the process engineering department.'
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
                title: 'PRODUCTION ENGINEER INTERN',
                period: 'Sept \'20 - Dec \'20',
                details: [
                    'Assisted in FMCG manufacturing operations within a cleanroom environment.',
                    'Identified process bottlenecks and developed innovative solutions for operational improvement.',
                    'Participated in packaging automation projects from concept to completion, applying engineering knowledge and time-management skills.',
                    'Monitored and analyzed line performance metrics to formulate comprehensive improvement plans.',
                    'Contributed to food packaging automation and changeover optimization to maximize manufacturing efficiency.'
                ],
                type: 'Internship',
            }
        ]
    }
];

export const workProjectsData: Project[] = [
    {
        title: 'End-to-End Logistic AMR Automation',
        concept: 'Engineered a fully automated, end-to-end logistics workflow using a fleet of Autonomous Mobile Robots (AMRs).',
        details: 'Integrated a fleet of AMRs with existing WMS and ERP systems, architecting a seamless communication network to maximize material transport efficiency from warehouse to production.',
        imageUrl: 'https://rozitek.com/wp-content/uploads/2023/01/Intralogistic-Rozitek-robot-agv-amr-he-thong-AI.webp?v=1.1',
        technologies: ['AMR', 'WMS Integration', 'ERP Integration', 'System Architecture', 'SolidWorks']
    },
    {
        title: 'ASRS & AMR Wireless Integration',
        concept: 'Integrated an Automated Storage and Retrieval System (ASRS) with AMRs for fully autonomous pallet handling.',
        details: 'Automated pallet handling by establishing a robust Modbus TCP wireless link between ASRS and AMRs, eliminating all manual intervention in pallet stacking and unstacking processes.',
        imageUrl: 'https://i.imgur.com/odYCRsK.jpeg?v=1.1',
        technologies: ['ASRS', 'AMR', 'Modbus TCP', 'PLC', 'System Integration']
    },
    {
        title: 'Goods-to-Person (GTP) Picking System',
        concept: 'Implemented an integrated AMR system to create a "shelf-to-person" workflow, drastically minimizing operator travel time.',
        details: 'This GTP system directs AMRs to retrieve and transport entire shelving units to dedicated picking stations, significantly increasing order fulfillment speed and improving workplace ergonomics.',
        imageUrl: 'https://v8d2f4g2.delivery.rocketcdn.me/wp-content/uploads/2023/05/Geek.jpg?v=1.1',
        technologies: ['Goods-to-Person', 'AMR', 'WMS', 'Ergonomics', 'Logistics Optimization']
    },
    {
        title: 'Production Line AMR Integration',
        concept: 'Developed an automated production supply flow using AMRs integrated with PLC-controlled machinery.',
        details: 'This project focused on operational safety and efficiency, involving PLC programming for machine handshaking and implementing robust safety protocols for a collaborative human-robot work environment.',
        imageUrl: 'https://i.imgur.com/aYgOICL.jpeg?v=1.1',
        technologies: ['AMR', 'PLC Programming', 'SolidWorks', 'Safety Systems', 'Machine Integration']
    },
    {
        title: 'Automated Wooden Pallet Stocker & Dispenser',
        concept: 'Designed and commissioned an automated system for dispensing and collecting wooden pallets to service supply chain needs.',
        details: 'This solution provides on-demand pallet availability, integrating wirelessly with the central AMR fleet management system via Modbus TCP to optimize workflow and reduce operational idle time.',
        imageUrl: 'https://i.imgur.com/F0fYqbl.jpeg?v=1.1',
        technologies: ['Automation', 'Robotics', 'SolidWorks', 'Modbus TCP', 'AMR Integration']
    },
    {
        title: 'Automated Pallet Wrapping System',
        concept: 'Developed an automated pallet wrapping station initiated and serviced entirely by AMRs.',
        details: 'The system enables an AMR to transport a loaded pallet to the wrapping machine and automatically initiate the cycle. Communication is handled wirelessly via Modbus TCP, creating a hands-free packaging step.',
        imageUrl: 'https://i.imgur.com/T46V6Qv.jpeg?v=1.1',
        technologies: ['Pallet Wrapping', 'AMR', 'Modbus TCP', 'Automation', 'PLC']
    }
];


export const academicProjectsData: Project[] = [
    {
        title: 'CAN CRUSHER BUILT FROM RECYCLED MATERIALS',
        concept: 'Designed and fabricated a can crusher to facilitate easier recycling of aluminum cans.',
        impact: 'Enhanced user convenience and promoted environmental sustainability by utilizing 100% recycled materials in its construction.',
        imageUrl: 'https://i.imgur.com/4GKF1ai.jpeg?v=1.1',
        technologies: ['SolidWorks', 'Mechanical Design', 'Recycling', 'Fabrication']
    },
    {
        title: 'PLASTIC SHREDDER',
        concept: 'Developed a plastic shredder aimed at reducing plastic waste volume.',
        impact: 'Significantly reduced the cost of plastic recycling by converting larger plastic items into smaller, granulate pieces.',
        imageUrl: 'https://i.imgur.com/HvQ6XL6.jpeg?v=1.1',
        technologies: ['Mechanical Design', 'SolidWorks', 'Waste Management']
    },
    {
        title: 'ECONOMIC TABLE SAW',
        concept: 'Designed and built a versatile woodworking table saw for home use.',
        impact: 'Successfully completed the project within a limited budget, aligning with sustainable development goals for tool accessibility and utility.',
        imageUrl: 'https://i.imgur.com/LilPdPA.jpeg?v=1.1',
        technologies: ['Woodworking', 'Mechanical Design', 'Fabrication']
    },
    {
        title: 'CAPSTONE: APPLE PEELING PRODUCTION LINE',
        concept: 'Conceptualized and designed an industrial-level apple peeling machine and an entire production line.',
        keyFeatures: ['Incorporated motion animation for failure forecasting.', 'Provided improvements to the apple processing product in the market.', 'Included manufacturing line animations for clarity and understanding.'],
        imageUrl: 'https://i.imgur.com/qaNv0Xw.png?v=1.1',
        technologies: ['SolidWorks', 'Motion Animation', 'Production Line Design', 'Python']
    },
    {
        title: 'FYP: POWER GENERATOR FOREARM MACHINE',
        concept: 'Designed and fabricated a power-generating mechanism based on the principles of a forearm exercise machine.',
        process: 'Determined optimal dimensions for power generation, selected components for superior assembly, and investigated key parameters influencing power output.',
        methodology: 'Modeled the entire prototype using SOLIDWORKS software and fabricated a functional prototype for experimental validation.',
        imageUrl: 'https://i.imgur.com/V8v4Ayp.png?v=1.1',
        technologies: ['SolidWorks', 'Prototyping', 'Power Generation', 'Mechanical Design']
    }
];

export const developmentData: DevelopmentItem[] = [
    { category: 'Professional Development', item: 'Project Management Professional (PMP)' },
    { category: 'Professional Development', item: 'Applied Control Circuit Diagnostic Skill' },
    { category: 'Professional Development', item: 'Black Belt in Six Sigma (Certified by Shimano Master Black Belt)' },
    { category: 'Professional Development', item: 'DraftSight Layout Planning' },
    { category: 'Professional Development', item: 'Performed PLC Programming' },
    { category: 'Professional Development', item: 'Yaskawa Industrial Robot Operating' },
    { category: 'Professional Development', item: 'WSQ Python Fundamentals' },
    { category: 'Professional Development', item: 'GD&T & Tolerance Stack-Up Analysis' },
    { category: 'Additional Achievement', item: 'Gemba Walk Industrial Safety Implement (Shimano)' },
    { category: 'Additional Achievement', item: '2nd Best SGA Project Award Winner Y24 (Shimano)' },
    { category: 'Additional Achievement', item: 'TRUST SCHOLARSHIP HOLDER FROM 2016 TO 2022 (UCSI)' }
];

export const educationData: EducationItem[] = [
    { degree: "Bachelor's Degree in Mechanical Engineering", institution: "UCSI University", period: "2017-2021", imageUrl: "https://i.imgur.com/nqKMg1J.png?v=1.1" },
    { degree: "Foundation in Science", institution: "UCSI University", period: "2016-2017", imageUrl: "https://i.imgur.com/nqKMg1J.png?v=1.1" },
    { degree: "SPM", institution: "SMK Taman University", period: "2011-2015", imageUrl: "https://i.imgur.com/fz1P118.png?v=1.1" }
];

export const references = {
    title: "References available upon request.",
    body: "To protect the privacy of my references, please contact me directly for their information. I would be happy to provide them."
};

export const contact = {
    intro: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out using the form below or through my other channels.",
    email: "Email Me"
};

export const contactForm = {
    nameLabel: "Your Name",
    namePlaceholder: "e.g., Jane Doe",
    emailLabel: "Your Email",
    emailPlaceholder: "e.g., jane.doe@example.com",
    messageLabel: "Your Message",
    messagePlaceholder: "Hi Soo, I'd like to connect regarding...",
    sendButton: "Send Message",
    sendingButton: "Sending...",
    successMessage: "Thank you for your message! I'll get back to you soon.",
    errorMessage: "Oops! Something went wrong. Please try again.",
    altContact: "Or, reach me via my other channels:",
    validation: {
        nameRequired: "Name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Please enter a valid email address.",
        messageRequired: "Message is required.",
    }
};

export const game = {
    catchGame: {
        title: "Catch The Parts",
        description: "Show your reflexes! Catch the falling components to score points.",
        goal: (score: number) => `Score ${score} points to win!`,
        start: "Start Game",
        wonTitle: "Challenge Complete!",
        wonBody: "You've got great reflexes! I'd love to connect.",
        playAgain: "Play Again",
    },
    score: "Score",
};

export const footer = {
    builtWith: "Built with React & Tailwind CSS."
};

export const projectModal = {
    tech: "Technologies & Tools",
    concept: "Concept",
    details: "Details",
    impact: "Impact",
    process: "Process",
    methodology: "Methodology",
    keyFeatures: "Key Features"
};

export const dev = {
    profDev: "Professional Development",
    achieve: "Additional Achievements"
};

export const proficiencyLevels = {
    expert: "Expert",
    advanced: "Advanced",
    proficient: "Proficient",
    intermediate: "Intermediate",
    beginner: "Beginner"
};

export const roleTypes = {
    internship: 'Internship'
};
