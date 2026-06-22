import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12")}>
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl font-bold uppercase tracking-wide",
          light ? "text-white" : "text-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 font-body text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-mid"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
