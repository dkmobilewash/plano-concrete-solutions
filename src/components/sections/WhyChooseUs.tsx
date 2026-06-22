import { Shield, DollarSign, MapPin, Star } from "lucide-react";

const items = [
  {
    icon: Shield,
    label: "Licensed & Fully Insured",
    description:
      "Every project is backed by full liability coverage and proper licensing.",
  },
  {
    icon: DollarSign,
    label: "Free Estimates",
    description:
      "No-obligation quotes with transparent pricing. No hidden fees, no surprises.",
  },
  {
    icon: MapPin,
    label: "Locally Owned in Plano",
    description:
      "We live and work in Plano. Your neighborhood is our neighborhood.",
  },
  {
    icon: Star,
    label: "5-Star Google Rated",
    description:
      "Consistently rated 5 stars by Plano homeowners on Google Reviews.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Icon className="w-7 h-7 text-accent" />
            </div>

            <h3 className="mt-4 font-display text-lg font-bold text-dark">
              {item.label}
            </h3>

            <p className="mt-2 font-body text-mid text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
