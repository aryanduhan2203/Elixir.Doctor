"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  ClipboardCheck, 
  Plane, 
  Building, 
  HeartPulse, 
  Flower2, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Car, 
  Hotel, 
  FileText, 
  Search, 
  Plus, 
  Minus, 
  Users, 
  ShieldAlert, 
  HelpCircle, 
  Check, 
  Compass, 
  BadgeCheck, 
  ArrowRight,
  Sparkles,
  PhoneCall,
  Clock,
  Briefcase,
  MapPin,
  Laptop
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Step 1 to 7 Detailed Data
const journeySteps = [
  {
    step: "01",
    title: "Initial Consultation",
    shortTitle: "Initial Consultation",
    desc: "You reach out to us and share your medical reports and concerns.",
    icon: Phone,
    bullets: [
      "Submit your medical reports",
      "Discuss your health concerns",
      "Share your treatment goals",
      "Connect with our Patient Care Team"
    ],
    infoType: "timeline",
    infoTitle: "Timeline",
    infoVal: "Within 24 hours"
  },
  {
    step: "02",
    title: "Medical Review & Expert Opinion",
    shortTitle: "Medical Review & Expert Opinion",
    desc: "Our specialists review your case and share the best treatment options.",
    icon: ClipboardCheck,
    bullets: [
      "Reports reviewed by leading specialists",
      "Treatment recommendations prepared",
      "Second opinions arranged if needed",
      "Cost estimates shared transparently"
    ],
    infoType: "deliverables",
    infoTitle: "What You'll Receive",
    infoVal: [
      "Treatment Plan",
      "Estimated Costs",
      "Expected Recovery Timeline"
    ]
  },
  {
    step: "03",
    title: "Travel Planning",
    shortTitle: "Travel Planning",
    desc: "We take care of your travel, visa, stay and all arrangements.",
    icon: Plane,
    bullets: [
      "Medical visa assistance",
      "Flight recommendations",
      "Accommodation options",
      "Airport transfer arrangements",
      "Dedicated patient coordinator"
    ],
    infoType: "included",
    infoTitle: "Included",
    infoVal: [
      { text: "Visa Support", icon: Plane },
      { text: "Luxury Accommodation", icon: Hotel },
      { text: "Chauffeur Service", icon: Car }
    ]
  },
  {
    step: "04",
    title: "Arrival & Welcome",
    shortTitle: "Arrival & Welcome",
    desc: "We greet you at the airport and ensure a comfortable arrival.",
    icon: Building,
    bullets: [
      "Airport meet & greet",
      "Private transfers",
      "Hotel check-in assistance",
      "Local SIM and concierge support",
      "Pre-treatment consultations"
    ],
    infoType: "philosophy",
    infoTitle: "Our Philosophy",
    infoVal: "Atithi Devo Bhava — The Guest is God."
  },
  {
    step: "05",
    title: "Treatment & Care",
    shortTitle: "Treatment & Care",
    desc: "Receive world-class treatment with personalized care.",
    icon: HeartPulse,
    bullets: [
      "Consultation with specialists",
      "Diagnostic testing",
      "Treatment or surgery",
      "Family support services",
      "Daily patient updates"
    ],
    infoType: "highlight",
    infoTitle: "Highlights",
    infoVal: "Our team remains by your side throughout your medical journey."
  },
  {
    step: "06",
    title: "Recovery & Wellness",
    shortTitle: "Recovery & Wellness",
    desc: "Holistic recovery with wellness and Ayurveda programs.",
    icon: Flower2,
    bullets: [
      "Post-treatment monitoring",
      "Physiotherapy support",
      "Nutritional guidance",
      "Wellness programs",
      "Optional Ayurveda and holistic therapies"
    ],
    infoType: "premium",
    infoTitle: "Premium Options",
    infoVal: [
      "Ayurveda Recovery Programs",
      "Wellness Retreats",
      "Therapeutic Massages"
    ]
  },
  {
    step: "07",
    title: "Return Home & Follow-up",
    shortTitle: "Return Home & Follow-up",
    desc: "We continue to support you even after you return home.",
    icon: ShieldCheck,
    bullets: [
      "Digital medical records",
      "Follow-up consultations",
      "Telemedicine appointments",
      "Ongoing recovery guidance"
    ],
    infoType: "lifetime",
    infoTitle: "Lifetime Access",
    infoVal: "Your dedicated care coordinator remains available for future support."
  }
];

// FAQ Categories Mapping
const faqCategories = [
  {
    id: "insurance",
    name: "Insurance & Billing",
    desc: "All about insurance coverage and claims.",
    icon: ShieldCheck
  },
  {
    id: "companions",
    name: "Family & Companions",
    desc: "Traveling with your loved ones made easy.",
    icon: Users
  },
  {
    id: "medical",
    name: "Treatment & Medical Care",
    desc: "Questions related to treatments and hospitals.",
    icon: HeartPulse
  },
  {
    id: "travel",
    name: "Travel & Stay",
    desc: "Visa, flights, stay and transportation support.",
    icon: Plane
  },
  {
    id: "wellness",
    name: "Ayurveda & Wellness",
    desc: "Holistic healing and wellness programs.",
    icon: Flower2
  },
  {
    id: "general",
    name: "General Information",
    desc: "General questions and other support.",
    icon: HelpCircle
  }
];

// Complete FAQ Content
const faqsData = [
  // Family & Companions
  {
    id: "fc-1",
    category: "companions",
    question: "Can a family member or companion travel with me?",
    answer: "Absolutely. We understand that having a loved one by your side can make your healthcare journey more comfortable and reassuring. Elixir.doctor can assist with:",
    bulletType: "dot",
    bullets: [
      "Accommodation for accompanying family members",
      "Airport pickup and transfers",
      "Visa support for companions (where applicable)",
      "Hotel and serviced apartment bookings",
      "Local transportation arrangements",
      "Language and concierge support",
      "Sightseeing and wellness activities during the patient's recovery"
    ],
    footer: "Our goal is to ensure both patients and their companions feel supported, comfortable, and cared for throughout their stay."
  },
  {
    id: "fc-2",
    category: "companions",
    question: "How does Elixir.doctor support accompanying family members?",
    answer: "We believe healing is easier when loved ones are close. For family members traveling with the patient, we offer:",
    bulletType: "check",
    bullets: [
      "Premium hotel and long-stay accommodation options",
      "Airport meet-and-greet services",
      "Daily transportation assistance",
      "Dedicated concierge support",
      "Local SIM card and connectivity assistance",
      "Recommendations for dining, shopping, and cultural experiences",
      "Wellness and retreat packages for caregivers"
    ],
    footer: "Our team manages the logistics so families can focus on supporting their loved one."
  },
  // Insurance & Billing
  {
    id: "ib-1",
    category: "insurance",
    question: "Can I use my health insurance for treatment in India?",
    answer: "Insurance coverage depends on your provider, policy, and treatment type. If your insurance policy includes international medical treatment or reimbursement benefits, our team can help you understand your options and gather the necessary documentation."
  },
  {
    id: "ib-2",
    category: "insurance",
    question: "How does Elixir.doctor help with insurance?",
    answer: "Our Patient Care Team can assist by:",
    bulletType: "dot",
    bullets: [
      "Reviewing insurance-related requirements",
      "Providing treatment estimates and medical documentation",
      "Coordinating with hospital billing departments",
      "Preparing invoices and medical records needed for claims",
      "Supporting reimbursement-based insurance submissions"
    ],
    footer: "Please note that final approval and coverage decisions are made by your insurance provider."
  },
  {
    id: "ib-3",
    category: "insurance",
    question: "Do you offer direct billing with international insurance companies?",
    answer: "Direct billing availability varies by hospital, treatment, and insurance provider. Where possible, we will connect you with hospitals that have experience working with international insurers and guide you through the process."
  },
  {
    id: "ib-4",
    category: "insurance",
    question: "What if my insurance does not cover treatment abroad?",
    answer: "Many patients still choose treatment in India because costs can be significantly lower than in their home country, even without insurance coverage. Our team will provide transparent treatment estimates and help you explore the most suitable options based on your medical needs and budget."
  },
  {
    id: "ib-5",
    category: "insurance",
    question: "How much can I save by seeking treatment in India?",
    answer: "Depending on the procedure, patients often save between 40%–80% compared to treatment costs in many Western countries."
  },
  {
    id: "ib-6",
    category: "insurance",
    question: "Are there any hidden charges?",
    answer: "No. We believe in transparent pricing and provide estimated costs before treatment begins."
  },
  {
    id: "ib-7",
    category: "insurance",
    question: "What payment methods do you accept?",
    answer: "We accept the following payment options:",
    bulletType: "dot",
    bullets: [
      "Bank Transfer",
      "International Wire Transfer",
      "Major Credit Cards",
      "Approved Payment Gateways"
    ]
  },
  // Treatment & Medical Care
  {
    id: "mc-1",
    category: "medical",
    question: "How do I get a treatment plan?",
    answer: "Simply submit your medical reports through our inquiry form. Our medical team will coordinate reviews from relevant specialists and provide recommendations."
  },
  {
    id: "mc-2",
    category: "medical",
    question: "Can I get a second opinion?",
    answer: "Yes. We arrange second opinions from leading specialists before you make any treatment decisions."
  },
  {
    id: "mc-3",
    category: "medical",
    question: "How quickly can treatment be scheduled?",
    answer: "Most consultations can be arranged within 24–72 hours after receiving your medical records."
  },
  {
    id: "mc-4",
    category: "medical",
    question: "Are your partner hospitals internationally accredited?",
    answer: "We work with leading hospitals that hold recognized accreditations (such as JCI or NABH) and maintain global standards of care."
  },
  // Travel & Stay
  {
    id: "ts-1",
    category: "travel",
    question: "Do you help with medical visas?",
    answer: "Yes. We provide documentation support (like hospital visa invitation letters) and guidance throughout the medical visa process."
  },
  {
    id: "ts-2",
    category: "travel",
    question: "Will someone meet me at the airport?",
    answer: "Absolutely. We offer professional airport pickup and personalized arrival assistance to ensure your transfer is comfortable."
  },
  {
    id: "ts-3",
    category: "travel",
    question: "Can my family travel with me?",
    answer: "Yes. We can arrange accommodations and support services for accompanying family members."
  },
  {
    id: "ts-4",
    category: "travel",
    question: "What type of accommodation do you offer?",
    answer: "We provide options tailored to recovery and convenience, including:",
    bulletType: "dot",
    bullets: [
      "Luxury hotels",
      "Serviced apartments",
      "Recovery suites",
      "Wellness resorts",
      "Long-stay accommodations"
    ]
  },
  // Ayurveda & Wellness
  {
    id: "aw-1",
    category: "wellness",
    question: "Do you offer Ayurvedic treatments?",
    answer: "Yes. We partner with leading Ayurvedic hospitals and wellness centers across India, particularly in Kerala and Uttarakhand, offering authentic therapies."
  },
  {
    id: "aw-2",
    category: "wellness",
    question: "Can I combine medical treatment with Ayurveda?",
    answer: "Yes. Many patients choose integrative recovery programs combining modern medicine with Ayurveda, yoga, nutrition, and wellness therapies to accelerate healing."
  },
  {
    id: "aw-3",
    category: "wellness",
    question: "What wellness retreats do you offer?",
    answer: "We can arrange a variety of customized programs:",
    bulletType: "dot",
    bullets: [
      "Ayurveda Retreats",
      "Detox Programs",
      "Stress Management Retreats",
      "Yoga & Meditation Programs",
      "Holistic Recovery Experiences"
    ]
  },
  // General Information
  {
    id: "gi-1",
    category: "general",
    question: "What is Elixir.doctor?",
    answer: "Elixir.doctor is a premium healthcare tourism platform connecting international patients with leading hospitals, specialists, wellness centers, and luxury recovery experiences across India."
  },
  {
    id: "gi-2",
    category: "general",
    question: "Why should I choose India for medical treatment?",
    answer: "India stands out globally by providing:",
    bulletType: "dot",
    bullets: [
      "Internationally accredited hospitals",
      "Globally recognized doctors",
      "Advanced medical technology",
      "Significantly lower treatment costs",
      "Minimal waiting periods"
    ]
  },
  {
    id: "gi-3",
    category: "general",
    question: "Which countries do you serve?",
    answer: "We welcome patients from across English-speaking countries, including the USA, UK, Canada, Australia, New Zealand, Ireland, Singapore, and South Africa."
  },
  {
    id: "gi-4",
    category: "general",
    question: "What happens after I return home?",
    answer: "We continue to support you through:",
    bulletType: "dot",
    bullets: [
      "Online consultations",
      "Follow-up care coordination",
      "Recovery monitoring",
      "Specialist consultation access"
    ]
  },
  {
    id: "gi-5",
    category: "general",
    question: "Can I contact my doctor after treatment?",
    answer: "Yes. We facilitate follow-up consultations whenever medically appropriate to ensure your post-care recovery is tracked."
  }
];

// Countries We Serve
const countriesList = [
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿" },
  { name: "Ireland", code: "IE", flag: "🇮🇪" },
  { name: "Singapore", code: "SG", flag: "🇸🇬" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦" }
];

export default function PatientJourneyPage() {
  const [activeStep, setActiveStep] = useState(2); // Step 3 active by default (idx 2)
  const timelineRef = useRef<HTMLDivElement>(null);

  // FAQ states
  const [activeFaqCategory, setActiveFaqCategory] = useState("insurance");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<string | null>("ib-1");

  // Form states
  const [selectedCountry, setSelectedCountry] = useState("");
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [checkingEligibility, setCheckingEligibility] = useState(false);
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);

  // Sync scroll for active step indicator circle
  useEffect(() => {
    const activeEl = document.getElementById(`step-indicator-${activeStep}`);
    if (activeEl && timelineRef.current) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [activeStep]);

  const handleNextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, journeySteps.length - 1));
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const activeData = journeySteps[activeStep];
  
  // FAQ Filter Logic
  const filteredFaqs = faqsData.filter((faq) => {
    const matchesSearch = searchQuery
      ? faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    // If searching, show matches from any category. Otherwise, match active tab category.
    const matchesCategory = searchQuery ? true : faq.category === activeFaqCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Handle Eligibility Submission
  const handleCheckEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCountry) return;
    
    setCheckingEligibility(true);
    setEligibilityResult(null);
    
    setTimeout(() => {
      setCheckingEligibility(false);
      setEligibilityResult(
        `Great news! Insurance plans in ${selectedCountry} are widely supported for medical tourism in India. An Elixir.doctor insurance coordinator will message you on WhatsApp within 2 hours with eligibility checklists.`
      );
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[#fafbfc] text-slate-800 pt-20 lg:pt-28 selection:bg-brand-teal/20 pb-12">
        
        {/* ======================================================== */}
        {/* SECTION 1: TIMELINE PANEL */}
        {/* ======================================================== */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          {/* Main Timeline Card Container */}
          <div className="bg-white rounded-3xl border border-slate-200/50 shadow-xl shadow-slate-100/40 p-6 sm:p-8 md:p-10 relative overflow-hidden mb-6">
            {/* Header */}
            <div className="text-center space-y-1 mb-8">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#091b35] font-normal tracking-tight">
                Patient Journey
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-light tracking-wide uppercase">
                Your Healing Journey with Elixir.doctor
              </p>
              <div className="flex justify-center items-center gap-1.5 pt-0.5">
                <span className="w-10 h-0.5 bg-amber-600/30" />
                <span className="w-2 h-2 rounded-full border border-amber-600 bg-amber-600/10" />
                <span className="w-10 h-0.5 bg-amber-600/30" />
              </div>
            </div>

            {/* Timeline Slider container */}
            <div className="relative flex items-center">
              
              {/* Left Nav Arrow */}
              <button
                onClick={handlePrevStep}
                disabled={activeStep === 0}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm transition-all hover:scale-105 active:scale-95 z-20 cursor-pointer ${
                  activeStep === 0 ? "opacity-45 pointer-events-none text-slate-300" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Scrolling Track */}
              <div 
                ref={timelineRef}
                className="flex-1 overflow-x-auto no-scrollbar scroll-smooth mx-4 py-8 relative"
              >
                <div className="flex items-start justify-between min-w-[1050px] lg:min-w-0 lg:w-full px-4 relative">
                  
                  {/* Horizontal Connector Line */}
                  <div className="absolute top-[32px] left-[75px] right-[75px] h-[2px] bg-amber-600/20 pointer-events-none" />
                  <div 
                    className="absolute top-[32px] left-[75px] h-[2px] bg-amber-600 pointer-events-none transition-all duration-500 ease-out" 
                    style={{ width: `calc(${(activeStep / (journeySteps.length - 1)) * 100}% - ${(activeStep / (journeySteps.length - 1)) * 150}px)` }}
                  />

                  {/* Step Indicators */}
                  {journeySteps.map((item, idx) => {
                    const StepIcon = item.icon;
                    const isActive = activeStep === idx;
                    return (
                      <div 
                        key={item.step}
                        id={`step-indicator-${idx}`}
                        onClick={() => setActiveStep(idx)}
                        className="flex flex-col items-center group relative cursor-pointer"
                        style={{ width: "150px" }}
                      >
                        {/* Icon Circle Wrapper */}
                        <div className="relative">
                          {isActive && (
                            <div className="absolute inset-[-6px] rounded-full border border-dashed border-amber-500 pointer-events-none" />
                          )}
                          <div className={`w-[64px] h-[64px] rounded-full flex items-center justify-center border transition-all duration-300 ${
                            isActive 
                              ? "bg-[#00382c] border-[#00382c] text-amber-500 shadow-lg shadow-[#00382c]/10 scale-110" 
                              : "bg-white border-amber-600/30 text-amber-600 group-hover:border-amber-600/60 group-hover:scale-105"
                          }`}>
                            <StepIcon className="w-6 h-6" strokeWidth={isActive ? 2 : 1.5} />
                          </div>
                        </div>

                        {/* Content wrapper below Icon Circle */}
                        <div className="w-full flex flex-col items-center relative mt-4">
                          {/* Active Step Highlight Card Background (Hangs below circle) */}
                          {isActive && (
                            <div className="absolute -top-3.5 bottom-[-16px] left-[-10px] right-[-10px] bg-white rounded-2xl border border-slate-200/50 shadow-lg -z-10 transition-all duration-300" />
                          )}

                          {/* Step Number Badge */}
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            isActive ? "bg-amber-600 text-white" : "bg-[#00382c] text-white"
                          }`}>
                            {item.step}
                          </div>

                          {/* Step Title */}
                          <h3 className={`mt-2 font-bold font-serif text-center leading-tight transition-all duration-300 max-w-[130px] ${
                            isActive 
                              ? "text-[#00382c] text-sm sm:text-base scale-105" 
                              : "text-slate-800 group-hover:text-[#00382c] text-xs sm:text-[13px]"
                          }`}>
                            {item.title}
                          </h3>

                          {/* Tagline snippet (shown for all steps) */}
                          <p className={`mt-1.5 text-[10.5px] font-light text-center leading-normal transition-all duration-300 max-w-[135px] ${
                            isActive ? "text-slate-600" : "text-slate-400 group-hover:text-slate-600"
                          }`}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Nav Arrow */}
              <button
                onClick={handleNextStep}
                disabled={activeStep === journeySteps.length - 1}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm transition-all hover:scale-105 active:scale-95 z-20 cursor-pointer ${
                  activeStep === journeySteps.length - 1 ? "opacity-45 pointer-events-none text-slate-300" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Detailed Step Pane (Gold Border Accent on Left) - Temporarily Hidden */}
          {false && (
            <div className="bg-white rounded-3xl border border-slate-200/50 shadow-xl shadow-slate-100/70 p-6 sm:p-8 md:p-10 transition-all duration-500 ease-in-out relative overflow-hidden">
              {/* Top gold line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-[#00382c]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                
                {/* Left Column: Title & Bullet checklist */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/40">
                        STEP {activeData.step}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      <span className="text-xs text-slate-400 font-medium">JOURNEY LOGISTICS</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif text-[#091b35] font-normal leading-snug mt-3">
                      {activeData.title}
                    </h2>
                    <p className="text-slate-500 font-light text-sm mt-2 leading-relaxed">
                      {activeData.desc}
                    </p>

                    <div className="w-16 h-[2px] bg-slate-200 mt-5" />
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 py-2">
                    {activeData.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 group">
                        <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#00382c]/5 border border-[#00382c]/10 text-[#00382c] shrink-0 transition-transform group-hover:scale-105">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm sm:text-base text-slate-700 font-normal leading-tight">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-slate-400 font-light flex items-center gap-1.5">
                    <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Elixir.doctor luxury service standard.</span>
                  </div>
                </div>

                {/* Right Column: Custom Content Blocks */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full relative overflow-hidden">
                    
                    {/* Subtle Background Glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-amber-600/5 blur-xl pointer-events-none" />

                    {/* Header Title of Info Box */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3.5">
                        {activeData.infoTitle}
                      </h4>

                      {/* Timeline specific */}
                      {activeData.infoType === "timeline" && (
                        <div className="flex items-center gap-4 py-4">
                          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/50 flex items-center justify-center text-amber-600 shrink-0">
                            <Clock className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-xl font-serif text-[#091b35] font-normal leading-none">
                              {activeData.infoVal as string}
                            </p>
                            <p className="text-xs text-slate-400 font-light mt-1">
                              Response window guarantee
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Deliverables specific */}
                      {activeData.infoType === "deliverables" && Array.isArray(activeData.infoVal) && (
                        <div className="space-y-3.5 py-1">
                          {(activeData.infoVal as string[]).map((val, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#00382c]/10 text-[#00382c] text-xs font-bold">
                                ✓
                              </span>
                              <span className="text-sm font-semibold text-slate-700">{val}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Included specific */}
                      {activeData.infoType === "included" && Array.isArray(activeData.infoVal) && (
                        <div className="space-y-4 py-1">
                          {(activeData.infoVal as any[]).map((item, idx) => {
                            const ItemIcon = item.icon;
                            return (
                              <div key={idx} className="flex items-center gap-3.5">
                                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                                  <ItemIcon className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Philosophy specific */}
                      {activeData.infoType === "philosophy" && (
                        <div className="py-2">
                          <span className="text-4xl font-serif text-amber-600/30 font-bold leading-none select-none block -mb-2">“</span>
                          <p className="text-base sm:text-lg font-serif italic text-slate-700 leading-relaxed pl-3 border-l-2 border-amber-600/30">
                            {activeData.infoVal as string}
                          </p>
                        </div>
                      )}

                      {/* Highlights specific */}
                      {activeData.infoType === "highlight" && (
                        <div className="flex items-start gap-3.5 py-2">
                          <div className="w-10 h-10 rounded-xl bg-[#00382c]/5 border border-[#00382c]/10 flex items-center justify-center text-[#00382c] shrink-0">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed font-light mt-0.5">
                            {activeData.infoVal as string}
                          </p>
                        </div>
                      )}

                      {/* Premium Options specific */}
                      {activeData.infoType === "premium" && Array.isArray(activeData.infoVal) && (
                        <div className="space-y-3.5 py-1">
                          {(activeData.infoVal as string[]).map((val, idx) => (
                            <div key={idx} className="flex items-center gap-3.5">
                              <span className="w-2 h-2 rounded-full bg-amber-600" />
                              <span className="text-sm font-semibold text-slate-700">{val}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Lifetime Access specific */}
                      {activeData.infoType === "lifetime" && (
                        <div className="space-y-3 py-2">
                          <p className="text-sm text-slate-600 leading-relaxed font-light">
                            {activeData.infoVal as string}
                          </p>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00382c]/5 border border-[#00382c]/10 text-[#00382c] text-xs font-semibold">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Lifetime Support Access</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Link at Bottom */}
                    <div className="pt-6 border-t border-slate-200/50 mt-4 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-light uppercase tracking-wider">
                        Elixir Care Program
                      </span>
                      <a 
                        href="https://wa.me/917300123456?text=Hi,%20I'd%20like%20to%20discuss%20the%20patient%20journey."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00382c] hover:underline"
                      >
                        <span>Inquire Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        {/* ======================================================== */}
        {/* SECTION 2: FAQ, WIDGETS & BANNER LAYOUT */}
        {/* ======================================================== */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: FAQ & Countries We Serve */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* FAQ Container */}
              <div className="space-y-6">
                {/* FAQ Title & Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-serif text-[#091b35] font-normal tracking-tight">
                      Frequently Asked Questions
                    </h2>
                    <div className="w-12 h-0.5 bg-amber-600 mt-2" />
                  </div>

                  {/* Search Input Box */}
                  <div className="relative max-w-md w-full">
                    <input
                      type="text"
                      placeholder="Search your question..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-[13px] bg-white border border-slate-200 rounded-full py-3 pl-5 pr-12 outline-none focus:border-[#00382c] focus:ring-1 focus:ring-[#00382c]/20 transition-all text-slate-800 font-light shadow-2xs"
                    />
                    <Search className="absolute right-4.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* FAQ Main content grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* FAQ categories sidebar (Hide when search is active to focus results) */}
                  {!searchQuery && (
                    <div className="md:col-span-5 flex flex-col space-y-1 bg-white p-2.5 rounded-2xl border border-slate-200/50 shadow-sm md:h-[400px] overflow-y-auto light-scrollbar pr-1.5">
                      {faqCategories.map((cat) => {
                        const CatIcon = cat.icon;
                        const isActive = activeFaqCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            onClick={() => {
                              setActiveFaqCategory(cat.id);
                              setExpandedFaq(null); // Reset accordion
                            }}
                            className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-all text-xs font-semibold cursor-pointer ${
                              isActive
                                ? "bg-[#00382c] text-white shadow-md shadow-[#00382c]/10"
                                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <CatIcon className={`w-4 h-4 ${isActive ? "text-amber-500" : "text-slate-400"}`} />
                              <div className="flex flex-col">
                                <span>{cat.name}</span>
                                <span className={`text-[9.5px] font-light mt-0.5 line-clamp-1 ${isActive ? "text-slate-200" : "text-slate-400"}`}>
                                  {cat.desc}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? "text-white translate-x-0.5" : "text-slate-400"}`} />
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* FAQ Accordions card */}
                  <div className={`${searchQuery ? "col-span-12" : "md:col-span-7"} bg-white p-4 rounded-2xl border border-slate-200/50 shadow-sm md:h-[400px] h-[380px] flex flex-col`}>
                    <div className="flex-1 overflow-y-auto pr-1.5 space-y-3 light-scrollbar">
                      {searchQuery && (
                        <div className="text-xs text-slate-400 font-medium mb-3 sticky top-0 bg-white py-1 z-10 border-b border-slate-100">
                          Search results matching "{searchQuery}" ({filteredFaqs.length} found):
                        </div>
                      )}

                      {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq) => {
                          const isExpanded = expandedFaq === faq.id;
                          return (
                            <div key={faq.id} className="transition-all duration-200">
                              {isExpanded ? (
                                <div className="bg-[#f4f7f6]/80 border border-slate-100 rounded-2xl p-4 text-left transition-all duration-300">
                                  {/* Question Header */}
                                  <button
                                    onClick={() => setExpandedFaq(null)}
                                    className="w-full flex items-center justify-between text-left cursor-pointer"
                                  >
                                    <div className="flex items-center gap-3 flex-1">
                                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200/50 shrink-0 shadow-xs">
                                        <ShieldCheck className="w-4 h-4 text-[#00382c]" />
                                      </div>
                                      <span className="text-xs sm:text-sm font-semibold text-slate-800 pr-4">
                                        {faq.question}
                                      </span>
                                    </div>
                                    <div className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-500">
                                      <Minus className="h-3.5 w-3.5" />
                                    </div>
                                  </button>

                                  {/* Answer Content */}
                                  <div className="pl-11 pt-3 text-xs text-slate-600 leading-relaxed space-y-3">
                                    {searchQuery && (
                                      <div className="inline-block text-[9px] font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/30 mb-1">
                                        {faqCategories.find(c => c.id === faq.category)?.name}
                                      </div>
                                    )}
                                    
                                    <p className="font-light">{faq.answer}</p>
                                    
                                    {faq.bullets && faq.bullets.length > 0 && (
                                      <div className="space-y-2.5 pl-1.5 py-1">
                                        {faq.bullets.map((bullet, bidx) => (
                                          <div key={bidx} className="flex items-start gap-2.5">
                                            {faq.bulletType === "check" ? (
                                              <div className="w-4 h-4 rounded bg-[#00382c]/5 text-[#00382c] flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                                                ✓
                                              </div>
                                            ) : (
                                              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                                            )}
                                            <span className="text-slate-700 font-medium">{bullet}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}

                                    {faq.footer && (
                                      <p className="pt-2 border-t border-slate-100/60 font-light text-[11px] text-slate-400">
                                        {faq.footer}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setExpandedFaq(faq.id)}
                                  className="w-full flex items-center justify-between px-4 py-4 text-left cursor-pointer hover:bg-slate-50/50 transition-all duration-200 border-b border-slate-100 last:border-0"
                                >
                                  <span className="text-xs sm:text-sm font-semibold text-slate-800 pr-4">
                                    {faq.question}
                                  </span>
                                  <div className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-500">
                                    <Plus className="h-3.5 w-3.5" />
                                  </div>
                                </button>
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center py-8 bg-white rounded-2xl border border-dashed border-slate-200">
                          <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                          <p className="text-sm font-semibold text-slate-500">No questions found</p>
                          <p className="text-xs text-slate-400 font-light mt-1">Try checking a different keywords search query</p>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Countries We Serve (Left Bottom, under FAQ) */}
              <div className="relative overflow-hidden bg-white border border-slate-200/50 rounded-3xl p-5 shadow-sm text-left flex flex-col justify-between md:h-[220px] h-auto space-y-4 md:space-y-0">
                {/* World Map Watermark Background */}
                <div 
                  className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[url('/world-map.svg')] bg-[size:100%_auto] bg-center bg-no-repeat z-0" 
                />

                <div className="space-y-1 relative z-10">
                  <h3 className="text-xl font-bold font-serif text-[#091b35] tracking-tight">
                    Countries We Serve
                  </h3>
                  <p className="text-xs text-slate-500 font-light">
                    We proudly welcome patients from English-speaking countries.
                  </p>
                </div>

                {/* Flags Flex Row */}
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 relative z-10">
                  {countriesList.map((c) => (
                    <div 
                      key={c.code} 
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 transition-all duration-200 shadow-2xs"
                    >
                      <img 
                        src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`} 
                        alt={c.name}
                        className="w-6 h-4 object-cover rounded-sm border border-slate-100" 
                      />
                      <span className="text-[11px] font-bold text-slate-800 tracking-tight">{c.name}</span>
                    </div>
                  ))}
                </div>

                {/* Centered CTA Link Button */}
                <div className="flex justify-center pt-1 relative z-10">
                  <a 
                    href="https://wa.me/917300123456?text=Hi,%20I'd%20like%20to%20view%20all%20countries%20you%20support."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl px-7 py-2.5 shadow-sm text-xs font-bold text-slate-700 transition-all duration-200 hover:shadow"
                  >
                    <span>View All Countries</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-500" strokeWidth={3} />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Companion, Insurance Eligibility & Concierge Support Banner */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Companion Card */}
              <div className="bg-white rounded-3xl border border-slate-200/50 shadow-lg p-4 flex flex-col sm:flex-row items-stretch justify-between gap-4 relative overflow-hidden">
                <div className="flex-1 flex flex-col justify-between space-y-3 text-left">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#00382c]">
                      <Users className="w-5 h-5 text-amber-600" />
                      <h3 className="text-sm sm:text-base font-bold font-serif">
                        Traveling with a Companion?
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-light leading-relaxed">
                      A loved one's presence can make your healing journey even better. We take care of everything for your companion.
                    </p>
                  </div>

                  {/* 6 bullet points grid */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#00382c]" /> Accommodation & stay</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#00382c]" /> Local transport</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#00382c]" /> Airport pickup & drop</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#00382c]" /> Sightseeing & activities</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#00382c]" /> Visa support</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#00382c]" /> 24/7 concierge</span>
                  </div>

                  <div>
                    <a 
                      href="https://wa.me/917300123456?text=Hi,%20I'd%20like%20to%20plan%20travel%20for%20a%20patient%20and%20companion."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00382c] hover:underline"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right side portrait image */}
                <div className="w-full sm:w-[130px] shrink-0 h-[160px] sm:h-auto rounded-2xl relative overflow-hidden shadow-inner">
                  <Image
                    src="/couple-walking.png"
                    alt="Travel Companion"
                    fill
                    className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Insurance Eligibility Card */}
              <div className="bg-white rounded-3xl border border-slate-200/50 shadow-lg p-4.5 flex flex-col sm:flex-row items-stretch justify-between gap-5 relative overflow-hidden md:h-[220px] h-auto">
                <div className="flex-1 flex flex-col justify-between space-y-3 text-left">
                  
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#00382c]/5 flex items-center justify-center text-[#00382c] shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5 text-[#00382c]" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-sm sm:text-base font-bold font-serif text-[#091b35]">
                        Will My Insurance Work?
                      </h3>
                      <p className="text-[10.5px] text-slate-500 font-light leading-normal">
                        Check your eligibility and get guidance from our insurance experts.
                      </p>
                    </div>
                  </div>

                  {/* Eligibility Check Form */}
                  {!eligibilityResult ? (
                    <form onSubmit={handleCheckEligibility} className="space-y-2.5">
                      <select
                        required
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 outline-none text-slate-700 font-medium focus:border-[#00382c] cursor-pointer"
                      >
                        <option value="">Select Your Country</option>
                        {countriesList.map((c) => (
                          <option key={c.code} value={c.name}>
                            {c.flag} {c.name}
                          </option>
                        ))}
                      </select>

                      <input
                        type="text"
                        placeholder="Insurance Provider (Optional)"
                        value={insuranceProvider}
                        onChange={(e) => setInsuranceProvider(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl py-2 px-3.5 outline-none text-slate-700 font-medium focus:border-[#00382c] placeholder-slate-400"
                      />

                      <button
                        type="submit"
                        disabled={checkingEligibility}
                        className="w-full bg-[#00382c] text-white py-2.5 rounded-xl text-xs font-bold shadow-md shadow-[#00382c]/5 hover:shadow-[#00382c]/10 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        {checkingEligibility ? (
                          <span>Checking Eligibility...</span>
                        ) : (
                          <>
                            <span>Check Eligibility</span>
                            <ArrowRight className="w-3.5 h-3.5 text-amber-500" strokeWidth={3} />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-3 text-[11px] text-emerald-800 leading-relaxed space-y-2">
                      <p>{eligibilityResult}</p>
                      <button
                        onClick={() => {
                          setEligibilityResult(null);
                          setSelectedCountry("");
                          setInsuranceProvider("");
                        }}
                        className="text-[10px] font-bold text-[#00382c] hover:underline"
                      >
                        Check another provider
                      </button>
                    </div>
                  )}
                </div>

                {/* Right side clipboard image */}
                <div className="w-full sm:w-[130px] shrink-0 h-[160px] sm:h-auto rounded-2xl relative overflow-hidden shadow-inner">
                  <Image
                    src="/insurance-claim-clean.png"
                    alt="Insurance Claim"
                    fill
                    className="object-cover object-center hover:scale-[1.03] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Need Help Planning Your Journey? Banner (Right Bottom) */}
              <div className="bg-[#00382c] text-white rounded-3xl p-4.5 shadow-xl flex flex-col justify-between md:h-[220px] h-auto space-y-3.5 md:space-y-0 relative overflow-hidden">
                {/* Floating Radial Glow */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-amber-600/10 blur-2xl pointer-events-none" />

                <div className="space-y-3 relative z-10 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-amber-600/30 bg-[#00382c] flex items-center justify-center text-amber-500 shadow-md shrink-0">
                      <PhoneCall className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold font-serif leading-tight">
                        Need Help Planning Your Journey?
                      </h3>
                      <p className="text-[10px] text-slate-300 font-light mt-0.5">
                        Our Patient Care Experts are here to assist you 24/7.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-features checklist */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-2 pt-2.5 border-t border-white/10 text-left relative z-10">
                  <div className="flex items-center gap-1.5 text-[8.5px] font-bold uppercase tracking-wider text-slate-300">
                    <span className="text-amber-500 text-xs shrink-0 font-black">✓</span>
                    <span>Medical Opinion</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[8.5px] font-bold uppercase tracking-wider text-slate-300">
                    <span className="text-amber-500 text-xs shrink-0 font-black">✓</span>
                    <span>End-to-End Support</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[8.5px] font-bold uppercase tracking-wider text-slate-300">
                    <span className="text-amber-500 text-xs shrink-0 font-black">✓</span>
                    <span>Travel Assist</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[8.5px] font-bold uppercase tracking-wider text-slate-300">
                    <span className="text-amber-500 text-xs shrink-0 font-black">✓</span>
                    <span>Insurance Guide</span>
                  </div>
                </div>

                {/* CTA Buttons Block */}
                <div className="pt-2.5 border-t border-white/10 relative z-10 flex flex-col gap-2">
                  <Link
                    href="https://wa.me/917300123456?text=Hi,%20I'd%20like%20to%20speak%20to%20a%20patient%20concierge."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-amber-500 text-[#00382c] py-2 rounded-xl text-xs font-bold shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <span>Talk to a Patient Concierge</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="text-center text-[9.5px] text-slate-300">
                    or Call Us: <a href="tel:+919876543210" className="text-white hover:text-amber-500 font-bold transition-colors ml-0.5">+91 98765 43210</a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
