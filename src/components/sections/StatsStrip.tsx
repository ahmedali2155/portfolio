import { Container } from "@/components/ui/Container";
import { StatCard } from "@/components/cards/StatCard";
import { stats } from "@/data/skills";

export function StatsStrip() {
  return (
    <section className="section-spacing border-y border-border-subtle bg-bg-secondary/30">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
