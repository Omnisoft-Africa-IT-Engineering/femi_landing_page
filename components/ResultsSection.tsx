const QUOTES = [
  {
    quote:
      "« Depuis qu'on tient notre registre chaque jour, on sait enfin combien il reste en caisse sans attendre la fin du mois. »",
    attribution: "GÉRANTE · COMMERCE DE DÉTAIL, 8 SALARIÉS",
  },
  {
    quote:
      "« On n'avait pas de comptable à temps plein. Avec un système simple, notre équipe a pu prendre le relais elle-même. »",
    attribution: "DIRIGEANT · PME LOGISTIQUE, 22 SALARIÉS",
  },
  {
    quote:
      "« La déclaration de TVA ne nous prend plus une nuit blanche : tout est déjà classé au fil de l'eau. »",
    attribution: "RESPONSABLE ADMINISTRATIF · PME BTP, 15 SALARIÉS",
  },
  {
    quote:
      "« Même après le départ de notre comptable, on a gardé un historique clair d'une année sur l'autre. »",
    attribution: "DIRECTRICE FINANCIÈRE · PME AGROALIMENTAIRE, 40 SALARIÉS",
  },
];

export default function ResultsSection() {
  return (
    <section id="temoignages" className="border-y border-white/10 bg-[#0D021A] py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="mb-3 max-w-[600px]">
          <span className="mb-3 block font-mono text-[13px] text-[#E3127D]">
            TÉMOIGNAGES
          </span>
          <h2 className="text-[28px] leading-tight text-white md:text-[32px]">
            Ce que ça change concrètement.
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-gray-400">
            Des dirigeants de PME qui géraient leur comptabilité au jour le
            jour, avec ou sans comptable, racontent ce qui a changé.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {QUOTES.map((item) => (
            <div
              key={item.attribution}
              className="group relative overflow-hidden rounded-brand border border-white/10 bg-white/5 p-7 transition-colors hover:border-white/20"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-6 select-none font-serif text-[110px] leading-none text-white/[0.04]"
              >
                
              </span>
              <span className="mb-4 block h-[3px] w-8 rounded-full bg-gradient-to-r from-[#9013FE] to-[#E3127D]" />
              <p className="relative mb-4.5 font-serif text-[17px] italic leading-relaxed text-white">
                {item.quote}
              </p>
              <span className="font-mono text-[13px] text-gray-400">
                {item.attribution}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}