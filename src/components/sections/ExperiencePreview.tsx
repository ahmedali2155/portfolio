import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { internships } from "@/data/internships";

export function ExperiencePreview() {
  return (
    <section id="experience" className="section-spacing">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Experience"
            title="Internships & professional work"
            description="Three internships spanning backend AI systems, machine learning, and frontend engineering."
          />
          <Link
            to="/experience"
            className="mb-12 hidden shrink-0 items-center gap-1 text-sm font-medium text-text-secondary hover:text-accent-blue md:flex"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {internships.map((exp) => (
            <ExperienceCard key={exp.slug} internship={exp} />
          ))}
        </div>
      </Container>
    </section>
  );
}
