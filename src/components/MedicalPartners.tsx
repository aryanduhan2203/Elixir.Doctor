"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ApolloLogo() {
  return (
    <svg viewBox="0 0 160 40" className="h-10 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 15C13 18 13 22 15 25C17 28 20 29 23 27C26 25 27 22 25 19C23 16 19 14 15 15Z" fill="#E2A612" />
      <path d="M22 23C21 26 19 28 16 29C13 30 10 29 8 27C6 25 5 22 6 19C7 16 10 14 13 13" stroke="#004D7A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 25C13 22 15 20 18 19C21 18 24 19 26 21C28 23 29 26 28 29C27 32 24 34 21 35" stroke="#004D7A" strokeWidth="2.5" strokeLinecap="round" />
      <text x="38" y="22" fill="#004d7a" fontSize="19" fontFamily="serif" fontWeight="bold" letterSpacing="-0.5">Apollo</text>
      <text x="38" y="32" fill="#004d7a" fontSize="8" fontFamily="sans-serif" fontWeight="900" letterSpacing="1.5">HOSPITALS</text>
    </svg>
  );
}

export function FortisLogo() {
  return (
    <svg viewBox="0 0 160 40" className="h-10 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 10L14 16H22L18 10Z" fill="#128A43" />
      <path d="M10 20L15 17L14 23L10 20Z" fill="#128A43" />
      <path d="M26 20L21 17L22 23L26 20Z" fill="#128A43" />
      <path d="M18 28C19 28 21 24 21 20C21 16 15 16 15 20C15 24 17 28 18 28Z" fill="#128A43" />
      <circle cx="18" cy="7" r="2.5" fill="#C5232A" />
      <text x="35" y="23" fill="#128a43" fontSize="21" fontFamily="sans-serif" fontWeight="bold" letterSpacing="-0.5">Fortis</text>
      <text x="35" y="32" fill="#128a43" fontSize="7" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1.5">HEALTHCARE</text>
    </svg>
  );
}

export function MedantaLogo() {
  return (
    <svg viewBox="0 0 160 40" className="h-10 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12H28M8 16H28M8 20H28M8 24H28M8 28H28M15 5V35M18 5V35M21 5V35" stroke="#E62C27" strokeWidth="1.5" />
      <text x="36" y="22" fill="#E62C27" fontSize="20" fontFamily="sans-serif" fontWeight="bold" letterSpacing="-1">medanta</text>
      <text x="36" y="31" fill="#4B5563" fontSize="7" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">THE MEDICITY</text>
    </svg>
  );
}

export function MaxLogo() {
  return (
    <svg viewBox="0 0 160 40" className="h-10 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="10" width="20" height="20" rx="3" fill="#006699" transform="rotate(45 15 20)" />
      <path d="M15 13V27M8 20H22" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <text x="38" y="21" fill="#004D7A" fontSize="22" fontFamily="sans-serif" fontWeight="900" letterSpacing="0">MAX</text>
      <text x="38" y="31" fill="#004D7A" fontSize="8" fontFamily="sans-serif" fontWeight="normal" letterSpacing="0.5">Healthcare</text>
    </svg>
  );
}

export function ArtemisLogo() {
  return (
    <svg viewBox="0 0 160 40" className="h-10 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6C16 12 12 16 7 20C12 24 16 28 18 34C20 28 24 24 29 20C24 16 20 12 18 6Z" fill="#A37E36" />
      <text x="38" y="18" fill="#A37E36" fontSize="14" fontFamily="serif" fontWeight="bold" letterSpacing="2">ARTEMIS</text>
      <text x="38" y="27" fill="#A37E36" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1.5">HOSPITALS</text>
      <text x="38" y="34" fill="#6B7280" fontSize="5" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.5">OUR SPECIALITY IS YOU</text>
    </svg>
  );
}

export function BlkMaxLogo() {
  return (
    <svg viewBox="0 0 160 40" className="h-10 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="10" width="20" height="20" rx="3" fill="#006699" />
      <path d="M15 13V27M8 20H22" stroke="white" strokeWidth="2.5" />
      <path d="M11 16L19 24M19 16L11 24" stroke="white" strokeWidth="1.5" />
      <text x="36" y="21" fill="#003B64" fontSize="18" fontFamily="sans-serif" fontWeight="900" letterSpacing="-0.5">BLK-MAX</text>
      <text x="36" y="31" fill="#003B64" fontSize="6.5" fontFamily="sans-serif" fontWeight="normal" letterSpacing="0">Super Speciality Hospital</text>
    </svg>
  );
}

export default function MedicalPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -240, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 240, behavior: "smooth" });
    }
  };

  const logos = [
    { component: <ApolloLogo />, name: "Apollo Hospitals" },
    { component: <FortisLogo />, name: "Fortis Healthcare" },
    { component: <MedantaLogo />, name: "Medanta The Medicity" },
    { component: <MaxLogo />, name: "Max Healthcare" },
    { component: <ArtemisLogo />, name: "Artemis Hospitals" },
    { component: <BlkMaxLogo />, name: "BLK-Max Hospital" },
  ];

  return (
    <section id="hospitals" className="relative py-8 bg-white text-slate-800 border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#091b35]">
            Our Trusted Medical Partners
          </h3>
        </div>

        {/* Outer Slider Wrapper */}
        <div className="relative flex items-center px-8 lg:px-0">
          
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 lg:-left-4 z-15 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-slate-400 hover:text-slate-700 transition-all hover:scale-105 active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Logos Row Container */}
          <div
            ref={scrollRef}
            className="flex w-full items-center justify-between overflow-x-auto gap-8 sm:gap-12 py-3 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center shrink-0 min-w-[140px] sm:min-w-[170px] snap-center hover:scale-[1.02] transition-transform duration-300"
              >
                {logo.component}
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 lg:-right-4 z-15 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-slate-400 hover:text-slate-700 transition-all hover:scale-105 active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </section>
  );
}
