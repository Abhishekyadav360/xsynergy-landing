'use client';
import React, { useState, useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/Assets/images/xsynergylogo.webp";
import Button from '../Components/Button';
import  Loader  from '../Components/Loader';

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
        <header className="fixed w-full px-2 sm:px-4 2  xl:px-8 bg-transparent z-50 text-white">
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
                    <Link href="#about" className="px-4 py-2 hover:text-green-400 transition-all ease-in-out duration-300" onClick={(e) => handleScroll(e, 'about')}>About</Link>
                    <Link href="#advantages" className="px-4 py-2 hover:text-green-400 transition-all ease-in-out duration-300" onClick={(e) => handleScroll(e, 'advantages')}>Advantages</Link>
                    <Link href="#nfts" className="px-4 py-2 hover:text-green-400 transition-all ease-in-out duration-300" onClick={(e) => handleScroll(e, 'nfts')}>Nfts</Link>
                    {/* <Link href="#tokenomics" className="px-4 py-2 hover:text-green-400 transition-all ease-in-out duration-300" onClick={(e) => handleScroll(e, 'tokenomics')}>Tokenomics</Link> */}
                    <Link href="#faq" className="px-4 py-2 hover:text-green-400 transition-all ease-in-out duration-300" onClick={(e) => handleScroll(e, 'faq')}>FAQ</Link>
                </nav>


                <div className="flex items-center gap-4">
                    <Button target='_blank' href="https://users.sfagro.club/" >Register</Button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none pr-3"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>


            <div
                ref={menuRef}
                className={`fixed top-0 right-0 w-3/5 min-h-screen bg-[rgb(26,46,27)] p-6 transform z-10 transition-all duration-500 ease-in-out backdrop-blur-lg md:hidden
                ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                `}
            >

                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-5 text-white focus:outline-none"
                >
                    ✖
                </button>


                <div className="text-base sm:text-2xl font-semibold">
                    <Link className="items-center gap-1 sm:gap-2" href="/">
                        <Image
                            className="w-12 md:w-16 h-auto ml-2 md:ml-0"
                            src={logo}
                            alt="Logo"
                            width={100}
                            height={50}
                        />
                    </Link>
                </div>


                <nav className="mt-12 space-y-4 text-white text-xl">
                    <Link href="#about" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'about')}>About</Link>
                    {/* <Link href="#tokenomics" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'tokenomics')}>Tokenomics</Link> */}
                    <Link href="#advantages" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'advantages')}>Advantages</Link>
                    <Link href="#nfts" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'nfts')}>Nfts</Link>
                    <Link href="#faq" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'faq')}>FAQ</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
