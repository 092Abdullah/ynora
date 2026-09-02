import { cn } from "@/lib/utils";

/**
 * Vertical text-swap hover label.
 * Use inside a link/button that has the `group` class on it.
 * The resting label slides up and fades out while a duplicate label
 * slides up from below to take its place — pairs with <ArrowSwap />.
 */
export function TextSwap({ children, className }: { children: string; className?: string }) {
  return (
    <span className={cn("relative inline-block overflow-hidden align-middle", className)}>
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}