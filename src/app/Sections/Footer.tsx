
'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import facebook from '@/Assets/images/social/facebook.svg'
import instagram from '@/Assets/images/social/instagram.svg'
import telegram from '@/Assets/images/social/telegram.svg'
import youtube from '@/Assets/images/social/youtube.svg'


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white  py-10 footermain top-full sticky bg-black  overflow-hidden ftr-bg ">

            <div className="container mx-auto px-4 relative">
                <div className="">
                    <div className="text-center mt-2">
                        <p>&copy; {currentYear} SFAgro. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-5 mx-auto items-center justify-center mt-5" >
                        <Link className="   p-2 rounded-3xl  nft-card" href="https://www.facebook.com/profile.php?id=61573293910817" target="_blank" rel="noopener noreferrer">
                            <Image src={facebook} alt='facebook' width={100} height={100} className='w-auto h-8 hover:-rotate-[25deg]  transition-transform duration-300 ease-in-out' />
                        </Link>
                        <Link className="  p-2 rounded-3xl  nft-card" href="https://www.instagram.com/sfagro.farm" target="_blank" rel="noopener noreferrer">
                            <Image src={instagram} alt='instagram' width={100} height={100} className='w-auto h-8 hover:-rotate-[25deg]  transition-transform duration-300 ease-in-out' />
                        </Link>
                        <Link className="  p-2 rounded-3xl  nft-card" href="https://t.me/SFAGROTOKEN" target="_blank" rel="noopener noreferrer">
                            <Image src={telegram} alt='telegram' width={100} height={100} className='w-auto h-8 hover:-rotate-[25deg]  transition-transform duration-300 ease-in-out' />
                        </Link>
                        <Link className="  p-[10px] rounded-3xl  nft-card" href="https://www.youtube.com/@GYANONCRYPTOWORLD" target="_blank" rel="noopener noreferrer">
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
