// "use client";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useRef, useEffect } from "react";

// const cards = [
//   { text: "Download the Swag app today." },
//   { text: "Set up your Swag Spend Account and instantly set up your digital Visa Debit card." },
//   { text: "Start spending with your virtual card instantly." },
// ];

// const Why = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const springScroll = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     mass: 1,
//   });

//   // Debug scroll value
//   useEffect(() => {
//     const unsub = scrollYProgress.onChange((v) =>
//       console.log("Scroll progress:", v.toFixed(2))
//     );
//     return () => unsub();
//   }, [scrollYProgress]);

//   return (
//     <div className="min-h-[250vh] bg-[#f6f1fc] flex justify-center relative">
//       <div
//         ref={containerRef}
//         className="sticky top-32 h-[500px] flex flex-col items-center justify-center w-full"
//       >
//         <h1 className="text-6xl font-bold text-purple-900 mb-12">Why</h1>

//         <div className="relative h-[300px] w-[300px]">
//           {cards.map((card, index) => {
//             const y = useTransform(
//               springScroll,
//               [0, 1],
//               [index * 40, -200 + index * 40]
//             );

//             return (
//               <motion.div
//                 key={index}
//                 style={{ y, zIndex: cards.length - index }}
//                 className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-3xl shadow-xl p-6 flex items-center justify-center text-center text-lg"
//               >
//                 {card.text}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Why;
