import { ImageIcon, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  className?: string;
  /** e.g. "16:9", "1:1" — shown as helper text */
  aspectRatio?: string;
};

/**
 * Stand-in for logos, hero images, and static assets. Swap for real `<img>` when assets exist.
 */
export function PlaceholderImage({ label, className, aspectRatio = "16:9" }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/20 bg-white/5 px-4 py-8 text-center",
        className
      )}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="h-8 w-8 text-white/40" aria-hidden />
      <span className="text-xs font-medium uppercase tracking-wide text-white/70">{label}</span>
      <span className="font-mono text-[10px] text-white/35">{aspectRatio}</span>
    </div>
  );
}

type PlaceholderVideoProps = {
  label?: string;
  className?: string;
  aspectRatio?: string;
};

/**
 * Stand-in for inline or hero video. Replace with `<video>` when source is ready.
 */
export function PlaceholderVideo({
  label = "Video placeholder",
  className,
  aspectRatio = "16:9",
}: PlaceholderVideoProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-dashed border-white/20 bg-black/40",
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          <Play className="h-6 w-6 text-white/80" fill="currentColor" aria-hidden />
        </div>
      </div>
      <div className="relative z-[1] flex min-h-[180px] w-full flex-col items-center justify-end gap-1 pb-4 pt-24">
        <span className="text-xs font-medium text-white/80">{label}</span>
        <span className="font-mono text-[10px] text-white/40">{aspectRatio}</span>
      </div>
    </div>
  );
}
