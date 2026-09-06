import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { hasValue } from "@/lib/utils";
import type { ProjectLinks } from "@/types";

interface ProjectLinksRowProps {
  links: ProjectLinks;
  className?: string;
}

/**
 * Renders GitHub / Live Demo buttons only when a real link exists.
 * A missing link is hidden entirely rather than shown disabled or broken.
 */
export function ProjectLinksRow({ links, className }: ProjectLinksRowProps) {
  const hasGithub = hasValue(links.github);
  const hasDemo = hasValue(links.liveDemo);

  if (!hasGithub && !hasDemo) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className ?? ""}`}>
      {hasDemo && (
        <Button as="a" href={links.liveDemo} target="_blank" rel="noreferrer" variant="primary" size="sm">
          <ExternalLink size={16} /> Live Demo
        </Button>
      )}
      {hasGithub && (
        <Button as="a" href={links.github} target="_blank" rel="noreferrer" variant="secondary" size="sm">
          <Github size={16} /> GitHub
        </Button>
      )}
    </div>
  );
}
