
'use client'
import React, { useEffect } from 'react';
import Image from "next/image";
import Title from "../Components/Title";
import upperright from "@/Assets/images/sfagrogradient.webp";
import middleleft from "@/Assets/images/sfagrogradient2.webp";
import bottomright from "@/Assets/images/bottom-right.webp";
import bitkub from "@/Assets/images/rock2.webp";
import plant from "@/Assets/images/plant2.webp"
import bnb from "@/Assets/images/bnb.png";
import ht from "@/Assets/images/rock.webp";
import explore1 from "@/Assets/images/features1.webp";
import AOS from "aos";
import "aos/dist/aos.css";



const Explore = () => {

  useEffect(() => {
    AOS.init({
      duration: 1600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="advantages" className="relative w-full py-12 overflow-hidden ">
      <div className="relative  container mx-auto">
        <div className="z-0">
          <Image
            className="absolute top-2 right-[13%] sm:right-[20%]  opacity-70 sm:opacity-100  rotate-[30deg]"
            src={plant}
            alt="plant image"
            width={60}
            height={60}
          />
        </div>
        <div className="max-w-6xl px-4 mx-auto">
          <Title
            title="Advantages of SFAgro"
            highlightedText=""
            subtitle=" SFAGRO transforms farming with instant transactions, transparent ledgers, and smart contracts, ensuring seamless trade and financial inclusion globally."
            className="mb-10 text-center max-w-5xl mx-auto"
          />
          <div className="absolute -top-24 sm:-top-[50px] -right-[230px] w-[600px] pointer-events-none filter opacity-40 sm:opacity-70 overflow-hidden ">
            <Image src={upperright} alt="gradient background" width={750} height={750} />
          </div>
          <div className="absolute top-[300px] -left-[200px] w-[750px] pointer-events-none filter opacity-60  ">
            <Image className="" src={middleleft} alt="gradient background" width={750} height={750} />
          </div>
          <div className="absolute -right-[180px] -bottom-[190px] w-[500px] pointer-events-none filter hue-rotate-[132deg]">
            <Image className="gradient-rotate" src={bottomright} alt="gradient background" width={500} height={500} />
          </div>
          <div className="absolute top-[850px] sm:top-[510px] left-[205px] w-full max-w-28" data-aos="fade-up" data-aos-duration="1500">
            <Image className='animate-bounce' src={bitkub} alt="crypto token logo" width={110} height={110} />
          </div>
          <div className="absolute -bottom-4 sm:-bottom-[51px] left-10 sm:left-[240px] w-[68px]" data-aos="fade-up" data-aos-duration="1500">
            <Image className=" drop-shadow-custom-green filter " src={bnb} alt="crypto token logo" width={68} height={68} />
          </div>
          <div className="absolute right-[40px] -bottom-12 w-[82px]" data-aos="fade-up" data-aos-duration="1500">
            <Image src={ht} alt="crypto token logo" width={82} height={82} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 relative">
            <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-center justify-between explore-card p-4 sm:p-10  rounded-md border-gradient bg-gradient-to-b from-[rgba(20,22,25,0.1)] to-[rgba(27,27,30,0.1)] backdrop-blur-sm"
              data-aos="fade-up" data-aos-duration="1500">
              <div className="md:w-1/2">

                <h2 className=" text-2xl sm:text-3xl font-medium">Instant Transactions and Transparency</h2>
                <p className="text-[#e5e5e5] text-lg font-normal leading-6 mt-2">
                  Get paid instantly, with no delays—seamless transactions that boost your agricultural earnings.
                </p>
                <p className="text-[#e5e5e5] text-lg font-normal leading-6 mt-2">
                  Every trade and transaction is recorded on an open ledger, ensuring transparency and trust.
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                <Image className="w-full h-auto max-w-56" src={explore1} alt="market-domination-illustration" width={250} height={250} />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center min-h-[320px] p-4 sm:p-10  border rounded-md border-gradient explore-card bg-gradient-to-b from-[rgba(20,22,25,0.1)] to-[rgba(27,27,30,0.1)] backdrop-blur-sm"
              data-aos="fade-up" data-aos-duration="1700">
              <h2 className="text-2xl sm:text-3xl font-medium">Economic Efficient and Fully Decentralized</h2>
              <p className="text-[#e5e5e5] text-lg font-normal leading-6 mt-2">
                SFAGRO removes middlemen for faster, cost-effective transactions, boosting profits for farmers and investors.
              </p>
              <p className="text-[#e5e5e5] text-lg font-normal leading-6 mt-2">
                No central authority or hidden fees—SFAGRO is a trustless, community-driven ecosystem for agricultural innovation.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center min-h-[320px] p-4 sm:p-10  border rounded-md border-gradient explore-card bg-gradient-to-b from-[rgba(20,22,25,0.1)] to-[rgba(27,27,30,0.1)] backdrop-blur-sm"
              data-aos="fade-up" data-aos-duration="2000">
              <h2 className="text-2xl sm:text-3xl font-medium">Smart Contract-Powered Automation </h2>
              <p className="text-[#e5e5e5] text-lg font-normal leading-6 mt-2">
                With autonomous and immutable smart contracts, SFAGRO delivers error-free, self-executing transactions, removing any chance of fraud or manipulation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto  mt-10 px-4'>
        <p className='text-center text-gray-400 '>
          🚀 Join the decentralized farming revolution. SFAGRO is the future of agriculture!</p>
      </div>
    </section>
  );
};

export default Explore;
