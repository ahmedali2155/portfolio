import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { internships } from "@/data/internships";

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="Ahmed Ali's internship experience across AI, Machine Learning, backend, and frontend development."
        path="/experience"
      />
      <section className="pt-32 pb-20 md:pt-40">
        <Container>
          <SectionHeader
            eyebrow="Experience"
            title="Professional experience"
            description="Three internships spanning AI backend systems, machine learning, and frontend engineering."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {internships.map((exp) => (
              <ExperienceCard key={exp.slug} internship={exp} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
