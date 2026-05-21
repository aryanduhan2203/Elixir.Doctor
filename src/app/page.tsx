import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import TrustFactors from "@/components/TrustFactors";
import JourneyAndStories from "@/components/JourneyAndStories";
import MedicalPartners from "@/components/MedicalPartners";
import Destinations from "@/components/Destinations";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <TrustFactors />
        <JourneyAndStories />
        <MedicalPartners />
        <Destinations />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
