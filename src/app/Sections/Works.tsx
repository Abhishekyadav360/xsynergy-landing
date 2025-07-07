'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../Components/Title';
import GradientCard from '../Components/GradientCard';

import glow1 from '@/Assets/images/app-icon3.svg';
import glow2 from '@/Assets/images/app-icon4.svg';
import glow3 from '@/Assets/images/app-icon5-1.svg';
import upperright from "@/Assets/images/raysfr.webp";
import Image from 'next/image';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const getCardVariants = (isMobile: boolean) => ({
  hiddenLeft: isMobile ? { opacity: 0, y: 120 } : { opacity: 0, x: -300 },
  hiddenRight: isMobile ? { opacity: 0, y: 120 } : { opacity: 0, x: 300 },
  hiddenBottom: { opacity: 0, y: 120 },
  visible: { opacity: 1, x: 0, y: 0 },
});

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const check = () => setIsMobile(window.innerWidth < 640);
      check();
      window.addEventListener('resize', check);
      setReady(true);
      return () => window.removeEventListener('resize', check);
    }
  }, []);

  const cardVariants = getCardVariants(isMobile);

  return (
    <section id="advantages" className="relative w-full pt-20 pb-28 overflow-visible">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
        className="absolute -top-10 left-0 right-0 w-full max-w-[537px] mx-auto pointer-events-none overflow-hidden -z-0"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <Image
            src={upperright}
            alt="gradient background"
            width={750}
            height={750}
            className="object-cover w-full h-full opacity-30"
          />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4 gap-0 sm:gap-4 border-[1px] border-[#baf8cc2f] bg-[#0d0d0d] rounded-full px-1 py-[5px] max-w-64 sm:max-w-[370px] w-full mx-auto  overflow-hidden">
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

          <p className="text-green-400 font-semibold fr-fnt text-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
            Get Started
          </p>

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
              </defs>
            </svg>
          </div>
        </div>

        <Title
          title="How to get started ?"
          highlightedText=""
          subtitle="XSynergy operates fully on the Polygon blockchain for low fees and high scalability."
          className="mb-10 text-center max-w-5xl mx-auto"
        />

        {ready && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              variants={{
                hidden: cardVariants.hiddenLeft,
                show: cardVariants.visible,
              }}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <GradientCard
                title="Connect Your Wallet"
                description="MetaMask, Trust Wallet, etc."
                image={glow1}
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: cardVariants.hiddenBottom,
                show: cardVariants.visible,
              }}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <GradientCard
                title="Register Seamlessly"
                description="No KYC. No middlemen."
                image={glow2}
                className='relative mt-20'
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: cardVariants.hiddenRight,
                show: cardVariants.visible,
              }}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <GradientCard
                title="Invite & Grow"
                description="Share your link. Let the network build."
                image={glow3}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Works;
