import type { EducationItem, Certification } from "@/types";

export const education: EducationItem[] = [
  {
    institution: "University of Haripur",
    degree: "Bachelor of Science in Artificial Intelligence (BS AI)",
    duration: "In progress",
    cgpa: "3.75",
    status: "Undergraduate Student",
    coursework: [
      "Programming Fundamentals",
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Database Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies",
    ],
    achievements: ["Maintaining a 3.75 CGPA while completing three concurrent internships"],
  },
];

/** Empty for now — cards render automatically once certifications are added here. */
export const certifications: Certification[] = [];
