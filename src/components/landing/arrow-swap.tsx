import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Diagonal arrow-swap hover icon.
 * Use inside a link/button that has the `group` class on it.
 * The resting arrow slides out to the top-right and fades while a
 * second arrow slides in from the bottom-left to take its place.
 */
export function ArrowSwap({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block shrink-0 overflow-hidden", className)}>
      <ArrowUpRight
        className="absolute inset-0 size-full transition-all duration-300 ease-out group-hover:translate-x-[125%] group-hover:-translate-y-[125%] group-hover:opacity-0"
        strokeWidth={2.4}
      />
      <ArrowUpRight
        className="absolute inset-0 size-full -translate-x-[125%] translate-y-[125%] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        strokeWidth={2.4}
      />
    </span>
  );
}