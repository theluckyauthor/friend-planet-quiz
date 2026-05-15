import React from "react";
import { PlanetType } from "@/utils/analytics";
import { cn } from "@/lib/utils";

type PlanetIllustrationSize = "sm" | "md" | "lg";

interface PlanetIllustrationProps {
  planet: PlanetType;
  size?: PlanetIllustrationSize;
  className?: string;
}

interface PlanetVisualConfig {
  colors: string;
  ring?: string;
  tail?: string;
  spots?: string;
  badge?: string;
}

const sizeClasses: Record<PlanetIllustrationSize, string> = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
  lg: "h-24 w-24",
};

const planetVisuals: Record<PlanetType, PlanetVisualConfig> = {
  sun: { colors: "from-yellow-200 via-orange-300 to-amber-500", spots: "bg-yellow-50/70", badge: "bg-amber-200/40" },
  mercury: { colors: "from-sky-200 via-cyan-300 to-indigo-400", spots: "bg-white/40", badge: "bg-cyan-100/40" },
  venus: { colors: "from-rose-200 via-orange-200 to-amber-300", spots: "bg-white/35", badge: "bg-amber-100/40" },
  earth: { colors: "from-emerald-200 via-blue-300 to-sky-500", spots: "bg-emerald-100/45", badge: "bg-cyan-200/35" },
  mars: { colors: "from-orange-200 via-red-300 to-rose-500", spots: "bg-red-100/35", badge: "bg-orange-200/35" },
  jupiter: { colors: "from-amber-200 via-orange-300 to-yellow-500", spots: "bg-amber-50/55", badge: "bg-yellow-100/45" },
  saturn: { colors: "from-lime-100 via-yellow-200 to-amber-300", ring: "border-yellow-100/70", spots: "bg-amber-50/40", badge: "bg-lime-100/40" },
  uranus: { colors: "from-cyan-100 via-teal-200 to-sky-300", spots: "bg-cyan-50/50", badge: "bg-teal-100/40" },
  neptune: { colors: "from-blue-200 via-indigo-300 to-violet-500", spots: "bg-indigo-100/35", badge: "bg-blue-100/30" },
  pluto: { colors: "from-slate-300 via-slate-500 to-slate-700", spots: "bg-slate-100/40", badge: "bg-slate-100/30" },
  moon: { colors: "from-zinc-100 via-slate-200 to-stone-300", spots: "bg-white/55", badge: "bg-zinc-100/40" },
  comet: { colors: "from-cyan-200 via-sky-300 to-indigo-400", tail: "from-cyan-100/90 to-transparent", spots: "bg-white/45", badge: "bg-cyan-100/35" },
  cluster: { colors: "from-violet-300 via-indigo-400 to-blue-500", spots: "bg-violet-100/40", badge: "bg-indigo-100/35" },
  satellite: { colors: "from-slate-200 via-slate-300 to-slate-500", ring: "border-slate-100/60", spots: "bg-slate-100/35", badge: "bg-slate-100/35" },
};

export const PlanetIllustration = ({ planet, size = "md", className }: PlanetIllustrationProps) => {
  const visual = planetVisuals[planet];

  return (
    <div className={cn("relative inline-flex items-center justify-center", sizeClasses[size], className)}>
      {visual.tail && (
        <span
          className={cn("absolute -left-7 top-1/2 h-3 w-10 -translate-y-1/2 rounded-full bg-gradient-to-r blur-[1px]", visual.tail)}
          aria-hidden
        />
      )}

      {visual.ring && (
        <span className={cn("absolute h-[122%] w-[122%] rounded-full border-4 -rotate-12", visual.ring)} aria-hidden />
      )}

      <div
        className={cn("relative h-full w-full rounded-full bg-gradient-to-br shadow-[0_10px_30px_rgba(30,30,60,0.35)]", visual.colors)}
        aria-label={`${planet} illustration`}
        role="img"
      >
        <span className={cn("absolute left-[22%] top-[20%] h-2.5 w-2.5 rounded-full", visual.spots)} aria-hidden />
        <span className={cn("absolute right-[20%] top-[52%] h-2 w-2 rounded-full", visual.spots)} aria-hidden />
        <span className={cn("absolute left-[42%] bottom-[18%] h-1.5 w-1.5 rounded-full", visual.spots)} aria-hidden />
      </div>

      {visual.badge && <span className={cn("absolute -right-1 top-0 h-3 w-3 rounded-full", visual.badge)} aria-hidden />}
    </div>
  );
};
