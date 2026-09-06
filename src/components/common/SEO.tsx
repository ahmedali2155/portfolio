import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

/**
 * Lightweight, dependency-free SEO manager. Sets the document title and
 * updates/creates meta tags without needing react-helmet.
 */
export function SEO({ title, description, path = "/" }: SEOProps) {
  useEffect(() => {
    document.title = `${title} — Ahmed Ali`;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", `${title} — Ahmed Ali`);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", `${title} — Ahmed Ali`);
    setMeta("name", "twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://ahmedali.dev${path}`);
  }, [title, description, path]);

  return null;
}
