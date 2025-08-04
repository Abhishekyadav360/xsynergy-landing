'use client';
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import faqbg from "@/Assets/images/footer.webp"
import Title from "../Components/Title";



const rawChat = [
  {
    type: "user",
    message: "Which blockchain is XSynergy built on?",
    avatar: "/userx1.webp",
  },
  {
    type: "bot",
    message: "XSynergy is deployed on the Polygon network for low fees and fast transactions.",
    avatar: "/logo.ico",
  },
  {
    type: "user",
    message: "Is there any admin control or manual access?",
    avatar: "/userx1.webp",
  },
  {
    type: "bot",
    message: "No. All functions are executed through smart contracts with zero admin interference.",
    avatar: "/logo.ico",
  },
  {
    type: "user",
    message: "How do I earn rewards?",
    avatar: "/userx1.webp",
  },
  {
    type: "bot",
    message: "By participating in the ecosystem and inviting others. Rewards are distributed instantly on-chain.",
    avatar: "/logo.ico",
  },
  {
    type: "user",
    message: "Can I access it from anywhere?",
    avatar: "/userx1.webp",
  },
  {
    type: "bot",
    message: "Yes. XSynergy is open globally and works 24/7 without restrictions.",
    avatar: "/logo.ico",
  },

];

export default function ChatWithFancyAnimations() {
  const [chat, setChat] = useState([]);
  // const [typing, setTyping] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;

          const showNext = () => {
            if (i < rawChat.length) {
              // setTyping(true);
              setTimeout(() => {
                setChat((prev) => [...prev, rawChat[i]]);
                // setTyping(false);
                i++;
                setTimeout(showNext, 1200);
              }, 600);
            }
          };

          showNext();
          observer.disconnect(); // run only once
        }
      },
      {
        threshold: 0.3, // run when 30% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  // useEffect(() => {
  //   let i = 0;

  //   const showNext = () => {
  //     if (i < rawChat.length) {
  //       setTyping(true);
  //       setTimeout(() => {
  //         setChat((prev) => [...prev, rawChat[i]]);
  //         setTyping(false);
  //         i++;
  //         setTimeout(showNext, 1200);
  //       }, 600);
  //     }
  //   };

  //   showNext(); // directly start on component mount
  // }, []);

  return (
    <div
      id="faq"
      ref={sectionRef}
      className=" bg-black text-white  px-4 flex items-center justify-center relative pt-8 md:pt-10 pb-16" data-aos="fade-up">

      <div className='absolute top-0 left-0 w-full h-full z-0 sm:z-10'>

        <Image
          src={faqbg}
          alt="Background"
          priority
          className="absolute top-[190px] sm:top-[130px] right-0 bottom-0 left-0 w-full h-full object-contain -z-10 opacity-40 hue-rotate-180"
        />

      </div>

      <div className=" mx-auto ">

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
            FAQs
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

        <Title
          title="Answers from the Chain"
          highlightedText=""
          subtitle="XSynergy is governed by smart contracts, not assumptions. Here’s everything you need to know."
          className="mb-10 text-center max-w-2xl mx-auto"
        />


        <div className="w-full max-w-3xl space-y-6 mt-20">
          {chat.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`flex gap-3 ${item.type === "user" ? "justify-start " : "justify-start flex-row-reverse"
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
          ))}

          {/* {typing && (
            <div className="flex items-center gap-2 text-green-400 text-sm font-mono animate-pulse">
              Typing<span className="dot-flash">.</span>
              <span className="dot-flash delay-100">.</span>
              <span className="dot-flash delay-200">.</span>
            </div>
          )} */}
        </div>

      </div>


      <style jsx>{`
        .dot-flash {
          animation: flash 1s infinite;
        }
        .delay-100 {
          animation-delay: 0.2s;
        }
        .delay-200 {
          animation-delay: 0.4s;
        }
        @keyframes flash {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
 