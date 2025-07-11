'use client';
import Image, { StaticImageData } from 'next/image';
// import { ReactNode } from 'react';

type GradientCardProps = {
  title: string;
  description: string;

  image: StaticImageData | string;
  className?: string; 
};

export default function GradientCard({
  title,
  description,

  image,
  className = '',
}: GradientCardProps) {
  return (
    <div
  className={`relative w-full max-w-xs rounded-2xl overflow-hidden border border-[#2d362d] bg-gradient-to-br from-[#0000000a] via-[#00000000] to-green-900 backdrop-blur-sm ${className}`}
//       style={{
//   background:
//     'linear-gradient(144deg, rgba(50,205,120,0.12) 0%, rgb(0,0,0) 100%)',
//   borderColor: 'rgba(255,255,255,0.08)',
//   borderWidth: 1,
// }}
    >
      
    
      <div className=" max-w-60  mx-auto pt-5 pb-4 px-4">
        <Image
          src={image}
          alt="Card top background"
         
          className=" w-full h-auto "
        />
      </div>

    
      {/* <div
        className="absolute top-[11.5rem] left-1/2 -translate-x-1/2 w-full h-[183px] z-10 pointer-events-none"
        // style={{
        //   backdropFilter: 'blur(8px)',
        //   WebkitBackdropFilter: 'blur(8px)',
        //   opacity: 0.5,
        // }}
      >
        <div
          className="w-[810px] h-[159px] absolute top-8 left-[-245px]"
          style={{
            backgroundImage: `url("/textbg.svg")`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </div> */}

     
      {/* <div className="absolute top-[11.5rem] left-1/2 -translate-x-1/2 z-0">
        <div className="w-16 h-16 rounded-full border-2 border-[#ffffff4d] bg-gradient-to-b from-[#4ADE80] to-[#22C55E] shadow-[0_0_30px_rgba(34,197,94,0.5)] flex items-center justify-center">
          {icon}
        </div>
      </div> */}

     
      <div className="relative z-20 px-5  pb-6 text-center ">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-lg text-gray-400">{description}</p>
      </div>
    </div>
  );
}
