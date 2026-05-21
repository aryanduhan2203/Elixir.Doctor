"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "treatments",
      "hospitals",
      "destinations",
      "journey",
      "testimonials",
      "contact",
    ];

    const handleScroll = () => {
      // Top of page override
      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }

      // Bottom of page override
      const scrollPosition = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= docHeight - 100) {
        setActiveSection("contact");
        return;
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check in case page is loaded scrolled down
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Treatments", href: "#treatments", hasDropdown: true },
    { name: "Hospitals", href: "#hospitals" },
    { name: "Destinations", href: "#destinations" },
    { name: "Patient Journey", href: "#journey" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-brand-cyan/20 bg-dark-bg p-1 group-hover:border-brand-cyan/50 transition-colors shadow-lg shadow-brand-cyan/10">
              <Image
                src="/logo.png"
                alt="Elixir.Doctor Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-brand-cyan">Elixir.</span>
              <span className="font-extrabold text-white">Doctor</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                      isActive
                        ? "text-brand-cyan"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                    )}
                  </Link>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-cyan rounded-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center">
            <Link
              href="https://wa.me/917300123456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/5 px-5 py-2.5 text-sm font-semibold text-brand-teal hover:bg-brand-teal/15 hover:border-brand-teal/60 transition-all duration-300 shadow-md shadow-brand-teal/5 hover:shadow-brand-teal/10"
            >
              {/* WhatsApp Icon */}
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.782.001-2.617-1.01-5.078-2.85-6.92-1.839-1.84-4.285-2.853-6.902-2.854-5.393 0-9.786 4.38-9.789 9.782 0 1.549.431 3.064 1.248 4.417l-.989 3.61 3.702-.977zm11.233-6.04c-.328-.164-1.939-.955-2.239-1.066-.3-.11-.518-.165-.736.164-.219.328-.847 1.066-1.038 1.285-.19.219-.382.246-.71.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.147-.146.328-.382.492-.573.164-.19.219-.328.328-.546.11-.219.055-.41-.027-.573-.082-.164-.736-1.775-1.01-2.43-.267-.643-.538-.557-.736-.567-.19-.01-.41-.012-.628-.012-.218 0-.573.082-.873.41-.3.328-1.147 1.12-1.147 2.733 0 1.612 1.174 3.169 1.338 3.388.164.219 2.31 3.52 5.597 4.937.781.337 1.39.539 1.865.69.784.249 1.497.214 2.061.129.629-.094 1.939-.793 2.212-1.558.273-.765.273-1.42.19-1.557-.081-.137-.3-.219-.628-.383z" />
              </svg>
              <span>WhatsApp Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-white/5 bg-dark-bg/95 backdrop-blur-lg">
          <div className="space-y-1 px-4 pb-6 pt-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-brand-cyan/10 text-brand-cyan"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="https://wa.me/917300123456"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/5 py-3 text-base font-semibold text-brand-teal hover:bg-brand-teal/15 transition-all duration-300"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.782.001-2.617-1.01-5.078-2.85-6.92-1.839-1.84-4.285-2.853-6.902-2.854-5.393 0-9.786 4.38-9.789 9.782 0 1.549.431 3.064 1.248 4.417l-.989 3.61 3.702-.977zm11.233-6.04c-.328-.164-1.939-.955-2.239-1.066-.3-.11-.518-.165-.736.164-.219.328-.847 1.066-1.038 1.285-.19.219-.382.246-.71.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.147-.146.328-.382.492-.573.164-.19.219-.328.328-.546.11-.219.055-.41-.027-.573-.082-.164-.736-1.775-1.01-2.43-.267-.643-.538-.557-.736-.567-.19-.01-.41-.012-.628-.012-.218 0-.573.082-.873.41-.3.328-1.147 1.12-1.147 2.733 0 1.612 1.174 3.169 1.338 3.388.164.219 2.31 3.52 5.597 4.937.781.337 1.39.539 1.865.69.784.249 1.497.214 2.061.129.629-.094 1.939-.793 2.212-1.558.273-.765.273-1.42.19-1.557-.081-.137-.3-.219-.628-.383z" />
                </svg>
                <span>WhatsApp Us</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
