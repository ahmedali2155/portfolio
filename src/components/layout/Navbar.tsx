import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { cn, hasValue } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const github = profile.social.find((s) => s.icon === "github");
  const linkedin = profile.social.find((s) => s.icon === "linkedin");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-border-subtle bg-bg-primary/95 backdrop-blur-glass shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <nav className="content-container flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            className="font-heading text-lg font-semibold text-text-primary"
          >
            Ahmed<span className="text-accent-blue">.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative text-sm font-medium text-text-secondary transition-colors hover:text-text-primary",
                      isActive && "text-text-primary"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 h-px w-full bg-accent-blue" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 md:flex">
            {hasValue(github?.url) && (
              <a
                href={github!.url}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-text-muted transition-colors hover:text-text-primary"
              >
                <Github size={18} />
              </a>
            )}

            {hasValue(linkedin?.url) && (
              <a
                href={linkedin!.url}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-text-muted transition-colors hover:text-text-primary"
              >
                <Linkedin size={18} />
              </a>
            )}

            <Button as="a" href="/resume" variant="secondary" size="sm">
              Resume
            </Button>

            <Button as={Link} to="/contact" size="sm">
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-text-primary md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-bg-primary pt-16 md:hidden">
          <ul className="content-container flex flex-col gap-2 py-6">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-lg px-4 py-3 text-base font-medium text-text-secondary transition-colors",
                      isActive && "bg-surface-card text-text-primary"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li>
              <Link
                to="/resume"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-accent-blue"
              >
                Resume
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-accent-blue px-4 py-3 text-center text-base font-semibold text-white transition hover:opacity-90"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}