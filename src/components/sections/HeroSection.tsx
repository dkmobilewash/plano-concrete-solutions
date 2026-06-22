import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
  fullHeight?: boolean;
  shortHeight?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
  fullHeight = false,
  shortHeight = false,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full clip-diagonal-bottom overflow-hidden",
        fullHeight ? "min-h-screen" : shortHeight ? "min-h-[300px]" : "min-h-[400px]"
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-dark/60" />

      <div className="concrete-texture absolute inset-0 opacity-30" />

      <div
        className={cn(
          "relative z-10 flex flex-col items-center justify-center px-4 text-center",
          fullHeight
            ? "min-h-screen py-32"
            : shortHeight
              ? "min-h-[300px] py-16"
              : "min-h-[400px] py-20"
        )}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white leading-tight">
            {title}
          </h1>

          <p className="mt-6 font-body text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={ctaHref} size="lg">
              {ctaText}
            </Button>

            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="outline-white" size="lg">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>

        {fullHeight && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <ChevronDown
              className="w-8 h-8 text-white animate-scroll-bounce"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </section>
  );
}
