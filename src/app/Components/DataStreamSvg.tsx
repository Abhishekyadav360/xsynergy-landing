"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ---------- geometry helpers ---------- */

const TOTAL_LINES = 12;

/* path for i-th diverging line (converge at top) */
const createPath = (i: number) => {
    const topY = 0;
    const midY = 500;
    const bottomY = 1000;

    const spread = 800;
    const leftX = 400;
    const xEnd = leftX + (i / (TOTAL_LINES - 1)) * spread;
    const xConverge = 800;

    return `M${xConverge},${topY} L${xEnd},${midY} L${xEnd},${bottomY}`;
};

/* pre-compute static paths so they don’t regen on every render */
const PATHS = Array.from({ length: TOTAL_LINES }, (_, i) => createPath(i));

/* ---------- component ---------- */

type Pulse = { id: number; line: number };

const MatrixStream = () => {
    const [pulses, setPulses] = useState<Pulse[]>([]);

    /* periodically add random pulses */
    useEffect(() => {
        const interval = setInterval(() => {
            const line = Math.floor(Math.random() * TOTAL_LINES);
            const id = Date.now() + Math.random(); // unique key
            setPulses((prev) => [...prev, { id, line }]);

            // remove pulse after its animation completes
            setTimeout(() => {
                setPulses((prev) => prev.filter((p) => p.id !== id));
            }, 5500); // slightly more than max duration
        }, 600); // new pulse every 600ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute top-0 inset-0 z-0 overflow-hidden pointer-events-none bg-black">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1600 1000"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* static diverging lines */}
                {PATHS.map((d, i) => (
                    <path
                        key={`base-${i}`}
                        d={d}
                        fill="none"
                        stroke="rgba(0,255,100,0.15)"
                        strokeWidth={1.2}
                        style={{ filter: "drop-shadow(0 0 3px rgba(0,255,100,0.3))" }}
                    />
                ))}

                {/* dynamic glow pulses (random timing/order) */}
                {pulses.map(({ id, line }) => {
                    const duration = 3.5 + Math.random() * 1.5; // 3.5 – 5s
                    return (
                        <motion.path
  key={id}
  d={PATHS[line]}
  fill="none"
  stroke="url(#pulseGradient)"
  strokeWidth={2}
  strokeLinecap="round"
  strokeDasharray="200 1400"
  initial={{ strokeDashoffset: 0, opacity: 1 }}            
  animate={{ strokeDashoffset: -1400, opacity: 1 }}      
  transition={{ duration, ease: "linear" }}
  style={{
    filter: "drop-shadow(0 0 20px rgba(0,255,100,1))",
  }}
/>
                    );
                })}

                {/* floating random particles */}
                {[...Array(40)].map((_, i) => {
                    const cx = Math.random() * 1600;
                    const startY = Math.random() * 800;
                    const endY = startY + 60 + Math.random() * 80;
                    const r = 0.5 + Math.random() * 1.5;
                    const baseOpacity = 0.2 + Math.random() * 0.4;
                    const dur = 4 + Math.random() * 4;
                    return (
                        <motion.circle
                            key={`particle-${i}`}
                            cx={cx}
                            cy={startY}
                            r={r}
                            fill="rgba(0,255,100,0.6)"
                            initial={{ opacity: baseOpacity }}
                            animate={{
                                cy: [startY, endY, startY],
                                opacity: [baseOpacity, baseOpacity + 0.1, baseOpacity],
                            }}
                            transition={{
                                duration: dur,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}

                {/* energy beam at top centre */}
                <motion.path
                    d="M750,0 Q800,100 800,200 Q800,100 850,0 Z"
                    fill="url(#beamGradient)"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: [0.6, 0.9, 0.6], scaleY: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ filter: "blur(30px)" }}
                />

                {/* gradients */}
                <defs>
                    <linearGradient id="pulseGradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="rgba(0,255,100,0)" />
                        <stop offset="50%" stopColor="rgba(0,255,100,0.9)" />
                        <stop offset="100%" stopColor="rgba(0,255,100,0)" />
                    </linearGradient>

                    <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0,255,100,0.8)" />
                        <stop offset="100%" stopColor="rgba(0,255,100,0)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default MatrixStream;
