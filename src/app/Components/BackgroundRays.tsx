'use client';

import { motion } from 'framer-motion';
import React from 'react';

const BackgroundRays = ({ children }: { children: React.ReactNode }) => {
  // Spread rays from -60° to +60° evenly
  const angles = Array.from({ length: 20 }, (_, i) => -60 + (i * 120) / 19);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* 💚 Multi Green Light Rays from center-bottom */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden"
        style={{
          filter: 'blur(10px)',
          maskImage:
            'radial-gradient(60% 110% at 50% 50%, black 0%, transparent 96%)',
          WebkitMaskImage:
            'radial-gradient(60% 110% at 50% 50%, black 0%, transparent 96%)',
        }}
      >
        {angles.map((angle, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 1, opacity: 0.7 }}
            animate={{
              scaleY: [1, 1.05, 0.95],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + i * 0.15,
              delay: i * 0.05,
              ease: 'easeInOut',
            }}
            className="absolute"
            style={{
              left: '50%',
              bottom: 0,
              transform: `translateX(-50%) rotate(${angle}deg)`,
              transformOrigin: 'bottom center',
              width: '20px',
              height: '1500px',
              background:
                'radial-gradient(ellipse at center, rgba(0, 255, 140, 0.5) 0%, rgba(0, 255, 140, 0) 80%)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      {/* 🌟 Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/30 blur-3xl z-0" />

      {/* 🖤 Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-20 pointer-events-none" />

      {/* ✨ Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );
};

export default BackgroundRays;
