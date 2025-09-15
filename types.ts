

export interface Skill {
  name: string;
  level: number; // e.g., 9 for 9/10
  description: string;
  tooltip?: string;
}

export interface Role {
  title: string;
  period: string;
  details: string[];
  type?: 'Full-time' | 'Internship';
}

export interface Experience {
  company: string;
  roles: Role[];
  logoUrl: string;
}

export interface Project {
  title: string;
  concept: string;
  details?: string;
  imageUrl: string;
  impact?: string;
  keyFeatures?: string[];
  process?: string;
  methodology?: string;
  technologies: string[];
  // FIX: Added optional 'value' property to the Project interface to accommodate project value data and resolve type errors.
  value?: string;
}

export interface DevelopmentItem {
    category: 'Professional Development' | 'Additional Achievement';
    item: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    imageUrl: string;
    // FIX: Added optional details property to allow for additional info like CGPA.
    details?: string;
}