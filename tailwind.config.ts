import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cybersecurity specific themes
        cyber: {
          safe: {
            DEFAULT: "#04ed16", // neon green
            glow: "rgba(4, 237, 22, 0.15)",
            border: "rgba(4, 237, 22, 0.3)",
          },
          unknown: {
            DEFAULT: "#d3f920", // lime/yellow-green
            glow: "rgba(211, 249, 32, 0.15)",
            border: "rgba(211, 249, 32, 0.3)",
          },
          scam: {
            DEFAULT: "#ef4444", // red-500
            glow: "rgba(239, 68, 68, 0.15)",
            border: "rgba(239, 68, 68, 0.3)",
          },
          cyan: {
            DEFAULT: "#06fec8", // neon cyan/teal
            glow: "rgba(6, 254, 200, 0.15)",
            border: "rgba(6, 254, 200, 0.3)",
          },
          lime: {
            DEFAULT: "#d3f920", // lime/yellow-green
            glow: "rgba(211, 249, 32, 0.15)",
            border: "rgba(211, 249, 32, 0.3)",
          },
          green: {
            DEFAULT: "#04ed16",
            glow: "rgba(4, 237, 22, 0.15)",
            border: "rgba(4, 237, 22, 0.3)",
          },
          gray: {
            950: "#000000", // absolute black background
            900: "#050505",
            800: "#0a0a0a",
            700: "#141414",
            600: "#1f1f1f",
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "Clash Display", "Syne", "Outfit", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow-pulse-anim 2s infinite ease-in-out",
        "scanline": "scanline-anim 8s linear infinite",
      },
      keyframes: {
        "glow-pulse-anim": {
          "0%, 100%": { opacity: "0.8", filter: "drop-shadow(0 0 4px currentColor)" },
          "50%": { opacity: "1", filter: "drop-shadow(0 0 12px currentColor)" },
        },
        "scanline-anim": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        }
      },
    },
  },
  plugins: [],
};

export default config;
