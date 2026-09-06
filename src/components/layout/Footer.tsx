import { Link } from "react-router-dom";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { hasValue } from "@/lib/utils";

const iconFor = { github: Github, linkedin: Linkedin, mail: Mail } as const;

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary/40">
      <div className="content-container flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-text-primary">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-text-muted">{profile.headline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
            Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex gap-6 text-sm text-text-secondary">
          <Link to="/about" className="hover:text-text-primary">About</Link>
          <Link to="/experience" className="hover:text-text-primary">Experience</Link>
          <Link to="/projects" className="hover:text-text-primary">Projects</Link>
          <Link to="/contact" className="hover:text-text-primary">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          {profile.social.map((s) => {
            if (!hasValue(s.url) || !(s.icon in iconFor)) return null;
            const Icon = iconFor[s.icon as keyof typeof iconFor];
            return (
              <a
                key={s.label}
                href={s.url}
                target={s.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.label}
                className="text-text-muted transition-colors hover:text-accent-blue"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="content-container flex flex-col items-center justify-between gap-4 border-t border-border-subtle py-6 text-xs text-text-muted md:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <button
          onClick={scrollTop}
          className="flex items-center gap-1 transition-colors hover:text-text-primary"
          aria-label="Back to top"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
