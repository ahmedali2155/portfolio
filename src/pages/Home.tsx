import { SEO } from "@/components/common/SEO";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { GithubSection } from "@/components/sections/GithubSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <SEO
        title="AI & Software Engineer"
        description="Ahmed Ali is an AI & Software Engineer specializing in Artificial Intelligence, Machine Learning, backend and full-stack development."
        path="/"
      />
      <Hero />
      <StatsStrip />
      <AboutPreview />
      <ExperiencePreview />
      <ProjectsPreview />
      <SkillsSection />
      <EducationSection />
      <GithubSection />
      <ContactSection />
    </>
  );
}
