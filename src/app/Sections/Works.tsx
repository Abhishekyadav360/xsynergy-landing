'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../Components/Title';
import GradientCard from '../Components/GradientCard';

import glow1 from '@/Assets/images/wallet2.webp';
import glow2 from '@/Assets/images/earnnew.webp';
import glow3 from '@/Assets/images/newregister.webp';
// import upperright from "@/Assets/images/raysfr.webp";
// import Image from 'next/image';
// import MatrixStream from '../Components/DataStreamSvg';


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

    <section id="works" className="relative w-full pt-28 pb-28 overflow-hidden works-sec">
      <div className="top-glow-wrapper">
        <div className="mask-top">
          <div className="glow-gradient-top" />
        </div>
      </div>
      <div className="bottom-glow-wrapper">
        <div className="mask-bottom">
          <div className="glow-gradient-bottom" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex z-20 relative items-center justify-center mb-2 gap-0 sm:gap-4 border-[1px] border-[#baf8cc2f] bg-[#0d0d0d] rounded-full px-1 py-[5px] max-w-64 sm:max-w-[350px] w-full mx-auto  overflow-hidden">

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
          <p className="text-green-400 text-lg  drop-shadow-[0_0_6px_rgba(209,213,219,0.5)] fr-fnt">
            Steps
          </p>
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
        <div className='' data-aos="fade-down"
        >

          <Title
            title="How to get started ?"
            highlightedText=""
            subtitle="Just connect your wallet, sign once, and you are ready to go — no KYC, no delays."
            className="mb-10 text-center max-w-5xl mx-auto"
          />
        </div>
        {ready && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-6 justify-center items-center mt-10"
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
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <GradientCard
                title="1. Connect your Wallet"
                description="Connect your MetaMask or Trust Wallet to securely access and begin your journey with the XSYNERGY platform."
                image={glow1} className=''
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: cardVariants.hiddenBottom,
                show: cardVariants.visible,
              }}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <GradientCard
                title="2. Add Funds "
                description="Top up your account using USDT. You can transfer from an exchange or buy directly in your wallet."
                image={glow2}
                className=" "
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: cardVariants.hiddenRight,
                show: cardVariants.visible,
              }}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <GradientCard
                title="3. Register"
                description={
                  <>
                    Go to{' '}
                    <a
                      href="https://xsynergy-dashboard.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 underline hover:text-green-300 transition"
                    >
                      xsynergy-dashboard.netlify.app
                    </a>{' '}
                    → Connect Wallet → Approve → Click “Register” → Approve.
                  </>
                }
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
