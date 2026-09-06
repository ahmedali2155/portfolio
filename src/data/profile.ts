import type { Profile } from "@/types";
import avatarPlaceholder from "@/assets/images/profile.jpeg";

/**
 * Single source of truth for identity, contact, and availability info.
 * Replace avatarSrc's import above with your own headshot file to update
 * the photo everywhere on the site.
 */
export const profile: Profile = {
  name: "Ahmed Ali",
  headline: "AI & Software Engineer",
  titles: [
    "AI Engineer",
    "Software Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "React Developer",
  ],
  shortIntro:
    "Artificial Intelligence student and aspiring Software Engineer with practical experience across AI, Machine Learning, backend, and full-stack web development.",
  summary:
    "Ahmed Ali is an ambitious Artificial Intelligence student with a strong passion for software engineering and intelligent systems. He enjoys transforming ideas into practical applications by combining modern frontend technologies, backend development, and AI concepts. Through multiple internships, he has worked on real-world backend APIs, authentication systems, machine learning workflows, and production React applications.",
  location: "Pakistan",
  email: "ahmedalii1142005@gmail.com",
  phone: "+92 342 9408138",
  availability: [
    "AI Internships",
    "Machine Learning Internships",
    "Software Engineering Internships",
    "Frontend Development Roles",
    "Backend Development Roles",
    "Full Stack Development Roles",
    "Freelance Opportunities",
    "Open Source Contributions",
  ],
  employmentPreference: ["Remote", "Hybrid", "On-site"],
  avatarSrc: avatarPlaceholder,
  resumeUrl: "/resume.pdf",
  resumeUpdated: "August 2026",
  social: [
    { label: "GitHub", url: "https://github.com/ahmedali2155", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ahmedalii-ai/", icon: "linkedin" },
    { label: "Email", url: "mailto:ahmedalii1142005@gmail.com", icon: "mail" },
  ],
};
