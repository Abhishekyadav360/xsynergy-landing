'use client'
import React, { useEffect } from 'react';
// import Image from 'next/image';
import Button from '../Components/Button';

import AOS from "aos";
import "aos/dist/aos.css";

// import bnrbg from '@/Assets/images/bannerbg.svg';

import GridGlow from '../Components/GridGlow';
import MatrixText from '../Components/MatrixText';
import GlobeCanvas from '../Components/GlobeCanvas';
import About from './About';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
            once: true,
        });



    }, []);


    return (
        <>
            <section className="relative bg-cover bg-center bg-no-repeat py-36 sm:py-52 overflow-hidden min-h-[100vh] sm:min-h-[120vh]">
                <GridGlow className="-z-30" lines={14} maxLength={400} />
                <div className='absolute top-0 left-0 w-full h-full z-0 sm:z-10 cursor-grab'>
                    {/* <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 w-full h-full max-w-6xl mx-auto -z-10 object-contain object-center opacity-50 sm:opacity-60">
                        <source src='/video/hero-bg.webm' type="video/webm" />
                        Your browser does not support the video tag.
                    </video> */}
                    {/* <Image
                        src={bnrbg}
                        alt="Background"
                        priority
                        className="absolute top-[190px] sm:top-[130px] right-0 bottom-0 left-0 w-full h-full object-contain -z-10 opacity-100 hue-rotate-[280deg] "
                    /> */}
                    <GlobeCanvas />
                </div>


                <div className="flex items-center relative justify-center container px-2 sm:px-4 mx-auto mt-28">


                    <div className="text-center relative max-w-7xl mx-auto w-full z-30 " data-aos="fade-up">


                        <div className="  hidden md:flex items-center justify-center gap-0 sm:gap-4 border-[1px] border-[#baf8cc2f] bg-[#0d0d0d] rounded-full px-1 py-[5px] max-w-64 sm:max-w-[370px] w-full mx-auto  overflow-hidden">
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
                            <p className="text-green-400 text-lg  drop-shadow-[0_0_6px_rgba(209,213,219,0.5)]">
                                Xsynergy
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


                        <h1 className="text-5xl md:text-[90px] font-bold mb-3 sm:mb-3 !leading-[1] sm:leading-none max-w-4xl mx-auto">
                            <span className='inline-block rounded-xl sm:rounded-2xl px-3 py-0 sm:py-0.5 font-semibold text-span'>
                                Welcome to
                            </span>

                            <MatrixText key={(typeof window !== 'undefined' && window.performance.now()) || 1} text="XSynergy" speed={250} /> – Built for Web3
                        </h1>

                        <p className="text-md md:text-lg max-w-2xl mx-auto mb-7 sm:mb-10">
                            Empowering individuals with real ownership and automated rewards — powered by transparent smart contracts on the Polygon blockchain.
                        </p>

                        <div className='flex flex-wrap gap-4 justify-center items-center max-w-48 mx-auto  z-30 relative '>
                            <Button className=' z-20 relative' variant="primary" target="_blank" href="Comingsoon" >
                                Login
                            </Button>
                            {/* <Button variant="secondary" target="_blank" href="https://swap.sfagro.club/">
                                Swap
                            </Button> */}
                        </div>

                        <div className="flex flex-col justify-center items-center gap-2 mt-4 max-w-80 mx-auto  ">
                            <div className="icon-scroll"></div>
                            <p className="text-sm text-gray-300">Drag and scroll !</p>
                        </div>
                    </div>
                </div>

            </section>
            <About />
        </>
    );
};

export default Banner;
