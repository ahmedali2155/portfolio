import type { Project } from "@/types";
import emsImg from "@/assets/images/projects/ems.png";
import skylineImg from "@/assets/images/projects/skyline.png";
import crmImg from "@/assets/images/projects/crm.png";
import stickyImg from "@/assets/images/projects/sticky-notes.png";
import aiBuilderImg from "@/assets/images/projects/ai-website-builder.png";

/**
 * Add a new project by appending an object here — cards, the featured
 * grid, and the project detail page all render from this array alone.
 * To swap a screenshot, replace the matching file in
 * src/assets/images/projects/ and keep the same filename.
 */
export const projects: Project[] = [
  {
    slug: "employee-management-system",
    title: "Employee Management System",
    category: "Full Stack / CRUD",
    status: "Completed",
    description:
      "A modern Employee Management System built with React and Vite, demonstrating complete CRUD operations through a clean, responsive interface.",
    problem:
      "Small teams needed a simple, fast way to manage employee records without the overhead of a heavyweight HR platform.",
    solution:
      "A focused React application with add, edit, delete, and update flows, backed by clean component architecture and form validation.",
    technologies: ["React", "Vite", "JavaScript", "CSS", "Vercel"],
    features: [
      "Add, edit, and delete employee records",
      "Update existing records with validation",
      "Responsive dashboard layout",
      "Clean CRUD-driven architecture",
    ],
    challenges: [
      "Designing reusable form and table components",
      "Managing state across nested CRUD views",
    ],
    lessonsLearned:
      "Solidified component composition patterns and state management approaches that carried into later, larger React projects.",
    skillsDemonstrated: ["React", "State Management", "CRUD", "Component Architecture", "Deployment"],
    links: {
      liveDemo: "https://ahmed-ems.vercel.app",
    },
    image: emsImg,
    featured: true,
  },
  {
    slug: "skyline-weather",
    title: "Skyline Weather",
    category: "Frontend / API Integration",
    status: "Completed",
    description:
      "A modern weather forecasting application with animated backgrounds, dark/light theming, Air Quality Index, saved cities, and sunrise/sunset visualization.",
    problem:
      "Most weather apps present raw numbers without context — users want a fast, visually clear read on current conditions.",
    solution:
      "A React app powered by the Open-Meteo API with Islamabad as the default city, layered with AQI data and premium dark-mode visuals.",
    technologies: ["React", "Vite", "JavaScript", "Open-Meteo API", "CSS", "Vercel"],
    features: [
      "Real-time weather search by location",
      "Air Quality Index display",
      "Saved cities",
      "Sunrise/sunset visualization",
      "Animated, theme-aware backgrounds",
    ],
    challenges: [
      "Designing glassmorphic dark-mode UI that stayed readable",
      "Handling inconsistent API data across locations",
    ],
    lessonsLearned:
      "Learned to build UI inspiration boards before coding, and to design premium dark-mode aesthetics with real API constraints.",
    skillsDemonstrated: ["API Integration", "React", "Responsive Design", "Data Fetching"],
    links: {
      liveDemo: "https://skylineweatherpk.vercel.app",
    },
    image: skylineImg,
    featured: true,
  },
  {
    slug: "crm-system",
    title: "CRM System",
    category: "Full Stack / Firebase",
    status: "In Development",

    description:
      "A Customer Relationship Management application initially built on Local Storage and later migrated to Firebase for cloud-based data management.",
    problem:
      "The initial Local Storage version couldn't persist data across devices or scale beyond a single browser session.",
    solution:
      "Migrated the data layer to Firebase, introducing a real cloud database while keeping the existing CRUD UI intact.",
    technologies: ["React", "Vite", "Firebase", "JavaScript"],
    features: [
      "Customer record management",
      "Full CRUD operations",
      "Cloud-backed Firebase database",
      "Responsive interface",
    ],
    challenges: [
      "Migrating existing Local Storage data to Firebase without breaking the UI",
      "Structuring Firestore collections for scalability",
    ],
    lessonsLearned:
      "Gained first hands-on experience with a real backend service and understood the trade-offs between local and cloud persistence.",
    skillsDemonstrated: ["Firebase", "CRUD", "React", "Cloud Database"],
    links: {},
    image: crmImg,
    featured: true,
  },
  {
    slug: "sticky-notes",
    title: "Sticky Notes",
    category: "Frontend / Authentication",
    status: "Completed",
    description:
      "A React-based multi-user note management application where authenticated users manage a fully isolated set of personal notes.",
    problem:
      "Users needed a simple way to manage personal notes securely, without seeing or editing another user's data.",
    solution:
      "Built authentication and per-user data isolation entirely on the frontend, with each user's notes scoped to their own account.",
    technologies: ["React", "Vite", "JavaScript", "Local Storage"],
    features: [
      "User signup and login",
      "Add, edit, and delete notes",
      "Per-user isolated note storage",
      "Persistent storage between sessions",
    ],
    challenges: [
      "Separating user data cleanly without a backend",
      "Maintaining authentication state across the app",
    ],
    lessonsLearned:
      "This project's state and CRUD patterns directly carried over into later, more advanced React applications.",
    skillsDemonstrated: ["React", "CRUD", "Authentication", "Local Storage"],
    links: {},
    image: stickyImg,
    featured: true,
  },
  {
    slug: "ai-website-builder",
    title: "AI Website Builder",
    category: "AI / Frontend",
    status: "Completed",
    description:
      "An AI-assisted website generation platform designed to create websites through intelligent, guided workflows.",
    problem:
      "Building a website from scratch is slow for non-technical users and repetitive even for experienced developers.",
    solution:
      "An in-progress platform combining a React frontend with planned AI APIs to generate site structure and content from user input.",
    technologies: ["React", "Vite", "JavaScript", "AI APIs (planned)"],
    features: [
      "AI-assisted layout generation (planned)",
      "Guided website creation workflow",
      "React-based builder interface",
    ],
    skillsDemonstrated: ["AI Integration", "Frontend Development", "UI Design"],
    links: {
      liveDemo: "https://ahmed-buildai.vercel.app/",
    },
    image: aiBuilderImg,
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
