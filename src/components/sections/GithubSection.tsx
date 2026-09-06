import { Github, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

const github = profile.social.find((s) => s.icon === "github");

export function GithubSection() {
  if (!github) return null;

  return (
    <section className="section-spacing">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-card border border-border-subtle bg-surface-card px-8 py-16 text-center">
          <div className="rounded-full bg-surface-elevated p-4 text-text-primary">
            <Github size={28} />
          </div>
          <SectionHeader
            align="center"
            eyebrow="Open Source"
            title="Follow the code"
            description="Internship work, React projects, and learning experiments — all versioned and public on GitHub."
          />
          <Button as="a" href={github.url} target="_blank" rel="noreferrer" className="-mt-6">
            View GitHub Profile <ArrowUpRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
