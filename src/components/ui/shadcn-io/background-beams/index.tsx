'use client';

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = Array.from({ length: 6 }).map((_, i) => ({
    yStart: Math.random() * 300,
    yEnd: Math.random() * 300,
    delay: Math.random() * 5,
  }));

  return (
    <div className={cn("absolute inset-0 w-full h-full overflow-hidden pointer-events-none", className)}>
      <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
        {beams.map((beam, i) => (
          <motion.line
            key={i}
            x1={0}
            y1={beam.yStart}
            x2={1000}
            y2={beam.yEnd}
            stroke={`url(#gradient-${i})`}
            strokeWidth={2}
            strokeOpacity={0.5}
            initial={{ x1: -1000, x2: 0 }}
            animate={{ x1: 0, x2: 1000 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10 + Math.random() * 5,
              delay: beam.delay,
              ease: "linear",
            }}
          />
        ))}

        <defs>
          {beams.map((_, i) => (
            <linearGradient
              key={i}
              id={`gradient-${i}`}
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#18CCFC" stopOpacity={0.5} />
              <stop offset="50%" stopColor="#6344F5" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#AE48FF" stopOpacity={0.5} />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};
