const PLANS = [
  {
    name: "Micro",
    price: "10.99",
    period: "/ mois",
    description: "Pour sortir du carnet et du tableur, sans changer vos habitudes.",
    features: [
      "Registre journalier numérique",
      "Tableau de bord avec KPIs de pilotage",
      "Enregistrement illimité de vos pièces comptables",
      "Rappels automatiques des échéances fiscales",
    ],
    cta: "Choisir Micro",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "20.99",
    period: "/ mois",
    description: "Pour piloter votre PME comme si vous aviez un comptable à temps plein.",
    features: [
      "Tout ce qui est inclus dans Micro",
      "Alertes en temps réel sur vos produits les plus performants",
      "Formation personnalisée de votre équipe",
      "Support prioritaire",
      "Documents comptables à tout moment : État, Balance, Grand Livre, Balance auxiliaire",
      "Historique conservé d'une année sur l'autre",
    ],
    cta: "Choisir Pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: "À partir de 30.99",
    period: "/ mois",
    description: "Pour les structures multi-sites qui veulent un accompagnement sur-mesure.",
    features: [
      "Tout ce qui est inclus dans Pro",
      "Accompagnement dédié par un conseiller",
      "Intégration avec vos outils existants",
      "Déclaration de TVA et dépôt de vos documents comptables",
      "Rendez-vous de suivi réguliers",
    ],
    cta: "En discuter",
    highlighted: false,
  },
];

export default function TarifSection() {
  return (
    <section id="tarifs" className="bg-[#0D021A] py-16 text-white md:py-24">
      <div className="mx-auto max-w-wrap px-8">
        <div className="mb-3 max-w-[600px]">
          <span className="mb-3 block font-mono text-[13px] text-[#E3127D]">
            TARIFS
          </span>
          <h2 className="text-[28px] leading-tight text-white md:text-[32px]">
            Un prix clair, sans mauvaise surprise.
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-gray-400">
            Pas d&apos;engagement long terme, pas de frais cachés. Vous changez
            de formule quand votre activité évolue.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-brand border p-7 ${
                plan.highlighted
                  ? "border-[#E3127D]/40 bg-white/[0.06]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-[#9013FE] to-[#E3127D] px-3 py-1 font-mono text-[11px] font-semibold text-white">
                  LE PLUS CHOISI
                </span>
              )}

              <h3 className="text-[17px] font-medium text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-gray-400">
                {plan.description}
              </p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-[32px] font-medium text-white">
                  {plan.price}
                  {plan.price !== "Sur devis" && (
                    <span className="text-[18px]">€</span>
                  )}
                </span>
                {plan.period && (
                  <span className="text-[13.5px] text-gray-400">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[13.5px] leading-[1.5] text-gray-300"
                  >
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#9013FE]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-7 inline-flex items-center justify-center rounded-lg px-5 py-3 text-[14.5px] font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[#9013FE] to-[#E3127D] text-white hover:-translate-y-px hover:shadow-[0_0_20px_rgba(227,18,125,0.35)]"
                    : "border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}