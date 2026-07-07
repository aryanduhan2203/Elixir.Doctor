"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronDown, 
  Menu, 
  X,
  HeartPulse,
  Bone,
  Brain,
  Ribbon,
  Baby,
  Sparkles,
  HandHeart,
  Activity,
  Droplet,
  Eye,
  Smile,
  Ear,
  Shield,
  Flame,
  Wind,
  Accessibility,
  Flower2,
  Leaf,
  ArrowRight
} from "lucide-react";

// Category definitions with descriptions, icons, and soft colors for the mega-modal
const modalCategories = [
  {
    id: "cardiology",
    name: "Cardiac Sciences",
    desc: "Advanced heart care for a healthier life.",
    icon: HeartPulse,
    themeClass: "bg-rose-50 text-rose-600 border border-rose-100",
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Joint Care",
    desc: "Restoring mobility, strength and flexibility.",
    icon: Bone,
    themeClass: "bg-blue-50 text-blue-600 border border-blue-100",
  },
  {
    id: "neurology",
    name: "Neurology & Neurosurgery",
    desc: "Expert care for brain, spine & nerves.",
    icon: Brain,
    themeClass: "bg-purple-50 text-purple-600 border border-purple-100",
  },
  {
    id: "oncology",
    name: "Oncology",
    desc: "Comprehensive cancer care and therapies.",
    icon: Ribbon,
    themeClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  },
  {
    id: "fertility",
    name: "Fertility & Women's Health",
    desc: "Compassionate care for reproductive journeys.",
    icon: Baby,
    themeClass: "bg-pink-50 text-pink-600 border border-pink-100",
  },
  {
    id: "cosmetic-surgery",
    name: "Cosmetic & Plastic Surgery",
    desc: "Enhance confidence with aesthetic care.",
    icon: Sparkles,
    themeClass: "bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100",
  },
  {
    id: "organ-transplant",
    name: "Organ Transplant",
    desc: "Life-saving transplant surgeries and care.",
    icon: HandHeart,
    themeClass: "bg-teal-50 text-teal-600 border border-teal-100",
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    desc: "Advanced care for digestive and liver health.",
    icon: Activity,
    themeClass: "bg-amber-50 text-amber-600 border border-amber-100",
  },
  {
    id: "nephrology",
    name: "Nephrology & Kidney Care",
    desc: "Dedicated therapies for kidney wellness.",
    icon: Droplet,
    themeClass: "bg-green-50 text-green-600 border border-green-100",
  },
  {
    id: "eye-care",
    name: "Ophthalmology (Eye Care)",
    desc: "Clear vision and advanced ocular treatments.",
    icon: Eye,
    themeClass: "bg-sky-50 text-sky-600 border border-sky-100",
  },
  {
    id: "dental",
    name: "Dental Care",
    desc: "Comprehensive treatments for a perfect smile.",
    icon: Smile,
    themeClass: "bg-indigo-50 text-indigo-600 border border-indigo-100",
  },
  {
    id: "ent",
    name: "ENT (Ear, Nose, Throat)",
    desc: "Expert care for ear, nose, and throat health.",
    icon: Ear,
    themeClass: "bg-cyan-50 text-cyan-600 border border-cyan-100",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    desc: "Specialized care for children and infants.",
    icon: Baby,
    themeClass: "bg-orange-50 text-orange-600 border border-orange-100",
  },
  {
    id: "mens-health",
    name: "Urology & Men's Health",
    desc: "Expert care for men's wellness and health.",
    icon: Shield,
    themeClass: "bg-blue-50 text-blue-600 border border-blue-100",
  },
  {
    id: "endocrinology",
    name: "Endocrinology",
    desc: "Hormonal balance and diabetes management.",
    icon: Flame,
    themeClass: "bg-violet-50 text-violet-600 border border-violet-100",
  },
  {
    id: "pulmonology",
    name: "Pulmonology & Respiratory",
    desc: "Breathing easy with advanced lung care.",
    icon: Wind,
    themeClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  },
  {
    id: "rehabilitation",
    name: "Rehabilitation & Physiotherapy",
    desc: "Recover, rebuild, and regain strength.",
    icon: Accessibility,
    themeClass: "bg-teal-50 text-teal-600 border border-teal-100",
  },
  {
    id: "wellness",
    name: "Wellness & Preventive Care",
    desc: "Prevent today, live stronger tomorrow.",
    icon: Flower2,
    themeClass: "bg-yellow-50 text-yellow-600 border border-yellow-100",
  },
  {
    id: "alternative-medicine",
    name: "Alternative Medicine",
    desc: "Holistic healing through natural therapies.",
    icon: Leaf,
    themeClass: "bg-lime-50 text-lime-600 border border-lime-100",
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const isTreatmentPage = pathname.startsWith("/treatments/");

  let navbarBgStyle = undefined;
  let navbarClass = "bg-dark-bg/80";
  let mobileMenuClass = "bg-dark-bg/95";

  if (isTreatmentPage) {
    navbarBgStyle = { backgroundColor: "#020917" };
    navbarClass = "";
    mobileMenuClass = "";
  }

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isHome) {
      setActiveSection("treatments");
      return;
    }

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
  }, [pathname, isHome]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Treatments", href: "#", hasDropdown: true },
    { name: "Hospitals", href: "#hospitals" },
    { name: "Destinations", href: "#destinations" },
    { name: "Patient Journey", href: "/patient-journey" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md ${navbarClass}`}
        style={navbarBgStyle}
      >
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
              const isLinkHash = link.href.startsWith("#");
              const hrefVal = !isHome && isLinkHash ? `/${link.href}` : link.href;
              const isActive = isHome
                ? (link.name === "Treatments" && link.hasDropdown ? isModalOpen : (isLinkHash ? activeSection === link.href.slice(1) : pathname === link.href))
                : (link.href === pathname);
              return (
                <div key={link.name} className="relative group">
                  {link.name === "Treatments" && link.hasDropdown ? (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 cursor-pointer ${
                        isActive
                          ? "text-brand-cyan"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={hrefVal}
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
                  )}
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
        <div 
          className={`lg:hidden border-b border-white/5 backdrop-blur-lg ${mobileMenuClass}`}
          style={navbarBgStyle}
        >
          <div className="space-y-1 px-4 pb-6 pt-3">
            {navLinks.map((link) => {
              const isLinkHash = link.href.startsWith("#");
              const hrefVal = !isHome && isLinkHash ? `/${link.href}` : link.href;
              const isActive = isHome
                ? (isLinkHash ? activeSection === link.href.slice(1) : pathname === link.href)
                : (link.href === pathname);
              
              if (link.name === "Treatments" && link.hasDropdown) {
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      setIsOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
                  >
                    {link.name}
                  </button>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={hrefVal}
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

    {/* Mega-Modal Overlay (Light Themed - Aligned to the Right) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-end p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-xs transition-all duration-300 cursor-default animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white text-slate-800 rounded-3xl w-full max-w-5xl h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200/50 animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 sm:p-8 border-b border-slate-100 bg-slate-50/50">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal">
                  All Treatments
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-light max-w-3xl">
                  Explore our comprehensive range of medical specialties and treatments delivered with world-class care and compassion.
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors border border-slate-200 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 flex overflow-hidden min-h-0 bg-white">
              
              {/* Left Sidebar Menu */}
              <div className="w-[240px] bg-slate-50 border-r border-slate-100 p-4 sm:p-6 overflow-y-auto no-scrollbar hidden md:block space-y-1">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    window.location.href = "/#treatments";
                  }}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#00382c] w-full text-left rounded-lg transition-all cursor-pointer"
                >
                  <Activity className="h-4 w-4" />
                  <span>All Treatments</span>
                </button>
                {modalCategories.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setIsModalOpen(false);
                        window.location.href = `/treatments/${cat.id}`;
                      }}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 w-full text-left rounded-lg transition-all cursor-pointer"
                    >
                      <CatIcon className="h-4 w-4 text-slate-400" />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right Panel Grid */}
              <div className="flex-1 p-6 sm:p-8 overflow-y-auto no-scrollbar bg-white">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Treatment Categories
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                  {modalCategories.map((cat) => {
                    const CatIcon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setIsModalOpen(false);
                          window.location.href = `/treatments/${cat.id}`;
                        }}
                        className="group flex flex-col justify-between p-4 rounded-xl border border-slate-100 bg-white hover:border-brand-teal/50 hover:shadow-lg hover:shadow-slate-100/50 text-left transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                      >
                        <div className="space-y-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.themeClass}`}>
                            <CatIcon className="h-5 w-5" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#00382c] transition-colors mt-3">
                              {cat.name}
                            </h3>
                            <p className="text-[11.5px] text-slate-500 font-light mt-1.5 leading-relaxed line-clamp-2">
                              {cat.desc}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex justify-end w-full pt-4">
                          <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#00382c] transition-all group-hover:translate-x-0.5" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
