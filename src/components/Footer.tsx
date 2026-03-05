import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#testimonials", label: "Testimonials" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/support", label: "Support" },
  { href: "/faq", label: "FAQ" },
];

function ConnexaLogo() {
  return (
    <Image
      src="/image.png"
      alt="Connexa"
      width={140}
      height={32}
      className="brightness-0 invert"
    />
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <ConnexaLogo />
            <p className="text-sm leading-relaxed text-slate-400">
              Your AI-powered networking assistant. Build meaningful professional
              connections, effortlessly.
            </p>
          </div>

          {/* Product column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.18 23.48c-.31-.17-.53-.47-.6-.83L2.5 22V2l.08-.65c.07-.36.29-.66.6-.83L14.5 12 3.18 23.48zM15.63 13.13l-2.63-2.63L4.37 1.87l.13-.07 12.63 7.3c.7.4 1.12 1.02 1.12 1.72v.36c0 .7-.42 1.32-1.12 1.72l-1.5.87v-.64zm1.87-1.08l2.37-1.37c.28-.16.38-.34.38-.5s-.1-.34-.38-.5L17.5 8.3v3.75zM4.5 22.13l8.63-8.63 2.5 2.5-11 6.36-.13-.07v-.16z" />
                  </svg>
                  Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700/50 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; 2025 Harbor International Corp. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">Delaware, USA</p>
        </div>
      </div>
    </footer>
  );
}
