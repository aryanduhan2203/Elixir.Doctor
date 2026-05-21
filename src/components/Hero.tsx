"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Building2, UserCheck, HeartHandshake, Headphones, Globe, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 lg:pt-28 pb-8 lg:pb-12 overflow-hidden bg-dark-bg grid-bg">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full radial-glow-blue opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full radial-glow-cyan opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full radial-glow-teal opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase">
              Luxury Healthcare Tourism
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
              Healing Without <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue font-medium">
                Borders
              </span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              World-class medical treatment, trusted specialists, and personalized care with the warmth of{" "}
              <span className="italic text-brand-cyan font-medium font-serif">Atithi Devo Bhava</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#contact"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-7 py-3 text-sm font-semibold text-white hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-brand-cyan/15"
              >
                <span>Book a Consultation</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#treatments"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-700 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white hover:border-slate-500 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Explore Treatments</span>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column Image - Blended into background */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
            <Image
              src="/hero.png"
              alt="Luxury Healthcare Handshake"
              fill
              className="object-cover object-center select-none"
              style={{
                maskImage: "radial-gradient(circle at 60% 50%, black 25%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.2) 80%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(circle at 60% 50%, black 25%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.2) 80%, transparent 100%)",
              }}
              priority
            />
          </div>
        </div>

        {/* Bottom Feature Bar & Trust Bar */}
        <div className="mt-12 lg:mt-16 border-t border-white/5 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
          {/* Feature Badges (Left) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto justify-between lg:justify-start lg:gap-8">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-brand-cyan shrink-0" strokeWidth={1.5} />
              <span className="text-xs font-semibold text-slate-200 leading-tight">World-Class<br />Hospitals</span>
            </div>
            <div className="flex items-center gap-3">
              <UserCheck className="h-5 w-5 text-brand-teal shrink-0" strokeWidth={1.5} />
              <span className="text-xs font-semibold text-slate-200 leading-tight">Top Specialist<br />Doctors</span>
            </div>
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-5 w-5 text-brand-cyan shrink-0" strokeWidth={1.5} />
              <span className="text-xs font-semibold text-slate-200 leading-tight">Personalized<br />Care</span>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5 text-brand-teal shrink-0" strokeWidth={1.5} />
              <span className="text-xs font-semibold text-slate-200 leading-tight">End-to-End<br />Support</span>
            </div>
          </div>

          {/* Trust Panel Widget (Right) */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="glass-panel glass-panel-glow rounded-full px-6 py-2.5 flex items-center gap-6 border border-white/10 bg-slate-900/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-brand-cyan shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase leading-none mb-0.5">Trusted by Patients</span>
                  <span className="text-xs font-bold text-white leading-none">from 50+ Countries</span>
                </div>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 text-brand-teal shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase leading-none mb-0.5">24/7 International</span>
                  <span className="text-xs font-bold text-white leading-none">Patient Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
