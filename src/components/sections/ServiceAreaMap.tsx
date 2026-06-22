import Link from "next/link";
import { locations } from "@/data/locations";

export default function ServiceAreaMap() {
  return (
    <div className="mt-10">
      <p className="text-center font-body text-mid max-w-3xl mx-auto mb-10 leading-relaxed">
        We provide concrete services across all of Plano&apos;s neighborhoods
        &mdash; from the established streets of West Plano and Deerfield to the
        newer developments around Legacy West and North Plano. No matter where
        you are in the city, our crew is just a phone call away.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {locations.map((location) => (
          <Link
            key={location.slug}
            href={`/service-areas/${location.slug}`}
            className="bg-light hover:bg-accent hover:text-white rounded-full px-6 py-3 font-display text-dark transition-colors duration-200"
          >
            {location.area}
          </Link>
        ))}
      </div>
    </div>
  );
}
