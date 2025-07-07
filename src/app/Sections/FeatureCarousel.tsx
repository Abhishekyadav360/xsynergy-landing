'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationFrame,
  MotionValue,
} from 'framer-motion';
import Button from '../Components/Button';

const baseImgs = [
  '/app-icon1.svg',
  '/app-icon2.svg',
  '/app-icon3.svg',
  '/app-icon4.svg',
  '/app-icon5.svg',
  '/app-icon1.svg',
  '/app-icon2.svg',
  '/app-icon3.svg',
];

const TOTAL_ICONS = 24;
const images = Array.from({ length: TOTAL_ICONS }, (_, i) => baseImgs[i % baseImgs.length]);

interface CarouselImageProps {
  src: string;
  angle: number;
  radius: number;
  smoothRotation: MotionValue<number>;
}

const CarouselImage = ({ src, angle, radius, smoothRotation }: CarouselImageProps) => {
  const imgRotation = useTransform(smoothRotation, (latest) => -latest - angle);

  const rad = (angle * Math.PI) / 180;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px - 56px)`,
        top: `calc(50% - ${y}px - 56px)`,
        rotate: imgRotation,
      }}
    >
      <img
        src={src}
        alt={`feature-${angle}`}
        className="w-14 h-14 sm:w-20 sm:h-20   md:w-28 md:h-28 object-cover rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-[#1a1a1a]"
      />
    </motion.div>
  );
};

export default function FeatureCarousel() {
  const [diameter, setDiameter] = useState(800);
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  const baseRotation = useMotionValue(0);
  const smoothRotation = useSpring(baseRotation, { damping: 40, stiffness: 50 });

  useAnimationFrame((t) => {
    baseRotation.set((t / 1000) * (360 / 50));
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);

      const size = Math.min(Math.max(width * 0.85, 480), 1300);
      setDiameter(size);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const radius = diameter / 2 - 50;


  const filteredImages = screenWidth < 1024 ? images.slice(0, 14) : images;

  return (
    <section className="relative min-h-screen w-full bg-black text-white flex items-start justify-center overflow-hidden">
      {/* Spinning Icons */}
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-start pointer-events-none"
        style={{ clipPath: 'inset(0 0 50% 0)', zIndex: 0 }}
      >
        <motion.div
          className="relative"
          style={{ width: diameter, height: diameter, rotate: smoothRotation }}
        >
          <div style={{ transform: 'rotate(0deg)' }} className="absolute inset-0">
            {filteredImages.map((src, i) => (
              <CarouselImage
                key={i}
                src={src}
                angle={(360 / filteredImages.length) * i}
                radius={radius}
                smoothRotation={smoothRotation}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4 mt-40 sm:mt-60 mx-auto bg-black sm:bg-transparent">
        {/* Features Badge */}
        <div className="flex items-center justify-center mb-4 gap-0 sm:gap-4 border-[1px] border-[#baf8cc2f] bg-[#0d0d0d] rounded-full px-1 py-[5px] max-w-64 sm:max-w-[350px] w-full mx-auto  overflow-hidden">
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
                                Features
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

        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Packed with Innovation.</h1>
        <p className="text-gray-300 max-w-md mx-auto mb-6 leading-relaxed">
          Xsynergy is packed with cutting-edge features designed to elevate your portfolio.
        </p>
        <div className="mx-auto max-w-44">
          <Button variant="primary" href="/" target="_blank">
            Get Started
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 relative max-w-6xl mx-auto mt-10">
          {/* Card 1 */}
          <div className="features-bx overflow-hidden relative  flex flex-col items-start justify-center min-h-[320px] p-4 border border-[#303033] rounded-2xl border-gradient bg-gradient-to-b from-[rgba(20,22,25,0.1)] to-[rgba(27,27,30,0.1)] backdrop-blur-sm">
            <div className="features-point" />
            <div
              className=""
              style={{
                background:
                  'linear-gradient(90deg, rgba(79, 26, 214, 0) 0%, rgb(67 214 26) 50%, rgba(79, 26, 214, 0) 100%)',
                height: '2px',
                left: 'calc(50% - 170px / 2)',
                position: 'absolute',
                top: '0',
                width: '170px',
                zIndex: 1,
              }}
            />
            <h2 className="text-2xl sm:text-3xl font-medium">
              Instant Smart Contract Payouts and Referral-Driven Earnings
            </h2>
            <p className="text-[#E5E5E5] text-lg font-normal leading-6 mt-2">
              Get rewarded automatically and instantly through referral-based smart contracts that never miss a payout.
            </p>
           
          </div>

          {/* Card 2 */}
          <div className="features-bx overflow-hidden relative  flex flex-col items-start justify-center min-h-[320px] p-4 border border-[#303033] rounded-2xl border-gradient bg-gradient-to-b from-[rgba(20,22,25,0.1)] to-[rgba(27,27,30,0.1)] backdrop-blur-sm">
           <div className="features-point" />
            <div
              className=""
              style={{
                background:
                  'linear-gradient(90deg, rgba(79, 26, 214, 0) 0%, rgb(67 214 26) 50%, rgba(79, 26, 214, 0) 100%)',
                height: '2px',
                left: 'calc(50% - 170px / 2)',
                position: 'absolute',
                top: '0',
                width: '170px',
                zIndex: 1,
              }}
            />
            <h2 className="text-2xl sm:text-3xl font-medium">
              Immutable, Transparent and Decentralized Value Distribution
            </h2>
            <p className="text-[#E5E5E5] text-lg font-normal leading-6 mt-2">
              Every transaction is secure, visible on-chain, and follows a fair, decentralized model — no admin interference.
            </p>
           
          </div>

          {/* Card 3 */}
          <div className="features-bx overflow-hidden relative   flex flex-col items-start justify-center min-h-[320px] p-4 border border-[#303033] rounded-2xl border-gradient bg-gradient-to-b from-[rgba(20,22,25,0.1)] to-[rgba(27,27,30,0.1)] backdrop-blur-sm">
           <div className="features-point" />
            <div
              className=""
              style={{
                background:
                  'linear-gradient(90deg, rgba(79, 26, 214, 0) 0%, rgb(67 214 26) 50%, rgba(79, 26, 214, 0) 100%)',
                height: '2px',
                left: 'calc(50% - 170px / 2)',
                position: 'absolute',
                top: '0',
                width: '170px',
                zIndex: 1,
              }}
            />
            <h2 className="text-2xl sm:text-3xl font-medium">
              Global Access 24/7 and Built on the Polygon Network
            </h2>
            <p className="text-[#E5E5E5] text-lg font-normal leading-6 mt-2">
              Join from anywhere in the world, powered by the speed and affordability of the Polygon blockchain.
            </p>
       
          </div>
        </div>
      </div>
    </section>
  );
}
