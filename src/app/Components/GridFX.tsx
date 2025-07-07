// components/GridFX.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

const CELL = 56;

export default function GridFX({ className = "" }: { className?: string }) {
  // 6 random vertical + horizontal glow lines
  const glowLines = Array.from({ length: 6 }).map((_, i) => {
    const isVertical = Math.random() > 0.5;
    const position = Math.floor(Math.random() * (isVertical ? window.innerWidth : 600));
    const length = 100 + Math.random() * 200; // max width/height ≈ 300
    const delay = Math.random() * 5;

    return { id: i, isVertical, position, length, delay };
  });

  return (
    <div className={`absolute inset-0 pointer-events-none select-none ${className}`}>
      {/* Static grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg , rgba(255,255,255,.05) 0 1px , transparent 1px ${CELL}px),
            repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0 1px , transparent 1px ${CELL}px)
          `,
          maskImage:
            "radial-gradient(ellipse 100% 80% at center, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 80% at center, #000 60%, transparent 100%)",
        }}
      />

      {/* Subtle animated patches */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/5 backdrop-brightness-[.35]"
          style={{
            width: CELL * 2,
            height: CELL * 2,
            left: (i * 151) % window.innerWidth,
            top: (i * 211) % 600,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 2,
          }}
        />
      ))}

      {/* Random glow lines - vertical or horizontal */}
      {glowLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute bg-green-500/60 blur-sm"
          style={{
            left: line.isVertical ? line.position : 0,
            top: line.isVertical ? 0 : line.position,
            width: line.isVertical ? "2px" : `${line.length}px`,
            height: line.isVertical ? `${line.length}px` : "2px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
