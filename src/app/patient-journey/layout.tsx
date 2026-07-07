import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Journey - Elixir.Doctor",
  description: "Learn about your end-to-end healing journey with Elixir.Doctor, from your initial consultation to recovery and returning home with lifetime support.",
};

export default function PatientJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
