import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

const serviceDescriptions: Record<string, string> = {
  driveways:
    "Durable concrete driveways engineered for North Texas clay soil and summer heat. Custom finishes from broom to stamped.",
  patios:
    "Outdoor living spaces built for year-round Texas use. Stamped, stained, and cool deck options available.",
  "pool-decks":
    "Slip-resistant, heat-reflective pool deck surfaces. Cool deck coatings that stay comfortable on bare feet.",
  "block-walls":
    "Retaining walls, privacy walls, and garden borders. CMU block construction built to last decades.",
  "foundations-slabs":
    "Post-tension and conventional foundations engineered for North Texas expansive clay soil.",
  "commercial-concrete":
    "Parking lots, sidewalks, warehouse floors, and ADA-compliant hardscaping for Plano businesses.",
};

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {services.map((service) => (
        <div
          key={service.slug}
          className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="relative overflow-hidden">
            <Image
              src={`https://picsum.photos/seed/${service.slug}/800/600`}
              alt={service.name}
              width={400}
              height={300}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <div className="p-6">
            <h3 className="font-display text-xl font-bold text-dark">
              {service.name}
            </h3>

            <p className="mt-2 font-body text-mid text-sm leading-relaxed">
              {serviceDescriptions[service.slug]}
            </p>

            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-block font-display text-accent hover:text-accent-dark transition-colors duration-200"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
