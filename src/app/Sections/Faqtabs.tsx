'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import faqbg from "@/Assets/images/footer.webp";
import Title from "../Components/Title";

const faqTabs = [
    {
        title: "Onboarding & General Questions",
        chat: [
            { type: "user", message: "What is XSYNERGY in simple terms?", avatar: "/userx1.webp" },
            { type: "bot", message: "A decentralized platform where anyone can earn crypto through a smart matrix system.", avatar: "/logo.ico" },
            { type: "user", message: "Who can join XSYNERGY?", avatar: "/userx1.webp" },
            { type: "bot", message: "Anyone with a crypto wallet and internet access.", avatar: "/logo.ico" },
            { type: "user", message: "Is XSYNERGY beginner-friendly?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, it's made for both beginners and pros.", avatar: "/logo.ico" },
            { type: "user", message: "How do I get started?", avatar: "/userx1.webp" },
            { type: "bot", message: "Connect your wallet, choose a level, and activate your position.", avatar: "/logo.ico" },
            { type: "user", message: "What do I need to register?", avatar: "/userx1.webp" },
            { type: "bot", message: "Just a wallet and a few dollars in crypto.", avatar: "/logo.ico" },
            { type: "user", message: "Is it free to join?", avatar: "/userx1.webp" },
            { type: "bot", message: "No, but the starting cost is low and affordable.", avatar: "/logo.ico" },
            { type: "user", message: "Can I earn without referring anyone?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, thanks to system spillover and matrix upgrades, staking and token value.", avatar: "/logo.ico" },
            { type: "user", message: "Is there an app or is it browser-based?", avatar: "/userx1.webp" },
            { type: "bot", message: "It works directly in your browser — no app needed.", avatar: "/logo.ico" },
            { type: "user", message: "Do I need to be tech-savvy to use it?", avatar: "/userx1.webp" },
            { type: "bot", message: "No, everything is designed to be simple.", avatar: "/logo.ico" },
            { type: "user", message: "Can I use my phone to access the platform?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, it works on all smartphones.", avatar: "/logo.ico" }
        ]
    },
    {
        title: "Blockchain & Wallet Questions",
        chat: [
            { type: "user", message: "What blockchain is XSYNERGY built on?", avatar: "/userx1.webp" },
            { type: "bot", message: "It's built on Polygon.", avatar: "/logo.ico" },
            { type: "user", message: "What crypto wallet do I need?", avatar: "/userx1.webp" },
            { type: "bot", message: "Any wallet that supports the network — like Trust Wallet or MetaMask.", avatar: "/logo.ico" },
            { type: "user", message: "How do I connect my wallet?", avatar: "/userx1.webp" },
            { type: "bot", message: "Click \"Connect Wallet\" on the homepage and approve.", avatar: "/logo.ico" },
            { type: "user", message: "Is this platform fully decentralized?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, 100% smart contract-powered.", avatar: "/logo.ico" },
            { type: "user", message: "Are transactions instant or delayed?", avatar: "/userx1.webp" },
            { type: "bot", message: "Instant or near-instant.", avatar: "/logo.ico" },
            { type: "user", message: "What token is used for payments?", avatar: "/userx1.webp" },
            { type: "bot", message: "You pay and earn in USDC or USDT.", avatar: "/logo.ico" },
            { type: "user", message: "Is gas or network fee required?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, a small network fee is needed per action.", avatar: "/logo.ico" },
            { type: "user", message: "Can I change wallets after I register?", avatar: "/userx1.webp" },
            { type: "bot", message: "No, your ID is linked to your wallet address.", avatar: "/logo.ico" },
            { type: "user", message: "Is my wallet and identity secure?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, your data stays with you — we don't store anything.", avatar: "/logo.ico" },
            { type: "user", message: "Can I use a cold wallet (e.g. Ledger)?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, as long as it supports DApps.", avatar: "/logo.ico" }
        ]
    },
    {
        title: "Compensation & Earnings",
        chat: [
            { type: "user", message: "How does the Matrix payout system work?", avatar: "/userx1.webp" },
            { type: "bot", message: "You earn when others join and upgrade under you. Spillover pass ups and token trading or staking.", avatar: "/logo.ico" },
            { type: "user", message: "What is the minimum amount I can earn?", avatar: "/userx1.webp" },
            { type: "bot", message: "It depends on your level, but payouts start from your first referral. Limitless.", avatar: "/logo.ico" },
            { type: "user", message: "Is there a cap on earnings?", avatar: "/userx1.webp" },
            { type: "bot", message: "No hard cap — earn as much as your structure grows.", avatar: "/logo.ico" },
            { type: "user", message: "Do I earn from people I don't know?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, through spillover and team upgrades.", avatar: "/logo.ico" },
            { type: "user", message: "What is spillover and how does it work?", avatar: "/userx1.webp" },
            { type: "bot", message: "It's when users placed above or below benefit your matrix.", avatar: "/logo.ico" },
            { type: "user", message: "How fast can I start earning?", avatar: "/userx1.webp" },
            { type: "bot", message: "Immediately after your first team activity.", avatar: "/logo.ico" },
            { type: "user", message: "Are the earnings real crypto or points?", avatar: "/userx1.webp" },
            { type: "bot", message: "All earnings are real-time crypto.", avatar: "/logo.ico" },
            { type: "user", message: "Can I withdraw instantly?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, funds go directly to your wallet.", avatar: "/logo.ico" },
            { type: "user", message: "Is there a withdrawal limit?", avatar: "/userx1.webp" },
            { type: "bot", message: "No — it's your wallet, your money.", avatar: "/logo.ico" },
            { type: "user", message: "Do I need to complete tasks to earn?", avatar: "/userx1.webp" },
            { type: "bot", message: "No tasks — just build and grow your matrix.", avatar: "/logo.ico" }
        ]
    },
    {
        title: "Upgrades, Ranks & Bonuses",
        chat: [
            { type: "user", message: "What are Matrix Levels?", avatar: "/userx1.webp" },
            { type: "bot", message: "Each level increases your income potential.", avatar: "/logo.ico" },
            { type: "user", message: "How do I unlock higher levels?", avatar: "/userx1.webp" },
            { type: "bot", message: "You can upgrade manually anytime.", avatar: "/logo.ico" },
            { type: "user", message: "What happens when I reach Level 3?", avatar: "/userx1.webp" },
            { type: "bot", message: "You unlock deeper levels of rewards and new matrix entries.", avatar: "/logo.ico" },
            { type: "user", message: "Do I need to upgrade manually?", avatar: "/userx1.webp" },
            { type: "bot", message: "You can, or set auto-upgrade if enabled.", avatar: "/logo.ico" },
            { type: "user", message: "Is there auto-upgrade or auto-rebuy?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, you can turn it on in your dashboard.", avatar: "/logo.ico" },
            { type: "user", message: "What bonuses are available beyond the Matrix?", avatar: "/userx1.webp" },
            { type: "bot", message: "There are referral bonuses, check matches, and pool rewards. Spillover pass ups over staking rewards.", avatar: "/logo.ico" },
            { type: "user", message: "How do I reach Leaderboard or Rank rewards?", avatar: "/userx1.webp" },
            { type: "bot", message: "Refer, grow your team, and help others level up.", avatar: "/logo.ico" },
            { type: "user", message: "What's the advantage of upgrading early?", avatar: "/userx1.webp" },
            { type: "bot", message: "You earn faster and receive more spillover.", avatar: "/logo.ico" },
            { type: "user", message: "Can I skip levels?", avatar: "/userx1.webp" },
            { type: "bot", message: "No, levels must be unlocked in order.", avatar: "/logo.ico" },
            { type: "user", message: "Are there any penalties for not upgrading?", avatar: "/userx1.webp" },
            { type: "bot", message: "You may miss earnings until you upgrade.", avatar: "/logo.ico" }
        ]
    },
    {
        title: "Team Building & Referrals",
        chat: [
            { type: "user", message: "How do I refer others?", avatar: "/userx1.webp" },
            { type: "bot", message: "Share your link — it's on your dashboard.", avatar: "/logo.ico" },
            { type: "user", message: "What do I earn when someone joins through my link?", avatar: "/userx1.webp" },
            { type: "bot", message: "You get instant crypto commissions.", avatar: "/logo.ico" },
            { type: "user", message: "How many people can I refer?", avatar: "/userx1.webp" },
            { type: "bot", message: "Unlimited — refer as many as you like.", avatar: "/logo.ico" },
            { type: "user", message: "What is the team structure like?", avatar: "/userx1.webp" },
            { type: "bot", message: "It's matrix-based with automatic placement.", avatar: "/logo.ico" },
            { type: "user", message: "Can someone above me earn from my referrals?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes, through the matrix and uplines.", avatar: "/logo.ico" },
            { type: "user", message: "Can I earn passively from my team?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes — from their upgrades and matrix actions.", avatar: "/logo.ico" },
            { type: "user", message: "What's the fastest way to grow my team?", avatar: "/userx1.webp" },
            { type: "bot", message: "Use your link, plug into team tools, and be consistent.", avatar: "/logo.ico" },
            { type: "user", message: "Do I get a bonus for helping others upgrade?", avatar: "/userx1.webp" },
            { type: "bot", message: "Yes — you benefit from team success.", avatar: "/logo.ico" },
            { type: "user", message: "How do I track my downlines and team income?", avatar: "/userx1.webp" },
            { type: "bot", message: "Use the dashboard — it shows all your data.", avatar: "/logo.ico" },
            { type: "user", message: "Is there any incentive for helping others succeed?", avatar: "/userx1.webp" },
            { type: "bot", message: "Absolutely — the more they grow, the more you earn.", avatar: "/logo.ico" }
        ]
    }
];
const getTabBaseColor = (index) => {
    const colors = [
        'bg-[#7cff98] text-black',
        'bg-[#98d7ff]  text-black',
        'bg-[#ffa7f9] text-black',
        'bg-[#ffe38c] text-black',
        'bg-[#ffb58c] text-black'
    ];
    return colors[index] || 'bg-gray-500 text-white';
};

export default function Faqtabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [chat, setChat] = useState([]);
    const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);
    const sectionRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(8);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimatedOnce) {
                setHasAnimatedOnce(true);
                setChat(faqTabs[0].chat);
            }
        }, { threshold: 0.3 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasAnimatedOnce]);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setVisibleCount(8);
        setShowAll(false);
        setChat(faqTabs[index].chat);
    };

    return (
        <div
            id="faq"
            ref={sectionRef}
            className="bg-black text-white px-4 flex items-center justify-center relative pt-8 md:pt-10 pb-16"
            data-aos="fade-up"
        >
            <div className='fixed top-0 left-0 w-full h-full z-0 '>
                <Image
                    src={faqbg}
                    alt="Background"
                    priority
                    className="fixed top-[190px] sm:top-[130px] right-0 bottom-0 lleft-0 w-full h-full object-contain -z-10 opacity-40 hue-rotate-180"
                />
            </div>

            <div className="mx-auto w-full max-w-3xl">
                <div className="flex items-center justify-center mb-4 gap-0 sm:gap-4 border-[1px] border-[#baf8cc2f] bg-[#0d0d0d] rounded-full px-1 py-[5px] max-w-64 sm:max-w-[350px] w-full mx-auto  overflow-hidden">
                    <div className="w-[108px] h-[20px]">
                        {/* left SVG */}
                        <svg width={108} height={20} viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M103.5 11.0455H72.4759M72.4759 11.0455L65.0301 1H0.5M72.4759 11.0455H40.2108M7.946 11.0455H40.2108M40.2108 11.0455L35.247 18H0.5"
                                stroke="url(#left-gradient)" strokeWidth={1} />
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
                        FAQs
                    </p>

                    <div className="w-[108px] h-[20px]">
                        {/* right SVG */}
                        <svg width={108} height={20} viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 11.0455H35.5241M35.5241 11.0455L42.9699 1H107.5M35.5241 11.0455H67.7892M100.054 11.0455H67.7892M67.7892 11.0455L72.753 18H107.5"
                                stroke="url(#right-gradient)" strokeWidth={1} />
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

                <Title
                    title="Answers from the Chain"
                    highlightedText=""
                    subtitle=""
                    className="mb-6 text-center max-w-2xl mx-auto"
                />

                {/* Tabs */}
                <div className="mb-6 relative z-20 overflow-x-auto lg:overflow-visible scrollbar-hide">
                    <div className="flex gap-3 min-w-max px-2 lg:flex-wrap lg:min-w-0 justify-center">
                        {faqTabs.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => handleTabClick(i)}
                                className={`rounded-lg text-md font-medium whitespace-nowrap p-[2px] ${getTabBaseColor(i)}`}
                            >
                                <div className={`
      px-4 py-2 rounded-md
      ${activeTab === i ? 'border-2 border-black' : ''}
      transition-all duration-200
    `}>
                                    {tab.title}
                                </div>
                            </button>
                        ))}

                    </div>
                </div>
                <div className="space-y-4 mt-12">
                    {chat.slice(0, visibleCount).map((item, i) => {
                        if (!item) return null;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className={`flex gap-3 ${item.type === "user"
                                    ? "justify-start"
                                    : "justify-start flex-row-reverse"
                                    }`}
                            >
                                <motion.img
                                    src={item.avatar}
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full border border-green-500/50 object-contain p-1"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                                />
                                <motion.div
                                    className={`max-w-[75%] px-4 sm:px-5 py-4 rounded-lg border font-mono text-sm shadow-md ${item.type === "user"
                                        ? "bg-gradient-to-br from-black via-black to-green-900 text-green-100 border-[#2d362d]"
                                        : "bg-gradient-to-br from-black via-black to-green-800 text-green-50 border-[#2d362d]"
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {item.message}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {chat.length > 8 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => {
                                if (showAll) {
                                    setVisibleCount(8);
                                    setShowAll(false);
                                } else {
                                    setVisibleCount(chat.length);
                                    setShowAll(true);
                                }
                            }}
                            className="text-green-400 hover:text-green-300 underline font-medium text-sm relative z-20"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
