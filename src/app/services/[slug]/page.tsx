import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import { Check, ChevronDown, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://planoconcretesolutions.com/services/${service.slug}`,
    },
    alternates: {
      canonical: `https://planoconcretesolutions.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedServices
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean);

  return (
    <>
      <HeroSection
        title={service.name}
        subtitle={service.heroSubtitle}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc={service.heroImage}
        imageAlt={`${service.name} in Plano, TX`}
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {service.intro.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-6 text-lg leading-relaxed text-mid last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-lg border border-border bg-light p-6">
                <h3 className="mb-4 font-display text-xl font-semibold text-dark">
                  Get a Free Quote
                </h3>
                <p className="mb-6 text-mid">
                  Ready to start your {service.shortName.toLowerCase()} project?
                  Call us or request a quote online.
                </p>
                <a
                  href={PHONE_TEL}
                  className="mb-3 flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-display font-medium text-white transition-colors hover:bg-accent-dark"
                >
                  <Phone className="h-5 w-5" />
                  {PHONE_NUMBER}
                </a>
                <Button href="/contact" variant="secondary" className="w-full">
                  Request a Quote Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-display text-3xl font-semibold text-dark md:text-4xl">
            Why Choose Our {service.shortName} Service
          </h2>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-mid">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-display text-3xl font-semibold text-dark md:text-4xl">
            Our Process
          </h2>
          <div className="mx-auto max-w-3xl space-y-8">
            {service.processSteps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-dark">
                    {step.title}
                  </h3>
                  <p className="text-mid leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-display text-3xl font-semibold text-dark md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {service.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4">
                  <span className="font-display text-lg font-medium text-dark">
                    {item.question}
                  </span>
                  <ChevronDown className="faq-chevron h-5 w-5 shrink-0 text-mid" />
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-mid leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-semibold text-dark md:text-4xl">
              Related Services
            </h2>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {relatedServices.map((related) =>
                related ? (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group overflow-hidden rounded-lg border border-border bg-white shadow-md transition-shadow hover:shadow-xl"
                  >
                    <div className="p-6">
                      <h3 className="mb-2 font-display text-xl font-semibold text-dark group-hover:text-accent">
                        {related.name}
                      </h3>
                      <p className="text-mid">{related.heroSubtitle}</p>
                      <span className="mt-4 inline-block font-display text-accent">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                ) : null,
              )}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
