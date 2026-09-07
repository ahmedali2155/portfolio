import {
  Github,
  ExternalLink,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { hasValue } from "@/lib/utils";
import type { ProjectLinks } from "@/types";

interface ProjectLinksRowProps {
  links: ProjectLinks;
  className?: string;
}

/**
 * Renders available project links.
 * Hidden automatically if a link doesn't exist.
 */
export function ProjectLinksRow({
  links,
  className,
}: ProjectLinksRowProps) {
  const hasGithub = hasValue(links.github);
  const hasDemo = hasValue(links.liveDemo);
  const hasApi = hasValue(links.api);

  if (!hasGithub && !hasDemo && !hasApi) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className ?? ""}`}>
      {hasDemo && (
        <Button
          as="a"
          href={links.liveDemo}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          size="sm"
        >
          <ExternalLink size={16} />
          Live Demo
        </Button>
      )}

      {hasGithub && (
        <Button
          as="a"
          href={links.github}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          size="sm"
        >
          <Github size={16} />
          GitHub
        </Button>
      )}

      {hasApi && (
        <Button
          as="a"
          href={links.api}
          target="_blank"
          rel="noreferrer"
          variant="ghost"
          size="sm"
        >
          <FileText size={16} />
          API Docs
        </Button>
      )}
    </div>
  );
}