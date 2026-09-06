import type { SkillCategory, StatItem } from "@/types";

/** No fake percentage bars — categories list technologies only. */

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "TypeScript (learning)",
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      "React",
      "React + Vite",
      "Flexbox",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "Authorization",
      "API Routing",
    ],
  },
  {
    category: "Artificial Intelligence & ML",
    skills: [
      "Machine Learning Fundamentals",
      "NLP",
      "Search Intelligence",
      "AI Backend Workflows",
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      "Firebase",
      "Browser Local Storage",
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Figma",
    ],
  },
];

export const stats: StatItem[] = [
  { label: "Internships", value: "3" },
  { label: "Projects Built", value: "10+" },
  { label: "CGPA", value: "3.75" },
  { label: "Focus", value: "AI + Full Stack" },
];