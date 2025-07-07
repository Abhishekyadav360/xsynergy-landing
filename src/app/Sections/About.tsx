'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AnimatedLetterProps {
  char: string;
  index: number;
  prefixLen: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
  char,
  index,
  prefixLen,
  scrollYProgress,
}) => {
  const delayFactor = 0.005;
  const localIndex = Math.max(0, index - prefixLen);
  const start = localIndex * delayFactor;
  const end = start + 0.2;

  // ✅ Hooks are always called (no condition)
  const color = useTransform(scrollYProgress, [start, end], ['#666', '#ffffff']);
  const shadow = useTransform(
    scrollYProgress,
    [end - 0.05, end],
    ['0 0 0px transparent', '0 0 6px #ffffff']
  );

  // ✅ Conditional rendering only (hook already called above)
  if (index < prefixLen) {
    return (
      <span style={{ color: '#ffffff', textShadow: '0 0 3px #ffffff' }}>
        {char}
      </span>
    );
  }

  return (
    <motion.span style={{ color, textShadow: shadow }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1600, easing: 'ease-in-out', once: true });
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const text =
    'XSynergy is a decentralized ecosystem built on blockchain that enables transparent, automated, and community-driven wealth generation — powered by smart contracts, with zero admin control.';
  const prefix = 'XSynergy is a decentralized ecosys';
  const prefixLen = prefix.length;

  return (
    <main className="bg-black text-white whitespace-nowrap">
      <section
        id="about"
        ref={sectionRef}
        className="relative bg-black h-[250vh] px-4 pt-28 sm:pt-40 pb-0 sm:pb-10"
      >
        <div className="sticky top-1/2 -translate-y-1/2">
          {/* About Us Badge */}
          <div className="flex items-center justify-center mb-4 mt-12 gap-0 sm:gap-4 border-[1px] border-[#baf8cc2f] bg-[#0d0d0d] rounded-full px-1 py-[5px] max-w-64 sm:max-w-[370px] w-full mx-auto overflow-hidden">
            {/* Left SVG */}
            <div className="w-[108px] h-[20px]">
              <svg width="108" height="20" viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M103.5 11.0455H72.4759M72.4759 11.0455L65.0301 1H0.5M72.4759 11.0455H40.2108M7.946 11.0455H40.2108M40.2108 11.0455L35.247 18H0.5"
                  stroke="url(#left-gradient)"
                  strokeWidth={1.2}
                  filter="url(#green-glow)"
                />
                <circle cx="99.5" cy="11" r="5" fill="url(#left-circle)" filter="url(#green-glow)" />
                <defs>
                  <linearGradient id="left-gradient" x1="0" y1="11" x2="103" y2="11" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00FF7F" />
                    <stop offset="0.5" stopColor="#00FF7F" />
                    <stop offset="1" stopColor="#00FF7F" />
                  </linearGradient>
                  <radialGradient id="left-circle" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(99.5 11) scale(5)">
                    <stop stopColor="#00FF7F" />
                    <stop offset="1" stopColor="#00FF7F" stopOpacity="0" />
                  </radialGradient>
                  <filter id="green-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4.5" floodColor="#00FF7F" floodOpacity="1" />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Center Text */}
            <p className="text-green-400 font-semibold fr-fnt text-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
              About Us
            </p>

            {/* Right SVG */}
            <div className="w-[108px] h-[20px]">
              <svg width="108" height="20" viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 11.0455H35.5241M35.5241 11.0455L42.9699 1H107.5M35.5241 11.0455H67.7892M100.054 11.0455H67.7892M67.7892 11.0455L72.753 18H107.5"
                  stroke="url(#right-gradient)"
                  strokeWidth={1.2}
                  filter="url(#green-glow)"
                />
                <circle cx="8.5" cy="11" r="5" fill="url(#right-circle)" filter="url(#green-glow)" />
                <defs>
                  <linearGradient id="right-gradient" x1="4" y1="11" x2="108" y2="11" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00FF7F" />
                    <stop offset="0.5" stopColor="#00FF7F" />
                    <stop offset="1" stopColor="#00FF7F" />
                  </linearGradient>
                  <radialGradient id="right-circle" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 11) scale(5)">
                    <stop stopColor="#00FF7F" />
                    <stop offset="1" stopColor="#00FF7F" stopOpacity="0" />
                  </radialGradient>
                  <filter id="green-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4.5" floodColor="#00FF7F" floodOpacity="1" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* Animated Text */}
          <p className="mx-auto max-w-5xl flex flex-wrap justify-center text-center leading-none text-3xl sm:text-[52px] font-semibold fr-fnt">
            {text.split('').map((char, idx) => (
              <AnimatedLetter
                key={idx}
                char={char}
                index={idx}
                prefixLen={prefixLen}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
