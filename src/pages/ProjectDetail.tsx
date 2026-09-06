import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ProjectLinksRow } from "@/components/common/LinkButton";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return <Navigate to="/projects" replace />;

  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <>
      <SEO title={project.title} description={project.description} path={`/projects/${project.slug}`} />

      <section className="pt-32 pb-10 md:pt-40">
        <Container>
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary"
          >
            <ArrowLeft size={16} /> All Projects
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-accent-blue font-mono">{project.category}</p>
              <h1 className="mt-2 font-heading text-h2 font-bold text-text-primary">{project.title}</h1>
            </div>
            {project.status === "In Development" && (
              <span className="rounded-full bg-state-warning/10 px-4 py-1.5 text-sm font-medium text-state-warning">
                In Development
              </span>
            )}
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            {project.description}
          </p>

          <ProjectLinksRow links={project.links} className="mt-6" />
        </Container>
      </section>

      <section>
        <Container>
          <div className="overflow-hidden rounded-card border border-border-subtle">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {project.problem && (
              <Card>
                <h2 className="font-heading text-h5 font-semibold text-text-primary">Problem</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.problem}</p>
              </Card>
            )}
            {project.solution && (
              <Card>
                <h2 className="font-heading text-h5 font-semibold text-text-primary">Solution</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.solution}</p>
              </Card>
            )}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <Card>
              <h2 className="font-heading text-h5 font-semibold text-text-primary">Key Features</h2>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {project.features.map((f) => (
                  <li key={f}>&mdash; {f}</li>
                ))}
              </ul>
            </Card>

            {project.challenges && project.challenges.length > 0 && (
              <Card>
                <h2 className="font-heading text-h5 font-semibold text-text-primary">Challenges</h2>
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  {project.challenges.map((c) => (
                    <li key={c}>&mdash; {c}</li>
                  ))}
                </ul>
              </Card>
            )}
          </div>

          {project.lessonsLearned && (
            <Card className="mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb size={20} className="mt-0.5 shrink-0 text-accent-cyan" />
                <div>
                  <h2 className="font-heading text-h5 font-semibold text-text-primary">
                    Lessons Learned
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {project.lessonsLearned}
                  </p>
                </div>
              </div>
            </Card>
          )}

          <h2 className="mb-6 mt-12 font-heading text-h5 font-semibold text-text-primary">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <h2 className="mb-6 mt-12 font-heading text-h5 font-semibold text-text-primary">
            Skills Demonstrated
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.skillsDemonstrated.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                to={`/projects/${prev.slug}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
              >
                <ArrowLeft size={16} /> {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/projects/${next.slug}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
              >
                {next.title} <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
