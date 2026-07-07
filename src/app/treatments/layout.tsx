import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialized Medical Treatments - Elixir.Doctor",
  description: "Explore world-class luxury medical treatments and specialties offered by Elixir.Doctor, from advanced cardiology to holistic wellness retreats.",
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
