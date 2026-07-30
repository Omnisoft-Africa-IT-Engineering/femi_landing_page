import type { Metadata } from "next";
import "./globals.css";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://femi.omnisoft.africa"),

  title: {
    default: "Femi AI - Votre comptable OHADA tient dans un WhatsApp",
    template: "%s | Femi AI",
  },

  description:
    "Femi transforme automatiquement vos ventes et achats en écritures comptables conformes OHADA. Zéro paperasse, 100% conforme, idéal pour les TPME et restaurants.",

  keywords: [
    "Comptabilité OHADA",
    "SYSCOHADA",
    "Assistant comptable IA",
    "Comptabilité WhatsApp",
    "TPME Afrique",
    "Restaurant",
    "Femi AI",
  ],

  openGraph: {
    title: "Votre comptable OHADA tient dans un WhatsApp",
    description:
      "Femi transforme automatiquement vos ventes et achats en écritures comptables.",
    url: "https://femi.omnisoft.africa",
    siteName: "Femi AI",
    type: "website",
    locale: "fr_FR",
  },
};


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Femi AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, WhatsApp",
    url: "https://femi.omnisoft.africa",

    description:
      "Femi est un assistant comptable intelligent qui transforme automatiquement les ventes et achats reçus via WhatsApp en écritures comptables conformes au SYSCOHADA.",

    slogan: "Votre comptable OHADA tient dans un WhatsApp",

    creator: {
      "@type": "Organization",
      name: "Omnisoft Africa",
      url: "https://omnisoft.africa",
    },

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "XOF",
      availability: "https://schema.org/InStock",
    },

    featureList: [
      "Comptabilité OHADA",
      "Saisie comptable automatique",
      "Gestion des ventes",
      "Gestion des achats",
      "Rapports comptables",
      "Conformité SYSCOHADA",
    ],

    audience: {
      "@type": "BusinessAudience",
      audienceType: "TPME, PME, Restaurants, Commerçants",
    },
  };


  return (
    <html lang="fr">
      <body
        className={`${syne.variable} ${jakarta.variable}`}
        suppressHydrationWarning={true}
      >

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}

      </body>
    </html>
  );
}