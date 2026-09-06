import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProjectLinksRow } from "@/components/common/LinkButton";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-card border border-border-subtle bg-surface-card transition-all duration-300 hover:-translate-y-1 hover:border-border-glass">
      <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-accent-blue font-mono">{project.category}</p>
            <h3 className="mt-1 font-heading text-h5 font-semibold text-text-primary">
              {project.title}
            </h3>
          </div>
          {project.status === "In Development" && (
            <span className="shrink-0 rounded-full bg-state-warning/10 px-3 py-1 text-xs font-medium text-state-warning">
              In Progress
            </span>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <ProjectLinksRow links={project.links} />
          <Link
            to={`/projects/${project.slug}`}
            className="flex shrink-0 items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-accent-blue"
          >
            Case Study
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
