"use client";
import { cn } from "@/util/cn";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-black dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,black_0%,black_7%,transparent_10%,transparent_12%,black_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,black_0%,black_7%,transparent_10%,transparent_12%,black_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--violet-500)_10%,var(--blue-500)_15%,var(--violet-300)_20%,var(--blue-300)_25%,var(--violet-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
