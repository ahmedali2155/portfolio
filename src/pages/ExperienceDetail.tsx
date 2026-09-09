import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Github,
  ExternalLink,
} from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { internships } from "@/data/internships";

export default function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const index = internships.findIndex((i) => i.slug === slug);

  if (index === -1) return <Navigate to="/experience" replace />;

  const exp = internships[index];
  const prev = internships[index - 1];
  const next = internships[index + 1];

  return (
    <>
      <SEO
        title={`${exp.role} at ${exp.company}`}
        description={exp.summary}
        path={`/experience/${exp.slug}`}
      />

      <section className="pt-32 pb-16 md:pt-40">
        <Container>
          <Link
            to="/experience"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary"
          >
            <ArrowLeft size={16} />
            All Experience
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-accent-blue font-mono">
                {exp.company}
              </p>

              <h1 className="mt-2 font-heading text-h2 font-bold text-text-primary">
                {exp.role}
              </h1>

              <p className="mt-3 text-sm text-text-muted">
                {exp.startDate} – {exp.endDate} &middot; {exp.workMode} &middot;{" "}
                {exp.location}
              </p>
            </div>

            <span
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                exp.status === "Current"
                  ? "bg-state-success/10 text-state-success"
                  : "bg-surface-elevated text-text-muted"
              }`}
            >
              {exp.status}
            </span>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-text-secondary">
            {exp.summary}
          </p>

          {/* Repository & Research Paper */}
          <div className="mt-8 flex flex-wrap gap-4">
            {exp.repository && (
              <a
                href={exp.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-elevated px-5 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:border-accent-blue hover:bg-surface hover:text-accent-blue"
              >
                <Github size={18} />
                <span>View GitHub Repository</span>
                <ExternalLink size={16} />
              </a>
            )}

            {exp.researchPaper && (
              <Link
                to={exp.researchPaper}
                className="inline-flex items-center gap-3 rounded-xl border border-accent-blue/20 bg-accent-blue/10 px-5 py-3 text-sm font-medium text-accent-blue transition-all duration-300 hover:bg-accent-blue hover:text-white"
              >
                📄
                <span>Read Research Paper</span>
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </Container>
      </section>

      <section className="section-spacing bg-bg-secondary/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <h2 className="font-heading text-h5 font-semibold text-text-primary">
                Responsibilities
              </h2>

              <ul className="mt-4 space-y-3">
                {exp.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-accent-blue"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="space-y-8">
              <Card>
                <h2 className="font-heading text-h5 font-semibold text-text-primary">
                  Achievements
                </h2>

                <ul className="mt-4 space-y-3">
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-state-success"
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </Card>

              {exp.challenges && exp.challenges.length > 0 && (
                <Card>
                  <h2 className="font-heading text-h5 font-semibold text-text-primary">
                    Challenges
                  </h2>

                  <ul className="mt-4 space-y-3">
                    {exp.challenges.map((c) => (
                      <li
                        key={c}
                        className="text-sm text-text-secondary"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <h2 className="mb-6 font-heading text-h5 font-semibold text-text-primary">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <h2 className="mb-6 mt-12 font-heading text-h5 font-semibold text-text-primary">
            Skills Gained
          </h2>

          <div className="flex flex-wrap gap-2">
            {exp.skillsGained.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                to={`/experience/${prev.slug}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
              >
                <ArrowLeft size={16} />
                {prev.company}
              </Link>
            ) : (
              <span />
            )}

            {next && (
              <Link
                to={`/experience/${next.slug}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
              >
                {next.company}
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}