'use client';
import React, { useEffect, useRef, useState, memo } from 'react';
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
type Particle = {
  cx: number;
  startY: number;
  endY: number;
  r: number;
  opacity: number;
  dur: number;
};

// Static lines memoized
const StaticPaths = memo(() => (
  <>
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
  </>
));
StaticPaths.displayName = 'StaticPaths';

const MatrixStream = () => {
  const [pulses, setPulses] = useState<Pulse[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const resizeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateMobile = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile((prev) => (prev !== isNowMobile ? isNowMobile : prev));
    };

    updateMobile();
    const resizeListener = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(updateMobile, 200);
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
      }, 5000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

    const generatedParticles = Array.from({ length: count }).map(() => {
      const cx = Math.random() * 1600;
      const startY = Math.random() * 800;
      const endY = startY + 40 + Math.random() * 60;
      const r = 0.6 + Math.random() * 1.2;
      const opacity = 0.2 + Math.random() * 0.3;
      const dur = 5 + Math.random() * 3;

      return { cx, startY, endY, r, opacity, dur };
    });

    setParticles(generatedParticles);
  }, [isMobile]);

  return (
    <div className="absolute top-0 inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1600 1000"
        preserveAspectRatio={isMobile ? 'xMidYMid slice' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static lines */}
        <StaticPaths />

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
                filter: 'drop-shadow(0 0 5px rgba(0,255,100,0.6))',
              }}
            />
          );
        })}

        {/* Floating particles */}
        {particles.map((p, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={p.cx}
            cy={p.startY}
            r={p.r}
            fill="rgba(0,255,100,0.5)"
            initial={{ opacity: p.opacity }}
            animate={{
              cy: [p.startY, p.endY, p.startY],
              opacity: [p.opacity, p.opacity + 0.1, p.opacity],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Top beam */}
        <motion.path
          d="M750,0 Q800,100 800,200 Q800,100 850,0 Z"
          fill="url(#beamGradient)"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'blur(15px)' }}
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
MatrixStream.displayName = 'MatrixStream';
export default MatrixStream;
