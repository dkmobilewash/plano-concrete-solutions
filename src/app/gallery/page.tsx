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

const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://picsum.photos/seed/gal1/800/600", alt: "Stamped concrete driveway in West Plano", category: "Driveways", width: 800, height: 600 },
  { id: 2, src: "https://picsum.photos/seed/gal2/800/600", alt: "Broom finish driveway replacement", category: "Driveways", width: 800, height: 600 },
  { id: 3, src: "https://picsum.photos/seed/gal3/800/600", alt: "Extended patio with stamped concrete", category: "Patios", width: 800, height: 600 },
  { id: 4, src: "https://picsum.photos/seed/gal4/800/600", alt: "Covered patio with stained concrete floor", category: "Patios", width: 800, height: 600 },
  { id: 5, src: "https://picsum.photos/seed/gal5/800/600", alt: "Cool deck pool surround in Willow Bend", category: "Pool Decks", width: 800, height: 600 },
  { id: 6, src: "https://picsum.photos/seed/gal6/800/600", alt: "Textured pool deck resurfacing", category: "Pool Decks", width: 800, height: 600 },
  { id: 7, src: "https://picsum.photos/seed/gal7/800/600", alt: "CMU retaining wall with stone cap", category: "Block Walls", width: 800, height: 600 },
  { id: 8, src: "https://picsum.photos/seed/gal8/800/600", alt: "Privacy wall with stucco finish", category: "Block Walls", width: 800, height: 600 },
  { id: 9, src: "https://picsum.photos/seed/gal9/800/600", alt: "Post-tension foundation pour", category: "Foundations", width: 800, height: 600 },
  { id: 10, src: "https://picsum.photos/seed/gal10/800/600", alt: "Garage slab with control joints", category: "Foundations", width: 800, height: 600 },
  { id: 11, src: "https://picsum.photos/seed/gal11/800/600", alt: "Commercial parking lot section pour", category: "Commercial", width: 800, height: 600 },
  { id: 12, src: "https://picsum.photos/seed/gal12/800/600", alt: "ADA-compliant sidewalk and ramp", category: "Commercial", width: 800, height: 600 },
  { id: 13, src: "https://picsum.photos/seed/gal13/800/600", alt: "Exposed aggregate driveway in Deerfield", category: "Driveways", width: 800, height: 600 },
  { id: 14, src: "https://picsum.photos/seed/gal14/800/600", alt: "Stamped patio with fire pit area", category: "Patios", width: 800, height: 600 },
  { id: 15, src: "https://picsum.photos/seed/gal15/800/600", alt: "Large pool deck with multiple levels", category: "Pool Decks", width: 800, height: 600 },
  { id: 16, src: "https://picsum.photos/seed/gal16/800/600", alt: "Commercial warehouse floor pour", category: "Commercial", width: 800, height: 600 },
];

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Our Work Speaks for Itself"
        subtitle="Browse completed concrete projects across Plano — from residential driveways to commercial installations."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc="https://picsum.photos/seed/gallery/1920/600"
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
