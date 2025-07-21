'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Wave from './Wave';
import Title from '../Components/Title';
import Image from 'next/image';
import kfx1 from '@/Assets/images/modular-architecture.webp'
import smartc from '@/Assets/images/smartcontract.webp'
import transparent from '@/Assets/images/transparent.webp'


const KeyFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);


  return (
    <>

      <section id='features' className=" relative overflow-hidden pb-8 md:pb-16 ">

        <div className="absolute inset-0 z-0 flex items-center justify-center top-0 sm:top-20  ">
          <Wave />
        </div>

        <div className="container mx-auto px-4" data-aos="fade-up">
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
              Highlights
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
            title="Key Features"
            highlightedText=""
            subtitle="Built-in features that keep it fast, fair, and fully decentralized."
            className="mb-10 text-center max-w-5xl mx-auto"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 relative max-w-6xl mx-auto mt-10">
            {/* Card 1 */}

            <div
              className="overflow-hidden relative flex flex-col items-start justify-start min-h-[320px] p-4 border border-[#303033]  border-gradient bg-gradient-to-b from-[rgba(20,22,25,0.1)] to-[rgba(27,27,30,0.1)] backdrop-blur-sm"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
            >
              {/* <div className="features-point" /> */}
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
              <div className=" max-w-40   pt-2 pb-4 px-4">
                <Image
                  src={smartc}
                  alt="Card top background"

                  className=" w-full h-auto hover:translate-y-[-10px] duration-300 ease-in-out cursor-pointer opacity-80"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium">
                Instant Smart Contract Payouts and Referral-Driven Earnings
              </h2>
              <p className="text-[#E5E5E5] text-lg font-normal leading-6 mt-2">
                Get rewarded automatically and instantly through referral-based smart contracts that never miss a payout.
              </p>

            </div>
            <div className=" overflow-hidden relative   flex flex-col items-start justify-start min-h-[320px] p-4 border border-[#303033]  border-gradient bg-gradient-to-b from-[rgba(20,22,25,0.1)] to-[rgba(27,27,30,0.1)] backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-duration="4000"
              data-aos-easing="ease-in-out"
            >
              {/* <div className="features-point" /> */}
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
              <div className=" max-w-44 pt-2 pb-4 px-4">
                <Image
                  src={kfx1}
                  alt="Card top background"

                  className=" w-full h-auto hover:translate-y-[-10px] duration-300 ease-in-out cursor-pointer opacity-80"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium">
                Global Access 24/7 and Built on the Polygon Network
              </h2>
              <p className="text-[#E5E5E5] text-lg font-normal leading-6 mt-2">
                Join from anywhere in the world, powered by the speed and low cost of the Polygon blockchain.
              </p>

            </div>

            <div className=" overflow-hidden relative  flex flex-col items-start justify-start min-h-[320px] p-4 border border-[#303033]  border-gradient bg-gradient-to-b from-[rgba(20,22,25,0.1)] to-[rgba(27,27,30,0.1)] backdrop-blur-sm"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
            >
              {/* <div className="features-point" /> */}
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
              <div className=" max-w-44   pt-2 pb-2 px-4">
                <Image
                  src={transparent}
                  alt="Card top background"

                  className=" w-full h-auto hover:translate-y-[-10px] duration-300 ease-in-out cursor-pointer opacity-80"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium">
                Transparent, Secure and Decentralized Value Distribution
              </h2>
              <p className="text-[#E5E5E5] text-lg font-normal leading-6 mt-2">
                Every transaction is secure, visible on-chain, and follows a fair, decentralized model — no admin interference.
              </p>

            </div>




            {/* Card 2 */}




          </div>
        </div>


      </section>

    </>
  )
}

export default KeyFeatures