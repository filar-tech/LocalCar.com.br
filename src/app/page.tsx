import Hero from "@/components/Hero";
import { Marquee, Features, HowItWorks, Audience } from "@/components/Sections";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <HowItWorks />
      <Audience />
      <ContactSection />
    </>
  );
}
