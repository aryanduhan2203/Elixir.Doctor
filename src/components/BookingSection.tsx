"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, Clock, CheckCircle2, ChevronRight } from "lucide-react";

export default function BookingSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    treatment: "",
    phone: "",
    email: "",
    date: "",
  });

  const treatmentsList = [
    "Cardiology & Cardiac Surgery",
    "Oncology & Cancer Care",
    "Orthopedics & Joint Replacement",
    "Neurology & Neurosurgery",
    "Cosmetic & Plastic Surgery",
    "IVF & Fertility Treatment",
    "Organ Transplant Surgery",
    "Wellness & Preventive Care",
    "Other Specialities",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-6 sm:py-8 bg-[#060b13] text-white overflow-hidden grid-bg">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full radial-glow-blue opacity-25 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-80 h-80 rounded-full radial-glow-cyan opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-serif font-normal text-white leading-tight">
                Begin Your Healing <br />
                Journey Today
              </h2>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Our care experts are here to guide you 24/7.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-2.5 pt-0.5">
              <a
                href="tel:+917300123456"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-cyan shrink-0" />
                <span className="text-xs sm:text-sm font-medium">+91 7300 123 456</span>
              </a>
              <a
                href="mailto:care@elixir.doctor"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-cyan shrink-0" />
                <span className="text-xs sm:text-sm font-medium">care@elixir.doctor</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-medium leading-tight">International Helpline</span>
                  <span className="text-[9px] text-slate-400 font-light mt-0.5">24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column: Form Container */}
          <div className="lg:col-span-6">
            <div className="rounded-[1.25rem] bg-white p-4 sm:p-5 shadow-2xl text-slate-900 border border-slate-100">
              {formSubmitted ? (
                <div className="text-center py-6 space-y-2.5">
                  <div className="flex justify-center text-brand-teal">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Request Received!</h3>
                  <p className="text-xs text-slate-500 font-light max-w-sm mx-auto">
                    Thank you. One of our specialist care coordinators will contact you shortly on your provided details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    {/* Full Name */}
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-brand-teal focus:outline-none transition-colors"
                    />

                    {/* Country */}
                    <input
                      type="text"
                      required
                      placeholder="Country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-brand-teal focus:outline-none transition-colors"
                    />

                    {/* Treatment */}
                    <select
                      required
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:border-brand-teal focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-400">Treatment Required</option>
                      {treatmentsList.map((treat, idx) => (
                        <option key={idx} value={treat}>{treat}</option>
                      ))}
                    </select>

                    {/* Phone */}
                    <div className="flex gap-2">
                      <div className="inline-flex items-center gap-1 px-1.5 rounded-lg border border-slate-200 bg-slate-100 text-[10px] font-semibold text-slate-600 shrink-0 select-none">
                        <span>🇮🇳</span>
                        <span className="text-slate-400 text-[8px]">▼</span>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-brand-teal focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-brand-teal focus:outline-none transition-colors"
                    />

                    {/* Date */}
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-500 focus:bg-white focus:border-brand-teal focus:outline-none transition-colors cursor-pointer"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-brand-blue to-blue-600 py-2 text-xs sm:text-sm font-bold text-white hover:opacity-95 hover:scale-[1.002] active:scale-[0.998] transition-all shadow-md cursor-pointer mt-3"
                  >
                    <span>Speak to Our Care Expert</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Compass Logo Watermark */}
          <div className="hidden lg:col-span-3 lg:flex justify-end items-center select-none pointer-events-none pr-4">
            <div className="relative w-56 h-56">
              <Image
                src="/logo.png"
                alt="Compass Logo"
                fill
                className="object-contain mix-blend-screen opacity-[0.35] filter brightness-75 contrast-125"
                style={{
                  maskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)",
                  WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
