import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="A selection of frontend, full-stack, and AI-oriented projects built by Ahmed Ali during internships and self-study."
        path="/projects"
      />
      <section className="pt-32 pb-20 md:pt-40">
        <Container>
          <SectionHeader
            eyebrow="Projects"
            title="Things I've built"
            description="Each project reflects a stage in my growth — from static pages to full React applications with authentication and cloud data."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
