import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL, EMAIL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Plano Concrete Solutions | Free Estimates",
  description:
    "Contact us for a free concrete estimate in Plano, TX. Call (214) 751-8014 or fill out our online form. We serve all Plano neighborhoods.",
  openGraph: {
    title: "Contact Plano Concrete Solutions | Free Estimates",
    description:
      "Contact us for a free concrete estimate in Plano, TX. Call (214) 751-8014 or fill out our online form.",
    url: "https://planoconcretesolutions.com/contact",
  },
  alternates: { canonical: "https://planoconcretesolutions.com/contact" },
};

const neighborhoods = [
  "West Plano",
  "East Plano",
  "North Plano",
  "Downtown Plano",
  "Legacy West",
  "Willow Bend",
  "Deerfield",
  "Preston Meadow",
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Get Your Free Concrete Estimate in Plano"
        subtitle="Tell us about your project and we'll get back to you within 1 business day."
        ctaText="Call Now"
        ctaHref={PHONE_TEL}
        imageSrc="https://picsum.photos/seed/contact/1920/600"
        imageAlt="Contact Plano Concrete Solutions"
        shortHeight
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="mb-6 font-display text-2xl font-semibold text-dark md:text-3xl">
                Request a Free Estimate
              </h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-light p-6 md:p-8">
                <h3 className="mb-6 font-display text-xl font-semibold text-dark">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <a
                    href={PHONE_TEL}
                    className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <Phone className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                    <div>
                      <p className="font-display font-semibold text-dark">Phone</p>
                      <p className="text-lg font-semibold text-accent">
                        {PHONE_NUMBER}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <Mail className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                    <div>
                      <p className="font-display font-semibold text-dark">Email</p>
                      <p className="text-mid">{EMAIL}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm">
                    <Clock className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                    <div>
                      <p className="font-display font-semibold text-dark">
                        Business Hours
                      </p>
                      <p className="text-mid">Monday – Saturday</p>
                      <p className="text-mid">7:00 AM – 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm">
                    <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                    <div>
                      <p className="font-display font-semibold text-dark">
                        Neighborhoods We Serve
                      </p>
                      <ul className="mt-1 space-y-1">
                        {neighborhoods.map((area) => (
                          <li key={area} className="text-sm text-mid">
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-accent/10 p-4">
                  <p className="text-center font-display text-sm font-medium text-accent-dark">
                    We respond within 1 business day — guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="border-t border-border">
        <iframe
          title="Plano Concrete Solutions service area map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107175.24639498128!2d-96.77385985!3d33.0198431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21da13c59513%3A0x7b2ef7c20e76802d!2sPlano%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Local Business Schema */}
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
          }),
        }}
      />
    </>
  );
}
