"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Animated statistics band. Counts up when scrolled into view.
 */
export function StatsCounter({ dark = true }: { dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-4"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div
            className={cn(
              "font-heading text-4xl font-bold tracking-tight sm:text-5xl",
              dark ? "text-white" : "text-primary-800"
            )}
          >
            {inView ? (
              <CountUp
                end={stat.value}
                duration={2.4}
                decimals={"decimals" in stat ? stat.decimals : 0}
                separator=","
                suffix={stat.suffix}
              />
            ) : (
              <span>0</span>
            )}
          </div>
          <p
            className={cn(
              "mt-2 text-sm font-medium",
              dark ? "text-primary-200" : "text-gray-500"
            )}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
