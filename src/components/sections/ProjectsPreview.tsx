import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function ProjectsPreview() {
  return (
    <section id="projects" className="section-spacing bg-bg-secondary/30">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Projects"
            title="Things I've built"
            description="A selection of frontend, full-stack, and AI-oriented projects built during internships and self-study."
          />

          {/* Desktop link */}
          <Link
            to="/projects"
            className="mb-12 hidden shrink-0 items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-accent-blue md:flex"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Mobile button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-blue px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-cyan hover:shadow-lg"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}