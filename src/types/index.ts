export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "map-pin";
}

export interface Profile {
  name: string;
  headline: string;
  titles: string[];
  shortIntro: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  availability: string[];
  employmentPreference: string[];
  avatarSrc: string;
  resumeUrl: string;
  resumeUpdated: string;
  social: SocialLink[];
}

export interface Internship {
  slug: string;
  company: string;
  industry: string;
  role: string;
  employmentType: string;
  workMode: string;
  status: "Current" | "Completed";
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  challenges: string[];
  skillsGained: string[];
  tags: string[];
  repository?: string;
}

export interface ProjectLinks {
  github?: string;
  liveDemo?: string;
  api?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: "Completed" | "In Development";
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  lessonsLearned?: string;
  skillsDemonstrated: string[];
  links: ProjectLinks;
  image: string;
  gallery?: string[];
  featured: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  status: string;
  coursework: string[];
  achievements: string[];
}

export interface Certification {
  title: string;
  provider: string;
  year: string;
  description: string;
  credentialUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface StatItem {
  label: string;
  value: string;
}
