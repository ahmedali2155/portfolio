import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Let's work together"
          description="Open to internships, full-time roles, and freelance projects. I usually reply within a day or two."
        />
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-surface-card p-3 text-accent-blue">
                <Mail size={18} />
              </div>
              <a href={`mailto:${profile.email}`} className="text-sm text-text-secondary hover:text-text-primary">
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-surface-card p-3 text-accent-blue">
                <Phone size={18} />
              </div>
              <span className="text-sm text-text-secondary">{profile.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-surface-card p-3 text-accent-blue">
                <MapPin size={18} />
              </div>
              <span className="text-sm text-text-secondary">{profile.location}</span>
            </div>

            <div className="rounded-card border border-border-subtle bg-surface-card p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-state-success">
                Currently available
              </p>
              <ul className="mt-3 space-y-1 text-sm text-text-muted">
                {profile.availability.slice(0, 4).map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-card border border-border-subtle bg-surface-card p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
