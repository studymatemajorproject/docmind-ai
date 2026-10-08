import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/features/hero";
import FeatureGrid from "@/components/features/feature-grid";
import HowItWorks from "@/components/features/how-it-works";
import Comparison from "@/components/features/comparison";
import FAQ from "@/components/features/faq";
import CTA from "@/components/features/cta";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}