import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Internship } from "@/types";

export function ExperienceCard({ internship }: { internship: Internship }) {
  return (
    <Link to={`/experience/${internship.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-heading text-h5 font-semibold text-text-primary">
                {internship.role}
              </h3>
              <p className="mt-1 text-sm text-text-muted">
                {internship.company} &middot; {internship.workMode}
              </p>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                internship.status === "Current"
                  ? "bg-state-success/10 text-state-success"
                  : "bg-surface-elevated text-text-muted"
              }`}
            >
              {internship.status}
            </span>
          </div>

          <p className="mt-2 text-sm text-text-muted">
            {internship.startDate} – {internship.endDate}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            {internship.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {internship.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-1 text-sm font-medium text-accent-blue">
          View Details
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Card>
    </Link>
  );
}
