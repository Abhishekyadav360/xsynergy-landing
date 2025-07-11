
'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import facebook from '@/Assets/images/social/facebook.svg'
import instagram from '@/Assets/images/social/instagram.svg'
import telegram from '@/Assets/images/social/telegram.svg'
import youtube from '@/Assets/images/social/youtube.svg'
import logo from '@/Assets/images/favicon1.webp';
import GridGlow from '../Components/GridGlow';


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white  py-10 footermain top-full sticky   ftr-bg overflow-hidden ">
 <GridGlow className="-z-30" lines={14} maxLength={400} />
            <div className="container mx-auto px-4 relative">
                {/* <div className="absolute bottom-0 inset-0 flex justify-center items-center z-10 pointer-events-none">
                <h1 className=" text-[100px] sm:text-[250px]  font-extrabold text-white/10 sm:text-white/5 select-none tracking-tighter">
                    XSynergy
                </h1>
            </div> */}
                <div className="">
                            <Image src={logo} alt='logo' width={100} height={100} className='w-full h-auto max-w-12 mb-4 mx-auto  transition-transform duration-300 ease-in-out' />

                    <div className="text-center mt-2">
                        <p className='fr-fnt text-xl'>&copy; {currentYear} XSynergy. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-5 mx-auto items-center justify-center mt-5" >
                        <Link className="   p-2 rounded-3xl   " href="/" target="_blank" rel="noopener noreferrer">
                            <Image src={facebook} alt='facebook' width={100} height={100} className='w-auto h-8 hover:-rotate-[25deg]  transition-transform duration-300 ease-in-out' />
                        </Link>
                        <Link className="  p-2 rounded-3xl " href="/" target="_blank" rel="noopener noreferrer">
                            <Image src={instagram} alt='instagram' width={100} height={100} className='w-auto h-8 hover:-rotate-[25deg]  transition-transform duration-300 ease-in-out' />
                        </Link>
                        <Link className="  p-2 rounded-3xl  " href="/" target="_blank" rel="noopener noreferrer">
                            <Image src={telegram} alt='telegram' width={100} height={100} className='w-auto h-8 hover:-rotate-[25deg]  transition-transform duration-300 ease-in-out' />
                        </Link>
                        <Link className="  p-[10px] rounded-3xl  " href="/" target="_blank" rel="noopener noreferrer">
                            <Image src={youtube} alt='youtube' width={100} height={120} className='w-auto h-7 hover:-rotate-[25deg]  transition-transform duration-300 ease-in-out invert' />
                        </Link>
                        {/* <Link className=" bg-gray-900 hover:bg-gray-800 p-2 rounded-3xl opacity-85 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                            <Image src={reddit} alt='reddit' width={100} height={100} className='w-auto h-8 hover:-rotate-[25deg]  transition-transform duration-300 ease-in-out' />
                        </Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
