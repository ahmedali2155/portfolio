import type { Internship } from "@/types";

/**
 * Add a new internship by appending an object to this array — no UI
 * changes required. Cards and detail pages render from this data alone.
 */
export const internships: Internship[] = [
    {
  slug: "flyrank",
  company: "FlyRank",
  industry: "Artificial Intelligence • Search Intelligence • SEO Technology",
  role: "Machine Learning Intern",
  employmentType: "Internship",
  workMode: "Remote (USA-based company)",
  status: "Current",
  startDate: "August 2026",
  endDate: "Present",
  location: "Remote (USA)",

  repository:
    "https://github.com/ahmedali2155/flyrank-ml-internship",

  researchPaper: "/flyrank-research-paper",

  summary:
    "Working on AI-powered search intelligence systems, NLP-driven content processing, and scalable FastAPI backend services for a USA-based AI company.",

  responsibilities: [
    "Working on AI-powered search systems",
    "Exploring Natural Language Processing (NLP) techniques",
    "Building and improving backend APIs with FastAPI",
    "Reading and understanding large production codebases",
    "Working with structured data processing pipelines",
    "Contributing to AI-oriented engineering tasks",
  ],

  technologies: [
    "Python",
    "FastAPI",
    "Machine Learning",
    "NLP",
    "REST APIs",
    "Git",
    "GitHub",
  ],

  achievements: [
    "Strengthened Python and backend development skills",
    "Explored production-level NLP and search intelligence concepts",
    "Improved code reading and comprehension on large codebases",
    "Learned professional Git workflows in a team setting",
    "Completed the ML-11 capstone research paper on predicting search click opportunities using Google Search Console data.",
  ],

  challenges: [
    "Understanding complex AI codebases",
    "Learning search intelligence architecture",
    "Navigating modular, enterprise-level Python projects",
  ],

  skillsGained: [
    "AI Software Development",
    "Search Intelligence",
    "Machine Learning",
    "Random Forest Classification",
    "NLP Fundamentals",
    "FastAPI",
    "Scalable Backend Design",
    "Feature Engineering",
    "Model Evaluation",
  ],

  tags: [
    "Artificial Intelligence",
    "Machine Learning",
    "Random Forest",
    "NLP",
    "Search Intelligence",
    "Python",
    "FastAPI",
    "Research",
  ],
},
  
  {
    slug: "prosensia",
    company: "ProSensia",
    industry: "Artificial Intelligence / Machine Learning / Software Development",
    role: "AI & Machine Learning Intern",
    employmentType: "Internship",
    workMode: "Remote",
    status: "Completed",
    startDate: "1 July 2026",
    endDate: "31 August 2026",
    location: "Remote",

    repository:
      "https://github.com/ahmedali2155/ProSensia-AI-ML-Internship",

    summary:
      "First professional AI and Machine Learning internship, gaining practical experience with real-world backend systems, authentication, and AI-related architecture.",

    responsibilities: [
      "Developing backend APIs using FastAPI",
      "Implementing JWT-based authentication and authorization",
      "Building modular, scalable RESTful API endpoints",
      "Working with request and response validation",
      "Exploring asynchronous API development and dependency injection",
      "Integrating backend services with frontend applications",
      "Exploring AI and Machine Learning workflows",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "JWT",
      "REST APIs",
      "Git",
      "GitHub",
    ],

    achievements: [
      "Learned professional backend development workflows",
      "Built a strong understanding of FastAPI architecture",
      "Implemented JWT authentication end-to-end",
      "Worked with scalable REST APIs in a production-style codebase",
    ],

    challenges: [
      "Understanding a large, unfamiliar codebase",
      "Implementing secure authentication correctly",
      "Learning asynchronous programming patterns",
    ],

    skillsGained: [
      "Backend Development",
      "FastAPI",
      "Authentication & Authorization",
      "REST API Design",
      "Clean Code Principles",
    ],

    tags: [
      "AI",
      "Machine Learning",
      "Python",
      "FastAPI",
      "Backend",
      "JWT",
    ],
  },

  {
    slug: "smc-tech",
    company: "SMC Tech",
    industry: "Software Development • Web Development • Frontend Engineering",
    role: "Frontend Development Intern",
    employmentType: "Internship",
    workMode: "On-site",
    status: "Completed",
    startDate: "6 July 2026",
    endDate: "31 August 2026",
    location: "Pakistan",
    summary:
      "An 8-week structured internship progressing from HTML/CSS fundamentals to full React + Firebase applications, culminating in deployed production projects.",
    responsibilities: [
      "Converting Figma designs into pixel-perfect responsive layouts",
      "Building interactive JavaScript applications and authentication flows",
      "Developing React applications with reusable component architecture",
      "Integrating Firebase for cloud data persistence",
      "Consuming external APIs for real-time data",
      "Deploying production-ready applications to Vercel",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Vite",
      "Firebase",
      "Vercel",
      "Figma",
      "Git",
      "GitHub",
    ],
    achievements: [
      "Built a pixel-perfect landing page from a Figma design",
      "Developed a multi-user Sticky Notes app with authentication",
      "Migrated a CRM app from Local Storage to Firebase",
      "Shipped and deployed Skyline Weather and an Employee Management System",
    ],
    challenges: [
      "Transitioning from vanilla JavaScript to React's component model",
      "Designing an authentication flow without a backend",
      "Migrating persisted data from Local Storage to Firebase",
    ],
    skillsGained: [
      "React & Component Architecture",
      "Firebase Integration",
      "CRUD Application Design",
      "API Integration",
      "Production Deployment",
    ],
    tags: [
      "Frontend Development",
      "React",
      "JavaScript",
      "Firebase",
      "CRUD",
      "Vercel",
    ],
  },
];
