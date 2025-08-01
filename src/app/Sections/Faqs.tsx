'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from '../Components/Title';

const services = [
  {
    id: '01',
    title: 'No Admin Ownership',
    desc: 'XSynergy runs on smart contracts with no admin control — fully automatic, fair, and free from human mistakes or Unauthorized changes.',
    img: '/ecosystem.webp',
    arrow: '→',
  },
  {
    id: '02',
    title: 'Fully On-Chain & Verifiable',
    desc: 'Every action and transaction is permanently recorded on the Polygon blockchain, making the system transparent and easy to verify by anyone.',
    img: '/whyx6.webp',
    arrow: '↗',
  },  
  {
    id: '03',
    title: 'Stability through the ecosystem',
    desc: 'This platform is designed for long-term growth, powered by users and smart automation — not by any central team or funding.',
    img: '/whyx5.webp',
    arrow: '↗',
  },
  {
    id: '04',
    title: 'Real-World Use Tokens',
    desc: 'XSynergy’s tokens are not just digital assets — they’re built for real use within the ecosystem and future real-world applications.',
    img: '/whyx3.webp',
    arrow: '↗',
  },
  {
    id: '05',
    title: 'Growing Global Community',
    desc: 'Join a global community using decentralized finance to build a new and fair way of creating wealth together.',
    img: '/globalx.webp',
    arrow: '↗',
  },
];

export default function Faqs() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <>
      {/* Preload images */}
      <div className="hidden">
        {services.map(service => (
          <img key={service.id} src={service.img} alt="" />
        ))}
      </div>

      <section className='mx-auto container py-8 md:py-16'>
        <div className="flex items-center justify-center mb-4 gap-0 sm:gap-4 border-[1px] border-[#baf8cc2f] bg-[#0d0d0d] rounded-full px-1 py-[5px] max-w-64 sm:max-w-[350px] w-full mx-auto overflow-hidden">
          <div className="w-[108px] h-[20px]">
            <svg width={108} height={20} viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M103.5 11.0455H72.4759M72.4759 11.0455L65.0301 1H0.5M72.4759 11.0455H40.2108M7.946 11.0455H40.2108M40.2108 11.0455L35.247 18H0.5"
                stroke="url(#left-gradient)" strokeWidth={1} />
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

          <p className="text-green-400 text-lg drop-shadow-[0_0_6px_rgba(209,213,219,0.5)] fr-fnt">
            Advantages
          </p>

          <div className="w-[108px] h-[20px]">
            <svg width={108} height={20} viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 11.0455H35.5241M35.5241 11.0455L42.9699 1H107.5M35.5241 11.0455H67.7892M100.054 11.0455H67.7892M67.7892 11.0455L72.753 18H107.5"
                stroke="url(#right-gradient)" strokeWidth={1} />
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

        <div className='px-4' data-aos='fade-up'>
          <Title
            title="Why XSynergy?"
            highlightedText=""
            subtitle="Transparent. Next-gen. Fully automated."
            className="mb-10 text-center max-w-5xl mx-auto "
          />
        </div>

        <div className="bg-black text-white flex flex-col lg:flex-row px-4 gap-10 container mx-auto" data-aos='fade-up'>
          <div className="flex-1 space-y-6 min-h-[600px]">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-[#3d745d] py-6 cursor-pointer flex items-start justify-between group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
              >
                <div className="flex space-x-2 sm:space-x-8 w-full">
                  <span className="text-lg sm:text-xl font-semibold w-10">{service.id}</span>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold">{service.title}</h3>

                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          className="overflow-hidden"
                          layout
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                          <p className="text-md text-gray-300 mt-2 leading-relaxed max-w-2xl">
                            {service.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <motion.span
                  className="text-xl sm:text-2xl ml-4"
                  animate={{ x: hoveredIndex === index ? 6 : 0 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                >
                  {service.arrow}
                </motion.span>
              </div>
            ))}
          </div>

          <div className="flex-1 hidden lg:flex items-center justify-center relative mix-blend-lighten">
            <AnimatePresence mode="wait">
              {hoveredIndex !== null && (
                <motion.div
                  key={services[hoveredIndex].img}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="relative w-[550px] h-[550px]"
                >
                  <img
                    src={services[hoveredIndex].img}
                    alt={services[hoveredIndex].title}
                    className="object-contain w-full h-full rounded-lg"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
