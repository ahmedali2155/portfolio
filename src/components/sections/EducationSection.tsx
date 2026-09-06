import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { education, certifications } from "@/data/education";
import { CertificationCard } from "@/components/cards/CertificationCard";

export function EducationSection() {
  return (
    <section id="education" className="section-spacing bg-bg-secondary/30">
      <Container>
        <SectionHeader eyebrow="Education" title="Academic background" />

        {education.map((edu) => (
          <Card key={edu.institution} className="mb-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-accent-blue/10 p-3 text-accent-blue">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-heading text-h5 font-semibold text-text-primary">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {edu.institution} &middot; {edu.duration}
                </p>
                <p className="mt-1 text-sm text-text-muted">CGPA: {edu.cgpa}</p>
              </div>
            </div>
          </Card>
        ))}

        {certifications.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} cert={cert} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
