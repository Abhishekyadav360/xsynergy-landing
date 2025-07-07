"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Title from "../Components/Title";
import NftCard from "../Components/NftCard";
import Image from "next/image";
import plant from "@/Assets/images/plant2.webp";

const Slider = () => {
    const nfts = [
        { id: 1, mediaWebm: "/video/nft1.webm", title: "" },
        { id: 2, mediaWebm: "/video/nft2.webm", title: "" },
        { id: 3, mediaWebm: "/video/nft3.webm", title: "" },
        { id: 4, mediaWebm: "/video/nft4.webm", title: "" },
        { id: 5, mediaWebm: "/video/nft5.webm", title: "" },
        { id: 6, mediaWebm: "/video/nft6.webm", title: "" },
        { id: 7, mediaWebm: "/video/nft7.webm", title: "" },
        { id: 8, mediaWebm: "/video/nft8.webm", title: "" },
        { id: 9, mediaWebm: "/video/nft9.webm", title: "" },
        { id: 10, mediaWebm: "/video/nft10.webm", title: "" },
        { id: 11, mediaWebm: "/video/nft11.webm", title: "" },
        { id: 12, mediaWebm: "/video/nft12.webm", title: "" },
        { id: 13, mediaWebm: "/video/nft13.webm", title: "" },
        { id: 14, mediaWebm: "/video/nft14.webm", title: "" },
        { id: 15, mediaWebm: "/video/nft15.webm", title: "" },
    ];

    return (
        <section id="nfts" className="relative overflow-hidden py-8 md:py-14">
            <div className="container mx-auto px-4">
                <div className="z-0">
                    <Image
                        className="absolute top-0 sm:top-[6%] right-[13%] sm:right-[37%] rotate-[30deg] opacity-70 sm:opacity-100"
                        src={plant}
                        alt="plant image"
                        width={60}
                        height={60}
                    />
                </div>
                <Title
                    title="SFAgro NFTs"
                    highlightedText=""
                    subtitle="Unlock the power of tokenized agricultural assets with SFAGRO NFTs, bringing transparency, ownership, and earning potential to the farming ecosystem."
                    className="mb-10 max-w-5xl mx-auto text-center"
                />
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        1920: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 2, spaceBetween: 30 },
                        786: { slidesPerView: 2, spaceBetween: 30 },
                        575: { slidesPerView: 1, spaceBetween: 30 },
                        320: { slidesPerView: 1, spaceBetween: 10 },
                    }}
                    className="swiper multiple-slide-carousel"
                    data-aos="fade-up" data-aos-duration="1600"
                >
                    {nfts.map((nft) => (
                        <SwiperSlide key={nft.id}>
                            <NftCard mediaWebm={nft.mediaWebm} title={nft.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='max-w-7xl mx-auto mt-6 px-4'>
                    <p className='text-center text-gray-400'>
                        Experience the future of farming with SFAGRO NFTs—where agriculture meets blockchain! 🚀
                    </p>
                </div>
                <div className="flex items-center relative w-fit mt-10 mx-auto">
                    <button className="swiper-button-prev group !p-2 flex justify-center items-center nft-card !w-12 !h-12 transition-all duration-500 rounded-full !-translate-x-16">
                        <svg className="h-3 w-3 text-green-600 group-hover:text-white"
                            xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button className="swiper-button-next group !p-2 flex justify-center items-center border nft-card !w-12 !h-12 transition-all duration-500 rounded-full !translate-x-16">
                        <svg className="h-3 w-3 text-green-600 group-hover:text-white"
                            xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Slider;
