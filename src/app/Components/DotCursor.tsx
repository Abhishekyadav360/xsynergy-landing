'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

// const TRAIL_COUNT = 8;

function getRandomChar() {
  return matrixChars[Math.floor(Math.random() * matrixChars.length)];
}

export default function MatrixTrailCursor() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Always call hooks at top level
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ✅ Define trail motion values manually (not inside loop)
  const x0 = useMotionValue(0);
  const y0 = useMotionValue(0);
  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);
  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);
  const x3 = useMotionValue(0);
  const y3 = useMotionValue(0);
  const x4 = useMotionValue(0);
  const y4 = useMotionValue(0);
  const x5 = useMotionValue(0);
  const y5 = useMotionValue(0);
  const x6 = useMotionValue(0);
  const y6 = useMotionValue(0);
  const x7 = useMotionValue(0);
  const y7 = useMotionValue(0);

  const trails = [
    { x: x0, y: y0 },
    { x: x1, y: y1 },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
    { x: x4, y: y4 },
    { x: x5, y: y5 },
    { x: x6, y: y6 },
    { x: x7, y: y7 }
  ];

  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const update = () => {
      const targetX = mouseX.get();
      const targetY = mouseY.get();

      trails.forEach((trail, i) => {
        const prev = i === 0
          ? { x: targetX, y: targetY }
          : {
              x: trails[i - 1].x.get(),
              y: trails[i - 1].y.get()
            };

        const lerp = 0.2 - i * 0.015;
        trail.x.set(trail.x.get() + (prev.x - trail.x.get()) * lerp);
        trail.y.set(trail.y.get() + (prev.y - trail.y.get()) * lerp);
      });

      animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mouseX, mouseY, trails]);

  const [chars, setChars] = useState(
    Array.from({ length: trails.length }, () => getRandomChar())
  );

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const interval = setInterval(() => {
      setChars(Array.from({ length: trails.length }, () => getRandomChar()));
    }, 60);

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  const baseStyle =
    'fixed top-0 left-0 z-[9999] pointer-events-none font-mono text-[#00ff41]';

  return (
    <>
      {trails.map((trail, index) => (
        <motion.div
          key={index}
          className={`${baseStyle} ${
            index < 2 ? 'text-2xl' : index < 5 ? 'text-xl' : 'text-lg'
          }`}
          style={{
            x: trail.x,
            y: trail.y,
            marginLeft: -8,
            marginTop: -8,
            opacity: 1 - index * 0.06,
            filter: `blur(${index * 0.5}px)`
          }}
        >
          {chars[index]}
        </motion.div>
      ))}
    </>
  );
}
