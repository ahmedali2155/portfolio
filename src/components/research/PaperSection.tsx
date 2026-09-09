import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PaperSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PaperSection({
  id,
  title,
  subtitle,
  children,
}: PaperSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-28"
    >
      <div className="rounded-card border border-border-subtle bg-surface-card p-6 md:p-8">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold text-text-primary">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-text-muted">
              {subtitle}
            </p>
          )}
        </div>

        <div className="prose prose-invert max-w-none prose-p:text-text-muted prose-p:leading-8 prose-headings:text-text-primary">
          {children}
        </div>
      </div>
    </motion.section>
  );
}