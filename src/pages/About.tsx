import { Sparkles, Target, Compass, Heart } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { profile } from "@/data/profile";

const pillars = [
  {
    icon: Sparkles,
    title: "Why Artificial Intelligence?",
    body: "I'm fascinated by how machines can learn, solve problems, and assist people in their daily lives. AI combines programming, mathematics, and creativity — one of the most exciting fields in technology today.",
  },
  {
    icon: Compass,
    title: "Programming Journey",
    body: "My journey began during university with the fundamentals of computer science. Small exercises gradually evolved into full web applications, backend systems, and AI-related projects through internships and self-study.",
  },
  {
    icon: Target,
    title: "Engineering Philosophy",
    body: "I believe software should be clean, maintainable, scalable, and user-focused. I enjoy writing organized code and continuously improving my development workflow.",
  },
  {
    icon: Heart,
    title: "Five-Year Vision",
    body: "Working as a professional AI or Software Engineer at a technology company or innovative startup — with strong AI expertise, real engineering experience, and contributions to impactful software products.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Ahmed Ali's programming journey, engineering philosophy, and career vision as an AI & Software Engineer."
        path="/about"
      />
      <section className="pt-32 pb-20 md:pt-40">
        <Container>
          <SectionHeader eyebrow="About Me" title="The story behind the code" />
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary">
            {profile.summary}
          </p>
        </Container>
      </section>

      <section className="section-spacing bg-bg-secondary/30">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <Card key={p.title}>
                <div className="mb-4 inline-flex rounded-full bg-accent-blue/10 p-3 text-accent-blue">
                  <p.icon size={22} />
                </div>
                <h3 className="font-heading text-h5 font-semibold text-text-primary">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{p.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <SectionHeader eyebrow="Values" title="What guides my work" />
          <div className="flex flex-wrap gap-3">
            {[
              "Integrity",
              "Continuous Learning",
              "Professionalism",
              "Teamwork",
              "Innovation",
              "Responsibility",
              "Curiosity",
              "Quality",
              "Consistency",
              "Excellence",
            ].map((v) => (
              <span
                key={v}
                className="rounded-full border border-border-subtle bg-surface-card px-4 py-2 text-sm text-text-secondary"
              >
                {v}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
