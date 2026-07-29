import ContactForm from "./ContactForm";

const POINTS = [
  "Réponse sous 24h ouvrées",
  "Échange gratuit, sans engagement",
  "Confidentialité totale sur vos données",
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0D021A] py-16 text-white md:py-28">
      <div className="mx-auto grid max-w-wrap grid-cols-1 gap-12 px-8 md:grid-cols-2 md:gap-16">
        <div>
          <span className="mb-[18px] inline-block font-mono text-[12.5px] uppercase tracking-[0.06em] text-[#E3127D]">
            Étape suivante
          </span>
          <h2 className="max-w-[440px] text-[26px] leading-tight text-white md:text-[34px]">
            Parlons de votre situation, 30 minutes suffisent.
          </h2>
          <p className="mt-4 max-w-[420px] text-base leading-relaxed text-gray-400">
            Vous repartez avec une évaluation honnête : soit on peut vous
            aider, soit on vous oriente ailleurs. Aucun engagement de votre
            part.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            {POINTS.map((point) => (
              <div key={point} className="flex gap-2.5 text-[14.5px] text-white">
                <span className="text-emerald-400">—</span>
                {point}
              </div>
            ))}
          </div>
        </div>

        {/* ContactForm est le seul morceau interactif : c'est lui, et lui
            seul, qui porte "use client". Le reste de cette section reste
            un Server Component normal. */}
        <div className="rounded-brand border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_60px_rgba(144,19,254,0.12)]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}