import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD
import { Syne, Plus_Jakarta_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"], // Bold / ExtraBold
  variable: "--font-syne",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
});
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body className={syne.className}suppressHydrationWarning={true}>
      
        {children}
=======

export const metadata: Metadata = {
  metadataBase: new URL("https://femi.omnisoft.africa"),

  title: {
    default: "Femi AI - Votre comptable OHADA tient dans un WhatsApp",
    template: "%s | Femi AI",
  },

  description:
    "Femi transforme automatiquement vos ventes et achats en écritures comptables conformes au référentiel OHADA. Gérez votre comptabilité directement depuis WhatsApp. Zéro paperasse, 100 % conforme, idéal pour les TPME, commerces et restaurants.",

  keywords: [
    "comptabilité OHADA",
    "logiciel comptable OHADA",
    "WhatsApp comptabilité",
    "assistant comptable IA",
    "Femi AI",
    "TPME Afrique",
    "restaurant",
    "gestion comptable",
    "écritures comptables",
    "automatisation comptable",
    "SYSCOHADA",
    "facturation",
    "Afrique",
    "Omnisoft Africa"
  ],

  applicationName: "Femi AI",

  creator: "Omnisoft Africa",
  publisher: "Omnisoft Africa",

  category: "Business",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Votre comptable OHADA tient dans un WhatsApp",
    description:
      "Femi transforme automatiquement vos ventes et achats en écritures comptables conformes au référentiel OHADA. Zéro paperasse. 100 % conforme. Idéal pour les TPME et restaurants.",
    url: "https://femi.omnisoft.africa",
    siteName: "Femi AI",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Femi AI - Comptabilité OHADA sur WhatsApp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Votre comptable OHADA tient dans un WhatsApp",
    description:
      "Automatisez votre comptabilité OHADA directement sur WhatsApp.",
    images: ["/images/og-image.png"],
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
>>>>>>> d05ea33 (updated Femi SEO)

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
      "WhatsApp",
      "Gestion des ventes",
      "Gestion des achats",
      "Automatisation des écritures",
      "Rapports comptables",
      "Conformité SYSCOHADA",
      "TPME",
      "Restaurants",
    ],

    audience: {
      "@type": "BusinessAudience",
      audienceType: "TPME, PME, Restaurants, Commerçants",
    },
  };

  return (
    <html lang="fr">
      <body suppressHydrationWarning>
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