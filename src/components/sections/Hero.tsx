import { motion } from "framer-motion";
import { ArrowRight, MapPin, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[120px]"
      />
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <motion.div
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-card px-4 py-1.5 text-xs text-text-secondary"
            >
              <Circle size={8} className="fill-state-success text-state-success" />
              Available for internships & freelance work
            </motion.div>

            <motion.h1
              variants={item}
              className="font-heading text-h2 md:text-hero font-bold leading-[1.05] text-text-primary"
            >
              {profile.name}
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-h5 font-medium text-gradient font-heading">
              {profile.headline}
            </motion.p>

            <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
              {profile.shortIntro}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex items-center gap-2 text-sm text-text-muted">
              <MapPin size={16} /> {profile.location}
            </motion.div>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
              <Button as="a" href="#projects">
                Explore Projects <ArrowRight size={16} />
              </Button>
              <Button as="a" href="/contact" variant="secondary">
                Get in Touch
              </Button>
              <Link
                to="/resume"
                className="flex items-center px-2 text-sm font-medium text-text-secondary underline decoration-border-glass underline-offset-4 hover:text-text-primary"
              >
                View Resume
              </Link>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-0 -z-10 scale-95 rounded-card bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 blur-2xl" />
            <div className="overflow-hidden rounded-card border border-border-glass bg-surface-card p-2">
              <img
                src={profile.avatarSrc}
                alt={profile.name}
                className="aspect-square w-full rounded-[16px] object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
