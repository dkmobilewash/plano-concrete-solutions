import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block bg-light rounded-full px-4 py-2 text-sm font-display text-dark",
        className
      )}
    >
      {children}
    </span>
  );
}
