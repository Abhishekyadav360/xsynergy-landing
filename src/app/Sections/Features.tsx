// 'use client';
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import centerImage from "@/Assets/images/xsynergylogo.webp";

// export default function Features() {
//   const steps = [
//     { id: 1, title: "Top • GPT Agents",      desc: "Generate content and build intelligent agents.",  style: "top-[322px] right-[50px] -translate-x-1/2", angle: 270 },
//     { id: 2, title: "Left • LinkedIn Connect", desc: "Connect with LinkedIn & other tools.",            style: "top-[40%] left-[180px] -translate-y-1/2",  angle: 180 },
//     { id: 3, title: "Right • Notion AI",      desc: "Organize info using Notion AI assistant.",         style: "bottom-[220px] right-[180px] -translate-y-1/2", angle: 0 },
//     { id: 4, title: "Bottom • Twitter Integration", desc: "Connect with Twitter & automate.",          style: "bottom-[300px] left-[310px] -translate-x-1/2", angle: 90 },
//   ];


//   const [isMobie, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

       
//         <div className="relative w-full max-w-5xl h-[1000px] hidden md:block">

          
//           {steps.map(({ id, angle }) => (
//             <div
//               key={`line-${id}`}
//               className="absolute top-[40%] left-1/2 z-10"
//               style={{
//                 width: "2px",
//                 height: "220px",
//                 backgroundColor: "rgba(255,255,255,0.15)",
//                 transform: `translate(-50%, -50%) rotate(${angle}deg)`,
//                 transformOrigin: "center bottom",
//               }}
//             >
//               <div
//                 style={{
//                   width: "6px",
//                   height: "6px",
//                   backgroundColor: "#3b82f6",
//                   borderRadius: "50%",
//                   position: "absolute",
//                   bottom: 0,
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   animation: "lineGlow 1.8s ease-in-out infinite",
//                 }}
//               />
//             </div>
//           ))}

        
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//             <Image src={centerImage} width={64} height={64} alt="Core Logo" className="w-16 h-16 object-contain" />
//           </div>

          
//           {steps.map(({ id, title, desc, style }) => (
//             <Card key={id} id={id} title={title} desc={desc} className={`absolute ${style}`} />
//           ))}
//         </div>

       
//         <div className="w-full max-w-xs flex flex-col gap-6 md:hidden">
//           {steps.map(({ id, title, desc }) => (
//             <Card key={id} id={id} title={title} desc={desc} className="relative mx-auto" />
//           ))}
//         </div>
//       </div>

     
//       <style jsx global>{`
//         @keyframes lineGlow {
//           0%   { transform: translateX(-50%) translateY(0px);   opacity: 1; }
//           100% { transform: translateX(-50%) translateY(-220px); opacity: 0; }
//         }
//       `}</style>
//     </>
//   );
// }


// function Card({ id, title, desc, className = "" }: { id: number; title: string; desc: string; className?: string }) {
//   return (
//     <div className={`w-[260px] h-[160px] text-center ${className}`}>
//       <div className="flip-inner relative w-full h-full [transform-style:preserve-3d] transition duration-500 hover:[transform:rotateY(180deg)] rounded-xl">
        
//         <div className="flip-front absolute w-full h-full backface-hidden bg-[#0b0b0b] border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center ">
//           <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-sm font-bold mb-2">{id}</div>
//           <h3 className="text-sm font-semibold mb-1">{title}</h3>
//           <p className="text-xs text-white/70">{desc}</p>
//         </div>
        
//         <div className="flip-back absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-[#111] border border-white/10 rounded-xl p-4 flex items-center justify-center text-sm text-white text-center">
//           {desc}
//         </div>
//       </div>
//     </div>
//   );
// }