"use client";

import { Building2, UserCheck, ClipboardList, ConciergeBell, Plane, UserRound, Headphones, ShieldCheck } from "lucide-react";

export default function TrustFactors() {
  const trustItems = [
    { title: "World-Class Hospitals", icon: Building2 },
    { title: "Top Specialist Doctors", icon: UserCheck },
    { title: "Personalized Treatment Plans", icon: ClipboardList },
    { title: "Luxury Stay & Concierge Services", icon: ConciergeBell },
    { title: "Visa & Travel Assistance", icon: Plane },
    { title: "Dedicated Patient Relationship Manager", icon: UserRound },
    { title: "End-to-End Support", icon: Headphones },
    { title: "Confidential & Transparent", icon: ShieldCheck },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-14 bg-dark-bg text-white overflow-hidden grid-bg-teal">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full radial-glow-cyan opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Header */}
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white">
            Why Patients Trust <span className="text-brand-cyan">Elixir.Doctor</span>
          </h2>
        </div>

        {/* Row Grid */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-8 pb-4 lg:pb-0 no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 scroll-smooth snap-x snap-mandatory">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center justify-start px-4 text-center border-r border-white/10 last:border-r-0 flex-shrink-0 w-[130px] sm:w-[145px] lg:w-auto snap-align-start min-h-[120px] lg:min-h-0"
              >
                <Icon className="h-8 w-8 text-brand-cyan group-hover:text-brand-blue group-hover:scale-105 transition-all duration-300 mb-3" strokeWidth={1.3} />
                <h3 className="text-xs sm:text-[13px] font-medium text-slate-300 group-hover:text-white transition-colors leading-tight">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
