'use client';

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function DotCursor() {
  // Raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring values (for main dot)
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  // Trails (slower springs for lag effect)
  const trailX1 = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const trailY1 = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const trailX2 = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const trailY2 = useSpring(mouseY, { stiffness: 60, damping: 15 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const dotStyle = "fixed top-0 left-0 rounded-full pointer-events-none z-[9999]";

  return (
    <>
      
      <motion.div
        className={`${dotStyle} w-4 h-4 bg-green-500`}
        style={{
          x: cursorX,
          y: cursorY,
          marginLeft: -8,
          marginTop: -8,
        }}
      />
    
      <motion.div
        className={`${dotStyle} w-3 h-3 bg-green-400 opacity-50`}
        style={{
          x: trailX1,
          y: trailY1,
          marginLeft: -6,
          marginTop: -6,
        }}
      />
     
      <motion.div
        className={`${dotStyle} w-2 h-2 bg-green-300 opacity-30`}
        style={{
          x: trailX2,
          y: trailY2,
          marginLeft: -4,
          marginTop: -4,
        }}
      />
    </>
  );
}
