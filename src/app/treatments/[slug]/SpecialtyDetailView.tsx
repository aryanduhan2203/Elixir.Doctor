"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  HeartPulse, Bone, Brain, Ribbon, Baby, Eye, Ear, Smile, Sparkles, Activity, 
  Wind, Droplet, Flame, ShieldAlert, Accessibility, Flower2, Leaf, HandHeart, Heart,
  Check, Star, ArrowRight, Shield, Phone, MapPin, ChevronDown, ChevronRight, Award, ShieldCheck, Users, Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApolloLogo, FortisLogo, MedantaLogo, MaxLogo, ArtemisLogo, BlkMaxLogo } from "@/components/MedicalPartners";

// Data mapping for all 21 categories
export interface SpecialtyData {
  id: string;
  name: string;
  subtitle: string;
  badges: string[];
  overviewDesc: string;
  overviewFeatures: { title: string; desc: string }[];
  subTreatments: { name: string; desc: string }[];
  symptoms: string[];
  whyChoose: { title: string; desc: string }[];
  hospitals: { key: string; name: string; location: string; rating: number }[];
  testimonials: { quote: string; author: string; country: string }[];
  faqs: { q: string; a: string }[];
  icon: React.ComponentType<any>;
  themeColor: string; // Tailwind tint/accent color class
}

export const specialtiesData: Record<string, SpecialtyData> = {
  cardiology: {
    id: "cardiology",
    name: "Cardiology & Heart Care",
    subtitle: "Advanced heart care for a healthier tomorrow. Comprehensive diagnosis, treatment, and rehabilitation by world-class cardiologists.",
    badges: ["World-Class Cardiac Experts", "Advanced Cath Labs", "Minimally Invasive Care", "24/7 Cardiac Emergency"],
    overviewDesc: "Our cardiac sciences center offers comprehensive care for patients with heart conditions. From preventive screenings to complex surgical interventions, our partner hospitals use state-of-the-art diagnostic and surgical tech to achieve optimal outcomes.",
    overviewFeatures: [
      { title: "Comprehensive Cardiac Care", desc: "Full spectrum of heart care from prevention to advanced rehabilitation programs." },
      { title: "Advanced Diagnostics", desc: "Equipped with the latest MRI, CT, and cardiac mapping technology for precise evaluation." },
      { title: "Minimally Invasive Procedures", desc: "State-of-the-art keyhole surgeries and catheter-based therapies for faster recovery." },
      { title: "24/7 Cardiac Emergency Care", desc: "Immediate-response cardiac emergency teams and active round-the-clock cath labs." },
      { title: "Post-Treatment Rehabilitation", desc: "Tailored lifestyle coaching, dietary advice, and structured recovery programs." }
    ],
    subTreatments: [
      { name: "Heart Surgery", desc: "Complex coronary artery bypass grafting (CABG) and corrective open-heart surgeries." },
      { name: "Bypass Surgery", desc: "Re-routing blood flow around blocked arteries to improve blood supply to the heart." },
      { name: "Valve Replacement", desc: "Repairing or replacing damaged heart valves with mechanical or biological options." },
      { name: "Angioplasty", desc: "Minimally invasive balloon and stent procedures to open narrowed coronary arteries." },
      { name: "Arrhythmia Treatment", desc: "Pacemaker installations, defibrillators, and advanced ablation therapies for rhythm control." },
      { name: "Pediatric Cardiology", desc: "Dedicated pediatric heart care and surgeries for congenital heart defects in children." }
    ],
    symptoms: [
      "Chest pain or tightness",
      "Shortness of breath during activity",
      "Irregular or fluttering heartbeats",
      "Chronic fatigue and dizziness",
      "Swelling in the legs, ankles, or feet",
      "Unexplained high blood pressure",
      "Fainting or lightheadedness",
      "Rapid heart rate at rest"
    ],
    whyChoose: [
      { title: "Top Cardiologists with Global Experience", desc: "Board-certified heart specialists trained in leading institutions globally." },
      { title: "State-of-the-Art Cath Labs & ICUs", desc: "Equipped with advanced hybrid operation theaters and recovery wards." },
      { title: "International Accreditations (JCI, NABH)", desc: "Partner clinics comply strictly with global clinical protocol and safety metrics." },
      { title: "End-to-End Care & Travel Assistance", desc: "We manage visa processing, luxury airport pickup, and post-discharge followup." },
      { title: "Transparent Pricing & No Hidden Costs", desc: "Comprehensive treatment packages provided upfront with zero surprise billing." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram, Delhi NCR", rating: 4.9 },
      { key: "apollo", name: "Apollo Hospitals", location: "Chennai / Delhi", rating: 4.8 },
      { key: "fortis", name: "Fortis Healthcare", location: "Gurugram / Mumbai", rating: 4.7 },
      { key: "max", name: "Max Healthcare", location: "New Delhi", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The cardiac team was exceptional. My bypass surgery was smooth, and the recovery support made a huge difference.", author: "Ahmed Khan", country: "Bangladesh" },
      { quote: "Incredible care at a fraction of the cost. The hospital felt like a luxury hotel and the doctors were highly professional.", author: "Sarah Jenkins", country: "United Kingdom" }
    ],
    faqs: [
      { q: "How long is the recovery after heart bypass surgery?", a: "Normal recovery takes 6 to 12 weeks. Most patients can return to light activities within 4 to 6 weeks, depending on their physical health and cardiologist advice." },
      { q: "What are the main diagnostic tests for heart disease?", a: "Common tests include Electrocardiogram (ECG), Echocardiogram, Stress tests, Cardiac CT scan, and Coronary Angiography." },
      { q: "Can I travel back home immediately after an angioplasty?", a: "Typically, we recommend waiting at least 5 to 7 days after angioplasty before flying. Your cardiologist will conduct a fit-to-fly assessment before discharge." }
    ],
    icon: HeartPulse,
    themeColor: "rose"
  },
  orthopedics: {
    id: "orthopedics",
    name: "Orthopedics & Joint Care",
    subtitle: "Regain your mobility and live pain-free. Leading joint replacement surgeries and orthopedic care by renowned bone specialists.",
    badges: ["Joint Replacement Experts", "Robotic-Assisted Surgery", "Comprehensive Rehab", "Minimal Recovery Time"],
    overviewDesc: "Our orthopedic center provides dedicated care for musculoskeletal conditions, spine disorders, and joint degeneration. With robotic-assisted joint replacements and sports medicine, our partners ensure you walk back to active life with confidence.",
    overviewFeatures: [
      { title: "Robotic Joint Replacement", desc: "Highly precise computer-assisted knee and hip replacement surgeries." },
      { title: "Sports Injury Treatment", desc: "Keyhole arthroscopic interventions for ligament, tendon, and meniscus tears." },
      { title: "Spine & Scoliosis Surgery", desc: "Advanced spinal decompression, fusion, and corrective surgeries." },
      { title: "Pediatric Orthopedics", desc: "Corrective treatment for congenital bone disorders and childhood fractures." },
      { title: "Post-Surgical Physiotherapy", desc: "Daily dedicated rehabilitation to maximize mobility and joint strength." }
    ],
    subTreatments: [
      { name: "Knee Replacement", desc: "Partial or total knee arthroplasty using premium biocompatible implants." },
      { name: "Hip Replacement", desc: "Anterior and posterior hip replacement surgeries to cure severe arthritis." },
      { name: "Shoulder Surgery", desc: "Rotator cuff repair, shoulder arthroscopy, and total shoulder replacements." },
      { name: "Spine Surgery", desc: "Microdiscectomy, spinal fusion, and minimally invasive spine stabilization." },
      { name: "Sports Injury Treatment", desc: "ACL/PCL reconstructions, arthroscopy, and advanced physical therapies." },
      { name: "Arthritis Management", desc: "Non-surgical pain relief, biological injections, and custom joint therapy plans." }
    ],
    symptoms: [
      "Severe joint pain worsening with walking",
      "Stiffness in joints, especially in the morning",
      "Swelling, redness, or warmth around a joint",
      "Chronic, radiating back or neck pain",
      "Inability to bear weight on the knee or hip",
      "Reduced range of motion in limbs",
      "Numbness or tingling down legs or arms",
      "Joint deformity or instability"
    ],
    whyChoose: [
      { title: "Top-Tier Robotic Surgical Platforms", desc: "Hospitals equipped with Mako and NAVIO robotic systems for high precision." },
      { title: "High-Performance Implants", desc: "Only FDA-approved, long-lasting FDA implants with 20+ years lifespan used." },
      { title: "Fast-Track Mobilization Protocols", desc: "Patients are safely assisted to walk within 24 hours of joint replacement." },
      { title: "Customized Physiotherapy Care", desc: "Dedicated physical therapists working with patients daily during recovery." },
      { title: "Affordable High-Tech Healthcare", desc: "Premium robotic surgeries at 70% lower cost than in Western countries." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram, Delhi NCR", rating: 4.9 },
      { key: "max", name: "Max Healthcare", location: "New Delhi", rating: 4.8 },
      { key: "fortis", name: "Fortis Healthcare", location: "Gurugram", rating: 4.7 },
      { key: "artemis", name: "Artemis Hospitals", location: "Gurugram", rating: 4.8 }
    ],
    testimonials: [
      { quote: "I can walk without pain for the first time in 10 years after my robotic knee replacement. Highly recommend Elixir.Doctor!", author: "Robert Miller", country: "United States" },
      { quote: "The physiotherapy team was incredibly patient. The care was absolute luxury from arrival to departure.", author: "Nadia Al-Saeed", country: "Oman" }
    ],
    faqs: [
      { q: "How long will a knee or hip replacement implant last?", a: "Modern joint implants are highly durable and typically last between 15 to 25 years, depending on the patient's lifestyle and weight." },
      { q: "When can I walk after joint replacement surgery?", a: "Under our fast-track protocols, patients are assisted to stand and take light steps with support within 12 to 24 hours post-surgery." },
      { q: "How long should I stay in India for joint replacement?", a: "We recommend a stay of 10 to 14 days. This allows for safe suture removal, essential early physiotherapy, and doctor approval for travel." }
    ],
    icon: Bone,
    themeColor: "blue"
  },
  neurology: {
    id: "neurology",
    name: "Neurology & Neurosurgery",
    subtitle: "Precision care for the brain, spine, and nervous system. Advanced treatments for complex neurological conditions by top experts.",
    badges: ["Neuro-Microscopes Equipped", "Complex Spine Surgeons", "Stroke Care units", "Integrated Neuro-Rehab"],
    overviewDesc: "Our center of excellence in neurological sciences offers state-of-the-art surgical and medical therapies for brain tumors, stroke, epilepsy, and spinal disorders. Our network uses intraoperative MRI and navigation systems for ultimate precision.",
    overviewFeatures: [
      { title: "Intraoperative Navigation", desc: "Using advanced brain-mapping systems to perform safe, complex craniotomies." },
      { title: "Endovascular Neurosurgery", desc: "Minimally invasive catheter treatments for aneurysms and strokes." },
      { title: "Comprehensive Epilepsy Care", desc: "Medical management, EEG mapping, and surgical solutions for seizures." },
      { title: "Spinal Decompression", desc: "Microscopic surgeries to treat herniated discs, stenosis, and spinal tumors." },
      { title: "Neuro-Rehabilitation", desc: "Specialist-led physical, speech, and occupational therapies for recovery." }
    ],
    subTreatments: [
      { name: "Brain Surgery", desc: "Tumor removals, craniotomies, and deep brain stimulation (DBS) for Parkinson's." },
      { name: "Stroke Treatment", desc: "Rapid thrombolytic therapy and mechanical thrombectomy for ischemic strokes." },
      { name: "Spine Disorders", desc: "Treating slipped discs, spinal fractures, and spinal cord injuries." },
      { name: "Epilepsy Treatment", desc: "Expert drug therapy matching, video EEG monitoring, and surgery options." },
      { name: "Parkinson's Management", desc: "Comprehensive drug titration and advanced surgical Deep Brain Stimulation." },
      { name: "Neuro Rehabilitation", desc: "Dedicated physical and cognitive therapies to restore independent living." }
    ],
    symptoms: [
      "Frequent, severe, or worsening headaches",
      "Numbness, tingling, or weakness in limbs",
      "Sudden loss of balance or coordination",
      "Seizures or temporary loss of awareness",
      "Memory loss, confusion, or speech changes",
      "Double vision or sudden vision impairment",
      "Tremors or difficulty walking",
      "Difficulty swallowing or facial weakness"
    ],
    whyChoose: [
      { title: "Intraoperative MRI (BrainSUITE)", desc: "Enables real-time imaging during neurosurgery to ensure complete tumor removal." },
      { title: "Pioneering DBS Specialists", desc: "Experienced surgeons with high success rates in Parkinson's and tremor relief." },
      { title: "Global Accredited ICUs", desc: "Dedicated Neurological Intensive Care Units with round-the-clock specialists." },
      { title: "Luxury Healing Environment", desc: "Private recovery rooms designed to minimize stress and promote neural recovery." },
      { title: "Integrated Medical Support", desc: "Full coordination between neurologists, neurosurgeons, and therapists." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram, Delhi NCR", rating: 4.9 },
      { key: "max", name: "Max Healthcare", location: "New Delhi", rating: 4.8 },
      { key: "apollo", name: "Apollo Hospitals", location: "Delhi / Chennai", rating: 4.8 },
      { key: "blk-max", name: "BLK-Max Hospital", location: "New Delhi", rating: 4.7 }
    ],
    testimonials: [
      { quote: "The neurosurgeons saved my life. They successfully removed my brain tumor with no neurological deficits.", author: "Elena Rostova", country: "Uzbekistan" },
      { quote: "Highly professional service. The DBS surgery has vastly improved my father's Parkinson's symptoms.", author: "Mohamed Al-Balushi", country: "Kuwait" }
    ],
    faqs: [
      { q: "What is Deep Brain Stimulation (DBS)?", a: "DBS is a surgical procedure where electrodes are implanted in specific brain areas to generate electrical impulses that regulate abnormal impulses, primarily used for Parkinson's disease." },
      { q: "How long is hospital stay after brain tumor surgery?", a: "Typically, patients stay in the hospital for 5 to 7 days, including 1 or 2 days in the Neuro-ICU for monitoring." },
      { q: "What is the timeline for neuro-rehabilitation?", a: "Rehabilitation starts immediately after acute treatment. The duration varies from a few weeks to several months based on recovery goals." }
    ],
    icon: Brain,
    themeColor: "purple"
  },
  oncology: {
    id: "oncology",
    name: "Oncology (Cancer Care)",
    subtitle: "World-class, compassionate cancer treatments. Combining advanced surgical oncology, chemotherapy, immunotherapy, and bone marrow transplants.",
    badges: ["Immunotherapy & Targeted", "CyberKnife Radiotherapy", "BMT Excellence Centers", "Multi-Disciplinary Board"],
    overviewDesc: "Our comprehensive oncology centers provide cutting-edge therapies tailored to individual genetic profiles. A tumor board of medical, surgical, and radiation specialists reviews every case to define the ultimate roadmap to remission.",
    overviewFeatures: [
      { title: "Surgical Oncology", desc: "Highly precise cancer surgeries including minimally invasive and robotic resections." },
      { title: "Precision Radiotherapy", desc: "Targeted tumor destruction using CyberKnife, Proton Beam, and RapidArc technology." },
      { title: "Systemic Therapies", desc: "Advanced chemotherapy, molecular targeted therapies, and modern immunotherapies." },
      { title: "Bone Marrow Transplant", desc: "Dedicated clean-room BMT units for leukemia, lymphoma, and myeloma." },
      { title: "Palliative & Supportive Care", desc: "Pain control, nutritional support, and psychological counseling for patients." }
    ],
    subTreatments: [
      { name: "Chemotherapy", desc: "Tailored regimens to destroy cancer cells using premium, original pharmaceuticals." },
      { name: "Radiation Therapy", desc: "Precise radiotherapy preserving surrounding healthy tissue using CyberKnife." },
      { name: "Surgical Oncology", desc: "Tumor removals, breast-conserving surgeries, and robotic cancer resections." },
      { name: "Immunotherapy", desc: "Harnessing the patient's immune system to identify and destroy cancer cells." },
      { name: "Bone Marrow Transplant", desc: "Autologous and allogeneic transplants performed in specialized sterile wings." },
      { name: "Precision Oncology", desc: "Genetic sequencing of tumors to select highly targeted drugs for treatment." }
    ],
    symptoms: [
      "Unexplained, rapid weight loss",
      "Persistent, unexplained fatigue",
      "New lumps or thickening under the skin",
      "Changes in bowel or bladder habits",
      "Persistent cough or difficulty breathing",
      "Unexplained bleeding or bruising",
      "Chronic pain that doesn't resolve",
      "Skin changes or changes in existing moles"
    ],
    whyChoose: [
      { title: "Advanced Tumor Board Review", desc: "Every patient's report is analyzed by a panel of 8+ leading oncology experts." },
      { title: "Proton Beam & CyberKnife", desc: "Access to next-generation radiotherapy machines for sub-millimeter precision." },
      { title: "High-End BMT Isolation Wards", desc: "Equipped with HEPA filters to maximize safety for immunocompromised patients." },
      { title: "Compassionate Care Managers", desc: "Personal assistants guide you through every clinical appointment." },
      { title: "Significant Cost Benefits", desc: "Advanced cancer therapies available at 60-80% lower cost than Western centers." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram, Delhi NCR", rating: 4.9 },
      { key: "apollo", name: "Apollo Proton Cancer Center", location: "Chennai", rating: 4.9 },
      { key: "max", name: "Max Super Speciality", location: "New Delhi", rating: 4.8 },
      { key: "blk-max", name: "BLK-Max Hospital", location: "New Delhi", rating: 4.7 }
    ],
    testimonials: [
      { quote: "The Proton Beam Therapy at Apollo Chennai was world-class. Today I am cancer-free, thanks to their team.", author: "David Vance", country: "Canada" },
      { quote: "They managed my bone marrow transplant with ultimate care. The staff felt like family during my 30 days in isolation.", author: "Fatima Yusuf", country: "Nigeria" }
    ],
    faqs: [
      { q: "What is a Bone Marrow Transplant (BMT)?", a: "BMT is a procedure that replaces damaged or destroyed bone marrow stem cells with healthy stem cells. It can be autologous (using patient's cells) or allogeneic (using donor's cells)." },
      { q: "How long does a chemotherapy cycle last?", a: "Cycles typically last 1 to 4 weeks, followed by a rest period. A full course usually comprises 4 to 8 cycles, depending on cancer stage and type." },
      { q: "Are international clinical protocols followed?", a: "Yes, our partner hospitals strictly adhere to international cancer treatment guidelines, including NCCN and ESMO protocols." }
    ],
    icon: Ribbon,
    themeColor: "emerald"
  },
  fertility: {
    id: "fertility",
    name: "Fertility & Reproductive Medicine",
    subtitle: "Embracing your journey to parenthood. High-success IVF treatments, fertility preservation, and compassionate reproductive care.",
    badges: ["High Success IVF Rates", "Advanced ICSI & PGD Labs", "Fertility Preservation", "Compassionate Care Teams"],
    overviewDesc: "Our reproductive medicine centers combine state-of-the-art embryology labs with renowned fertility doctors to help couples realize their dreams of starting a family. We offer customized treatments with complete confidentiality.",
    overviewFeatures: [
      { title: "Advanced IVF Programs", desc: "Tailored ovulation induction and embryo transfer protocols for maximum success." },
      { title: "Intracytoplasmic Sperm Injection", desc: "ICSI procedure to assist fertilization in cases of male-factor infertility." },
      { title: "Pre-implantation Genetic Testing", desc: "PGT-A/PGT-M testing to screen embryos for chromosomal abnormalities." },
      { title: "Fertility Preservation", desc: "Oocyte (egg) and sperm freezing for career planning or medical reasons." },
      { title: "Reproductive Keyhole Surgery", desc: "Hysteroscopy and laparoscopy to correct uterine anomalies or fibroids." }
    ],
    subTreatments: [
      { name: "IVF", desc: "In-Vitro Fertilization combining eggs and sperm in our advanced embryology laboratory." },
      { name: "IUI", desc: "Intrauterine Insemination, placing washed sperm directly into the uterus during ovulation." },
      { name: "Egg Freezing", desc: "Cryopreserving healthy eggs using vitrification for future family planning." },
      { name: "Male Fertility Treatment", desc: "Micro-TESE surgeries, hormonal balancing, and advanced sperm wash procedures." },
      { name: "Surrogacy Support", desc: "Legal coordination, medical support, and IVF procedures for surrogacy." },
      { name: "Reproductive Surgery", desc: "Corrective laparoscopic surgeries for endometriosis, tubal blockages, and polyps." }
    ],
    symptoms: [
      "Inability to conceive after 1 year of unprotected intercourse",
      "Irregular, light, or completely absent menstrual periods",
      "History of multiple miscarriages (two or more)",
      "Severe menstrual cramps or pelvic pain (endometriosis sign)",
      "Known low sperm count or abnormal sperm morphology",
      "Polycystic Ovary Syndrome (PCOS) diagnosis",
      "Advanced maternal age (35 years or older)",
      "Prior cancer therapy needing fertility options"
    ],
    whyChoose: [
      { title: "State-of-the-Art Embryology Labs", desc: "Cleanroom Class 10,000 labs to ensure ideal environment for embryo development." },
      { title: "Experienced Embryologists", desc: "Senior embryologists trained in advanced micro-manipulation techniques." },
      { title: "Comprehensive Genetic Screening", desc: "PGT capability to prevent transmission of hereditary genetic conditions." },
      { title: "High Confidentiality Standards", desc: "Strict privacy safeguards for all patient records and donor information." },
      { title: "Affordable Package Deals", desc: "Multiple cycle IVF packages available at 1/4th the price in the West." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram, Delhi NCR", rating: 4.9 },
      { key: "apollo", name: "Apollo Cradle & Fertility", location: "Delhi / Bangalore", rating: 4.8 },
      { key: "artemis", name: "Artemis Hospitals", location: "Gurugram", rating: 4.7 }
    ],
    testimonials: [
      { quote: "After two failed cycles in my home country, we succeeded on our first attempt with Elixir.Doctor. We are forever grateful.", author: "Grace Bennett", country: "Australia" },
      { quote: "The level of care and transparency was outstanding. The clinic felt incredibly supportive during a stressful time.", author: "Aisha Al-Hashimi", country: "Qatar" }
    ],
    faqs: [
      { q: "What is the average success rate of IVF?", a: "Success rates depend on age and health factors, ranging from 45% to 65% per embryo transfer. For women under 35, rates are typically higher." },
      { q: "How long must we stay for an IVF cycle?", a: "A complete cycle requires a stay of about 20 to 25 days. Alternatively, egg stimulation can start at home, reducing stay in India to 10-12 days." },
      { q: "Is Pre-implantation Genetic Testing (PGT) legal?", a: "Yes. PGT is legal for identifying genetic abnormalities and screening embryos, helping to ensure healthy pregnancies." }
    ],
    icon: Baby,
    themeColor: "pink"
  },
  "womens-health": {
    id: "womens-health",
    name: "Women's Health",
    subtitle: "Dedicated, comprehensive care for every stage of a woman's life. From advanced gynecology and maternity to menopause support.",
    badges: ["Dedicated Gyne-Oncologists", "High-Risk Pregnancy Care", "Laparoscopic Gyne-Surgery", "Holistic Wellness Support"],
    overviewDesc: "Our partner hospitals provide comprehensive medical care tailored for women. We combine expert clinical services in maternity, reproductive health, and gyne-oncology with comfortable, private, and nurturing environments.",
    overviewFeatures: [
      { title: "Maternity & Birthing Suites", desc: "Luxury, home-like labor-delivery rooms with 24/7 neonatal backup support." },
      { title: "Keyhole Gyne-Surgery", desc: "Minimally invasive laparoscopy for fibroids, cysts, and hysterectomies." },
      { title: "High-Risk Pregnancy Care", desc: "Specialist maternal-fetal medicine teams managing complex maternal conditions." },
      { title: "Preventive Screenings", desc: "Comprehensive screening packages including mammogram, Pap smear, and HPV." },
      { title: "Menopause Management", desc: "Tailored hormone replacement therapy (HRT), nutritional and bone health care." }
    ],
    subTreatments: [
      { name: "Gynecology", desc: "Treatment for menstrual disorders, PCOS, pelvic pain, and urinary incontinence." },
      { name: "Maternity Care", desc: "Nurturing prenatal care, luxury labor rooms, and comprehensive postpartum support." },
      { name: "High-Risk Pregnancy", desc: "Dedicated maternal-fetal specialists for patients with hypertension, diabetes, or multiples." },
      { name: "Fibroid Treatment", desc: "Laparoscopic myomectomy, uterine artery embolization (UFE), and medical therapy." },
      { name: "Endometriosis Treatment", desc: "Advanced pain management, hormonal suppression, and laparoscopic excision surgery." },
      { name: "Menopause Care", desc: "Hormone therapy, bone density screening, and lifestyle management plans." }
    ],
    symptoms: [
      "Abnormally heavy or painful menstrual bleeding",
      "Irregular periods or postmenopausal bleeding",
      "Pelvic pain or pressure in the lower abdomen",
      "Lumps detected in breast tissue",
      "Chronic vaginal itching, burning, or discharge",
      "Frequent, painful, or urgent urination",
      "Hot flashes, night sweats, and mood changes",
      "Difficulty conceiving or recurrent pregnancy loss"
    ],
    whyChoose: [
      { title: "All-Female Care Teams", desc: "Option to choose female gynecologists, surgeons, and nurses for absolute comfort." },
      { title: "Advanced Laparoscopic Center", desc: "Surgical facilities offering minor-incision cosmetic-level closure options." },
      { title: "Neonatal Level-III NICU Care", desc: "Highest tier NICU units to ensure complete safety for premature births." },
      { title: "Luxury Postnatal Suites", desc: "Recovery rooms offering five-star amenities for the mother and companion." },
      { title: "Comprehensive Preventive Screens", desc: "Early detection clinics equipped with digital 3D mammography systems." }
    ],
    hospitals: [
      { key: "apollo", name: "Apollo Cradle & Women's Hospital", location: "Delhi / Bangalore", rating: 4.8 },
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram", rating: 4.9 },
      { key: "fortis", name: "Fortis La Femme", location: "New Delhi / Bengaluru", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The high-risk pregnancy team was amazing. They managed my gestational diabetes perfectly, and my baby was born healthy.", author: "Marie Dubois", country: "France" },
      { quote: "Had my fibroid removal surgery via keyhole surgery. I was walking on day 2 and had almost no visible scars.", author: "Linda Mbeki", country: "South Africa" }
    ],
    faqs: [
      { q: "What is keyhole gynecological surgery?", a: "Laparoscopy, or keyhole surgery, uses small incisions and a camera to operate. It results in significantly less pain, minimal scarring, and faster recovery." },
      { q: "At what age should women start screening for breast cancer?", a: "We recommend women start receiving annual mammograms at age 40, or earlier if they have a family history of breast cancer." },
      { q: "What options are available for fibroid removal?", a: "Options range from medication to uterine artery embolization and surgical removal (myomectomy) either laparoscopically or robotically." }
    ],
    icon: Heart,
    themeColor: "pink"
  },
  "mens-health": {
    id: "mens-health",
    name: "Men's Health",
    subtitle: "Urological excellence and dedicated treatments for men's health. Specializing in advanced prostate care, ED, and male fertility.",
    badges: ["Renowned Urologists", "GreenLight Laser Prostate", "ED Therapy Options", "Total Confidentiality"],
    overviewDesc: "Our men's health and urology centers offer comprehensive care for male reproductive and urinary disorders. Using next-generation laser therapies and microscopic surgeries, we resolve complex issues with complete discretion.",
    overviewFeatures: [
      { title: "Advanced Prostate Care", desc: "Minimally invasive laser surgery (HoLEP/GreenLight) for benign prostatic hyperplasia." },
      { title: "Erectile Dysfunction Clinic", desc: "Multi-modality therapies including medication, shockwave therapy, and penile implants." },
      { title: "Micro-Neurosurgical Urology", desc: "Microscopic surgeries for varicocele, vasectomy reversals, and sperm retrieval." },
      { title: "Kidney Stone Laser Care", desc: "RIRS and lithotripsy for painless, quick removal of urinary tract stones." },
      { title: "Urological Cancer Care", desc: "Robotic surgeries for prostate, bladder, and kidney malignancies." }
    ],
    subTreatments: [
      { name: "Urology", desc: "Comprehensive management of urinary tract infections, stone disease, and bladder issues." },
      { name: "Erectile Dysfunction Treatment", desc: "Shockwave therapies, pharmacological solutions, and premium penile prosthesis implants." },
      { name: "Prostate Care", desc: "Laser prostatectomy, PSA screenings, and advanced robotic prostatectomies." },
      { name: "Male Infertility", desc: "Varicocelectomy, micro-TESE, and medical optimization of sperm health parameters." },
      { name: "Testosterone Therapy", desc: "Safe, monitored bioidentical hormone replacements for low testosterone levels." }
    ],
    symptoms: [
      "Frequent urination, especially during the night",
      "Difficulty starting or weak urine stream",
      "Blood detected in urine or semen",
      "Difficulty achieving or maintaining an erection",
      "Pain or swelling in the testicles",
      "Lower back, hip, or pelvis discomfort",
      "Chronic fatigue and low libido",
      "Painful urination or burning sensation"
    ],
    whyChoose: [
      { title: "Robotic Urology Experts", desc: "Surgeons with extensive experience operating DaVinci robotic platforms." },
      { title: "GreenLight Laser Technology", desc: "Bloodless, day-care prostate surgeries with immediate relief of symptoms." },
      { title: "FDA-Approved Implants", desc: "Rigorous use of premium Coloplast and Boston Scientific penile implants." },
      { title: "Discrete Counseling Rooms", desc: "Dedicated clinics designed to protect and prioritize patient privacy." },
      { title: "Fast-Track Kidney Stone Care", desc: "Same-day discharge for laser lithotripsy and stone extraction procedures." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram, Delhi NCR", rating: 4.9 },
      { key: "max", name: "Max Healthcare", location: "New Delhi", rating: 4.8 },
      { key: "apollo", name: "Apollo Hospitals", location: "Chennai", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The penile implant procedure was life-changing. Excellent medical service, complete privacy, and elite care.", author: "Jackson Peters", country: "United States" },
      { quote: "The laser kidney stone removal took less than an hour. I was back at my hotel the same afternoon with no pain.", author: "Adnan Rahim", country: "Iraq" }
    ],
    faqs: [
      { q: "What is GreenLight Laser Surgery for prostate?", a: "It is a minimally invasive surgery using a laser to vaporize overgrown prostate tissue. It offers rapid symptom relief, minimal bleeding, and quick recovery." },
      { q: "Is ED shockwave therapy painful?", a: "No, it is a non-invasive, pain-free outpatient procedure that uses low-intensity sound waves to stimulate blood flow. No anesthesia is required." },
      { q: "What is the recovery timeline for a penile implant?", a: "Patients typically stay in India for 7 to 10 days. The implant can be safely used after 6 weeks post-surgery." }
    ],
    icon: Shield,
    themeColor: "blue"
  },
  pediatrics: {
    id: "pediatrics",
    name: "Pediatrics & Child Care",
    subtitle: "Nurturing medical care for infants, children, and adolescents. Specializing in pediatric surgeries, cardiology, and neonatal care.",
    badges: ["Level-III NICU Care", "Pediatric Surgery Experts", "Congenital Heart Care", "Child-Friendly Wards"],
    overviewDesc: "Our pediatric science units provide a nurturing, warm, and highly specialized environment for young patients. From routine pediatric treatments to complex neonatal surgeries, our doctors deliver world-class care with empathy.",
    overviewFeatures: [
      { title: "Dedicated Pediatric ICU", desc: "Advanced PICU and Level-III NICU units staffed with specialist neonatologists." },
      { title: "Congenital Heart Surgeries", desc: "Correcting pediatric cardiac anomalies (ASD, VSD, Tetralogy of Fallot)." },
      { title: "Pediatric Neurosurgery", desc: "Advanced micro-neurosurgical therapies for hydrocephalus, tumors, and epilepsy." },
      { title: "Child-Friendly Environment", desc: "Pediatric wards and play areas designed to reduce medical stress for kids." },
      { title: "Neonatal Transport Support", desc: "Air-ambulance transport incubators with specialized critical care capabilities." }
    ],
    subTreatments: [
      { name: "Pediatric Surgery", desc: "Corrective gastrointestinal, urological, and orthopedic surgeries for children." },
      { name: "Neonatal Care", desc: "Advanced life support and monitoring for premature, underweight, or sick newborns." },
      { name: "Child Cardiology", desc: "Echocardiography and keyhole closures of cardiac holes in babies." },
      { name: "Pediatric Neurology", desc: "Managing epilepsy, cerebral palsy, and developmental milestones." },
      { name: "Vaccinations", desc: "Comprehensive global immunization schedules provided in sterile child clinics." }
    ],
    symptoms: [
      "Persistent high fever in infants",
      "Difficulty breathing or rapid respiration in babies",
      "Bluish tint on skin or lips (cyanosis)",
      "Unusual lethargy or refusal to feed",
      "Chronic abdominal pain, vomiting, or diarrhea",
      "Delayed physical or developmental milestones",
      "Frequent, unexplained seizures or fits",
      "Severe joint pain or swelling in children"
    ],
    whyChoose: [
      { title: "Renowned Pediatric Surgeons", desc: "Highly skilled doctors specializing exclusively in delicate child tissues." },
      { title: "Advanced Neonatology Facilities", desc: "Incubator systems mimicking maternal womb environments to protect delicate lives." },
      { title: "Parent-Accompanied Recovery Wards", desc: "Private suites built to accommodate parents comfortably during hospital stays." },
      { title: "Multidisciplinary Care Boards", desc: "Immediate collaboration between child cardiologists, neurosurgeons, and therapists." },
      { title: "Safe, Sterilized Pediatric Units", desc: "Strict hygiene protocols to prevent hospital-acquired infections in children." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram, Delhi NCR", rating: 4.9 },
      { key: "apollo", name: "Apollo Children's Hospital", location: "Chennai", rating: 4.9 },
      { key: "fortis", name: "Fortis Memorial Research Institute", location: "Gurugram", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The pediatric cardiologists at Medanta closed my daughter's heart hole successfully. We will forever appreciate their care.", author: "Samuel Kamau", country: "Kenya" },
      { quote: "Excellent doctors and extremely friendly nurses. They made my son feel comfortable and happy throughout his stay.", author: "Zahra Hassan", country: "Somalia" }
    ],
    faqs: [
      { q: "Is neonatal transport safe for international travel?", a: "Yes. Our team coordinates specialized medical air transport with neonatal incubators and pediatric critical care doctors on board." },
      { q: "How long is recovery for pediatric cardiac surgery?", a: "Most pediatric heart closures require a hospital stay of 5 to 7 days, with complete tissue healing within 4 to 6 weeks." },
      { q: "What vaccinations are required before coming to India?", a: "Routine pediatric vaccinations are recommended. Our team will coordinate a localized pre-travel immunization guide based on age." }
    ],
    icon: Baby,
    themeColor: "orange"
  },
  dental: {
    id: "dental",
    name: "Dental Care & Rehabilitation",
    subtitle: "Achieve the perfect, healthy smile. Advanced dental implants, cosmetic smile makeovers, and full-mouth rehabilitation by elite orthodontists.",
    badges: ["Full-Mouth Dental Implants", "Smile Makeover Specialists", "3D Intraoral Scanners", "Pain-Free Procedures"],
    overviewDesc: "Our dental sciences centers offer cutting-edge dental treatments utilizing modern 3D imaging, computer-guided implant planning, and painless laser dentistry. We specialize in completing smile transformations in minimal sessions.",
    overviewFeatures: [
      { title: "Computer-Guided Implants", desc: "Highly precise implant placement using 3D surgical guides for faster healing." },
      { title: "Digital Smile Design", desc: "Interactive visualization tools to preview and customize your smile before treatment." },
      { title: "Full-Mouth Rehabilitation", desc: "Comprehensive restoration of damaged teeth to achieve absolute functional health." },
      { title: "Laser Dentistry", desc: "Painless gum contouring and cavity treatments with minimal bleeding." },
      { title: "Sedation & Sleep Dentistry", desc: "Ideal for patients with dental anxiety, ensuring an absolute stress-free process." }
    ],
    subTreatments: [
      { name: "Dental Implants", desc: "Single, multiple, or All-on-4 implants using premium titanium and ceramic crowns." },
      { name: "Cosmetic Dentistry", desc: "Porcelain veneers, aesthetic bonding, and advanced laser teeth whitening." },
      { name: "Root Canal", desc: "Microscopic, single-sitting root canal treatments with high accuracy." },
      { name: "Orthodontics", desc: "Clear aligners (Invisalign) and customized lingual braces for teeth alignment." },
      { name: "Smile Makeovers", desc: "A combination of veneers, crowns, and gum reshaping to create a perfect smile." },
      { name: "Full Mouth Rehabilitation", desc: "Restoring vertical dimension, replacement of all missing teeth, and bite correction." }
    ],
    symptoms: [
      "Severe or persistent toothache",
      "Bleeding, swollen, or receding gums",
      "Missing teeth affecting chewing or speech",
      "Severely discolored, chipped, or cracked teeth",
      "Chronic bad breath or metallic taste",
      "Loose teeth or unstable dentures",
      "Pain in jaw joints or clicking sounds (TMJ)",
      "Difficulty opening the mouth comfortably"
    ],
    whyChoose: [
      { title: "All-on-4 Implant Specialization", desc: "Regain complete chewing function with only four implants in a single trip." },
      { title: "Premium Dental Ceramics", desc: "Using durable E-Max and Zirconia materials for natural-looking teeth." },
      { title: "Immediate Loading Implants", desc: "Get temporary teeth fitted on the same day as the implant surgery." },
      { title: "In-House Digital Dental Labs", desc: "Ensures immediate alterations, quick crown fabrication, and custom shading." },
      { title: "Unbeatable Value Packages", desc: "Complete smile transformations at 80% lower cost than UK or US dental clinics." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram", rating: 4.8 },
      { key: "max", name: "Max Dental Care", location: "New Delhi", rating: 4.8 },
      { key: "apollo", name: "Apollo White Dental", location: "Delhi / Bangalore", rating: 4.7 }
    ],
    testimonials: [
      { quote: "I received All-on-4 dental implants. The procedure was painless and cost only a fraction of my quote in London. Excellent!", author: "David Vance", country: "United Kingdom" },
      { quote: "The cosmetic smile design was amazing. The veneers look incredibly natural, and the doctor was a true artist.", author: "Amara Okoye", country: "Nigeria" }
    ],
    faqs: [
      { q: "What is the All-on-4 dental implant technique?", a: "It is a revolutionary technique where an entire arch of teeth is supported by only four implants, reducing bone grafting requirements and shortening recovery." },
      { q: "How long does a smile makeover take?", a: "A standard smile makeover with veneers or crowns typically requires two visits to the clinic over a period of 5 to 7 days." },
      { q: "Are the dental implants guaranteed?", a: "Yes, our partner clinics use implants from leading manufacturers (Nobel Biocare, Straumann) which carry lifetime international warranties." }
    ],
    icon: Smile,
    themeColor: "indigo"
  },
  "eye-care": {
    id: "eye-care",
    name: "Eye Care & Ophthalmology",
    subtitle: "Clear, crisp vision for a brighter life. Advanced LASIK, cataract surgeries, and specialized retina treatments.",
    badges: ["LASIK / SMILE Specialists", "Femtosecond Cataract Laser", "Retina Care Experts", "Same-Day Discharge"],
    overviewDesc: "Our partner ophthalmology centers combine highly skilled eye specialists with advanced laser technology. We specialize in correcting refractive errors, replacing cloudy cataracts, and managing complex retinal disorders.",
    overviewFeatures: [
      { title: "Laser Vision Correction", desc: "SMILE and Contoura LASIK for precise correction of spectacles power." },
      { title: "Femtosecond Laser Cataract", desc: "Blade-free cataract removal with premium multifocal and toric lens implants." },
      { title: "Retina & Vitreous Clinic", desc: "Advanced laser treatments for diabetic retinopathy and macular degeneration." },
      { title: "Glaucoma Care Unit", desc: "Early diagnostic mapping and micro-bypass surgical shunts to preserve vision." },
      { title: "Pediatric Ophthalmology", desc: "Squint corrections and pediatric vision development programs." }
    ],
    subTreatments: [
      { name: "LASIK", desc: "Blade-free, personalized laser eye surgery to eliminate dependence on glasses." },
      { name: "Cataract Surgery", desc: "Micro-incision lens replacement using advanced premium multifocal intraocular lenses." },
      { name: "Retina Treatment", desc: "Vitrectomy surgeries and specialized intravitreal injections for retinal health." },
      { name: "Glaucoma Care", desc: "Laser therapy and filtration surgeries to manage intraocular pressure." },
      { name: "Cornea Treatment", desc: "Corneal transplants (DMEK/DALK) and cross-linking for keratoconus correction." }
    ],
    symptoms: [
      "Blurry, hazy, or double vision",
      "Difficulty reading or seeing in dim light",
      "Seeing halos around lights, especially at night",
      "Sudden flashes of light or floating spots",
      "Gradual loss of peripheral vision",
      "Persistent eye redness, pain, or dry sensation",
      "Sensitivity to light or glare",
      "Distorted lines or wavy appearance of objects"
    ],
    whyChoose: [
      { title: "Contoura Vision LASIK", desc: "Advanced topography-guided laser system offering vision correction beyond 20/20." },
      { title: "Premium Multifocal Lenses", desc: "Implantable lenses providing clear vision at close, intermediate, and far distances." },
      { title: "Painless Day-Care Procedures", desc: "Cataract and LASIK surgeries completed in 15 minutes with drop-based anesthesia." },
      { title: "State-of-the-Art Diagnostics", desc: "High-definition OCT scanners and digital mapping for early disease detection." },
      { title: "Unmatched Medical Tourism Savings", desc: "Advanced refractive surgeries at a small fraction of the cost in Western markets." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta Eye Clinic", location: "Gurugram", rating: 4.8 },
      { key: "apollo", name: "Apollo Hospitals Ophthalmology", location: "Chennai", rating: 4.8 },
      { key: "max", name: "Max Eye Care", location: "New Delhi", rating: 4.7 }
    ],
    testimonials: [
      { quote: "Contoura LASIK was amazing. I had zero pain and woke up next morning with 20/15 vision. Spectacular service!", author: "Liam O'Connor", country: "Ireland" },
      { quote: "My father had bilateral laser cataract surgery. The process was quick, and he can read the newspaper now without glasses.", author: "Youssef Mansour", country: "Egypt" }
    ],
    faqs: [
      { q: "What is the difference between LASIK and SMILE?", a: "SMILE is a newer, flapless technique that uses a smaller incision, making it less disruptive to the corneal surface and ideal for dry eyes." },
      { q: "Is laser cataract surgery painful?", a: "No, numbing eye drops are used before the procedure, ensuring you feel no pain. You may feel a slight pressure during the 10-15 minute surgery." },
      { q: "When can I fly home after eye surgery?", a: "Typically, LASIK patients can fly after 2-3 days. Cataract patients are cleared to fly within 3 to 5 days after their final checkup." }
    ],
    icon: Eye,
    themeColor: "sky"
  },
  ent: {
    id: "ent",
    name: "ENT (Ear, Nose, Throat)",
    subtitle: "Advanced diagnosis and surgical care for ear, nose, and throat conditions. Specializing in sinus surgeries and cochlear implants.",
    badges: ["Micro-Ear Surgeons", "Cochlear Implant Centers", "Sinus Endoscopy", "Sleep Apnea Management"],
    overviewDesc: "Our ENT centers of excellence deliver comprehensive solutions for hearing, balance, swallowing, and airway disorders. Our partner specialists utilize advanced endoscopic systems to perform precise, minimally invasive skull base surgeries.",
    overviewFeatures: [
      { title: "Cochlear Implantation", desc: "Life-changing bionic implants to restore hearing in children and adults with severe loss." },
      { title: "Functional Endoscopic Sinus", desc: "FESS surgery utilizing micro-debriders to treat chronic sinusitis and polyps." },
      { title: "Micro-Ear Surgery", desc: "Tympanoplasty and mastoidectomy to repair eardrums and cure chronic infections." },
      { title: "Voice & Swallowing Clinic", desc: "Stroboscopy and voice therapy for professionals and post-stroke recovery." },
      { title: "Snoring & Sleep Apnea Care", desc: "Airway evaluations and customized surgical treatments to stop sleep apnea." }
    ],
    subTreatments: [
      { name: "Sinus Surgery", desc: "Endoscopic drainage, polyp removal, and balloon sinuplasty to improve breathing." },
      { name: "Hearing Loss Treatment", desc: "Advanced digital hearing aids and reconstructive middle ear bone surgeries." },
      { name: "Cochlear Implants", desc: "Implanting electronic medical devices to stimulate the auditory nerve directly." },
      { name: "Sleep Apnea Treatment", desc: "Uvulopalatopharyngoplasty (UPPP) and laser-assisted airway widening." },
      { name: "Tonsil Surgery", desc: "Tonsillectomy and adenoidectomy using painless coblation technology." }
    ],
    symptoms: [
      "Chronic blocked nose or difficulty breathing",
      "Persistent hearing loss or ringing in ears (tinnitus)",
      "Frequent throat infections or voice hoarseness",
      "Severe snoring or gasping for air during sleep",
      "Recurrent ear discharge or ear pain",
      "Loss of smell or chronic sinus headaches",
      "Balance issues, dizziness, or vertigo",
      "Difficulty swallowing or throat pain"
    ],
    whyChoose: [
      { title: "State-of-the-Art Audio Labs", desc: "Comprehensive audiometric screening suites for precise hearing assessment." },
      { title: "Coblation Surgical Technology", desc: "Tonsil removals with 70% less pain and rapid post-surgical recovery." },
      { title: "Pioneering Cochlear Teams", desc: "Multidisciplinary teams of surgeons, audiologists, and speech therapists." },
      { title: "Endoscopic Navigation Systems", desc: "Guarantees ultimate safety during complex sinus and skull-base surgeries." },
      { title: "Cost-Effective Specialist Care", desc: "Save up to 70% on complex ENT procedures compared to Western countries." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta ENT Center", location: "Gurugram", rating: 4.8 },
      { key: "max", name: "Max ENT Hospital", location: "New Delhi", rating: 4.8 },
      { key: "apollo", name: "Apollo ENT Clinic", location: "Delhi / Bangalore", rating: 4.7 }
    ],
    testimonials: [
      { quote: "The cochlear implant surgery was a miracle for my son. He can hear and speak beautifully today. Thank you, Elixir.Doctor!", author: "Mariam Al-Kabi", country: "United Arab Emirates" },
      { quote: "The FESS sinus surgery cleared my 5-year chronic sinus block. The recovery was fast and breathing is perfect.", author: "John Miller", country: "United States" }
    ],
    faqs: [
      { q: "What is a cochlear implant?", a: "A cochlear implant is a small electronic device surgically placed under the skin that stimulates the auditory nerve, providing sound signals directly to the brain." },
      { q: "What is coblation tonsillectomy?", a: "It is a technique that uses low-temperature radiofrequency energy to remove tonsils, causing less tissue damage, less bleeding, and much faster healing." },
      { q: "How long should I stay after sinus surgery?", a: "We advise staying in India for 7 to 9 days to ensure all nasal packs are safely removed and early postoperative checks are complete." }
    ],
    icon: Ear,
    themeColor: "cyan"
  },
  "cosmetic-surgery": {
    id: "cosmetic-surgery",
    name: "Cosmetic & Plastic Surgery",
    subtitle: "Enhance your appearance and boost your confidence. State-of-the-art reconstructive and cosmetic surgeries by leading plastic surgeons.",
    badges: ["Artistic Board-Certified Surgeons", "Advanced Graft Techniques", "Luxury Recovery Suites", "Discreet & Confidential"],
    overviewDesc: "Our aesthetic centers deliver world-class surgical and non-surgical procedures in state-of-the-art facilities. We combine clinical precision with artistic vision to help you achieve your desired aesthetic goals safely.",
    overviewFeatures: [
      { title: "High-Density Hair Transplant", desc: "FUE and DHI methods using sapphire blades for natural hair density." },
      { title: "Facial Rejuvenation", desc: "Advanced facelifts, rhinoplasty, and eyelid surgeries to restore youthfulness." },
      { title: "Advanced Body Contouring", desc: "High-definition liposuction, tummy tucks, and mummy makeovers." },
      { title: "Breast Aesthetics", desc: "FDA-approved breast implant enlargements, reductions, and lifts." },
      { title: "Non-Surgical Aesthetics", desc: "Injectables, medical laser peels, and skin tightening therapies." }
    ],
    subTreatments: [
      { name: "Rhinoplasty", desc: "Surgical reshaping of the nose for cosmetic improvement or breathing correction." },
      { name: "Hair Transplant", desc: "High-density hair follicle transplants with natural hairline design." },
      { name: "Liposuction", desc: "Targeted fat removal using ultrasonic (VASER) and power-assisted methods." },
      { name: "Breast Surgery", desc: "Breast augmentations using Motiva implants, lifts, and reductions." },
      { name: "Face Lift", desc: "Surgical tightening of facial muscles and skin removal to turn back aging." },
      { name: "Body Contouring", desc: "Tummy tuck (abdominoplasty), thigh lifts, and comprehensive body shaping." }
    ],
    symptoms: [
      "Dissatisfaction with facial or body contours",
      "Excess, sagging skin after massive weight loss",
      "Hair thinning or male-pattern baldness",
      "Asymmetry in breast size or shape",
      "Nose structure issues affecting breathing",
      "Prominent signs of facial aging and wrinkles",
      "Localized fat deposits resistant to diet & exercise",
      "Corrective needs after past physical trauma"
    ],
    whyChoose: [
      { title: "Board-Certified Plastic Surgeons", desc: "Renowned members of international associations with extensive training." },
      { title: "VASER Liposuction Technology", desc: "Precise fat removal preserving blood vessels and tightening skin." },
      { title: "Original FDA-Approved Implants", desc: "Utilization of premium implants carrying worldwide digital warranties." },
      { title: "Luxury Post-Surgical Wellness", desc: "Exclusive recovery packages in private partner hotels with nursing care." },
      { title: "Confidential Consultation Rooms", desc: "Ensures complete anonymity and privacy for all cosmetic patients." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta Aesthetic Center", location: "Gurugram", rating: 4.9 },
      { key: "fortis", name: "Fortis Plastic Surgery Wing", location: "Gurugram", rating: 4.8 },
      { key: "max", name: "Max Aesthetic Clinic", location: "New Delhi", rating: 4.8 }
    ],
    testimonials: [
      { quote: "Had a tummy tuck and liposuction. The results are amazing, and the recovery team at the luxury hotel was wonderful.", author: "Sophie Laurent", country: "France" },
      { quote: "My hair transplant was a success. The hairline looks completely natural and the sapphire DHI technique was painless.", author: "Ali Al-Mansoori", country: "Saudi Arabia" }
    ],
    faqs: [
      { q: "What is VASER Liposuction?", a: "VASER is an advanced ultrasound-assisted liposuction technique that breaks down fat cells using sound waves, making fat removal gentler and recovery faster." },
      { q: "How long must I wait to return home after a facelift?", a: "Typically, patients need to stay in India for 10 to 12 days to ensure stitches are removed and swelling is evaluated." },
      { q: "Do breast implants require replacement over time?", a: "Modern premium implants (like Motiva or Mentor) are designed to last a lifetime, but regular followups are recommended." }
    ],
    icon: Sparkles,
    themeColor: "fuchsia"
  },
  gastroenterology: {
    id: "gastroenterology",
    name: "Gastroenterology & Liver Care",
    subtitle: "Advanced medical care for digestive diseases and liver disorders. High-success bariatric surgeries and advanced endoscopy.",
    badges: ["Advanced Endoscopy Suites", "Robotic GI Surgeons", "Liver Transplant Pioneers", "Weight Loss Solutions"],
    overviewDesc: "Our gastroenterology and hepatology centers provide comprehensive diagnostic and surgical therapies for digestive tract, pancreas, and liver diseases. We specialize in keyhole abdominal surgeries and advanced bariatric care.",
    overviewFeatures: [
      { title: "Advanced Endoscopy & ERCP", desc: "High-definition diagnostic screening and catheter-based therapies for bile ducts." },
      { title: "Robotic GI Surgery", desc: "Minimally invasive treatment for colorectal cancers, hernias, and gallbladder issues." },
      { title: "Liver Transplant Excellence", desc: "Pioneering transplant centers with high success rates for end-stage liver disease." },
      { title: "Bariatric & Weight Loss Center", desc: "Gastric bypass and sleeve surgeries for sustainable weight management." },
      { title: "Inflammatory Bowel Disease Clinic", desc: "Custom biological therapies for Crohn's disease and ulcerative colitis." }
    ],
    subTreatments: [
      { name: "Endoscopy", desc: "Diagnostic upper GI scopes, colonoscopies, and capsule endoscopies." },
      { name: "Liver Disease Treatment", desc: "Advanced therapies for cirrhosis, hepatitis B/C, fatty liver, and liver tumors." },
      { name: "Bariatric Surgery", desc: "Laparoscopic sleeve gastrectomy and gastric bypass for severe obesity." },
      { name: "Colon Disorders", desc: "Treatment for irritable bowel syndrome (IBS), colitis, and rectal issues." },
      { name: "Digestive Diseases", desc: "Treating chronic acid reflux (GERD), ulcers, gallstones, and pancreatitis." }
    ],
    symptoms: [
      "Chronic abdominal pain, cramping, or bloating",
      "Persistent difficulty swallowing or acid reflux",
      "Unexplained changes in bowel habits",
      "Yellowing of skin or eyes (jaundice)",
      "Unexplained, rapid weight loss",
      "Chronic nausea, vomiting, or loss of appetite",
      "Severe, persistent heartburn",
      "Feeling full quickly after light eating"
    ],
    whyChoose: [
      { title: "Leading Liver Specialists", desc: "World-class hepatologists and transplant surgeons with global reputations." },
      { title: "Laparoscopic Weight Loss Center", desc: "Expert bariatric surgeons utilizing advanced minor-incision techniques." },
      { title: "Intrago Endoscopic Imaging", desc: "High-end cameras offering micro-level visualization of intestinal linings." },
      { title: "Dedicated Dietary Experts", desc: "Customized post-surgical nutritional counseling to manage diet changes." },
      { title: "JCI-Accredited Operating Wings", desc: "Ensures complete infection control during complex surgeries." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram, Delhi NCR", rating: 4.9 },
      { key: "max", name: "Max Super Speciality", location: "New Delhi", rating: 4.8 },
      { key: "apollo", name: "Apollo Hospitals", location: "Delhi / Chennai", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The bariatric surgery changed my life. I lost 40 kg in a year and my diabetes is gone. Outstanding care!", author: "Hannah Taylor", country: "Canada" },
      { quote: "My chronic acid reflux was cured after a laparoscopic hiatal hernia repair. The doctors were fantastic.", author: "Saleh Al-Farsi", country: "Oman" }
    ],
    faqs: [
      { q: "What is bariatric sleeve gastrectomy?", a: "It is a laparoscopic weight-loss surgery where approximately 80% of the stomach is removed, limiting food intake and regulating hunger hormones." },
      { q: "How long is the recovery after laparoscopic gallbladder removal?", a: "Most patients return home from the hospital within 24 hours and resume normal daily activities within a week." },
      { q: "When is a liver transplant recommended?", a: "A transplant is advised for end-stage liver failure (cirrhosis) or acute liver failure when medical therapies are no longer effective." }
    ],
    icon: Activity,
    themeColor: "amber"
  },
  wellness: {
    id: "wellness",
    name: "Wellness & Preventive Care",
    subtitle: "Invest in your health, live a longevity lifestyle. Executive health checkups, anti-aging therapies, and personalized nutrition.",
    badges: ["Longevity Screenings", "Anti-Aging Therapies", "Tailored Nutrition plans", "Executive Health Suites"],
    overviewDesc: "Our premium wellness programs are designed to detect risks early and optimize your overall vitality. We combine diagnostic testing with genetics, cellular anti-aging, and metabolic therapy to customize a plan for long-term health.",
    overviewFeatures: [
      { title: "Executive Health Screenings", desc: "Comprehensive same-day assessments including advanced cardiac and cancer markers." },
      { title: "Anti-Aging & Cellular Care", desc: "Intravenous vitamin therapies, NAD+ infusions, and hormone optimization." },
      { title: "Genetic Risk Profiling", desc: "DNA testing to identify hereditary risks and customize lifestyle plans." },
      { title: "Metabolic Assessment", desc: "Evaluation of thyroid, glucose, and lipid pathways to maximize daily energy." },
      { title: "Stress Recovery Programs", desc: "Mindfulness training, sleep optimization, and physical fitness coaching." }
    ],
    subTreatments: [
      { name: "Executive Health Checkups", desc: "Full-body scans, stress tests, cardiac profiling, and specialist reviews." },
      { name: "Preventive Screening", desc: "Targeted tumor markers, genetic testing, and metabolic profile analysis." },
      { name: "Anti Aging Programs", desc: "IV therapy, bioidentical hormone replacement, and cellular detoxification." },
      { name: "Wellness Retreats", desc: "Luxury, restorative medical spa escapes combining diagnostics with therapies." },
      { name: "Nutrition Programs", desc: "Personalized dietary plans designed around food sensitivities and metabolism." }
    ],
    symptoms: [
      "Chronic, unexplained fatigue or low energy",
      "Brain fog and lack of mental clarity",
      "Poor sleep quality or chronic insomnia",
      "Unexplained, gradual weight gain",
      "Family history of chronic diseases",
      "High stress levels and feeling overwhelmed",
      "Joint stiffness and premature aging signs",
      "Digestive issues and food sensitivities"
    ],
    whyChoose: [
      { title: "Five-Star Diagnostic Suites", desc: "Executive lounges providing quick, private screening sessions." },
      { title: "Next-Gen Genetic Profiling", desc: "Unlocking your DNA markers to tailor lifestyle, diet, and medication." },
      { title: "Pioneering Longevity Protocols", desc: "Implementing evidence-based cellular therapies to retard aging." },
      { title: "Luxury Wellness Partners", desc: "Access to elite wellness resorts combining medical science with luxury spas." },
      { title: "Comprehensive Health Reports", desc: "Detailed, digital copies of all tests containing personalized action steps." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta Executive Health", location: "Gurugram", rating: 4.9 },
      { key: "max", name: "Max Wellness Clinic", location: "New Delhi", rating: 4.8 },
      { key: "apollo", name: "Apollo Premium Clinics", location: "Delhi / Bangalore", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The executive health checkup was incredibly thorough. Completed all tests within 4 hours in an elite lounge. Exceptional!", author: "Marcus Vance", country: "United States" },
      { quote: "The cellular detox and NAD+ infusions restored my energy. The customized diet has made me feel 10 years younger.", author: "Sophia Keller", country: "Switzerland" }
    ],
    faqs: [
      { q: "How long does an Executive Health Checkup take?", a: "The entire screening, including blood tests, imaging, cardiac stress tests, and doctor consultations, is completed in 4 to 6 hours." },
      { q: "What is genetic risk profiling?", a: "It is a simple DNA test from a saliva or blood sample that analyzes your genetic makeup to discover susceptibility to chronic conditions." },
      { q: "Are wellness therapies safe?", a: "Yes, all IV infusions, hormonal therapies, and cellular treatments are designed and supervised by certified medical professionals." }
    ],
    icon: Flower2,
    themeColor: "yellow"
  },
  "pulmonology": {
    id: "pulmonology",
    name: "Pulmonology & Respiratory Care",
    subtitle: "Breathe easy with advanced lung and respiratory care. Specialized treatments for asthma, COPD, and complex lung conditions.",
    badges: ["Advanced Lung Function Labs", "Bronchoscopy Suite", "Sleep Apnea Clinic", "Expert Pulmonologists"],
    overviewDesc: "Our pulmonology centers offer comprehensive care for respiratory disorders. Utilizing advanced bronchoscopy and lung function diagnostics, our specialists provide relief for chronic breathing conditions.",
    overviewFeatures: [
      { title: "Advanced Bronchoscopy", desc: "Diagnostic and therapeutic micro-camera airway interventions." },
      { title: "Lung Function Testing", desc: "Complete spirometry and diffusion studies to assess respiratory capacity." },
      { title: "Sleep Disordered Breathing", desc: "Comprehensive sleep study suites to diagnose and manage sleep apnea." }
    ],
    subTreatments: [
      { name: "Asthma Treatment", desc: "Comprehensive management plans, allergen immunotherapy, and inhaler titration." },
      { name: "COPD Management", desc: "Pulmonary rehabilitation, oxygen therapy, and advanced medical control." },
      { name: "Lung Surgery", desc: "Surgical resections, lobectomy, and minimally invasive thoracoscopic surgeries." },
      { name: "Sleep Medicine", desc: "Customized CPAP therapy mapping and surgical options for snoring." }
    ],
    symptoms: [
      "Chronic cough lasting more than 3 weeks",
      "Shortness of breath during normal walking",
      "Wheezing or whistling sounds during breathing",
      "Persistent chest tightness or discomfort"
    ],
    whyChoose: [
      { title: "World-Class Sleep Labs", desc: "Equipped with state-of-the-art polysomnography systems." },
      { title: "Advanced Rehabilitation Support", desc: "Comprehensive pulmonary rehab to improve daily breathing capacity." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta Pulmonary Sciences", location: "Gurugram", rating: 4.9 },
      { key: "max", name: "Max Pulmonary Care", location: "New Delhi", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The pulmonary rehabilitation program helped me regain my breathing after severe pneumonia. Brilliant team!", author: "Arthur Pendelton", country: "Canada" }
    ],
    faqs: [
      { q: "What is a sleep study?", a: "A sleep study is an overnight test that monitors your brain waves, heart rate, breathing, and oxygen levels to diagnose sleep disorders like sleep apnea." }
    ],
    icon: Wind,
    themeColor: "emerald"
  },
  nephrology: {
    id: "nephrology",
    name: "Nephrology & Kidney Care",
    subtitle: "Dedicated care for kidney health. Advanced dialysis, kidney stone removals, and high-success kidney transplant programs.",
    badges: ["High-Success Transplants", "Advanced Dialysis Wings", "FDA-Approved Lithotripters", "Dedicated Nephrologists"],
    overviewDesc: "Our nephrology centers deliver comprehensive therapy for kidney diseases, renal failure, and hypertension. We specialize in high-efficiency dialysis and kidney transplantation with stellar survival rates.",
    overviewFeatures: [
      { title: "High-Efficiency Dialysis", desc: "Equipped with next-generation hemodialysis machines and sterile dialysis suites." },
      { title: "Kidney Transplant Program", desc: "Pioneering transplant centers with advanced immune matching protocols." },
      { title: "Hypertension Clinic", desc: "Specialist management of secondary hypertension linked to renal disease." }
    ],
    subTreatments: [
      { name: "Kidney Transplant", desc: "Living donor kidney transplant surgeries utilizing advanced laparoscopic harvesting." },
      { name: "Dialysis", desc: "Hemodialysis and peritoneal dialysis options in absolute hygienic wings." },
      { name: "Stone Removal", desc: "Minimally invasive laser lithotripsy and PCNL surgeries for large stones." },
      { name: "Renal Disease Treatment", desc: "Therapies for chronic kidney disease (CKD), glomerulonephritis, and nephrotic syndrome." }
    ],
    symptoms: [
      "Swelling in ankles, legs, or face",
      "Persistent fatigue or metallic taste in mouth",
      "Changes in frequency or color of urine",
      "Chronic lower back pain near kidneys"
    ],
    whyChoose: [
      { title: "Immune Matching Excellence", desc: "Advanced HLA typing and cross-matching to ensure long-term transplant success." },
      { title: "Ultra-Pure Water Dialysis", desc: "Ensures dialysis sessions conform to highest international safety standards." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta Kidney Institute", location: "Gurugram", rating: 4.9 },
      { key: "apollo", name: "Apollo Transplant Centers", location: "Chennai / Delhi", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The kidney transplant team was outstanding. My donor and I received world-class care and recovered quickly.", author: "Kofi Mensah", country: "Ghana" }
    ],
    faqs: [
      { q: "What is the average recovery after a kidney transplant?", a: "Transplant recipients typically stay in the hospital for 10-14 days. Full recovery and return to light work takes about 6 to 8 weeks." }
    ],
    icon: Droplet,
    themeColor: "green"
  },
  endocrinology: {
    id: "endocrinology",
    name: "Endocrinology & Metabolic Care",
    subtitle: "Restore your hormonal balance. Comprehensive diabetes care, thyroid treatments, and metabolic health optimization.",
    badges: ["Diabetes Specialty Care", "Hormonal Balancing", "Thyroid Excellence Labs", "Metabolic Profiling"],
    overviewDesc: "Our endocrinology center offers advanced diagnosis and medical management of diabetes, thyroid disorders, and metabolic diseases. We provide structured lifestyle management alongside clinical therapies.",
    overviewFeatures: [
      { title: "Continuous Glucose Monitoring", desc: "Utilizing advanced sensors to profile blood glucose levels for insulin tuning." },
      { title: "Thyroid Management Clinic", desc: "Expert care for thyroid nodules, hyperthyroidism, and hypothyroidism." },
      { title: "Metabolic Syndrome Care", desc: "Multi-disciplinary treatment for obesity, lipid disorders, and pre-diabetes." }
    ],
    subTreatments: [
      { name: "Diabetes Management", desc: "Personalized insulin regimens, continuous monitoring, and diabetic complication screenings." },
      { name: "Thyroid Disorders", desc: "Hormonal replacement therapies, thyroid nodule biopsies, and radioiodine therapies." },
      { name: "Obesity Treatment", desc: "Comprehensive metabolic evaluations, medical weight loss, and bariatric referrals." },
      { name: "Hormonal Disorders", desc: "Treating pituitary, adrenal, and reproductive hormone imbalances." }
    ],
    symptoms: [
      "Unexplained, rapid weight gain or loss",
      "Persistent, intense thirst and frequent urination",
      "Severe fatigue, muscle weakness, or cold sensitivity",
      "Swelling in the neck (goiter)"
    ],
    whyChoose: [
      { title: "Multidisciplinary Diabetes Teams", desc: "Access to endocrinologists, podiatrists, and diabetic educators." },
      { title: "Radioactive Iodine Therapies", desc: "Advanced nuclear medicine wings for safe, targeted thyroid care." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta Endocrinology", location: "Gurugram", rating: 4.8 },
      { key: "max", name: "Max Endocrinology Wing", location: "New Delhi", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The continuous glucose monitoring and insulin adjustment plan finally brought my type-2 diabetes under control.", author: "David Vance", country: "United Kingdom" }
    ],
    faqs: [
      { q: "What is radioactive iodine therapy?", a: "It is a nuclear medicine treatment for hyperthyroidism and thyroid cancer where a small pill of radioactive iodine is swallowed to selectively destroy overactive thyroid cells." }
    ],
    icon: Flame,
    themeColor: "violet"
  },
  "infectious-diseases": {
    id: "infectious-diseases",
    name: "Infectious Diseases Clinic",
    subtitle: "Specialized care for complex, chronic, and travel-acquired infections. Comprehensive diagnostics and travel medicine.",
    badges: ["Microbiology Labs", "Travel Medicine Experts", "Infection Control Units", "Chronic Care Specialists"],
    overviewDesc: "Our infectious diseases clinic specializes in diagnosing and treating complex, drug-resistant, and travel-acquired infections. We utilize next-generation diagnostic microbiology to isolate and treat pathogens.",
    overviewFeatures: [
      { title: "Advanced Pathology & Cultures", desc: "Isolation of resistant bacteria and fungi using advanced microbiology." },
      { title: "Travel Immunization Clinic", desc: "Pre-travel screening, vaccinations, and prophylactic medicine mapping." },
      { title: "Chronic Infection Management", desc: "Dedicated care plans for chronic conditions like Lyme, tuberculosis, and viral infections." }
    ],
    subTreatments: [
      { name: "Travel Medicine", desc: "Vaccinations, malaria prophylaxis, and safety consultations before international travel." },
      { name: "Chronic Infections", desc: "Intravenous antibiotic therapies and specialist consultation for long-term infections." },
      { name: "Complex Infectious Disease Care", desc: "Inpatient therapy for drug-resistant bugs, post-surgical infections, and fevers." }
    ],
    symptoms: [
      "Unexplained, recurring high fever",
      "Persistent night sweats or chills",
      "Slow-healing wounds or skin infections",
      "Severe fatigue following tropical travel"
    ],
    whyChoose: [
      { title: "BSL-III Pathology Laboratories", desc: "Advanced sterile laboratories to isolate and study complex pathogens safely." },
      { title: "Board-Certified ID Specialists", desc: "Consultants with extensive training in tropical medicine and global health." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta Infectious Diseases", location: "Gurugram", rating: 4.9 },
      { key: "apollo", name: "Apollo Pathology Center", location: "Delhi", rating: 4.8 }
    ],
    testimonials: [
      { quote: "I was diagnosed with a rare tropical fever after my travel. The ID team identified it immediately and cured it.", author: "Elena Rostova", country: "Uzbekistan" }
    ],
    faqs: [
      { q: "What vaccinations are recommended before arriving in India?", a: "We advise checking routine travel vaccines like Hepatitis A/B, Typhoid, and Tetanus. Our team will share a checklist based on your country." }
    ],
    icon: ShieldAlert,
    themeColor: "rose"
  },
  rehabilitation: {
    id: "rehabilitation",
    name: "Rehabilitation & Recovery",
    subtitle: "Rebuild your strength, restore your life. Advanced physical rehabilitation, post-surgical recovery, and sports therapy.",
    badges: ["Robotic Rehab Systems", "Specialist Physiotherapists", "Pain Management Clinics", "Post-Stroke Care Wards"],
    overviewDesc: "Our premium rehabilitation centers combine robotic mobility trainers with expert physical therapists. We help patients recover movement, manage chronic pain, and regain independence following surgeries, strokes, or trauma.",
    overviewFeatures: [
      { title: "Robotic Gait Training", desc: "Advanced exoskeletons and body-weight support treadmills to rebuild walking skills." },
      { title: "Hydrotherapy Suite", desc: "Painless resistance exercises in specialized therapeutic heated pools." },
      { title: "Cognitive Rehabilitation", desc: "Speech, memory, and cognitive occupational therapies to restore mental skills." }
    ],
    subTreatments: [
      { name: "Physiotherapy", desc: "Manual therapy, electrotherapy, and customized exercises for muscular recovery." },
      { name: "Post Surgery Rehab", desc: "Early mobility, suture care, and strength exercises following joint replacement." },
      { name: "Sports Rehabilitation", desc: "Targeted conditioning, biomechanical analysis, and therapy for return to play." },
      { name: "Neurological Rehab", desc: "Post-stroke therapies, spinal cord injury rehab, and Parkinson's mobility plans." }
    ],
    symptoms: [
      "Reduced mobility or stiffness after surgery",
      "Muscle weakness or paralysis following stroke",
      "Chronic joint or back pain limiting activities",
      "Loss of balance or coordination issues"
    ],
    whyChoose: [
      { title: "Exoskeleton Mobility Systems", desc: "Access to next-gen physical training systems to restore nervous pathway signals." },
      { title: "Holistic Recovery Suites", desc: "Stay in luxury recovery wings with 24/7 specialist nursing assistance." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta Rehabilitation Wing", location: "Gurugram", rating: 4.9 },
      { key: "max", name: "Max Rehab & Physiotherapy", location: "New Delhi", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The neurological rehab team helped my father stand and walk with support within 3 weeks of his stroke.", author: "Ali Al-Mansoori", country: "Saudi Arabia" }
    ],
    faqs: [
      { q: "What is robotic rehabilitation?", a: "It is the use of robotic devices (like Lokomat or exoskeletons) to assist patients who have lost movement, ensuring precise, repetitive muscle training." }
    ],
    icon: Accessibility,
    themeColor: "teal"
  },
  "alternative-medicine": {
    id: "alternative-medicine",
    name: "Alternative & Integrative Medicine",
    subtitle: "Discover holistic wellness and natural healing. Authentic Ayurveda, yoga therapies, and integrative wellness retreats.",
    badges: ["Authentic Panchakarma", "Expert Ayurvedic Doctors", "Luxury Wellness Resorts", "Yoga & Meditation Wards"],
    overviewDesc: "Our integrative medicine centers combine ancient therapies with modern diagnostics. Experience customized Panchakarma detoxes, yoga therapy, and herbal treatments designed to restore balance and vitality.",
    overviewFeatures: [
      { title: "Ayurvedic Panchakarma", desc: "Five-step purification and detox therapies using premium herbal oils." },
      { title: "Yoga & Breath Therapy", desc: "Customized breathing and physical postures to manage stress and chronic pain." },
      { title: "Integrative Wellness Review", desc: "Medical diagnostic reviews combined with pulse diagnosis and body-type matching." }
    ],
    subTreatments: [
      { name: "Ayurveda", desc: "Detailed consultations, Shirodhara, Abhyanga massage, and natural herbal therapies." },
      { name: "Yoga Therapy", desc: "Therapeutic yoga schedules designed around spine health, stress, and metabolism." },
      { name: "Meditation Programs", desc: "Mindfulness training, sound healing sessions, and mental wellness routines." },
      { name: "Holistic Recovery", desc: "Combining natural therapies with diet to support recovery after heavy treatments." }
    ],
    symptoms: [
      "Chronic stress, anxiety, or fatigue",
      "Joint pain and inflammatory conditions",
      "Chronic digestive issues or slow metabolism",
      "Sleep disorders and toxins buildup"
    ],
    whyChoose: [
      { title: "Accredited Ayurveda Hospitals", desc: "Certified facilities ensuring authentic clinical Ayurveda protocols." },
      { title: "Luxury Wellness Resorts", desc: "Healing stays in Kerala or Himalayas with organic farm-to-table cuisine." }
    ],
    hospitals: [
      { key: "apollo", name: "Apollo AyurVAID", location: "Delhi / Bengaluru", rating: 4.8 },
      { key: "artemis", name: "Artemis Integrative Medicine", location: "Gurugram", rating: 4.7 }
    ],
    testimonials: [
      { quote: "The Panchakarma detox in Kerala was amazing. My chronic arthritis pain decreased by 80% and I feel rejuvenated.", author: "Helena Rostova", country: "Russia" }
    ],
    faqs: [
      { q: "What is Panchakarma?", a: "Panchakarma is a five-fold body detoxification process in Ayurveda that uses herbal massages, oils, and cleansing therapies to balance bodily energies." }
    ],
    icon: Leaf,
    themeColor: "lime"
  },
  "organ-transplant": {
    id: "organ-transplant",
    name: "Organ Transplant Services",
    subtitle: "A second lease on life. Highly advanced liver, kidney, and bone marrow transplants with outstanding survival rates.",
    badges: ["JCI-Accredited Transplant Wings", "Pioneering Surgeons", "Sterile Isolation Wards", "HLA Typing Labs"],
    overviewDesc: "Our partner transplant centers are globally recognized for excellence in organ transplantation. Sticking to rigorous ethical guidelines and advanced immunological typing, we achieve high graft survival rates.",
    overviewFeatures: [
      { title: "Robotic-Assisted Donor Surgery", desc: "Minimally invasive keyhole donor surgery to maximize donor safety and comfort." },
      { title: "HLA Tissue Typing Labs", desc: "High-resolution tissue matching to reduce organ rejection risks." },
      { title: "Ultra-Sterile ICU Isolation", desc: "Cleanrooms with positive pressure HEPA filtration for transplant recovery." }
    ],
    subTreatments: [
      { name: "Liver Transplant", desc: "Living donor liver transplants for acute liver failure and cirrhosis." },
      { name: "Kidney Transplant", desc: "Living relative donor kidney transplant surgeries with robotic options." },
      { name: "Bone Marrow Transplant", desc: "Dedicated cleanroom transplants for complex leukemia and blood disorders." },
      { name: "Heart Transplant Support", desc: "Pre-transplant evaluations, VAD implantations, and matching support." }
    ],
    symptoms: [
      "End-stage liver cirrhosis or kidney failure",
      "Refractory leukemia or bone marrow disorders",
      "Severe jaundice, ascites, or uremia signs",
      "Complete organ failure needing transplant opinion"
    ],
    whyChoose: [
      { title: "Stellar Survival Rates", desc: "Transplant survival percentages comparable to top centers in Europe and US." },
      { title: "Advanced HLA Labs", desc: "State-of-the-art tissue match testing to verify compatibility." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta Transplant Institute", location: "Gurugram", rating: 4.9 },
      { key: "apollo", name: "Apollo Transplant Centers", location: "Chennai / Delhi", rating: 4.9 },
      { key: "max", name: "Max Center for Liver & Biliary Sciences", location: "New Delhi", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The liver transplant team at Medanta saved my husband's life. The coordination and support was outstanding.", author: "Fatima Yusuf", country: "Nigeria" }
    ],
    faqs: [
      { q: "What are the legal requirements for organ transplant in India?", a: "Indian law requires transplants to be living-donor transplants, where the donor is a close relative of the patient. All cases must be cleared by a government authorization committee." }
    ],
    icon: HandHeart,
    themeColor: "teal"
  }
};

const createFallbackSpecialty = (id: string, name: string): SpecialtyData => {
  return {
    id,
    name,
    subtitle: `World-class medical treatments and therapies for ${name} at internationally accredited hospitals.`,
    badges: ["Top Specialists", "State-of-the-Art Tech", "Accredited Labs", "Luxury Patient Services"],
    overviewDesc: `Our partner hospitals provide comprehensive clinical care for ${name}. Utilizing advanced diagnostic equipment and modern surgical technologies, our medical experts ensure high success rates and rapid recovery times.`,
    overviewFeatures: [
      { title: "Specialist Care", desc: `Expert clinical services dedicated to all aspects of ${name}.` },
      { title: "Advanced Diagnostics", desc: "Equipped with state-of-the-art imaging and pathology facilities." },
      { title: "Minimally Invasive Care", desc: "Keyhole surgeries and targeted therapies to speed up recovery." },
      { title: "24/7 Emergency Support", desc: "Immediate-response medical panels open round the clock." },
      { title: "Structured Rehabilitation", desc: "Personalized recovery planning and lifestyle coaching guides." }
    ],
    subTreatments: [
      { name: "Specialized Consultations", desc: "Detailed review of medical files by board-certified department heads." },
      { name: "Advanced Diagnostics", desc: "High-definition scans, blood pathology, and tissue biopsies." },
      { name: "Minimally Invasive Surgeries", desc: "Keyhole interventions and endoscopic surgeries for faster recovery." },
      { name: "Long-term Management", desc: "Customized medication tuning and lifestyle tracking therapies." }
    ],
    symptoms: [
      "Persistent discomfort or pain in relevant area",
      "Unexplained fatigue or weakness",
      "Difficulty in daily activities or physical movements",
      "Symptoms that fail to respond to local treatments"
    ],
    whyChoose: [
      { title: "Top-Tier Medical Specialists", desc: "Renowned department heads trained at elite global institutions." },
      { title: "International Accreditations", desc: "Partner hospitals hold premium JCI or NABH certifications." },
      { title: "Luxury Airport to Bed Assistance", desc: "Complete logistics, luxury travel, and translator support." },
      { title: "Affordable Global Healthcare", desc: "Get top-tier medical procedures at 70-80% lower costs." }
    ],
    hospitals: [
      { key: "medanta", name: "Medanta The Medicity", location: "Gurugram, Delhi NCR", rating: 4.9 },
      { key: "apollo", name: "Apollo Hospitals", location: "Chennai / Delhi", rating: 4.8 },
      { key: "max", name: "Max Healthcare", location: "New Delhi", rating: 4.8 }
    ],
    testimonials: [
      { quote: "The doctors were outstanding and the coordination team made travel and admission seamless. Great experience!", author: "Ahmed Khan", country: "Bangladesh" }
    ],
    faqs: [
      { q: `What is the timeline for treatments in ${name}?`, a: "Most diagnostic assessments take 1-2 days. If surgery is required, stays range from 7 to 14 days based on recovery guidelines." }
    ],
    icon: Activity,
    themeColor: "teal"
  };
};

export default function SpecialtyDetailView({ slug }: { slug: string }) {
  // State hooks
  const [activeTab, setActiveTab] = useState("overview");
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // References for scrolling
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    subTreatments: useRef<HTMLDivElement>(null),
    symptoms: useRef<HTMLDivElement>(null),
    whyChoose: useRef<HTMLDivElement>(null),
    hospitals: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    faqs: useRef<HTMLDivElement>(null),
  };

  // Navigation menu mapping for the left sticky sidebar
  const navigationItems = {
    overview: "Overview",
    subTreatments: "Sub Treatments",
    symptoms: "Symptoms & Conditions",
    whyChoose: "Our Approach",
    hospitals: "Top Hospitals",
    testimonials: "Patient Stories",
    faqs: "FAQs",
  };

  // Get specialty details (resolve fallback if missing)
  const data = specialtiesData[slug] || createFallbackSpecialty(slug, slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " "));
  const IconComponent = data.icon;

  // IntersectionObserver to sync active tab with scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -60% 0px", // offset for navbar + tab bar
      threshold: 0.05,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [data]);

  // Smooth scroll to element
  const handleTabClick = (sectionKey: string) => {
    setActiveTab(sectionKey);
    const targetRef = sectionRefs[sectionKey as keyof typeof sectionRefs];
    if (targetRef && targetRef.current) {
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
      const offset = isDesktop ? 95 : 145; // Height of sticky navbar (80px) + custom padding, or + sticky tabs (145px)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Hospital Logo renderer map
  const renderHospitalLogo = (key: string) => {
    switch (key) {
      case "apollo": return <ApolloLogo />;
      case "fortis": return <FortisLogo />;
      case "medanta": return <MedantaLogo />;
      case "max": return <MaxLogo />;
      case "artemis": return <ArtemisLogo />;
      case "blk-max": return <BlkMaxLogo />;
      default: return <div className="text-[#004D7A] font-bold text-lg font-serif">Hospital</div>;
    }
  };

  // Handle consultation form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message
    const waText = `Hi Elixir.Doctor, I'd like to book a free consultation for ${data.name}.\n\nName: ${formData.name}\nContact: ${formData.contact}\nMessage: ${formData.message}`;
    const waUrl = `https://wa.me/917300123456?text=${encodeURIComponent(waText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.open(waUrl, "_blank");
    }, 800);
  };

  const specialtiesWithBanners = [
    "cardiology",
    "orthopedics",
    "neurology",
    "oncology",
    "fertility",
    "womens-health",
    "mens-health",
    "pediatrics",
    "cosmetic-surgery",
    "gastroenterology",
    "pulmonology",
    "dental",
    "eye-care",
    "ent",
    "wellness",
    "nephrology",
    "endocrinology",
    "infectious-diseases",
    "rehabilitation",
    "alternative-medicine",
    "organ-transplant"
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fafbfc] text-slate-800 selection:bg-brand-teal/20 pt-20">
        {/* 1. HERO HEADER SECTION */}
        <section className="relative py-10 sm:py-16 lg:py-24 text-white overflow-hidden bg-gradient-to-br from-[#020a1a] to-[#010610]">
          {/* Responsive Background Banner Image Overlay */}
          {specialtiesWithBanners.includes(data.id) ? (
            <div className="absolute inset-0 pointer-events-none z-0">
              <img 
                src={`/images/treatments/${data.id}_hero_bg.png`} 
                alt={data.name} 
                className="h-full w-full object-cover object-right opacity-20 lg:opacity-100 transition-opacity duration-300"
              />
              {/* Left-to-right gradient mask for seamless blending and text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020a1a] via-[#020a1a]/90 lg:via-[#020a1a]/30 to-transparent" />
            </div>
          ) : (
            /* Subtle grid watermark for clean fallback pages */
            <>
              <div className="absolute inset-0 grid-bg opacity-[0.04] pointer-events-none" />
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full radial-glow-teal opacity-25 pointer-events-none" />
            </>
          )}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left text panel */}
              <div className="lg:col-span-8 space-y-4 text-left">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="h-3 w-3" />
                  <Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link>
                  <ChevronRight className="h-3 w-3" />
                  <span className="text-brand-cyan">{data.name}</span>
                </div>
 
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-normal leading-tight text-white">
                  {data.name}
                </h1>
                
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                  {data.subtitle}
                </p>
              </div>

              {/* Right panel spacer to allow background graphic to show through */}
              <div className="lg:col-span-4" />

            </div>
          </div>
        </section>

        {/* 2. STICKY TAB NAVIGATION (Mobile/Tablet only) */}
        <div className="lg:hidden sticky top-20 z-30 bg-white border-b border-slate-200/80 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar py-3.5 scroll-smooth">
              {Object.keys(sectionRefs).map((key) => {
                const label = key === "whyChoose" ? "Our Approach" : key.replace(/([A-Z])/g, " $1").trim().replace(/^\w/, c => c.toUpperCase());
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleTabClick(key)}
                    className={`whitespace-nowrap pb-1 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                      isActive 
                        ? "border-[#00382c] text-[#00382c]" 
                        : "border-transparent text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* 3. MAIN BODY CONTENT */}
        <section className="py-12 bg-[#fafbfc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Sticky page navigation (Desktop only) */}
              <aside className="hidden lg:block lg:col-span-2 sticky top-36 max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar pr-4">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-3 mb-3">
                  In This Page
                </div>
                <nav className="flex flex-col gap-1">
                  {Object.entries(navigationItems).map(([key, label]) => {
                    const isActive = activeTab === key;
                    return (
                      <button
                        key={key}
                        onClick={() => handleTabClick(key)}
                        className={`flex items-center text-left py-2 px-3.5 text-xs sm:text-sm transition-all rounded-xl cursor-pointer ${
                          isActive
                            ? "bg-blue-50/80 text-blue-900 font-bold"
                            : "text-slate-500 hover:text-slate-700 hover:bg-slate-100/50 font-medium"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </nav>
              </aside>

              {/* CENTER COLUMN: Main details */}
              <div className="lg:col-span-6 space-y-10 sm:space-y-12">
                
                {/* A. OVERVIEW CARD */}
                <div 
                  id="overview" 
                  ref={sectionRefs.overview}
                  className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs scroll-mt-36"
                >
                  <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-serif text-[#091b35] font-normal">
                      Treatment Overview
                    </h2>
                    <div className="h-0.5 w-10 bg-brand-teal" />
                  </div>
                  
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                    {data.overviewDesc}
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    {data.overviewFeatures.map((feat, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="h-5 w-5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-800">{feat.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-500 font-light mt-0.5 leading-relaxed">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 4 Bottom Badges Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100 mt-6">
                    <div className="flex flex-col items-center text-center p-3.5 bg-slate-50/50 border border-slate-100/50 rounded-2xl">
                      <div className="h-9 w-9 rounded-full bg-blue-50/50 flex items-center justify-center text-blue-600 mb-2.5">
                        <Users className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">
                        {data.id === "cardiology" ? "Expert Cardiologists" : 
                         data.id === "orthopedics" ? "Joint Specialists" : 
                         data.id === "neurology" ? "Neuro Specialists" : 
                         data.id === "oncology" ? "Cancer Experts" : 
                         "Expert Specialists"}
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center p-3.5 bg-slate-50/50 border border-slate-100/50 rounded-2xl">
                      <div className="h-9 w-9 rounded-full bg-blue-50/50 flex items-center justify-center text-blue-600 mb-2.5">
                        <Activity className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">Advanced Technology</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-3.5 bg-slate-50/50 border border-slate-100/50 rounded-2xl">
                      <div className="h-9 w-9 rounded-full bg-blue-50/50 flex items-center justify-center text-blue-600 mb-2.5">
                        <Heart className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">Personalized Care</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-3.5 bg-slate-50/50 border border-slate-100/50 rounded-2xl">
                      <div className="h-9 w-9 rounded-full bg-blue-50/50 flex items-center justify-center text-blue-600 mb-2.5">
                        <Globe className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">International Support</span>
                    </div>
                  </div>
                </div>

                {/* B. SUB TREATMENTS */}
                <div 
                  id="subTreatments" 
                  ref={sectionRefs.subTreatments}
                  className="space-y-6 scroll-mt-36"
                >
                  <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-serif text-[#091b35] font-normal">
                      Available Sub-Treatments
                    </h2>
                    <div className="h-0.5 w-10 bg-brand-teal" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.subTreatments.map((sub, idx) => (
                      <div 
                        key={idx}
                        className="bg-white border border-slate-200/60 rounded-2xl p-5 hover:border-brand-teal/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="space-y-2.5">
                          <h3 className="text-sm sm:text-base font-bold text-slate-800">{sub.name}</h3>
                          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">{sub.desc}</p>
                        </div>

                        <div className="pt-4 border-t border-slate-55 mt-4 flex items-center justify-start">
                          <a 
                            href={`https://wa.me/917300123456?text=Hi,%20I'd%20like%20to%20enquire%20about%20the%20${encodeURIComponent(sub.name)}%20(${data.name})%20on%20Elixir.Doctor.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 text-xs font-semibold text-brand-teal hover:text-brand-teal/80 transition-colors"
                          >
                            <span>Learn More & Enquire</span>
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* C. SYMPTOMS & CONDITIONS */}
                <div 
                  id="symptoms" 
                  ref={sectionRefs.symptoms}
                  className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs scroll-mt-36"
                >
                  <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-serif text-[#091b35] font-normal">
                      Common Symptoms We Treat
                    </h2>
                    <div className="h-0.5 w-10 bg-brand-teal" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Symptoms list */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {data.symptoms.map((symptom, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <div className="h-4.5 w-4.5 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-600 font-light leading-tight">{symptom}</span>
                        </div>
                      ))}
                    </div>

                    {/* Graphic/Card */}
                    <div className="md:col-span-5 relative h-40 bg-slate-50 border border-slate-200/40 rounded-2xl overflow-hidden flex flex-col justify-center p-5 space-y-2">
                      <div className="absolute right-2 bottom-2 text-slate-200/60 font-serif text-6xl select-none">CARE</div>
                      <h4 className="text-xs font-bold tracking-widest text-[#00382c] uppercase">Immediate Action</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">If you are experiencing severe versions of these symptoms, get in touch immediately for a medical specialist review.</p>
                      <a 
                        href="https://wa.me/917300123456" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-teal hover:underline pt-1"
                      >
                        <span>WhatsApp Diagnostic Team</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* D. OUR APPROACH / WHY CHOOSE US */}
                <div 
                  id="whyChoose" 
                  ref={sectionRefs.whyChoose}
                  className="space-y-6 scroll-mt-36"
                >
                  <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-serif text-[#091b35] font-normal">
                      Why Choose Elixir.Doctor for {data.name.split(" ")[0]}
                    </h2>
                    <div className="h-0.5 w-10 bg-brand-teal" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.whyChoose.map((choose, idx) => (
                      <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-5 space-y-2">
                        <div className="h-7 w-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                          <Award className="h-4 w-4" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-800 pt-1">{choose.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">{choose.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* E. FAQS */}
                <div 
                  id="faqs" 
                  ref={sectionRefs.faqs}
                  className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs scroll-mt-36"
                >
                  <div className="space-y-3.5">
                    {data.faqs.map((faq, idx) => {
                      const isOpen = faqOpenIndex === idx;
                      return (
                        <div 
                          key={idx}
                          className="border border-slate-100 rounded-xl overflow-hidden"
                        >
                          <button
                            onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                            className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors text-xs sm:text-sm cursor-pointer"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          
                          {isOpen && (
                            <div className="px-5 pb-4.5 pt-0.5 text-xs sm:text-sm text-slate-500 font-light leading-relaxed bg-slate-50/20">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* F. BOTTOM CTA BANNER */}
                <div className="bg-[#0a1931] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-6 border border-white/5 shadow-lg">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full radial-glow-blue opacity-5 pointer-events-none" />
                  
                  <div className="space-y-2 text-center sm:text-left z-10">
                    <h3 className="text-lg sm:text-xl font-serif font-normal">Ready to consult our specialists?</h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light">Get a personalized treatment plan and cost quotation within 24 hours.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
                    <a 
                      href={`https://wa.me/917300123456?text=Hi,%20I'd%20like%20to%20discuss%20${encodeURIComponent(data.name)}%20treatments%20with%20an%20expert.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center bg-[#d69e2e] text-slate-950 px-6 py-3 rounded-full text-xs font-bold hover:bg-[#c08d28] transition-all shadow-md active:scale-98 cursor-pointer"
                    >
                      Talk to Our Expert
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Sticky widgets */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
                
                {/* A. BOOK A CONSULTATION FORM */}
                <div className="bg-[#0a1931] text-white rounded-3xl p-5 sm:p-6 space-y-5 border border-white/5 shadow-lg relative overflow-hidden">
                  {/* Subtle decorative grid overlay */}
                  <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />
                  
                  <div className="space-y-1 relative z-10">
                    <h3 className="text-sm font-bold tracking-wider uppercase text-amber-500">Book a Consultation</h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      Our care managers are here to help you every step of the way.
                    </p>
                  </div>

                  {submitSuccess ? (
                    <div className="bg-white/5 border border-brand-teal/20 rounded-2xl p-4 text-center space-y-2 animate-in fade-in duration-200 relative z-10">
                      <Check className="h-8 w-8 text-brand-teal mx-auto" />
                      <h5 className="text-sm font-bold">Request Shared!</h5>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">We have redirected you to WhatsApp to securely upload your reports.</p>
                      <button 
                        onClick={() => setSubmitSuccess(false)}
                        className="text-[11px] font-semibold text-amber-400 hover:underline mt-1"
                      >
                        Submit another query
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
                      <div>
                        <input 
                          type="text" 
                          required
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#102038] border border-[#182e4e] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          required
                          placeholder="WhatsApp Number or Email"
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          className="w-full bg-[#102038] border border-[#182e4e] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <textarea 
                          rows={3}
                          required
                          placeholder="Describe your medical condition or requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-[#102038] border border-[#182e4e] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#d69e2e] text-slate-950 py-3.5 rounded-full text-xs font-bold hover:bg-[#c08d28] active:scale-98 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/10 disabled:opacity-50 cursor-pointer"
                      >
                        <span>{isSubmitting ? "Submitting..." : "Book Now"}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </form>
                  )}

                  <div className="pt-4 border-t border-white/10 text-center relative z-10">
                    <a 
                      href="tel:+917300123456" 
                      className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                    >
                      <Phone className="h-4 w-4 text-amber-500" />
                      <span>Or call us at <span className="font-bold text-white">+91 7300 123 456</span></span>
                    </a>
                  </div>
                </div>

                {/* B. TOP HOSPITALS FOR THIS SPECIALTY */}
                <div 
                  id="hospitals" 
                  ref={sectionRefs.hospitals}
                  className="bg-white border border-slate-200/60 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xs scroll-mt-36"
                >
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Top Hospital Partners</h3>
                  <div className="h-px bg-slate-100" />
                  
                  <div className="space-y-4">
                    {data.hospitals.map((hosp, idx) => (
                      <a 
                        key={idx}
                        href={`https://wa.me/917300123456?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(data.name)}%20treatment%20at%20${encodeURIComponent(hosp.name)}%20via%20Elixir.Doctor.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between p-3 rounded-xl border border-slate-100 hover:border-brand-teal/40 hover:shadow-xs transition-all duration-300"
                      >
                        <div className="space-y-2">
                          <div className="opacity-90 grayscale group-hover:grayscale-0 transition-all duration-300 max-w-[100px]">
                            {renderHospitalLogo(hosp.key)}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800">{hosp.name}</h4>
                            <p className="text-[10px] text-slate-500 font-light flex items-center gap-0.5 mt-0.5">
                              <MapPin className="h-3 w-3 shrink-0" />
                              <span>{hosp.location}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1.5">
                          <div className="flex items-center gap-0.5 text-amber-500">
                            <Star className="h-3 w-3 fill-current" />
                            <span className="text-[10px] font-bold">{hosp.rating}</span>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-brand-teal transition-all group-hover:translate-x-0.5" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* C. PATIENT STORIES WIDGET */}
                <div 
                  id="testimonials"
                  ref={sectionRefs.testimonials}
                  className="bg-white border border-slate-200/60 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xs scroll-mt-36"
                >
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Patient Success Stories</h3>
                  <div className="h-px bg-slate-100" />
                  
                  <div className="space-y-4">
                    {data.testimonials.map((test, idx) => (
                      <div key={idx} className="space-y-2 p-3 bg-slate-50/50 border border-slate-100 rounded-xl relative">
                        <span className="absolute top-2 right-2 text-slate-200 font-serif text-3xl select-none">“</span>
                        <p className="text-xs text-slate-600 italic leading-relaxed font-light font-serif">
                          &ldquo;{test.quote}&rdquo;
                        </p>
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 pt-1 border-t border-slate-100/50">
                          <span>{test.author}</span>
                          <span className="text-slate-400">{test.country}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* D. SAFETY & TRUST WIDGET */}
                <div className="bg-white border border-slate-200/60 rounded-3xl p-5 sm:p-6 space-y-3.5 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">We Care Like Family</h4>
                      <p className="text-[10px] text-slate-400 font-light">Trusted by patients globally</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-[11px] text-slate-600">
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-brand-teal shrink-0" />
                      <span>Trusted by Patients from 50+ Countries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-brand-teal shrink-0" />
                      <span>24/7 Dedicated Support Throughout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-brand-teal shrink-0" />
                      <span>Accredited Hospitals (JCI, NABH)</span>
                    </div>
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
