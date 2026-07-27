const PAINS = [
  {
    title: "Pas de comptable dans l'entreprise",
    text: "Beaucoup de PME n'ont pas de comptable sur place. C'est le gérant ou un employé qui s'en occupe entre deux tâches, sans vraie formation.",
  },
  {
    title: "Le registre journalier n'est pas tenu à jour",
    text: "Les entrées et sorties d'argent devraient être notées chaque jour, mais elles s'accumulent et sont notées plus tard, de mémoire.",
  },
  {
    title: "Les factures et reçus se perdent",
    text: "Papiers volants, cahiers, fichiers Excel éparpillés : au moment de faire les comptes, la moitié des justificatifs a disparu.",
  },
  {
    title: "Personne ne connaît le solde réel de caisse",
    text: "L'argent qui rentre et qui sort n'est pas suivi au jour le jour, donc personne ne sait vraiment combien il reste en caisse.",
  },
  {
    title: "Les impôts et taxes sont préparés dans l'urgence",
    text: "Sans registre à jour, il faut tout reconstituer juste avant l'échéance, ce qui entraîne des erreurs et parfois des pénalités.",
  },
  {
    title: "Aucun suivi clair d'une année sur l'autre",
    text: "Sans registre régulier, impossible de comparer les mois ou les années pour savoir si l'entreprise avance ou recule.",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="probleme"
      className="relative overflow-hidden bg-[#0D021A] pb-20 pt-12 text-white md:py-24"
    >
      {/* Halos lumineux d'arrière-plan */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#9013FE] opacity-25 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#E3127D] opacity-20 blur-[180px]" />

      <div className="mx-auto max-w-wrap px-8">
        <div className="mb-3 max-w-[600px]">
          <h2 className="text-[28px] leading-tight text-white md:text-[32px]">
            Six symptômes qu&apos;on retrouve dans presque toutes les PME
            qu&apos;on rencontre.
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-[#B9BCC5]">
            Individuellement, chacun semble gérable. Ensemble, ils grignotent
            votre marge sans qu&apos;aucun rapport ne le montre clairement.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((pain, index) => (
            <div
              key={pain.title}
              className="rounded-brand border border-white/10 bg-[#212329] px-6 py-7 transition-colors hover:border-white/20 md:px-[26px]"
            >
              <span className="mb-3.5 block font-mono text-[13px] text-[#E3127D]">
                SYMPTÔME {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2.5 text-[17px] font-medium text-white">
                {pain.title}
              </h3>
              <p className="text-sm leading-[1.55] text-[#9BA0AC]">
                {pain.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}