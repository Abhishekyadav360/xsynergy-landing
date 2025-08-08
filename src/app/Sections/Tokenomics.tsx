'use client'
import React, { useState } from 'react'
import Title from '../Components/Title'
import Image from 'next/image'
import { motion } from 'framer-motion'
import tokenomics from '@/Assets/images/final1.webp'
import tkn from '@/Assets/images/xsynergylogo.webp'
import tknsupply from '@/Assets/images/tknsupply.webp'
import contractadd from '@/Assets/images/contractaddress.webp'

const Tokenomics = () => {
    const [copied, setCopied] = useState(false)
    const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"

    const truncateAddress = (address) =>
        `${address.slice(0, 6)}...${address.slice(-4)}`

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="tokenomics" className="relative overflow-hidden py-12 md:py-20 ">
            {/* <div className='absolute top-0 left-0 w-full h-full  '>
 <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className=" w-full h-full -z-10 object-cover object-center opacity-20 ">
                        <source src='/video/tkn.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
              </div> */}
            <div className="max-w-[1400px] mx-auto px-4 relative" data-aos="fade-up">
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
                        Tokenomics
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
                <div className=' max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto'>
 <Title
                    title="Token Allocation Overview"
                    highlightedText=""
                    subtitle="Every XSYNERGY token is allocated to power your rewards, drive community growth, and lock in the network’s stability."
                    className="mb-10 text-center max-w-5xl mx-auto "
                />

                </div>
               

                {/* -------- Desktop / Tablet Layout -------- */}
                <div className="w-full max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto hidden lg:block mt-20">
                    <Image
                        src={tokenomics}
                        alt="Tokenomics Chart"
                        className="w-full h-auto mx-auto animate-up-down " data-aos='fade-up'
                    />

                    {/* Top Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: -50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="absolute top-16 left-4 max-w-[280px] w-full"
                    >
                        <div className="w-full aspect-square bg-[url('/arbi-scan-border22.webp')] bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center px-2 py-2 text-[#6bffa4] drop-shadow-md">
                            <Image
                                src={tknsupply}
                                alt="tkn"
                                width={100}
                                height={100}
                                className="object-cover rounded w-full h-auto max-w-12 mb-2"
                            />
                            <h3 className="text-2xl font-bold">Fixed Supply</h3>
                            <p className="text-md mt-1 text-center text-gray-300">8,888,888 XSYN</p>
                        </div>
                    </motion.div>

                    {/* Top Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: -50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1.1 }}
                        viewport={{ once: true }}
                        className="absolute top-16 right-4 max-w-[280px] w-full"
                    >
                        <div className="w-full aspect-square bg-[url('/totla-supply-bg2.webp')] bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center px-2 py-2 text-[#6bffa4] drop-shadow-md">
                            <Image
                                src={tkn}
                                alt="tkn"
                                width={100}
                                height={100}
                                className="object-cover rounded w-full h-auto max-w-12 mb-2"
                            />
                            <h3 className="text-2xl font-bold">Token Name</h3>
                            <p className="text-md mt-1 text-center text-gray-300">Xsynergy</p>
                        </div>
                    </motion.div>

                    {/* Bottom Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-16 left-4 max-w-[280px] w-full"
                    >
                        <div className="w-full aspect-square bg-[url('/totla-supply-bg.webp')] bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center px-2 py-2 text-[#6bffa4] drop-shadow-md">
                            <Image
                                src={tkn}
                                alt="tkn"
                                width={100}
                                height={100}
                                className="object-cover rounded w-full h-auto max-w-12 mb-2"
                            />
                            <h3 className="text-2xl font-bold">Token Symbol</h3>
                            <p className="text-md mt-1 text-center text-gray-300">XSYN</p>
                        </div>
                    </motion.div>

                    {/* Bottom Right (Contract Address) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-16 right-4 max-w-[280px] w-full"
                    >
                        <div className="w-full aspect-square bg-[url('/arbi-scan-border2.webp')] bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center px-2 py-2 text-[#6bffa4] drop-shadow-md">
                            <Image
                                src={contractadd}
                                alt="tkn"
                                width={100}
                                height={100}
                                className="object-cover rounded w-full h-auto max-w-12 mb-2"
                            />
                            <h3 className="text-2xl font-bold">Contract Address</h3>
                            <div className="flex items-center justify-center gap-2 mt-1 text-gray-300">
                                <span className="flex items-center gap-1">
                                    {truncateAddress(contractAddress)}
                                    {copied && (
                                        <span className="text-green-400 text-sm animate-pulse ml-1">Copied!</span>
                                    )}
                                </span>
                                <button
                                    onClick={handleCopy}
                                    title="Copy Address"
                                    className="hover:text-white transition"
                                >
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1z" /><path d="M20 5H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 18H8V7h12z" /></svg>
                                </button>
                                <a
                                    href={`https://arbiscan.io/address/${contractAddress}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="View on Arbiscan"
                                    className="hover:text-white transition"
                                >
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3l-1.4 1.4L17.2 9H10v2h7.2l-4.6 4.6L14 17l8-8z" /><path d="M5 5h4V3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-4h-2v4H5V5z" /></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* -------- Mobile Layout -------- */}
                <div className="lg:hidden flex flex-col items-center gap-4" data-aos='fade-up'>
                    {/* Top Boxes */}
                    <div className="flex flex-col gap-10 w-full items-center">
                        <div className="w-full max-w-[300px] h-[160px] bg-[url('/arbi-scan-border2.webp')] bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center px-2  text-[#6bffa4] drop-shadow-md">
                            <Image
                                src={tknsupply}
                                alt="tkn"
                                width={100}
                                height={100}
                                className="object-cover rounded w-full h-auto max-w-12 mb-2"
                            />
                            <h3 className="text-2xl font-bold">Fixed Supply</h3>
                            <p className="text-md mt-1 text-center text-gray-300">8,888,888 XSYN</p>
                        </div>
                        <div className="w-full max-w-[300px] h-[160px] bg-[url('/arbi-scan-border22.webp')] bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center px-2  text-[#6bffa4] drop-shadow-md">
                            <Image
                                src={tkn}
                                alt="tkn"
                                width={100}
                                height={100}
                                className="object-cover rounded w-full h-auto max-w-12 mb-2"
                            />
                            <h3 className="text-2xl font-bold">Token Name</h3>
                            <p className="text-md mt-1 text-center text-gray-300">Xsynergy</p>
                        </div>
                    </div>

                    {/* Tokenomics Image */}
                    <Image
                        src={tokenomics}
                        alt="Tokenomics Chart"
                        className="w-full h-auto mx-auto max-w-md sm:max-w-lg animate-up-down mt-4 mb-4"
                    />

                    {/* Bottom Boxes */}
                    <div className="flex flex-col gap-10 w-full items-center ">
                        <div className="w-full max-w-[300px] h-[160px] bg-[url('/arbi-scan-border22.webp')] bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center px-2  text-[#6bffa4] drop-shadow-md">
                            <Image
                                src={tkn}
                                alt="tkn"
                                width={100}
                                height={100}
                                className="object-cover rounded w-full h-auto max-w-12 mb-2"
                            />
                            <h3 className="text-2xl font-bold">Token Symbol</h3>
                            <p className="text-md mt-1 text-center text-gray-300">XSYN</p>
                        </div>
                        <div className="w-full max-w-[300px] h-[160px] bg-[url('/arbi-scan-border2.webp')] bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center px-2  text-[#6bffa4] drop-shadow-md">
                            <Image
                                src={tkn}
                                alt="tkn"
                                width={100}
                                height={100}
                                className="object-cover rounded w-full h-auto max-w-12 mb-2"
                            />
                            <h3 className="text-2xl font-bold">Contract Address</h3>
                            <div className="flex items-center justify-center gap-2 mt-1 text-gray-300">
                                <span className="flex items-center gap-1">
                                    {truncateAddress(contractAddress)}
                                    {copied && (
                                        <span className="text-green-400 text-sm animate-pulse ml-1">Copied!</span>
                                    )}
                                </span>
                                <button
                                    onClick={handleCopy}
                                    title="Copy Address"
                                    className="hover:text-white transition text-green-400"
                                >
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1z" /><path d="M20 5H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 18H8V7h12z" /></svg>
                                </button>
                                <a
                                    href={`https://arbiscan.io/address/${contractAddress}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="View on Arbiscan"
                                    className="hover:text-white transition"
                                >
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3l-1.4 1.4L17.2 9H10v2h7.2l-4.6 4.6L14 17l8-8z" /><path d="M5 5h4V3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-4h-2v4H5V5z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics
