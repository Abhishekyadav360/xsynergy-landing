'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TOTAL_LINES = 12;
const MAX_PULSES = 8;
const PARTICLE_COUNT_DESKTOP = 30;
const PARTICLE_COUNT_MOBILE = 15;

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

const PATHS = Array.from({ length: TOTAL_LINES }, (_, i) => createPath(i));

type Pulse = { id: number; line: number };

const MatrixStream = () => {
  const [pulses, setPulses] = useState<Pulse[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768);
    updateMobile();

    const resizeListener = () => {
      clearTimeout((resizeListener as any).timeout);
      (resizeListener as any).timeout = setTimeout(updateMobile, 200);
    };

    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const line = Math.floor(Math.random() * TOTAL_LINES);
      const id = Date.now() + Math.random();

      setPulses((prev) => {
        const next = [...prev, { id, line }];
        return next.length > MAX_PULSES ? next.slice(-MAX_PULSES) : next;
      });

      setTimeout(() => {
        setPulses((prev) => prev.filter((p) => p.id !== id));
      }, 5000); // match animation time
    }, 500); // less frequent pulses

    return () => clearInterval(interval);
  }, []);

  const particleCount = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

  return (
    <div className="absolute top-0 inset-0 z-0 overflow-hidden pointer-events-none bg-black">
       <svg
        width="100%"
        height="100%"
        viewBox="0 0 1600 1000"
        preserveAspectRatio={isMobile ? "xMidYMid slice" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static lines */}
        {PATHS.map((d, i) => (
          <path
            key={`base-${i}`}
            d={d}
            fill="none"
            stroke="rgba(0,255,100,0.15)"
            strokeWidth={1}
            style={{
              filter: 'drop-shadow(0 0 2px rgba(0,255,100,0.3))',
            }}
          />
        ))}

        {/* Glow pulses */}
        {pulses.map(({ id, line }) => {
          const duration = 4;
          return (
            <motion.path
              key={id}
              d={PATHS[line]}
              fill="none"
              stroke="url(#pulseGradient)"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeDasharray="200 1400"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -1400 }}
              transition={{ duration, ease: 'linear' }}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(0,255,100,0.9))',
              }}
            />
          );
        })}

        {/* Floating particles */}
        {Array.from({ length: particleCount }).map((_, i) => {
          const cx = Math.random() * 1600;
          const startY = Math.random() * 800;
          const endY = startY + 40 + Math.random() * 60;
          const r = 0.6 + Math.random() * 1.2;
          const opacity = 0.2 + Math.random() * 0.3;
          const dur = 5 + Math.random() * 3;

          return (
            <motion.circle
              key={`particle-${i}`}
              cx={cx}
              cy={startY}
              r={r}
              fill="rgba(0,255,100,0.5)"
              initial={{ opacity }}
              animate={{
                cy: [startY, endY, startY],
                opacity: [opacity, opacity + 0.1, opacity],
              }}
              transition={{
                duration: dur,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Top beam */}
        <motion.path
          d="M750,0 Q800,100 800,200 Q800,100 850,0 Z"
          fill="url(#beamGradient)"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'blur(25px)' }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="pulseGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="rgba(0,255,100,0)" />
            <stop offset="50%" stopColor="rgba(0,255,100,0.9)" />
            <stop offset="100%" stopColor="rgba(0,255,100,0)" />
          </linearGradient>

          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,255,100,0.7)" />
            <stop offset="100%" stopColor="rgba(0,255,100,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default MatrixStream;
