/*"use client";
// "use client" est OBLIGATOIRE ici parce qu'on utilise useState et un
// onSubmit qui change l'affichage sans recharger la page. Sans cette
// directive, Next.js refuserait de compiler (useState n'existe pas côté
// serveur) ou lèverait une erreur au build.

import { useState, type FormEvent } from "react";

type FieldName = "nom" | "email" | "tel" | "entreprise";

const INITIAL_ERRORS: Record<FieldName, boolean> = {
  nom: false,
  email: false,
  tel: false,
  entreprise: false,
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<FieldName, boolean>>(INITIAL_ERRORS);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const values = {
      nom: String(data.get("nom") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      tel: String(data.get("tel") ?? "").trim(),
      entreprise: String(data.get("entreprise") ?? "").trim(),
    };

    const newErrors: Record<FieldName, boolean> = {
      nom: values.nom === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email),
      tel: values.tel === "",
      entreprise: values.entreprise === "",
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    // TODO : remplacer par un vrai envoi, par ex. un appel à une Server
    // Action ou une route API (`/api/contact`) qui envoie l'email / stocke
    // le lead en base.
    setSubmitted(true);
  }

  function clearError(field: FieldName) {
    setErrors((prev) => ({ ...prev, [field]: false }));
  }

  if (submitted) {
    return (
      <div className="px-2.5 py-10 text-center">
        <div className="mx-auto mb-4.5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-tr from-[#9013FE] to-[#E3127D] text-2xl text-white">
          ✓
        </div>
        <h3 className="mb-2 text-[19px] text-white">Demande envoyée</h3>
        <p className="text-sm text-gray-400">
          Merci — un consultant Méridien vous recontacte sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="mb-1.5 text-[19px] text-white">Demander un diagnostic</h3>
      <p className="mb-6 text-[13.5px] text-gray-400">
        Remplissez ce formulaire, un consultant vous recontacte sous 24h
        ouvrées.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <Field
          id="nom"
          label="Nom complet"
          required
          placeholder="Jean Dupont"
          autoComplete="name"
          invalid={errors.nom}
          errorMsg="Merci d'indiquer votre nom."
          onChange={() => clearError("nom")}
        />

        <div className="mb-4.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <Field
            id="email"
            type="email"
            label="Email professionnel"
            required
            placeholder="jean@entreprise.com"
            autoComplete="email"
            invalid={errors.email}
            errorMsg="Merci d'indiquer un email valide."
            onChange={() => clearError("email")}
            noMargin
          />
          <Field
            id="tel"
            type="tel"
            label="Téléphone"
            required
            placeholder="+228 90 00 00 00"
            autoComplete="tel"
            invalid={errors.tel}
            errorMsg="Merci d'indiquer un numéro valide."
            onChange={() => clearError("tel")}
            noMargin
          />
        </div>

        <Field
          id="entreprise"
          label="Entreprise"
          required
          placeholder="Nom de votre entreprise"
          autoComplete="organization"
          invalid={errors.entreprise}
          errorMsg="Merci d'indiquer le nom de votre entreprise."
          onChange={() => clearError("entreprise")}
        />

        <div className="mb-4.5">
          <label htmlFor="message" className="mb-[7px] block text-[13px] font-semibold text-white">
            Votre besoin en quelques mots
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Ex : nos coûts logistiques augmentent depuis 6 mois sans qu'on sache pourquoi..."
            className="min-h-[88px] w-full resize-y rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-[14.5px] text-white placeholder:text-gray-500"
          />
        </div>

        <button
          type="submit"
          className="mt-1.5 w-full rounded-lg bg-gradient-to-r from-[#9013FE] to-[#E3127D] px-4 py-[13px] text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_0_20px_rgba(227,18,125,0.35)]"
        >
          Envoyer ma demande
        </button>
      </form>

      <p className="mt-3.5 text-center text-xs text-emerald-400">
        Vos données ne sont jamais partagées avec des tiers.
      </p>
    </>
  );
}

// Petit sous-composant pour éviter de répéter 4 fois le même balisage de champ.
function Field({
  id,
  label,
  required,
  placeholder,
  autoComplete,
  type = "text",
  invalid,
  errorMsg,
  onChange,
  noMargin,
}: {
  id: FieldName;
  label: string;
  required?: boolean;
  placeholder: string;
  autoComplete: string;
  type?: string;
  invalid: boolean;
  errorMsg: string;
  onChange: () => void;
  noMargin?: boolean;
}) {
  return (
    <div className={noMargin ? "" : "mb-4.5"}>
      <label htmlFor={id} className="mb-[7px] block text-[13px] font-semibold text-white">
        {label} {required && <span className="text-[#E3127D]">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        className={`w-full rounded-lg border bg-white/5 px-3.5 py-[11px] text-[14.5px] text-white placeholder:text-gray-500 ${
          invalid ? "border-[#E3127D]" : "border-white/15"
        }`}
      />
      {invalid && <span className="mt-1.5 block text-[12.5px] text-[#E3127D]">{errorMsg}</span>}
    </div>
  );
}*/


"use client";

import { useState, type FormEvent } from "react";

type FieldName = "nom" | "email" | "tel" | "entreprise";

const INITIAL_ERRORS: Record<FieldName, boolean> = {
  nom: false,
  email: false,
  tel: false,
  entreprise: false,
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<FieldName, boolean>>(INITIAL_ERRORS);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const values = {
      nom: String(data.get("nom") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      telephone: String(data.get("tel") ?? "").trim(),
      entreprise: String(data.get("entreprise") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const newErrors: Record<FieldName, boolean> = {
      nom: values.nom === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email),
      tel: values.telephone === "",
      entreprise: values.entreprise === "",
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setLoading(true);

    try {
      // Envoi des données à la route API Next.js
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  function clearError(field: FieldName) {
    setErrors((prev) => ({ ...prev, [field]: false }));
  }

  if (submitted) {
    return (
      <div className="px-2.5 py-10 text-center">
        <div className="mx-auto mb-4.5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-tr from-[#9013FE] to-[#E3127D] text-2xl text-white">
          ✓
        </div>
        <h3 className="mb-2 text-[19px] text-white">Demande envoyée</h3>
        <p className="text-sm text-gray-400">
          Merci — un consultant Femi by Omnisoft Africa  vous recontacte sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="mb-1.5 text-[19px] text-white">Demander un diagnostic</h3>
      <p className="mb-6 text-[13.5px] text-gray-400">
        Remplissez ce formulaire, un consultant vous recontacte sous 24h
        ouvrées.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <Field
          id="nom"
          label="Nom complet"
          required
          placeholder="Jean Dupont"
          autoComplete="name"
          invalid={errors.nom}
          errorMsg="Merci d'indiquer votre nom."
          onChange={() => clearError("nom")}
        />

        <div className="mb-4.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <Field
            id="email"
            type="email"
            label="Email professionnel"
            required
            placeholder="jean@entreprise.com"
            autoComplete="email"
            invalid={errors.email}
            errorMsg="Merci d'indiquer un email valide."
            onChange={() => clearError("email")}
            noMargin
          />
          <Field
            id="tel"
            type="tel"
            label="Téléphone"
            required
            placeholder="+228 90 00 00 00"
            autoComplete="tel"
            invalid={errors.tel}
            errorMsg="Merci d'indiquer un numéro valide."
            onChange={() => clearError("tel")}
            noMargin
          />
        </div>

        <Field
          id="entreprise"
          label="Entreprise"
          required
          placeholder="Nom de votre entreprise"
          autoComplete="organization"
          invalid={errors.entreprise}
          errorMsg="Merci d'indiquer le nom de votre entreprise."
          onChange={() => clearError("entreprise")}
        />

        <div className="mb-4.5">
          <label htmlFor="message" className="mb-[7px] block text-[13px] font-semibold text-white">
            Votre besoin en quelques mots
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Ex : nos coûts logistiques augmentent depuis 6 mois sans qu'on sache pourquoi..."
            className="min-h-[88px] w-full resize-y rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-[14.5px] text-white placeholder:text-gray-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-1.5 w-full rounded-lg bg-gradient-to-r from-[#9013FE] to-[#E3127D] px-4 py-[13px] text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_0_20px_rgba(227,18,125,0.35)] disabled:opacity-50"
        >
          {loading ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </form>

      <p className="mt-3.5 text-center text-xs text-emerald-400">
        Vos données ne sont jamais partagées avec des tiers.
      </p>
    </>
  );
}

function Field({
  id,
  label,
  required,
  placeholder,
  autoComplete,
  type = "text",
  invalid,
  errorMsg,
  onChange,
  noMargin,
}: {
  id: FieldName;
  label: string;
  required?: boolean;
  placeholder: string;
  autoComplete: string;
  type?: string;
  invalid: boolean;
  errorMsg: string;
  onChange: () => void;
  noMargin?: boolean;
}) {
  return (
    <div className={noMargin ? "" : "mb-4.5"}>
      <label htmlFor={id} className="mb-[7px] block text-[13px] font-semibold text-white">
        {label} {required && <span className="text-[#E3127D]">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        className={`w-full rounded-lg border bg-white/5 px-3.5 py-[11px] text-[14.5px] text-white placeholder:text-gray-500 ${
          invalid ? "border-[#E3127D]" : "border-white/15"
        }`}
      />
      {invalid && <span className="mt-1.5 block text-[12.5px] text-[#E3127D]">{errorMsg}</span>}
    </div>
  );
}