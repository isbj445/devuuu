export interface Education {
  id: string;
  institution: string;
  degree: string;
  stream: string;
  duration: string;
  grade: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: "Biological & Chemical Analysis" | "Field & Evidence Investigation" | "Document & Cyber Forensics";
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  methodology: string;
  impact: string;
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  summary: string;
  tasks: string[];
  caseLog: { id: string; type: string; summary: string }[];
}

export interface Workshop {
  id: string;
  title: string;
  type: "Workshop" | "Seminar" | "Certification";
  organization: string;
  date: string;
  credentialId: string;
  description: string;
  skillsAcquired: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Internship" | "Research" | "Academic" | "Ceremony";
  imageUrl: string;
  description: string;
  date: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
