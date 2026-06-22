import { PHONE_NUMBER, PHONE_TEL } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="clip-diagonal-both bg-accent py-20 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide">
          Ready to Start Your Concrete Project in Plano?
        </h2>

        <p className="mt-4 font-body text-lg text-white/90">
          Get a free estimate today &mdash; no obligation. We&apos;ll respond
          within 1 business day.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={PHONE_TEL} variant="outline-white" size="lg">
            Call Now: {PHONE_NUMBER}
          </Button>

          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="bg-white text-accent hover:bg-gray-100 hover:text-accent-dark"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
