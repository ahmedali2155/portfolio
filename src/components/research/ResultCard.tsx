import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ResultCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
}

export function ResultCard({
  title,
  value,
  description,
  icon,
}: ResultCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="
        rounded-card
        border
        border-border-subtle
        bg-surface-card
        p-6
        transition-all
        duration-300
        hover:border-accent-blue/40
        hover:shadow-xl
        hover:shadow-accent-blue/10
      "
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue">
          {icon}
        </div>
      )}

      <p className="text-sm text-text-muted">
        {title}
      </p>

      <h3 className="mt-2 font-heading text-4xl font-bold text-text-primary">
        {value}
      </h3>

      {description && (
        <p className="mt-3 text-sm leading-6 text-text-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}