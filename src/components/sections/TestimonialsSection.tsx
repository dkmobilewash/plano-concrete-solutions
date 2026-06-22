import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="What Plano Homeowners Say"
          subtitle="Real reviews from real customers across Plano's neighborhoods."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-lg p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-4 font-body text-gray-200 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6">
                <p className="font-display text-white font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-400">{testimonial.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
