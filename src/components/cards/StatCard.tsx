import { useEffect, useRef, useState } from "react";
import type { StatItem } from "@/types";

function useCountUp(target: string, start: boolean) {
  const [display, setDisplay] = useState(target);

  // Try parsing the entire value as a number
  const numeric = Number(target);
  const isNumeric = !Number.isNaN(numeric);

// Count decimal places in the original string
  const decimals = target.includes(".")
  ? target.split(".")[1].length
  : 0;

  useEffect(() => {
    // If it's not a pure number (e.g. "10+" or "AI + Full Stack"), don't animate
    if (!start || !isNumeric) {
      setDisplay(target);
      return;
    }

    let frame = 0;
    const totalFrames = 30;

    const step = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const value = numeric * progress;

      if (Number.isInteger(numeric)) {
        setDisplay(`${Math.round(value)}`);
      } else {
        setDisplay(value.toFixed(decimals));;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, numeric, isNumeric, decimals, target]);

  return display;
}

export function StatCard({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const display = useCountUp(stat.value, visible);

  return (
    <div
      ref={ref}
      className="rounded-card border border-border-subtle bg-surface-card px-6 py-8 text-center transition-colors hover:border-border-glass"
    >
      <p className="font-heading text-h3 font-bold text-gradient">
        {display}
      </p>
      <p className="mt-2 text-sm text-text-muted">
        {stat.label}
      </p>
    </div>
  );
}