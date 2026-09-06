import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "24px",
        lg: "32px",
      },
    },
    extend: {
      colors: {
        bg: {
          primary: "#020617",
          secondary: "#0F172A",
        },
        surface: {
          card: "#111827",
          elevated: "#1E293B",
        },
        accent: {
          blue: "#3B82F6",
          cyan: "#22D3EE",
          violet: "#8B5CF6",
        },
        state: {
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
        },
        border: {
          subtle: "rgba(255,255,255,0.08)",
          glass: "rgba(255,255,255,0.12)",
        },
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        hero: ["72px", { lineHeight: "1.1" }],
        h1: ["56px", { lineHeight: "1.2" }],
        h2: ["42px", { lineHeight: "1.2" }],
        h3: ["32px", { lineHeight: "1.2" }],
        h4: ["24px", { lineHeight: "1.3" }],
        h5: ["20px", { lineHeight: "1.3" }],
      },
      maxWidth: {
        content: "1200px",
        page: "1440px",
      },
      borderRadius: {
        btn: "14px",
        card: "20px",
        input: "14px",
      },
      spacing: {
        section: "96px",
        "section-lg": "120px",
        "section-sm": "64px",
      },
      backdropBlur: {
        glass: "20px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
