'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from '../Components/Marquee';

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
  const prefix = 'XSynergy is a decentralized ecosys ';
  const prefixLen = prefix.length;

  return (
    <main className="bg-transparent text-white whitespace-nowrap ">
     
      <section
        id="about"
        ref={sectionRef}
        className="relative bg-transparent h-[150vh]  px-4 pt-52 sm:pt-40 pb-0 "
      >
             {/* <div id="stars2"></div> */}
        <div className="sticky top-1/2 -translate-y-1/2">
          {/* About Us Badge */}
          <div className="flex items-center mb-4 mt-12 justify-center gap-0 sm:gap-4 border-[1px] border-[#baf8cc2f] bg-[#0d0d0d] rounded-full px-1 py-[5px] max-w-64 sm:max-w-[350px] w-full mx-auto  overflow-hidden">
                            {/* Left Decorative SVG */}
                            <div className="w-[108px] h-[20px]">
                                <svg
                                    width={108}
                                    height={20}
                                    viewBox="0 0 108 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M103.5 11.0455H72.4759M72.4759 11.0455L65.0301 1H0.5M72.4759 11.0455H40.2108M7.946 11.0455H40.2108M40.2108 11.0455L35.247 18H0.5"
                                        stroke="url(#left-gradient)"
                                        strokeWidth={1}
                                    />
                                    <circle cx="99.5" cy="11" r="5" fill="url(#left-circle)" />
                                    <defs>
                                        <linearGradient id="left-gradient" x1="0" y1="11" x2="103" y2="11" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#A0A0A0" stopOpacity="0.1" />
                                            <stop offset="0.5" stopColor="#D1D5DB" />
                                            <stop offset="1" stopColor="#A0A0A0" stopOpacity="0.1" />
                                        </linearGradient>
                                        <radialGradient id="left-circle" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(99.5 11) scale(5)">
                                            <stop stopColor="#E5E7EB" />
                                            <stop offset="1" stopColor="#E5E7EB" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Center Text */}
                            <p className="text-green-400 text-lg  drop-shadow-[0_0_6px_rgba(209,213,219,0.5)] fr-fnt">
                                About Us
                            </p>

                            {/* Right Decorative SVG */}
                            <div className="w-[108px] h-[20px]">
                                <svg
                                    width={108}
                                    height={20}
                                    viewBox="0 0 108 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.5 11.0455H35.5241M35.5241 11.0455L42.9699 1H107.5M35.5241 11.0455H67.7892M100.054 11.0455H67.7892M67.7892 11.0455L72.753 18H107.5"
                                        stroke="url(#right-gradient)"
                                        strokeWidth={1}
                                    />
                                    <circle cx="8.5" cy="11" r="5" fill="url(#right-circle)" />
                                    <defs>
                                        <linearGradient id="right-gradient" x1="4" y1="11" x2="108" y2="11" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#A0A0A0" stopOpacity="0.1" />
                                            <stop offset="0.5" stopColor="#D1D5DB" />
                                            <stop offset="1" stopColor="#A0A0A0" stopOpacity="0.1" />
                                        </linearGradient>
                                        <radialGradient id="right-circle" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 11) scale(5)">
                                            <stop stopColor="#E5E7EB" />
                                            <stop offset="1" stopColor="#E5E7EB" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

          {/* Animated Text */}
          <p className="mx-auto max-w-5xl flex flex-wrap justify-center text-center leading-none text-3xl sm:text-[52px] font-semibold fr-fnt whitespace-pre-wrap">
            {text.split(' ').map((word, wordIdx) => (
  <span key={wordIdx} className="inline-block mr-[0.4ch]">
    {word.split('').map((char, charIdx) => {
      const globalIdx = text.split(' ').slice(0, wordIdx).join(' ').length + wordIdx + charIdx;

      return (
        <AnimatedLetter
          key={`${wordIdx}-${charIdx}`}
          char={char}
          index={globalIdx}
          prefixLen={prefixLen}
          scrollYProgress={scrollYProgress}
        />
      );
    })}
  </span>
))}
          </p>
<div className="mt-10 flex justify-center items-center">
          <Marquee />

</div>
        </div>
      </section>
    </main>
  );
};

export default About;
