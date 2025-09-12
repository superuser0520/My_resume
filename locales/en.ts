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
    title: "Innovating Solutions Through Precision Engineering & Automation",
    subtitle: "As a Mechanical Designer and Automation Engineer with a deep-rooted passion for mechanics cultivated since the age of 12, I thrive on transforming complex challenges into efficient, innovative solutions. My expertise spans research, project fabrication, and the implementation of advanced automation systems. I am driven by a continuous desire for knowledge and a commitment to pushing technological boundaries to achieve exceptional results. I believe that \"Success is not final; failure is not fatal,\" and I consistently embrace new challenges to elevate my capabilities and deliver impactful engineering solutions.",
    button: "View My Work"
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
    game: "Recruiter's Challenge: Catch the Gears!"
};

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
        logoUrl: 'https://1000logos.net/wp-content/uploads/2020/09/Shimano-Logo.jpg',
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
        logoUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQH75S6hkgK_mg/company-logo_200_200/company-logo_200_200/0/1631343921130?e=2147483647&v=beta&t=wOGNmI8EYs-h87Y12DFyvXbLSz5pRHK4QJPCknB6WGc',
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
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0R3docEDPinwIXeJ9BPauQM0TlR0A6_3F6w&s',
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
        title: 'End-to-End Logistic AMR Automation',
        value: '3 mil SGD and above',
        concept: 'Engineered a comprehensive, fully automated logistics workflow utilizing a fleet of Autonomous Mobile Robots (AMRs) to streamline material transport from warehousing to production lines.',
        details: 'This large-scale project involved designing the entire supply chain flow, integrating AMRs with existing WMS and ERP systems, and ensuring seamless, gap-free communication between all system layers for maximum efficiency.',
        imageUrl: 'https://picsum.photos/seed/logistics-amr/600/400',
        technologies: ['AMR', 'WMS Integration', 'ERP Integration', 'System Architecture', 'SolidWorks']
    },
    {
        title: 'ASRS & AMR Wireless Integration',
        value: '500k SGD and above',
        concept: 'Engineered a seamless integration between an Automated Storage and Retrieval System (ASRS) and AMRs for fully autonomous pallet handling.',
        details: 'Established a robust wireless communication link using Modbus TCP protocol. The system automates the stacking of plastic pallets onto wooden pallets for ASRS storage and the reverse unbinding process for outbound operations, eliminating manual handling.',
        imageUrl: 'https://picsum.photos/seed/asrs/600/400',
        technologies: ['ASRS', 'AMR', 'Modbus TCP', 'PLC', 'System Integration']
    },
    {
        title: 'Goods-to-Person (GTP) Picking System',
        value: '1 mil SGD and above',
        concept: 'Implemented an integrated AMR system to create a "shelf-to-person" workflow, drastically minimizing operator travel time in picking operations.',
        details: 'This GTP system directs AMRs to retrieve and transport entire shelving units to dedicated picking stations, significantly increasing order fulfillment speed, reducing errors, and improving ergonomic conditions for staff.',
        imageUrl: 'https://picsum.photos/seed/gtp/600/400',
        technologies: ['Goods-to-Person', 'AMR', 'WMS', 'Ergonomics', 'Logistics Optimization']
    },
    {
        title: 'Production Line AMR Integration',
        value: '300k SGD and above',
        concept: 'Developed a fully automated production supply flow using AMRs integrated with PLC-controlled machinery to deliver materials directly to assembly stations.',
        details: 'This project focused heavily on operational safety and efficiency. It involved PLC programming for machine handshaking and implementing robust safety protocols to ensure a safe, collaborative human-robot work environment.',
        imageUrl: 'https://picsum.photos/seed/production-amr/600/400',
        technologies: ['AMR', 'PLC Programming', 'SolidWorks', 'Safety Systems', 'Machine Integration']
    },
    {
        title: 'Automated Wooden Pallet Stocker & Dispenser',
        value: '150k SGD and above',
        concept: 'Designed and commissioned an automated system for dispensing and collecting wooden pallets, servicing various supply chain operational needs.',
        details: 'This solution provides on-demand pallet availability for production and logistics, integrating wirelessly with the central AMR fleet management system via Modbus TCP to optimize workflow and reduce idle time.',
        imageUrl: 'https://picsum.photos/seed/pallet-stocker/600/400',
        technologies: ['Automation', 'Robotics', 'SolidWorks', 'Modbus TCP', 'AMR Integration']
    },
    {
        title: 'Automated Pallet Wrapping System',
        value: '100k SGD and above',
        concept: 'Developed an automated pallet wrapping station initiated and serviced entirely by AMRs.',
        details: 'The system allows an AMR to transport a loaded pallet to the wrapping machine, which automatically initiates the wrapping cycle. Communication is handled wirelessly via Modbus TCP, creating a hands-free final packaging step.',
        imageUrl: 'https://picsum.photos/seed/wrapper/600/400',
        technologies: ['Pallet Wrapping', 'AMR', 'Modbus TCP', 'Automation', 'PLC']
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

export const educationData: EducationItem[] = [
    { degree: "Bachelor's Degree in Mechanical Engineering", institution: "UCSI University", period: "2017-2021", details: "CGPA: 3.48" },
    { degree: "Foundation in Science", institution: "UCSI University", period: "2016-2017", details: "CGPA: 3.64" },
    { degree: "SPM", institution: "SMK Taman University", period: "2011-2015", details: "Result: 5A 2A-3B+" }
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
    challenge: "Ready for a quick break?",
    goal: (score: number) => `Score ${score} points to complete the challenge!`,
    start: "Start Game",
    wonTitle: "Challenge Complete!",
    wonBody: "You've got great reflexes! I'd love to connect.",
    playAgain: "Play Again",
    score: "Score"
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