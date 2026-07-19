import HeroSection from "@/components/home/HeroSection"
import HeroSimulator from "@/components/home/HeroSimulator"
import PopularProjects from "@/components/home/PopularProjects"
import LoanProducts from "@/components/home/LoanProducts"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import TrustSection from "@/components/home/TrustSection"
import FAQSection from "@/components/home/FAQSection"
import FinalCTA from "@/components/home/FinalCTA"
import HighlightedProject from "@/components/home/HighlightedProject"
import MissionSection from "@/components/home/MissionSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularProjects />
      <HeroSimulator />
      <LoanProducts />
      <HighlightedProject />
      <MissionSection />
      <WhyChooseUs />
      <TrustSection />
      {/* <FAQSection /> */}
      <FinalCTA />
    </>
  )
}