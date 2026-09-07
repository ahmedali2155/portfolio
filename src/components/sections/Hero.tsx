import { motion } from "framer-motion";
import { ArrowRight, MapPin, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Glow */}
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
          {/* Left Content */}
          <div>
            <motion.div
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-card px-4 py-1.5 text-xs text-text-secondary"
            >
              <Circle
                size={8}
                className="fill-state-success text-state-success"
              />
              Building intelligent applications with AI, Machine Learning, and
              modern web technologies.
            </motion.div>

            <motion.h1
              variants={item}
              className="font-heading text-h2 md:text-hero font-bold leading-[1.05] text-text-primary"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 font-heading text-h5 font-medium text-gradient"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-muted"
            >
              {profile.shortIntro}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-6 flex items-center gap-2 text-sm text-text-muted"
            >
              <MapPin size={16} />
              {profile.location}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap gap-4"
            >
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

          {/* Profile Image */}
          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-xs"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 -z-20 scale-110 rounded-[32px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 blur-3xl" />

            {/* Animated Border */}
            <div className="relative overflow-hidden rounded-[28px] p-[2px]">
              <div
                className="
                  absolute
                  inset-[-150%]
                  animate-[spin_8s_linear_infinite]
                  bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_60deg,transparent_120deg,#06b6d4_180deg,transparent_240deg,#3b82f6_300deg,transparent_360deg)]
                "
              />

              {/* Card */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-border-glass
                  bg-surface-card
                  p-2
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/60
                  hover:shadow-[0_20px_60px_rgba(59,130,246,.30)]
                "
              >
                {/* Image */}
                <img
                  src={profile.avatarSrc}
                  alt={profile.name}
                  className="
                    aspect-square
                    w-full
                    rounded-[20px]
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Glow Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[26px]
                    bg-gradient-to-br
                    from-blue-500/10
                    via-cyan-400/5
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Glass Reflection */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[26px]">
                  <div
                    className="
                      absolute
                      -left-48
                      top-0
                      h-full
                      w-28
                      rotate-12
                      bg-white/20
                      blur-xl
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:translate-x-[520px]
                    "
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}