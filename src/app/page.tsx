import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ServiceAreaMap from "@/components/sections/ServiceAreaMap";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { Shield, DollarSign, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Plano Concrete Solutions | Driveways, Patios & More in Plano, TX",
  description:
    "Plano's trusted concrete contractors. We pour driveways, patios, pool decks, and more throughout Plano, TX. Call (214) 751-8014 for a free estimate.",
  openGraph: {
    title: "Plano Concrete Solutions | Driveways, Patios & More in Plano, TX",
    description:
      "Plano's trusted concrete contractors. We pour driveways, patios, pool decks, and more throughout Plano, TX.",
    url: "https://planoconcretesolutions.com",
  },
  alternates: { canonical: "https://planoconcretesolutions.com" },
};

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: DollarSign, label: "Free Estimates" },
  { icon: MapPin, label: "Locally Owned in Plano" },
  { icon: Star, label: "5-Star Google Rated" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Plano's Concrete Experts"
        subtitle="From driveways to commercial slabs — quality work, fair prices, and a finish built to last the Texas heat."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        secondaryCtaText="See Our Work"
        secondaryCtaHref="/gallery"
        imageSrc="https://picsum.photos/seed/herohome/1920/1080"
        imageAlt="Professional concrete work in Plano, Texas"
        fullHeight
      />

      <section className="border-y border-border bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center justify-center gap-3 py-2"
              >
                <badge.icon className="h-6 w-6 shrink-0 text-accent" />
                <span className="font-display text-sm font-medium text-dark md:text-base">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Concrete Services"
            subtitle="From residential driveways to commercial slabs, we handle every type of concrete project in Plano."
          />
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

      <TestimonialsSection />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Proudly Serving Plano & Surrounding Neighborhoods"
            subtitle="We know every corner of Plano — from the established neighborhoods of West Plano to the growing communities up north."
          />
          <ServiceAreaMap />
        </div>
      </section>

      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Plano Concrete Solutions",
            telephone: "(214) 751-8014",
            email: "info@planoconcretesolutions.com",
            url: "https://planoconcretesolutions.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Plano",
              addressRegion: "TX",
              addressCountry: "US",
            },
            areaServed: [
              "Plano",
              "West Plano",
              "East Plano",
              "North Plano",
              "Downtown Plano",
              "Legacy West",
              "Willow Bend",
              "Deerfield",
              "Preston Meadow",
            ],
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "07:00",
              closes: "18:00",
            },
          }),
        }}
      />
    </>
  );
}
