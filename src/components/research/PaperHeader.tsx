import {
  ArrowLeft,
  BookOpen,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface PaperHeaderProps {
  title?: string;
  githubUrl: string;
}

export function PaperHeader({
  title = "Predicting Content Click Opportunities Using Google Search Console Performance Data",
  githubUrl,
}: PaperHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[130px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-180px] top-20 h-[320px] w-[320px] rounded-full bg-accent-cyan/5 blur-[100px]"
      />

      <Container>
        <div className="relative py-16 md:py-24">
          {/* Top navigation */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>

            <Button
              as="a"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
            >
              <Github size={16} />
              GitHub Repository
              <ExternalLink size={14} />
            </Button>
          </div>

          {/* Badges */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-card px-3 py-1.5 text-xs font-medium text-text-secondary">
              <BookOpen size={13} />
              ML-11 • FlyRank Internship
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/10 px-3 py-1.5 text-xs font-medium text-accent-blue">
              <Sparkles size={13} />
              Machine Learning Research
            </span>
          </div>

          {/* Title */}
          <div className="max-w-5xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-text-muted">
              Capstone Research Paper
            </p>

            <h1 className="max-w-4xl font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-text-muted md:text-lg">
              An empirical machine learning study evaluating whether Google
              Search Console performance signals can predict search click
              opportunities while minimizing feature leakage and maintaining
              realistic model evaluation.
            </p>
          </div>

          {/* Paper Info */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-card border border-border-subtle bg-surface-card p-4">
              <p className="text-xs uppercase tracking-wide text-text-muted">
                Author
              </p>
              <p className="mt-2 text-sm font-semibold text-text-primary">
                Ahmed Ali
              </p>
            </div>

            <div className="rounded-card border border-border-subtle bg-surface-card p-4">
              <p className="text-xs uppercase tracking-wide text-text-muted">
                Dataset
              </p>
              <p className="mt-2 text-sm font-semibold text-text-primary">
                FlyRank ML Internship Dataset
              </p>
            </div>

            <div className="rounded-card border border-border-subtle bg-surface-card p-4">
              <p className="text-xs uppercase tracking-wide text-text-muted">
                Model
              </p>
              <p className="mt-2 text-sm font-semibold text-text-primary">
                Random Forest Classifier
              </p>
            </div>

            <div className="rounded-card border border-border-subtle bg-surface-card p-4">
              <p className="text-xs uppercase tracking-wide text-text-muted">
                Analysis
              </p>
              <p className="mt-2 text-sm font-semibold text-text-primary">
                March 2026 Data
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Machine Learning",
              "Binary Classification",
              "Google Search Console",
              "Random Forest",
              "Grouped Validation",
              "Feature Leakage Audit",
              "Content Optimization",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border-subtle bg-bg-secondary px-3 py-1.5 text-xs text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}