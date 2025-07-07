import Image from "next/image";
import React from "react";
import Title from "../Components/Title";
import card4top from "@/Assets/images/smart-contract.webp"
import ledger from "@/Assets/images/total-invested.webp"
import card1top from "@/Assets/images/advtop.webp"
import card1btm from "@/Assets/images/advbtm.webp"
// import usdt from "@/Assets/images/usdtbox.webp"

import Link from "next/link";


const Advantages = () => {
    return (
        <section id="features" className="relative   py-8 md:py-14 leaf-side">
            <div className="container mx-auto px-4" >
                <Title
                    title="Key Features"
                    highlightedText=""
                    subtitle="Discover the features of SFAgro"
                    className="mb-10 text-center"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-5" data-aos="fade-up" data-aos-duration="1600" >
                    <div className="relative flex flex-col items-start justify-center  p-12 rounded-[42px] overflow-hidden bg-[#033f33] hover:scale-105 ease-in-out duration-300 min-h-[350px]" >
                        <h3 className="text-white text-2xl ">USDT Token:</h3>
                        <p className="text-white text-lg mt-6 mb-4 sm:mb-2">
  USDT, or Tether, is a cryptocurrency that aims to maintain a stable price. It&apos;s a &quot;Stablecoin&quot; that&apos;s designed to be the internet&apos;s &quot;Digital Dollar&quot;.
</p>
                        {/* <Image
                            src={usdt}
                            alt="logo"
                            width={80}
                            height={80}
                            className="max-w-12"
                        /> */}
                        {/* <Link href="#home" className="flex items-center text-white font-semibold italic relative" >
                            <span className="underline">Explore Token</span>
                            <span className="ml-2">→</span>
                        </Link> */}
                        <div className="absolute top-0 left-0 z-0">
                            <Image
                                src={card1top}
                                alt="bgr green"
                                width={100}
                                height={100}
                                className="w-full"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 z-0">
                            <Image
                                src={card1btm}
                                alt="bgr yellow"
                                width={100}
                                height={100}
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div
                        className="relative flex flex-col justify-around items-start p-10 rounded-[42px] overflow-hidden bg-cover bg-no-repeat advcard2bg hover:scale-105 min-h-[350px] ease-in-out duration-300"
                    >
                        <div className="text-white text-6xl font-extrabold italic tracking-tighter leading-tight">
                            <Image
                                src={ledger}
                                alt="logo"
                                width={70}
                                height={70}
                                className="max-w-24"
                            />
                        </div>
                        <div>
                            <h3 className="text-white text-xl uppercase mt-5 mb-3">Smart Contracts:</h3>
                            <p className="text-white text-lg">
                                Self-executing agreements ensuring secure, automated, and trustless blockchain transactions.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-between p-12 rounded-[42px] overflow-hidden bg-[#a1cc9f] hover:scale-105 ease-in-out duration-300 min-h-[350px]" >
                        <h3 className="text-[#033f33] text-2xl ">Instant Rewards:</h3>
                        <p className="text-[#033f33] text-lg mt-6 mb-10">
                            Real-time incentives for active participation, transactions, and contributions.
                        </p>
                        <Link href="#advantages" className="flex items-center text-[#033f33] font-semibold italic relative">
                            <span className="underline">See more</span>
                            <span className="ml-2">→</span>
                        </Link>
                    </div>
                    <div
                        className="relative flex flex-col justify-around  items-start p-10 rounded-[42px] overflow-hidden bg-cover bg-no-repeat advcard4bg hover:scale-105 ease-in-out duration-300 min-h-[350px]" >
                        <Image
                            src={card4top}
                            alt="logo"
                            width={80}
                            height={80}
                            className="max-w-24"
                        />
                        <div>
                            <h3 className="text-white text-2xl mb-3  ">
                                Transparent Ledger:
                            </h3>
                            <p className="text-white text-lg ">A decentralized, tamper-proof record ensuring trust, security, and accountability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
