"use client";

import Link from "next/link";
import { ArrowRight, HeartPulse, Ribbon, Bone, Brain, Sparkles, Baby, HandHeart, Flower2 } from "lucide-react";

export default function Specialties() {
  const specialties = [
    { name: "Cardiology", icon: HeartPulse },
    { name: "Oncology", icon: Ribbon },
    { name: "Orthopedics", icon: Bone },
    { name: "Neurology", icon: Brain },
    { name: "Cosmetic Surgery", icon: Sparkles },
    { name: "IVF & Fertility", icon: Baby },
    { name: "Organ Transplant", icon: HandHeart },
    { name: "Wellness & Preventive Care", icon: Flower2 },
  ];

  return (
    <section id="treatments" className="relative py-12 sm:py-16 bg-white text-slate-900 overflow-hidden">
      {/* Subtle details */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Header */}
        <div className="text-center space-y-4 mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900 relative inline-block">
            Our Specialties
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-teal rounded-full" />
          </h2>
        </div>

        {/* Grid/Row */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-8 gap-3 sm:gap-4 pb-4 lg:pb-0 no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 scroll-smooth snap-x snap-mandatory">
          {specialties.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.name}
                className="group flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-brand-teal/30 hover:shadow-lg hover:shadow-slate-200/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center flex-shrink-0 w-[125px] sm:w-[145px] lg:w-auto snap-align-start min-h-[145px] sm:min-h-[165px] lg:min-h-0"
              >
                <Icon className="h-9 w-9 text-slate-600 group-hover:text-brand-teal transition-colors duration-300 mb-4" strokeWidth={1.3} />
                <h3 className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-950 transition-colors leading-tight">
                  {spec.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="#treatments"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-md shadow-slate-900/10"
          >
            <span>View All Treatments</span>
            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
