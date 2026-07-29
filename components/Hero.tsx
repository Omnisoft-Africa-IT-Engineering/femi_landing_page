import Image from "next/image";

const STATS = [
  { num: "100%", label: "Conformité fiscale" },
  { num: "-60%", label: "De temps administratif" },
  { num: "< 48h", label: "Visibilité trésorerie" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0D021A] pb-16 pt-10 text-white md:py-20">
      {/* Halos lumineux d'arrière-plan */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-[#9013FE] opacity-25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#E3127D] opacity-20 blur-[160px]" />

      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Grille à 2 colonnes sur écran moyen/large */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* COLONNE GAUCHE : Contenu texte */}
          <div className="max-w-[620px]">
            {/* Badge haut */}
             <span className="mb-3.5 inline-block font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-[#E3127D]">
              Structuration & Gestion Financière PME
            </span>

            {/* Titre */}
            <h1 className="text-[28px] font-bold leading-[1.18] md:text-[36px]">
              Votre comptable tient dans un WhatsApp
            </h1>
           

            {/* Paragraphe */}
            <p className="my-4 max-w-[500px] text-[15px] leading-relaxed text-gray-300">
              Femi transforme automatiquement vos ventes et achats en écritures comptables. 
              Zéro paperasse, 100% conforme, idéal pour les TPME et restaurants
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a 
                href="#solution"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#9013FE] to-[#E3127D] px-5 py-2.5 text-[13.5px] font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_0_20px_rgba(227,18,125,0.35)]"
              >
                Notre méthode
              </a>
              
              <a 
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:border-[#E3127D]"
              >
                Découvrir la plateforme
              </a>
            </div>

            {/* Statistiques clés */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="min-w-[120px]">
                  <span className="block font-mono text-[22px] font-bold text-white">
                    {stat.num}
                  </span>
                  <span className="text-[12px] text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* COLONNE DROITE : Image de présentation */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl">
              <Image
                src="/Image collée.png" // 👈 Remplacez par le nom de votre fichier dans public/
                alt="Aperçu de la plateforme ComptaPME"
                fill
                priority
                className="rounded-xl object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}