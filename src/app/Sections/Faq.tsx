'use client'
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import PlusIcon from '@/Assets/images/add.png';
import MinusIcon from '@/Assets/images/minus.png';
import faqimg from '@/Assets/images/faq-plant.webp';
import Image from 'next/image';
import Title from '../Components/Title';

function Faq() {
    const FAQItem = [
        { question: "What is SFAgro?", answer: "SFAGRO is a decentralized agricultural platform that utilizes blockchain, smart contracts, and NFTs to enhance financial accessibility, transparency, and efficiency in farming and agribusiness." },
        // { question: " How do I earn rewards with SFAGRO?", answer: "You can earn rewards through staking SFA tokens, trading NFTs, participating in governance, and utilizing decentralized farming incentives. Rewards are distributed instantly via blockchain transactions." },
        { question: " How secure is SFAGRO?", answer: "SFAGRO is built on immutable smart contracts that ensure secure, automated, and tamper-proof transactions, providing trust and reliability across the entire ecosystem." },
        { question: "Are there any hidden fees for using SFAGRO?", answer: `No! SFAGRO is fully decentralized, meaning no central authority and no hidden fees. Transactions are cost-efficient and transparent, offering fair pricing and direct farmer-to-investor connections.` },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    useEffect(() => {
        AOS.init({
            duration: 1600,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <section id='faq' className="advantages relative overflow-hidden py-8 md:py-10 ">
            <div className="container mx-auto px-4">
                <Title
                    title="Frequently Asked Questions"
                    highlightedText=""
                    subtitle="Got questions? Explore our FAQ to learn how SFAGRO uses blockchain for secure, transparent, and rewarding agriculture."
                    className='mb-5'
                />
                <div className=' lg:flex lg:items-center'>
                    <div className="lg:w-1/2 mx-auto text-left relative justify-center lg:justify-around flex" data-aos="fade-up">
                        <div className=''>
                            <Image
                                src={faqimg}
                                alt='about-image'
                                width={450}
                                height={450}
                                className='w-full h-auto max-w-60 sm:max-w-96 mx-auto   '
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2  mx-auto text-left relative" data-aos="fade-up">
                        <div className="space-y-0">
                            {FAQItem.map((item, index) => (
                                <div key={index} className="faq-item relative ">
                                    <button
                                        className="flex items-center justify-between w-full text-left text-base md:text-xl font-medium focus:outline-none text-foreground faq-head py-4 relative"
                                        onClick={() => toggleAnswer(index)}
                                    >
                                        <span>{item.question}</span>
                                        <Image src={openIndex === index ? MinusIcon : PlusIcon} alt={openIndex === index ? 'Collapse' : 'Expand'} className='w-5 h-5 hue-rotate-[300deg]' />
                                    </button>
                                    <div
                                        className={`transition-max-height duration-500 overflow-hidden text-base md:text-lg text-gray-400 px-2 ${openIndex === index ? "max-h-96" : "max-h-0"
                                            }`}
                                    >
                                        {openIndex === index && (
                                            <p className="pb-5" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className='max-w-7xl mx-auto  mt-10 px-4'>
                    <p className='text-center text-gray-400 '>
                    🚀 Join the SFAGRO revolution today and experience the future of agriculture! 🌱</p>
                </div> */}
            </div>
        </section>
    );
}

export default Faq;
