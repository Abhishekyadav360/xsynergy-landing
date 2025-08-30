'use client';
import React, { useState, useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/Assets/images/xsynergylogo.webp";
import Button from '../Components/Button';
import Loader from '../Components/Loader';
import GridGlow from '../Components/GridGlow';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const menuRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    useEffect(() => {
        if (isOpen) {
          
            document.body.style.overflow = 'hidden';
        } else {
           
            document.body.style.overflow = '';
        }

      
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleScroll = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: "smooth",
            });
        }
        setIsOpen(false);
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <header className="fixed w-full px-2 sm:px-4 2  xl:px-8 bg-transparent z-50 text-white ">
            <div className="mx-auto flex items-center justify-between py-2 sm:py-3 mt-4 md:mt-0 res-navbg" data-aos="fade-down">
                <div className="text-base sm:text-2xl font-semibold">
                    <Link className="items-center gap-1 sm:gap-2" href="/">
                        <Image
                            className="w-12 md:w-20 h-auto ml-2 md:ml-0"
                            src={logo}
                            alt="Logo"
                            width={100}
                            height={50}
                        />
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-6 p-2 rounded-full backdrop-blur-sm nav-bg">
                    {/* <Link href="#about" className="px-4 py-2 hover:text-green-400 transition-all ease-in-out duration-300" onClick={(e) => handleScroll(e, 'about')}>XSYNERGY Plan</Link> */}

                    <a
                        href="https://docs.xsynergy.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 hover:text-green-400 transition-all ease-in-out duration-300"
                    >
                        Whitepaper
                    </a>

                    <a
                        href="/Comingsoon"
                        
                        rel="noopener noreferrer"
                        className="px-4 py-2 hover:text-green-400 transition-all ease-in-out duration-300"
                    >
                        Earn
                    </a>

                    <Link href="#faq" className="px-4 py-2 hover:text-green-400 transition-all ease-in-out duration-300" onClick={(e) => handleScroll(e, 'faq')}>FAQs</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <div className='bg-black rounded-xl'>
                        <Button target='_blank' href="Comingsoon">Enter The Matrix</Button>

                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none pr-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className='max-w-10'
                            color="var(--token-06f080bb-b416-40bd-9e82-3f6cb518c925, rgb(255, 255, 255))"
                            style={{ width: "100%", height: "100%" }}
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 w-full min-h-screen bg-[rgb(0,0,0)] p-6 transform z-10 transition-all duration-500 ease-in-out backdrop-blur-lg md:hidden
                ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                `}
            >
                <GridGlow className="-z-30" lines={6} maxLength={400} />
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-5 text-white focus:outline-none"
                >
                    ✖
                </button>
                <div className="text-base sm:text-2xl font-semibold">
                    <Link className="items-center gap-1 sm:gap-2" href="/">
                        <Image
                            className="w-14 md:w-16 h-auto ml-2 md:ml-0"
                            src={logo}
                            alt="Logo"
                            width={100}
                            height={50}
                        />
                    </Link>
                </div>
                <nav className="mt-12 space-y-4 text-white/90 text-3xl fr-fnt">
                    {/* <Link href="#about" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'about')}>XSYNERGY Plan</Link> */}

                    <a
                        href="https://docs.xsynergy.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2"
                    >
                        Whitepaper
                    </a>

                    <a
                        href="/Comingsoon"
                       
                        rel="noopener noreferrer"
                        className="block px-4 py-2"
                    >
                        Earn
                    </a>

                    <Link href="#faq" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'faq')}>FAQs</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
