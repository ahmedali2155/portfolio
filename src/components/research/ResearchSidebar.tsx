import { TableOfContents } from "./TableOfContents";

export function ResearchSidebar() {
  return (
    <div className="space-y-6">
      {/* Navigation Card */}
      <div className="rounded-card border border-border-subtle bg-surface-card p-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          Research Paper
        </p>

        <TableOfContents />
      </div>

      {/* Quick Info */}
      <div className="rounded-card border border-border-subtle bg-surface-card p-5">
        <h3 className="mb-4 text-sm font-semibold text-text-primary">
          Study Overview
        </h3>

        <div className="space-y-4 text-sm">
          <div>
            <p className="text-text-muted">Model</p>
            <p className="font-medium text-text-primary">
              Random Forest Classifier
            </p>
          </div>

          <div>
            <p className="text-text-muted">Dataset</p>
            <p className="font-medium text-text-primary">
              FlyRank ML Internship
            </p>
          </div>

          <div>
            <p className="text-text-muted">Task</p>
            <p className="font-medium text-text-primary">
              Binary Classification
            </p>
          </div>

          <div>
            <p className="text-text-muted">Framework</p>
            <p className="font-medium text-text-primary">
              Scikit-learn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}