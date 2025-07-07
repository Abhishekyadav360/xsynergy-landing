'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from "@/Assets/images/favicon1.webp";

import AOS from "aos";
import "aos/dist/aos.css";
import GridGlow from '../Components/GridGlow';



const Comingsoon = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return (
        <>
            <section className=" relative   py-44 sm:py-72 overflow-hidden">
                   <GridGlow className="-z-30" lines={12} maxLength={400} />
            
               
                <div className="container mx-auto px-4">
                    <div className=' flex items-center justify-center'>
                        <div className=" w-full  mx-auto text-center  relative innerbox" data-aos="fade-up">
                            <Image src={logo} alt='about-image' priority={true} width={300} height={300} className='w-full h-auto  max-w-20 mx-auto animate-up-down ' />
                            {/* <p className=' mb-8 inline-block rounded-lg px-3 py-0.5 font-semibold leading-[100%]  bg-[#97ffcb] text-black text-span-green '>AI PIPMASTER</p> */}
                            <h1 className="text-5xl md:text-[120px] font-bold  break-words leading-snug sm:leading-none " >
                                <span className='text-span-gradient '>Coming Soon...</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Comingsoon;
