import HeroSection from "@/Components/UI/HeroSec";
import Portfolio from "@/Components/Helpers/Portfolio";
import WorkSection from "@/Components/UI/FeaturedWork";
import ContactSection from "@/Components/UI/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ContactSection id="contact"/>
    </>
  );
}
