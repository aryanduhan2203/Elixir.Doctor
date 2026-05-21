"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Destinations() {
  const destinations = [
    { name: "Delhi NCR", image: "/delhi.png" },
    { name: "Mumbai", image: "/mumbai.png" },
    { name: "Bangalore", image: "/bangalore.png" },
    { name: "Chennai", image: "/chennai.png" },
    { name: "Hyderabad", image: "/hyderabad.png" },
    { name: "Gurgaon", image: "/gurgaon.png" },
  ];

  return (
    <section id="destinations" className="relative py-10 sm:py-12 bg-[#f1f5f9] text-slate-900 overflow-hidden border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#091b35]">
            Healing Destinations Across India
          </h2>
        </div>

        {/* Grid: 2 columns on mobile, 3 on tablet, 6 in a single row on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="group relative h-40 sm:h-44 lg:h-40 w-full overflow-hidden rounded-2xl border border-slate-200/30 shadow-md cursor-pointer"
            >
              {/* Image */}
              <Image
                src={dest.image}
                alt={`${dest.name} Landmark`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none z-10" />

              {/* Info Text (Centered Bottom Overlay) */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white z-20 px-2">
                <span className="text-xs sm:text-sm font-semibold tracking-tight">
                  {dest.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-8 text-center">
          <Link
            href="#destinations"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#0B1528] px-6 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 transition-all border border-slate-800/40 shadow-sm"
          >
            <span>Explore All Destinations</span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}
