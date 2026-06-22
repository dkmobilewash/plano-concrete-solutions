import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTABanner from "@/components/sections/CTABanner";
import { GalleryImage } from "@/types";

export const metadata: Metadata = {
  title: "Concrete Project Gallery | Plano Concrete Solutions",
  description:
    "Browse photos of completed concrete projects in Plano, TX — driveways, patios, pool decks, block walls, and more.",
  openGraph: {
    title: "Concrete Project Gallery | Plano Concrete Solutions",
    description:
      "Browse photos of completed concrete projects in Plano, TX — driveways, patios, pool decks, block walls, and more.",
    url: "https://planoconcretesolutions.com/gallery",
  },
  alternates: { canonical: "https://planoconcretesolutions.com/gallery" },
};

const P = "/plano-concrete-solutions-photos-named";

const galleryImages: GalleryImage[] = [
  { id: 1, src: `${P}/gallery-driveway-01.jpg`, alt: "Stamped concrete driveway in West Plano", category: "Driveways", width: 800, height: 600 },
  { id: 2, src: `${P}/gallery-driveway-02.jpg`, alt: "Broom finish driveway replacement", category: "Driveways", width: 800, height: 600 },
  { id: 3, src: `${P}/gallery-patio-01.jpg`, alt: "Extended patio with stamped concrete", category: "Patios", width: 800, height: 600 },
  { id: 4, src: `${P}/gallery-patio-02.jpg`, alt: "Covered patio with stained concrete floor", category: "Patios", width: 800, height: 600 },
  { id: 5, src: `${P}/gallery-pool-01.jpg`, alt: "Cool deck pool surround in Willow Bend", category: "Pool Decks", width: 800, height: 600 },
  { id: 6, src: `${P}/gallery-pool-02.jpg`, alt: "Textured pool deck resurfacing", category: "Pool Decks", width: 800, height: 600 },
  { id: 7, src: `${P}/gallery-wall-01.jpg`, alt: "CMU retaining wall with stone cap", category: "Block Walls", width: 800, height: 600 },
  { id: 8, src: `${P}/gallery-wall-02.jpg`, alt: "Privacy wall with stucco finish", category: "Block Walls", width: 800, height: 600 },
  { id: 9, src: `${P}/gallery-foundation-01.jpg`, alt: "Post-tension foundation pour", category: "Foundations", width: 800, height: 600 },
  { id: 10, src: `${P}/gallery-foundation-02.jpg`, alt: "Garage slab with control joints", category: "Foundations", width: 800, height: 600 },
  { id: 11, src: `${P}/gallery-commercial-01.jpg`, alt: "Commercial parking lot section pour", category: "Commercial", width: 800, height: 600 },
  { id: 12, src: `${P}/gallery-commercial-02.jpg`, alt: "ADA-compliant sidewalk and ramp", category: "Commercial", width: 800, height: 600 },
  { id: 13, src: `${P}/gallery-driveway-03.jpg`, alt: "Exposed aggregate driveway in Deerfield", category: "Driveways", width: 800, height: 600 },
  { id: 14, src: `${P}/gallery-patio-03.jpg`, alt: "Stamped patio with fire pit area", category: "Patios", width: 800, height: 600 },
  { id: 15, src: `${P}/gallery-pool-03.jpg`, alt: "Large pool deck with multiple levels", category: "Pool Decks", width: 800, height: 600 },
  { id: 16, src: `${P}/gallery-commercial-03.jpg`, alt: "Commercial warehouse floor pour", category: "Commercial", width: 800, height: 600 },
];

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Our Work Speaks for Itself"
        subtitle="Browse completed concrete projects across Plano — from residential driveways to commercial installations."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc="/plano-concrete-solutions-photos-named/hero-gallery.jpg"
        imageAlt="Concrete project gallery"
        shortHeight
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
