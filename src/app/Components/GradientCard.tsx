'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type GradientCardProps = {
  title: string;
  description: string | React.ReactNode; // JSX or string allowed
  image: StaticImageData | string;
  className?: string;
  link?: string; // Optional - if you want to make the entire card clickable
};

export default function GradientCard({
  title,
  description,
  image,
  className = '',
  link,
}: GradientCardProps) {
  const polygon = 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)';

 
  const cardContent = (
    <>
    
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          clipPath: polygon,
          WebkitClipPath: polygon,
          backgroundColor: '#60e16e',
          filter: 'drop-shadow(0 0 2px #254a23) drop-shadow(0 0 4px #254a23)',
          transform: 'scale(1.01)',
        }}
      />

      
      <div
        className="relative z-10 w-full h-full px-10 py-4 overflow-hidden bg-[#030e07] backdrop-blur-sm 
        transition-transform duration-500 hover:rotate-x-3 hover:rotate-y-6 
        hover:shadow-2xl"
        style={{
          clipPath: polygon,
          WebkitClipPath: polygon,
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        
        <div className=" max-w-32 sm:max-w-[140px] mx-auto pt-5 pb-4 px-4">
          <Image
            src={image}
            alt={title}
            height={140}
            width={140}
            className="w-full h-auto hover:translate-z-10 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          />
        </div>

        
        <div className="relative z-20 px-5 pb-6 text-center">
          <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-lg text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </>
  );

  return link ? (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative w-full max-w-sm h-full ${className}`}
    >
      {cardContent}
    </Link>
  ) : (
    <div className={`relative w-full max-w-sm h-full mx-auto ${className}`}>{cardContent}</div>
  );
}
