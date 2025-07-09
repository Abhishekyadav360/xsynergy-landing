'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../Components/Title';
import GradientCard from '../Components/GradientCard';

import glow1 from '@/Assets/images/worksx3.webp';
import glow2 from '@/Assets/images/worksx1.webp';
import glow3 from '@/Assets/images/worksx2.webp';
// import upperright from "@/Assets/images/raysfr.webp";
// import Image from 'next/image';

import MatrixStream from '../Components/DataStreamSvg';

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
      const check = () => setIsMobile(window.innerWidth < 1024);
      check();
      window.addEventListener('resize', check);
      setReady(true);
      return () => window.removeEventListener('resize', check);
    }
  }, []);

  const cardVariants = getCardVariants(isMobile);

  return (
    <section id="works" className="relative w-full pt-28 pb-20 overflow-y-visible works-sec">
      {/* <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
        className="absolute  -top-[600px] sm:-top-[520px] md:-top-5 left-0 right-0 w-full max-w-[537px] mx-auto pointer-events-none overflow-hidden -z-0"
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
            className="  object-contain md:object-cover w-full h-full opacity-30 sm:opacity-30  "
          />
        
        </motion.div>
      </motion.div> */}
     <MatrixStream />

      <div className="container mx-auto px-4">
        <div className="flex z-10 items-center justify-center mb-4 gap-0 sm:gap-4 border-[1px] border-[#baf8cc2f] bg-[#0d0d0d] rounded-full px-1 py-[5px] max-w-64 sm:max-w-[350px] w-full mx-auto  overflow-hidden">
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
            Steps
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

        <Title
          title="How to get started ?"
          highlightedText=""
          subtitle="XSynergy operates fully on the Polygon blockchain for low fees and high scalability."
          className="mb-10 text-center max-w-5xl mx-auto"
        />

        {ready && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10 sm:mt-20"
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
                description="Link your MetaMask, Trust Wallet, or any supported wallet quickly and securely to get started."
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
              transition={{ duration: 0.7, ease: 'easeOut' }}
             
            >
              <GradientCard
                title="Register Seamlessly"
                description="No KYC or approval needed. Just sign a transaction and you're in — fast and hassle-free."
                image={glow2}
                className="relative mt-0 sm:mt-20"
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
                description="Share your invite link and grow your network effortlessly while earning rewards."
                image={glow3}
                className=''
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Works;
