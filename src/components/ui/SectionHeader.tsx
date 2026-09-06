interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div className={`mb-12 max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium text-accent-blue font-mono">{eyebrow}</p>
      )}
      <h2 className="text-h3 md:text-h2 font-heading font-semibold text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-muted">{description}</p>
      )}
    </div>
  );
}
