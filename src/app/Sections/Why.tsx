// components/Why.js
"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    text: "Download the Swag app today.",
  },
  {
    text: "Set up your Swag Spend Account and instantly set up your digital Visa Debit card.",
  },
  {
    text: "Start spending with your virtual card instantly.",
  },
];

const Why = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const translateY = useTransform(springScroll, [0, 1], [0, -200]); // Adjust height scroll

  return (
    <div className="min-h-[200vh] bg-[#f6f1fc] relative flex items-start justify-center">
      <div ref={containerRef} className="sticky top-32 h-[500px] w-full flex flex-col items-center justify-center z-10">
        <h1 className="text-6xl font-bold text-purple-900 mb-12">Why</h1>

        <motion.div style={{ y: translateY }} className="relative h-[300px] w-[300px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-3xl shadow-xl p-6 flex items-center justify-center text-center text-lg"
              style={{
                zIndex: cards.length - index,
                y: index * 20,
              }}
            >
              {card.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Why;
