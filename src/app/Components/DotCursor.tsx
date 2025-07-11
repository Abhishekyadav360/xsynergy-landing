'use client';

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

function getRandomChar() {
  return matrixChars[Math.floor(Math.random() * matrixChars.length)];
}

export default function MatrixTrailCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const trailCount = 12; // Increase number of trails

  // Create more spring trails with increasing lag
  const trails = Array.from({ length: trailCount }, (_, i) => {
    const stiffness = Math.max(30, 120 - i * 10); // minimum stiffness
    const damping = 20 + i * 4;
    return {
      x: useSpring(mouseX, { stiffness, damping }),
      y: useSpring(mouseY, { stiffness, damping }),
    };
  });

  const [chars, setChars] = useState(
    Array.from({ length: trailCount }, () => getRandomChar())
  );

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const interval = setInterval(() => {
      setChars(Array.from({ length: trailCount }, () => getRandomChar()));
    }, 80);

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(interval);
    };
  }, []);

  const baseStyle =
    "fixed top-0 left-0 z-[9999] pointer-events-none font-mono text-[#00ff41]";

  return (
    <>
      {trails.map((trail, index) => (
        <motion.div
          key={index}
          className={`${baseStyle} ${
            index < 2 ? "text-2xl" : index < 5 ? "text-xl" : "text-lg"
          }`}
          style={{
            x: trail.x,
            y: trail.y,
            marginLeft: -8,
            marginTop: -8,
            opacity: 1 - index * 0.07,
            filter: `blur(${index}px)`,
          }}
        >
          {chars[index]}
        </motion.div>
      ))}
    </>
  );
}
