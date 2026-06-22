import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/data/locations";
import { services } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import ContactForm from "@/components/forms/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { SITE_URL } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${SITE_URL}/service-areas/${location.slug}`,
    },
    alternates: {
      canonical: `${SITE_URL}/service-areas/${location.slug}`,
    },
  };
}

const serviceIcons: Record<string, string> = {
  driveways: "🚗",
  patios: "🏡",
  "pool-decks": "🏊",
  "block-walls": "🧱",
  "foundations-slabs": "🏗️",
  "commercial-concrete": "🏢",
};

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const nearbyLocations = location.nearbyAreas
    .map((s) => locations.find((l) => l.slug === s))
    .filter(Boolean);

  return (
    <>
      <HeroSection
        title={`Concrete Contractors Serving ${location.area}, Plano TX`}
        subtitle={location.heroSubtitle}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc={`/plano-concrete-solutions-photos-named/${location.slug}.jpg`}
        imageAlt={`Concrete services in ${location.area}, Plano TX`}
      />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {location.intro.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mb-6 text-lg leading-relaxed text-mid last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Services for this area */}
      <section className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={`Concrete Services We Offer in ${location.area}`}
            subtitle={`Full-service concrete work for ${location.area} homes and businesses.`}
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {location.services.map((serviceSlug) => {
              const service = services.find((s) => s.slug === serviceSlug);
              if (!service) return null;
              return (
                <Link
                  key={serviceSlug}
                  href={`/services/${serviceSlug}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-sm transition-all hover:border-accent hover:shadow-md"
                >
                  <span className="text-2xl">
                    {serviceIcons[serviceSlug] || "🔨"}
                  </span>
                  <div>
                    <span className="font-display font-semibold text-dark group-hover:text-accent">
                      {service.name}
                    </span>
                    <ArrowRight className="ml-1 inline h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Landmarks */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-lg border border-border bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <h3 className="font-display text-lg font-semibold text-dark">
                Nearby in {location.area}
              </h3>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {location.landmarks.map((landmark) => (
                <li key={landmark} className="text-mid">
                  • {landmark}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <blockquote className="mb-4 text-lg italic leading-relaxed text-gray-200">
            &ldquo;{location.testimonial.quote}&rdquo;
          </blockquote>
          <p className="font-display text-white">
            — {location.testimonial.name},{" "}
            <span className="text-gray-400">{location.testimonial.area}</span>
          </p>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyLocations.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-lg text-mid">
              We also serve{" "}
              {nearbyLocations.map((loc, i) =>
                loc ? (
                  <span key={loc.slug}>
                    {i > 0 && i === nearbyLocations.length - 1 ? ", and " : i > 0 ? ", " : ""}
                    <Link
                      href={`/service-areas/${loc.slug}`}
                      className="font-semibold text-accent hover:text-accent-dark"
                    >
                      {loc.area}
                    </Link>
                  </span>
                ) : null,
              )}
              , and more across Plano.
            </p>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={`Get a Free Estimate in ${location.area}`}
            subtitle="Tell us about your project and we'll be in touch within 1 business day."
          />
          <div className="mt-8">
            <ContactForm preselectedArea={location.area} />
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Service Areas",
                item: `${SITE_URL}/service-areas`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: location.area,
                item: `${SITE_URL}/service-areas/${location.slug}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
