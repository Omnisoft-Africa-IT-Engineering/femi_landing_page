// Pas de "use client" ici : rien ne bouge, rien n'écoute d'événement.
// C'est du HTML statique -> reste un Server Component, zéro JS envoyé.

import Image from "next/image";

const NAV_LINKS = [
  { href: "#probleme", label: "Le problème" },
  { href: "#solution", label: "Notre méthode" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0D021A]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-[18px]">
        {/* Zone Logo + Nom de la marque */}
        <a href="#" className="flex items-center gap-3 font-serif text-xl font-semibold text-white">
          {/* Remplacez '/logo.png' par le chemin exact de votre image dans public/ */}
          <Image
            src="/omnisoft-logo.png"
            alt="Logo Omnisoft Africa"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
          <span>Femi by Omnisoft Africa</span>
        </a>

        {/* Liens de navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] text-gray-300 transition-colors hover:text-[#E3127D]"
            >
              {link.label}
            </a>
          ))}
          {/* <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#9013FE] to-[#E3127D] px-5 py-3 text-[14.5px] font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_0_20px_rgba(227,18,125,0.35)]"
          >
            Demander un diagnostic
          </a> */}
        </div>
      </nav>
    </header>
  );
}