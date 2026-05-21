"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function JourneyAndStories() {
  const [activeStory, setActiveStory] = useState(0);

  const steps = [
    {
      title: "Medical Consultation",
      desc: "Share your medical reports with our experts.",
    },
    {
      title: "Treatment Planning",
      desc: "Get a personalized plan from top specialists.",
    },
    {
      title: "Travel & Luxury Stay",
      desc: "We arrange your travel, stay & all comforts.",
    },
    {
      title: "Treatment + Recovery",
      desc: "Receive world-class treatment and follow-up care.",
    },
  ];

  const testimonials = [
    {
      quote: "Excellent, and the care I received was beyond my expectations.",
      name: "Maria Gonzalez",
      country: "Spain",
      rating: 5,
      image: "/maria.png"
    },
    {
      quote: "The doctors and staff were incredible. They coordinated everything from my flights to my surgery seamlessly.",
      name: "David Chen",
      country: "Canada",
      rating: 5,
      image: "/maria.png"
    },
    {
      quote: "Excellent post-operative care and luxury lodging. They made my medical trip feel like a restful holiday.",
      name: "Amina Al-Mansoor",
      country: "UAE",
      rating: 5,
      image: "/maria.png"
    }
  ];

  const handleNext = () => {
    setActiveStory((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveStory((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="journey" className="relative py-10 sm:py-12 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Healing Journey steps with Skyline Watermark */}
          <div className="lg:col-span-7 relative pb-12 lg:pb-0 min-h-[140px] flex flex-col justify-between">
            {/* Steps Timeline - 4 columns on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col text-left space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-[#091b35] leading-tight font-serif">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-light leading-relaxed max-w-[150px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Skyline Silhouette SVG Watermark */}
            <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden pointer-events-none select-none opacity-40">
              <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="w-full h-full text-slate-200 fill-current"
              >
                <path d="M0,120 L0,90 L12,90 L12,85 L22,85 L22,95 L32,95 L32,70 L48,70 L48,100 L58,100 L58,60 L78,60 L78,95 L88,95 L88,85 L102,85 L102,110 L118,110 L118,75 L138,75 L138,90 L150,90 L150,105 L162,105 L162,80 L178,80 L178,95 L190,95 L190,65 L215,65 L215,100 L230,100 L230,50 L248,50 L248,100 L260,100 L260,85 L272,85 L272,95 L288,95 L288,75 L304,75 L304,105 L320,105 L320,90 L332,90 L332,80 L344,80 L344,95 L360,95 L360,70 L376,70 L376,110 L392,110 L392,85 L412,85 L412,95 L424,95 L424,105 L436,105 L436,60 L456,60 L456,100 L472,100 L472,45 L492,45 L492,95 L504,95 L504,80 L516,80 L516,105 L532,105 L532,70 L552,70 L552,90 L564,90 L564,100 L576,100 L576,75 L592,75 L592,95 L604,95 L604,65 L628,65 L628,100 L644,100 L644,50 L660,50 L660,100 L672,100 L672,85 L684,85 L684,95 L700,95 L700,75 L716,75 L716,105 L732,105 L732,90 L744,90 L744,80 L756,80 L756,95 L772,95 L772,70 L788,70 L788,110 L804,110 L804,85 L824,85 L824,95 L836,95 L836,105 L848,105 L848,60 L868,60 L868,100 L884,100 L884,45 L904,45 L904,95 L916,95 L916,80 L928,80 L928,105 L944,105 L944,70 L964,70 L964,90 L976,90 L976,100 L988,100 L988,75 L1004,75 L1004,95 L1016,95 L1016,65 L1040,65 L1040,100 L1056,100 L1056,50 L1072,50 L1072,100 L1084,100 L1084,85 L1096,85 L1096,95 L1112,95 L1112,75 L1128,75 L1128,105 L1144,105 L1144,90 L1156,90 L1156,80 L1168,80 L1168,95 L1184,95 L1184,120 L1200,120 L1200,120 Z" />
              </svg>
            </div>
          </div>

          {/* Right Column: Stories Testimonial Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Left Floating Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-100 shadow-md text-slate-400 hover:text-slate-800 transition-all hover:scale-105 active:scale-95"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Right Floating Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-100 shadow-md text-slate-400 hover:text-slate-800 transition-all hover:scale-105 active:scale-95"
              aria-label="Next story"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Testimonial Card Container */}
            <div className="relative rounded-[2rem] bg-white border border-slate-100/60 shadow-lg shadow-slate-100/50 overflow-hidden min-h-[220px] grid grid-cols-12 items-stretch">
              
              {/* Left Side: Testimonial details */}
              <div className="col-span-7 flex flex-col justify-between p-6 sm:p-8 pr-2 text-left">
                {/* Quote Text */}
                <div className="space-y-2">
                  <p className="text-slate-700 font-light text-xs sm:text-sm leading-relaxed italic">
                    "{testimonials[activeStory].quote}"
                  </p>
                </div>

                {/* Author Metadata & Stars */}
                <div className="mt-4">
                  <h4 className="text-xs sm:text-sm font-bold text-[#091b35] leading-none mb-1">
                    {testimonials[activeStory].name}
                  </h4>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-medium block mb-2 leading-none">
                    {testimonials[activeStory].country}
                  </span>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonials[activeStory].rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Carousel Indicators (dots) */}
                  <div className="flex gap-1.5">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStory(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === activeStory ? "w-4 bg-[#091b35]" : "w-1.5 bg-slate-200"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Portrait Image */}
              <div className="col-span-5 relative min-h-[220px] w-full">
                <Image
                  src={testimonials[activeStory].image}
                  alt={testimonials[activeStory].name}
                  fill
                  className="object-cover object-center"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
