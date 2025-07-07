'use client'
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import sfagrologo from "@/Assets/images/sfagro.webp"
import copyicon from "@/Assets/images/copy-icon.svg"
import polygon from "@/Assets/images/polygon.webp"
import plant from "@/Assets/images/leaf.webp"
import Title from "../Components/Title";
import AOS from "aos";
import "aos/dist/aos.css";





const Tokenomics = () => {
    useEffect(() => {
        AOS.init({
            duration: 1600,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopy = () => {
        navigator.clipboard
            .writeText(contractAddress)
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            })
            .catch((error) => {
                console.error("Failed to copy contract address: ", error);
            });
    };
    const contractAddress = "0x11e487dDB3d45b822F4b969E4C0cdD6F6c116cb5";
    const shortenedAddress = `${contractAddress.slice(0, 4)}...${contractAddress.slice(-4)}`;

    return (
        <>
            <section id="tokenomics" className="tkn-sec relative  py-8 md:py-10">
                <div className=" mx-auto px-4 max-w-7xl">
                    <div className="z-0">
                        <Image
                            className="absolute top-0 sm:top-[4%] right-[13%] sm:right-[30%]  opacity-70 sm:opacity-100 faq-img rotate-12"
                            src={plant}
                            alt="plant image"
                            width={60}
                            height={60}
                        />
                    </div>
                    <Title
                        title="Tokenomics Overview"
                        highlightedText=""
                        subtitle="Explore the structure, utility, and benefits of our token"
                        className="mb-10 max-w-5xl mx-auto text-center"
                    />
                    <div className=' lg:flex lg:items-center' >
                        <div className="lg:w-1/2 mx-auto  relative innerbox order-1 lg:order-2 flex justify-center"  >
                            <div className='max-w-xl mix-blend-exclusion '>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto mx-auto"
                                >
                                    <source src='/video/v1.mp4' type="video/mp4" />
                                    {/* <source src="/video/packages.webm" type="video/webm" /> */}
                                    Your browser does not support the video tag.
                                </video>

                            </div>

                        </div>
                        <div className="lg:w-1/2 mx-auto text-left relative innerbox order-2 lg:order-1" data-aos="fade-up">
                            <div className="w-full relative">
                                <div className="max-w-md nft-card rounded-[30px] p-4 sm:p-5  mx-auto lg:mx-0 ">
                                    <ul className="token-update__data list-unstyled">
                                        <li>
                                            <span>Token Name</span>
                                            <strong className=" text-center">
                                                <div className="flex gap-2 items-center">
                                                    <Image
                                                        src={sfagrologo}
                                                        className="w-8 h-8"
                                                        alt="SFA Logo"
                                                    />
                                                    SFAGRO
                                                </div>
                                            </strong>
                                        </li>
                                        <li>
                                            <span>Token Symbol</span>
                                            <strong className=" text-center">SFA</strong>
                                        </li>
                                        <li>
                                            <span>Tokens Supply</span>
                                            <strong className=" text-center">500,000,000 SFA</strong>
                                        </li>
                                        <li>
                                            <span>Blockchain</span>
                                            <strong className=" text-center">
                                                <div className="flex gap-2 items-center">
                                                    <Image
                                                        src={polygon}
                                                        className=" w-5 h-5 sm:w-8 sm:h-8"
                                                        alt="polygon Logo"
                                                    />
                                                    Polygon
                                                </div>
                                            </strong>
                                        </li>
                                        <li>
                                            <span>Contract Address</span>
                                            <strong className=" text-center">
                                                <div
                                                    className="flex items-center copy-icon-div gap-2 flex-wrap"
                                                    id="contract-address"
                                                >
                                                    <a
                                                        href={`https://polygonscan.com/token/${contractAddress}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline "
                                                    >
                                                        {shortenedAddress}
                                                    </a>
                                                    <Image
                                                        src={copyicon}
                                                        height={100}
                                                        width={100}
                                                        className="w-5 h-5 copy-icon cursor-pointer ml-1 invert"
                                                        alt="copyicon"
                                                        onClick={handleCopy}
                                                    />
                                                </div>
                                            </strong>
                                            {copySuccess && (
                                                <div
                                                    className="absolute bottom-10 right-5  text-green-400      text-sm py-2 px-4 rounded shadow-lg"
                                                >
                                                    Address copied!
                                                </div>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tokenomics;
