import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette "banque / conseil / assurance" : fond clair, bleu marine en accent.
        paper: "#F5F6F8",        // fond de page (gris clair froid)
        "paper-dim": "#EAECEF",  // fond des sections alternées
        ink: "#1B2430",          // texte principal (charbon bleuté, jamais noir pur)
        "ink-soft": "#5C6470",   // texte secondaire (gris sourd)
        signal: "#1F3A5F",       // bleu marine — accents, CTA, labels
        "signal-dark": "#16283F",// marine plus sombre — état hover
        sage: "#5E7D68",         // vert sourd, accent secondaire discret
        mustard: "#3E6690",      // bleu acier, variante d'accent pour différencier certains badges
        line: "#D8DBE0",         // bordures sur fond clair
        card: "#FFFFFF",         // panneaux/cartes blancs sur le fond gris
        danger: "#B23B3B",       // rouge, lisible sur fond clair
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        wrap: "1120px",
      },
      borderRadius: {
        brand: "14px",
      },
    },
  },
  plugins: [],
};

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
