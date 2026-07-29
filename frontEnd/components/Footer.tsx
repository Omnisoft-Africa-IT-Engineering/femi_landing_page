const FOOTER_LINKS = [
  { href: "#", label: "Confidentialité" },
  { href: "#", label: "Mentions légales" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0D021A] py-12">
      <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-4 px-8">
        <div className="flex items-center gap-2 font-serif text-base font-semibold text-white">
          <span className="inline-block h-2 w-2 rounded-sm bg-gradient-to-tr from-[#9013FE] to-[#E3127D]" />
          Femi by Omnisoft Africa
        </div>
        <div className="flex gap-6.5">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13.5px] text-gray-400 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}