'use client'
// import Image from 'next/image'
import React, { useEffect } from 'react';
// import pricingbg from "@/Assets/images/globe-green.svg"
// import greenstar from "@/Assets/images/green-stars.svg"
// import gradient from "@/Assets/images/get-started.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '../Components/Button'

const Joinnow = () => {
    useEffect(() => {
        AOS.init({
            duration: 1600,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <>
            <section className=" relative overflow-hidden py-8 md:py-14">
                <div className="container mx-auto px-4 " data-aos="fade-up">

                    <div className={`steps-card flex flex-col  justify-center max-w-5xl mx-auto px-6 rounded-xl sm:px-10 py-6 sm:py-10  w-full overflow-hidden backdrop-blur-[50px] z-0   h-full min-h-[550px]     features-bx items-start border border-[#303033]  border-gradient bg-gradient-to-b from-[rgba(20,22,25,0.1)] to-[rgba(27,27,30,0.1)]    `}>
                      
                   
                       <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full max-w-6xl mx-auto -z-10 object-contain object-center opacity-50 sm:opacity-60 hue-rotate-[230deg]">
                        <source src='/video/joinnow.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <h2 className=" font-bold text-3xl md:text-6xl text-span-gradient  !leading-none text-center z-10 max-w-4xl mx-auto " >The future of income is decentralized — and you are early.</h2>
                        <p className=" text-md md:text-lg text-white  leading-tight mb-5 mt-2 text-center z-10 mx-auto"> Ready to be part of the change?
                            Click below and take the first step.</p>
                        <div className=' flex    items-center justify-center max-w-40 mx-auto '>
                            <Button variant="primary" href='/contact'>
                                Join Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Joinnow