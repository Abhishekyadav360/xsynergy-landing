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

  const springs = [
    {
      x: useSpring(mouseX, { stiffness: 120, damping: 20 }),
      y: useSpring(mouseY, { stiffness: 120, damping: 20 }),
    },
    {
      x: useSpring(mouseX, { stiffness: 110, damping: 24 }),
      y: useSpring(mouseY, { stiffness: 110, damping: 24 }),
    },
    {
      x: useSpring(mouseX, { stiffness: 100, damping: 28 }),
      y: useSpring(mouseY, { stiffness: 100, damping: 28 }),
    },
    {
      x: useSpring(mouseX, { stiffness: 90, damping: 32 }),
      y: useSpring(mouseY, { stiffness: 90, damping: 32 }),
    },
    // ... add more manually up to desired count
  ];

  const [chars, setChars] = useState(
    Array.from({ length: springs.length }, () => getRandomChar())
  );

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const interval = setInterval(() => {
      setChars(Array.from({ length: springs.length }, () => getRandomChar()));
    }, 80);

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  const baseStyle =
    "fixed top-0 left-0 z-[9999] pointer-events-none font-mono text-[#00ff41]";

  return (
    <>
      {springs.map((trail, index) => (
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
