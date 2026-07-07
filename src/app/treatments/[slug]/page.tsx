import React from "react";
import SpecialtyDetailView, { specialtiesData } from "./SpecialtyDetailView";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = specialtiesData[slug];
  
  const title = data 
    ? `${data.name} - Specialized Treatments | Elixir.Doctor` 
    : "Medical Treatment Details - Elixir.Doctor";
  const description = data 
    ? data.subtitle 
    : "Explore world-class luxury medical treatments and specialties offered by Elixir.Doctor.";
  
  return {
    title,
    description,
  };
}

export default async function SpecialtyDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  return <SpecialtyDetailView slug={slug} />;
}

export async function generateStaticParams() {
  return [
    { slug: "cardiology" },
    { slug: "orthopedics" },
    { slug: "neurology" },
    { slug: "oncology" },
    { slug: "fertility" },
    { slug: "womens-health" },
    { slug: "mens-health" },
    { slug: "pediatrics" },
    { slug: "dental" },
    { slug: "eye-care" },
    { slug: "ent" },
    { slug: "cosmetic-surgery" },
    { slug: "gastroenterology" },
    { slug: "pulmonology" },
    { slug: "nephrology" },
    { slug: "endocrinology" },
    { slug: "infectious-diseases" },
    { slug: "rehabilitation" },
    { slug: "wellness" },
    { slug: "alternative-medicine" },
    { slug: "organ-transplant" }
  ];
}
