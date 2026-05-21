"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, Send, ChevronRight } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Youtube, href: "https://youtube.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
  ];

  const columns = [
    {
      title: "About Us",
      links: [
        { label: "Our Story", href: "#about" },
        { label: "Our Team", href: "#about" },
        { label: "Why Choose Us", href: "#about" },
        { label: "Careers", href: "#about" },
      ],
    },
    {
      title: "Treatments",
      links: [
        { label: "All Treatments", href: "#treatments" },
        { label: "For International Patients", href: "#about" },
        { label: "Second Opinion", href: "#contact" },
        { label: "Special Programs", href: "#treatments" },
      ],
    },
    {
      title: "Hospitals",
      links: [
        { label: "Our Partners", href: "#hospitals" },
        { label: "Hospital Network", href: "#hospitals" },
        { label: "Centers of Excellence", href: "#hospitals" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Patient Guide", href: "#journey" },
        { label: "FAQs", href: "#about" },
        { label: "Insurance & Payments", href: "#about" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#050a11] text-slate-400 pt-16 pb-0 border-t border-white/5 relative overflow-hidden">
      {/* Footer Top */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.5fr_1.5fr_1.5fr_1.5fr_1.5fr_2.5fr] gap-8 lg:gap-0 items-start">
          
          {/* Logo & Tagline */}
          <div className="lg:pr-8 space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-brand-cyan/20 bg-dark-bg p-0.5">
                <Image
                  src="/logo.png"
                  alt="Elixir.Doctor Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-brand-cyan">Elixir.</span>
                <span className="text-white">Doctor</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Healing Beyond Borders.<br />Care Beyond Expectations.
            </p>
            {/* Social media icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/15 text-slate-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links Columns */}
          {columns.map((col, idx) => (
            <div
              key={idx}
              className="space-y-4 lg:px-6 lg:border-r lg:border-white/10"
            >
              <h4 className="text-sm font-semibold text-white">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.label === "Careers" ? (
                      <Link
                        href={link.href}
                        className="inline-block border-b-2 border-brand-cyan pb-0.5 text-xs sm:text-sm font-light text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm font-light text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stay Connected & Newsletter */}
          <div className="lg:pl-8 space-y-5">
            <div className="space-y-1.5">
              <h4 className="text-sm font-semibold text-white">
                Stay Connected
              </h4>
              <p className="text-xs text-slate-400 font-light">Join our newsletter</p>
            </div>
            {/* Newsletter input */}
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-white/10 bg-[#080d16] px-3.5 py-2.5 pr-10 text-xs sm:text-sm font-medium text-slate-200 placeholder-slate-500 focus:border-brand-cyan/40 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            {/* WhatsApp Chat button */}
            <Link
              href="https://wa.me/917300123456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full rounded-full border border-brand-cyan bg-transparent px-4 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-brand-cyan/5 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="h-4.5 w-4.5 text-brand-cyan fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.782.001-2.617-1.01-5.078-2.85-6.92-1.839-1.84-4.285-2.853-6.902-2.854-5.393 0-9.786 4.38-9.789 9.782 0 1.549.431 3.064 1.248 4.417l-.989 3.61 3.702-.977zm11.233-6.04c-.328-.164-1.939-.955-2.239-1.066-.3-.11-.518-.165-.736.164-.219.328-.847 1.066-1.038 1.285-.19.219-.382.246-.71.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.147-.146.328-.382.492-.573.164-.19.219-.328.328-.546.11-.219.055-.41-.027-.573-.082-.164-.736-1.775-1.01-2.43-.267-.643-.538-.557-.736-.567-.19-.01-.41-.012-.628-.012-.218 0-.573.082-.873.41-.3.328-1.147 1.12-1.147 2.733 0 1.612 1.174 3.169 1.338 3.388.164.219 2.31 3.52 5.597 4.937.781.337 1.39.539 1.865.69.784.249 1.497.214 2.061.129.629-.094 1.939-.793 2.212-1.558.273-.765.273-1.42.19-1.557-.081-.137-.3-.219-.628-.383z" />
                </svg>
                <span className="font-semibold text-white">Chat on WhatsApp</span>
              </div>
              <ChevronRight className="h-4.5 w-4.5 text-brand-cyan" />
            </Link>
          </div>

        </div>
      </div>

      {/* Footer Bottom copyright bar */}
      <div className="bg-[#03060a] py-5 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-light gap-4">
          <span>© 2024 Elixir.Doctor. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-800">|</span>
            <Link href="#terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-slate-800">|</span>
            <Link href="#refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
