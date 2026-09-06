import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

export function AboutPreview() {
  return (
    <section className="section-spacing">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SectionHeader eyebrow="About" title="Why I build software" />
          <div>
            <p className="text-base leading-relaxed text-text-secondary">{profile.summary}</p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:text-accent-cyan"
            >
              Read the full story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
