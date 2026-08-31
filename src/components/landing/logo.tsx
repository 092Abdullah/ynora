import { cn } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  wordmark = true,
  invert = false,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  wordmark?: boolean;
  invert?: boolean;
}) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className={cn(
          "size-7 transition-transform duration-300 group-hover:rotate-12",
          markClassName,
        )}
        aria-hidden
      >
        <path d="M16 3.2 28.4 16 16 28.8 3.6 16 16 3.2Z" fill={invert ? "#fff" : "#171717"} />
        <path d="M16 3.2 28.4 16 16 16 16 3.2Z" fill="#FF762A" />
      </svg>
      {wordmark ? (
        <span
          className={cn(
            "text-[1.35rem] font-semibold tracking-tight lowercase",
            invert ? "text-snow" : "text-ink",
            wordmarkClassName,
          )}
        >
          ynora
        </span>
      ) : null}
    </a>
  );
}