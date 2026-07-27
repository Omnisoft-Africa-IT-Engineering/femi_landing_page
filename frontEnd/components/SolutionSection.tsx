const PHASES = [
  {
    num: "01",
    title: "État des lieux",
    text: "On regarde comment les choses se passent vraiment aujourd'hui : qui note quoi, où sont les factures, comment la caisse est suivie.",
    points: [
      "Entretien avec le gérant et les équipes",
      "Inventaire des documents existants",
      "Repérage des pertes d'information",
    ],
    duration: "Semaine 1",
  },
  {
    num: "02",
    title: "Mise en place du registre",
    text: "On installe un système simple pour noter chaque jour ce qui entre et ce qui sort, sans dépendre d'un comptable sur place.",
    points: [
      "Registre journalier structuré",
      "Classement des factures et reçus",
      "Modèle adapté à votre activité",
    ],
    duration: "Semaines 2–4",
  },
  {
    num: "03",
    title: "Formation de l'équipe",
    text: "On montre aux personnes concernées comment utiliser l'outil au quotidien, avec des gestes simples à répéter chaque jour.",
    points: [
      "Prise en main pas à pas",
      "Cas concrets tirés de votre activité",
      "Support pendant les premières semaines",
    ],
    duration: "Semaines 5–6",
  },
  {
    num: "04",
    title: "Suivi et autonomie",
    text: "Un tableau de bord simple montre la caisse, les échéances à venir et l'évolution des chiffres, sans jargon.",
    points: [
      "Vue mensuelle de la caisse",
      "Rappels des échéances fiscales",
      "Vous pilotez seul par la suite",
    ],
    duration: "Semaines 7–8",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="bg-[#0D021A] py-16 text-white md:py-24">
      <div className="mx-auto max-w-wrap px-8">
        <div className="mb-3 max-w-[620px]">
          <span className="mb-3 block font-mono text-[13px] text-[#E3127D]">
            NOTRE MÉTHODE
          </span>
          <h2 className="text-[28px] leading-tight text-white md:text-[32px]">
            Quatre étapes pour reprendre le contrôle de votre comptabilité.
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-gray-400">
            Pas de logiciel compliqué imposé du jour au lendemain. On construit
            avec vous une méthode simple, tenue au quotidien, que vous pouvez
            garder même sans comptable à temps plein.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0
                        lg:before:absolute lg:before:left-0 lg:before:right-0 lg:before:top-6 lg:before:h-px lg:before:bg-white/10 lg:before:content-['']">
          {PHASES.map((phase) => (
            <div key={phase.num} className="relative z-10 pr-4">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0D021A] font-mono text-[13px] text-[#E3127D]">
                {phase.num}
              </div>
              <h3 className="mb-2 text-[16.5px] text-white">{phase.title}</h3>
              <p className="text-[13.5px] leading-[1.55] text-gray-400">
                {phase.text}
              </p>
              <ul className="mt-3.5 space-y-1.5">
                {phase.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-[12.5px] leading-[1.5] text-gray-300"
                  >
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#9013FE]" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-3.5 block font-mono text-[11.5px] text-emerald-400">
                {phase.duration}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-brand border border-white/10 bg-white/[0.03] px-7 py-7">
          <p className="max-w-[440px] text-[15px] text-gray-400">
            <strong className="text-white">Le premier échange dure 30 minutes</strong>{" "}
            et sert à comprendre où en est votre comptabilité aujourd'hui, et
            si notre méthode peut vous aider.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#9013FE] to-[#E3127D] px-5 py-3 text-[14.5px] font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_0_20px_rgba(227,18,125,0.35)]"
          >
            Prendre ce rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}