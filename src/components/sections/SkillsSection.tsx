import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillCard } from "@/components/cards/SkillCard";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing">
      <Container>
        <SectionHeader
          eyebrow="Skills"
          title="Technology I work with"
          description="Grouped by discipline — technologies I've genuinely used in internships and projects, not a checklist."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.category} category={cat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
