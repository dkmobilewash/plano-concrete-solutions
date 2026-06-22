import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Concrete Services in Plano TX | Plano Concrete Solutions",
  description:
    "Explore our full range of concrete services including driveways, patios, pool decks, block walls, foundations, and commercial concrete work in Plano, TX.",
  openGraph: {
    title: "Concrete Services in Plano TX | Plano Concrete Solutions",
    description:
      "Explore our full range of concrete services including driveways, patios, pool decks, block walls, foundations, and commercial concrete work in Plano, TX.",
    url: "https://planoconcretesolutions.com/services",
  },
  alternates: { canonical: "https://planoconcretesolutions.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Professional Concrete Services in Plano, TX"
        subtitle="From residential driveways to commercial parking lots — every project gets the same commitment to quality."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc="/plano-concrete-solutions-photos-named/hero-services.jpg"
        imageAlt="Concrete services in Plano, Texas"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-mid">
              Plano Concrete Solutions provides a full range of residential and
              commercial concrete services throughout Plano and its surrounding
              neighborhoods. Whether you need a new driveway, a stamped patio,
              a pool deck resurfacing, or a commercial parking lot, our licensed
              and insured crew delivers quality work on schedule and on budget.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Plano Homeowners Choose Us"
            subtitle="Quality work, honest pricing, and a crew that treats your property like our own."
          />
          <WhyChooseUs />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
