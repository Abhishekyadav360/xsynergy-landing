"use client";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

const CELL = 64;
const LINE_SIZE = 1.2;
const GLOW_COLOR = "rgba(34,197,94,0.8)";
const SECTION_HEIGHT = 700;

type GlowLine = {
  id: number;
  x: number;
  y: number;
  len: number;
  vertical: boolean;
  forward: boolean;
  duration: number;
  delay: number;
};

export default function GridGlow({
  className = "",
  lines = 12,
  maxLength = 280,
}: {
  className?: string;
  lines?: number;
  maxLength?: number;
}) {
  const glowLines: GlowLine[] = useMemo(() => {
    const verticalCount = lines - 4;
    const horizontalCount = 4;

    const sectionWidth = window.innerWidth;

    const snap = (v: number) => Math.round(v / CELL) * CELL;

    // Vertical lines
    const columns = Math.floor(sectionWidth / CELL) - 1;
    const verticalLines = Array.from({ length: verticalCount }).map((_, i) => {
      const colIdx = Math.floor(((i + 1) * columns) / (verticalCount + 1));
      const xPos = snap(colIdx * CELL);
      const len = 160 + Math.random() * (maxLength - 160);
      const forward = Math.random() > 0.5;
      return {
        id: i,
        vertical: true,
        forward,
        len,
        x: xPos,
        y: forward ? -len : SECTION_HEIGHT + len,
        duration: 6 + Math.random() * 3,
        delay: i * 0.5,
      };
    });

    // Horizontal lines (start slightly below top)
    const minRowIndex = 1;
    const rows = Math.floor(SECTION_HEIGHT / CELL / 2) - 1;
    const horizontalLines = Array.from({ length: horizontalCount }).map((_, i) => {
      const rowIdx = minRowIndex + Math.floor(((i + 1) * rows) / (horizontalCount + 1));
      const yPos = snap(rowIdx * CELL);
      const len = 160 + Math.random() * (maxLength - 160);
      const forward = Math.random() > 0.5;
      return {
        id: i + verticalCount,
        vertical: false,
        forward,
        len,
        x: forward ? -len : sectionWidth + len,
        y: yPos,
        duration: 6 + Math.random() * 3,
        delay: i * 0.5,
      };
    });

    return [...horizontalLines, ...verticalLines];
  }, [lines, maxLength]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Static grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg , rgba(255,255,255,.06) 0 1px , transparent 1px ${CELL}px),
            repeating-linear-gradient(90deg, rgba(255,255,255,.06) 0 1px , transparent 1px ${CELL}px)
          `,
          maskImage:
            "radial-gradient(ellipse 100% 85% at center, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 85% at center, #000 60%, transparent 100%)",
        }}
      />

      {/* Glow lines */}
      {glowLines.map((g) => {
        const startX = g.x;
        const startY = g.vertical
          ? g.forward
            ? -g.len
            : SECTION_HEIGHT + g.len
          : g.y;

        const endX = g.vertical
          ? g.x
          : g.forward
            ? window.innerWidth + g.len
            : -g.len;

        const endY = g.vertical
          ? g.forward
            ? SECTION_HEIGHT + g.len
            : -g.len
          : g.y;

        const gradient = g.vertical
          ? g.forward
            ? `linear-gradient(180deg, ${GLOW_COLOR}, transparent)`
            : `linear-gradient(0deg, ${GLOW_COLOR}, transparent)`
          : g.forward
            ? `linear-gradient(90deg, ${GLOW_COLOR}, transparent)`
            : `linear-gradient(270deg, ${GLOW_COLOR}, transparent)`;

        const dotStyle = {
          width: "8px",
          height: "8px",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 15px 6px rgba(34,197,94,0.4)",
          top: g.vertical
            ? g.forward
              ? "0%"
              : "100%"
            : "50%",
          left: g.vertical
            ? "50%"
            : g.forward
              ? "0%"
              : "100%",
        };

        return (
          <motion.div
            key={g.id}
            className="absolute mix-blend-screen"
            initial={{ opacity: 0, x: startX, y: startY }}
            animate={{ opacity: [0, 1, 0.8, 0], x: endX, y: endY }}
            transition={{
              duration: g.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: g.delay,
            }}
            style={{
              width: g.vertical ? `${LINE_SIZE}px` : `${g.len}px`,
              height: g.vertical ? `${g.len}px` : `${LINE_SIZE}px`,
              background: gradient,
              filter: "blur(0.6px)",
            }}
          >
            <div className="absolute rounded-full bg-green-400" style={dotStyle} />
          </motion.div>
        );
      })}
    </div>
  );
}
