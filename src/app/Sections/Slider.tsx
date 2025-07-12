'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../Components/Title';

const slides = [
  { id: 1, src: '/video/xsynergy.webm' },
  { id: 2, src: '/video/xsynergy.webm' },
  { id: 3, src: '/video/xsynergy.webm' },
  { id: 4, src: '/video/xsynergy.webm' },
  { id: 5, src: '/video/xsynergy.webm' },
  { id: 6, src: '/video/xsynergy.webm' },
  { id: 7, src: '/video/xsynergy.webm' },
  { id: 8, src: '/video/xsynergy.webm' },
  { id: 9, src: '/video/xsynergy.webm' },
  { id: 10, src: '/video/xsynergy.webm' },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(next, 8500);
    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (e, info) => {
    if (info.offset.x < -100) next();
    else if (info.offset.x > 100) prev();
  };

  const getOffset = (i) => {
    const total = slides.length;
    const relativeIndex = (i - index + total) % total;

    if (relativeIndex === 0) return { scale: 1, opacity: 1, x: 0, zIndex: 30 };
    if (relativeIndex === total - 1) return { scale: 0.8, opacity: 0.5, x: -320, zIndex: 20 };
    if (relativeIndex === total - 2) return { scale: 0.6, opacity: 0.2, x: -520, zIndex: 10 };
    if (relativeIndex === 1) return { scale: 0.8, opacity: 0.5, x: 320, zIndex: 20 };
    if (relativeIndex === 2) return { scale: 0.6, opacity: 0.2, x: 520, zIndex: 10 };

    return { scale: 0.6, opacity: 0, x: 1000, zIndex: 0 };
  };

  return (

    <>

      <div id='nft' className=' mx-auto overflow-hidden py-8 sm:py-14'>
        <div className="flex items-center justify-center mb-4 gap-0 sm:gap-4 border-[1px] border-[#baf8cc2f] bg-[#0d0d0d] rounded-full px-1 py-[5px] max-w-64 sm:max-w-[350px] w-full mx-auto  overflow-hidden">

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
            Nfts
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

        <Title
          title="NFTS"
          highlightedText=""
          subtitle="Coupled with non-fungible tokens (NFTs)."
          className="-mb-10 text-center max-w-5xl mx-auto"
        />

        <div className="relative w-full   flex items-center justify-center overflow-hidden px-4">



          <div className="relative w-full h-[550px] sm:h-[700px]">
            {slides.map((slide, i) => {
              const { scale, opacity, x, zIndex } = getOffset(i);

              return (
                <div
                  key={slide.id}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]   sm:w-[530px] sm:h-[530px] cursor-grab rounded-full mix-blend-lighten"
                  style={{ zIndex }}
                >
               <motion.div
  drag={i === index ? 'x' : false}
  dragConstraints={{ left: 0, right: 0 }}
  dragSnapToOrigin
  onDragEnd={i === index ? handleDragEnd : undefined}
  className="w-full h-full rounded-xl overflow-hidden shadow-xl"
  initial={{ scale: 0.5 }}
  animate={{ scale, x }}
  transition={{ duration: 0.5 }}
  style={{
    opacity, // ✅ animate outside
    touchAction: 'pan-y',
    WebkitUserSelect: 'none',
    userSelect: 'none',
  }}
>
  <video
    src={slide.src}
    autoPlay
    loop
    muted 
    playsInline
    style={{ pointerEvents: 'none' }} // ✅ prevent video blocking drag
    className="w-full h-full object-contain rounded-2xl"
  />
</motion.div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          {/* <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-50 hover:scale-125 transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-50 hover:scale-125 transition"
      >
        ›
      </button> */}

          {/* Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-0 flex space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-green-400 scale-125' : 'bg-gray-500'
                  } transition`}
              />
            ))}
          </div>
        </div>
      </div>

    </>

  );
}
