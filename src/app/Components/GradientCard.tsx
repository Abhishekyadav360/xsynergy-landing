'use client';
import Image, { StaticImageData } from 'next/image';


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
  className={`relative w-full max-w-xs rounded-2xl h-full overflow-hidden border border-[#2d362d] bg-gradient-to-br from-[#0000000a] via-[#00000000] to-green-900 backdrop-blur-sm ${className}`}
 >
      
    
      <div className=" max-w-60  mx-auto pt-5 pb-4 px-4">
        <Image
          src={image}
          alt="Card top background"
         
          className=" w-full h-auto hover:translate-y-[-10px] duration-300 ease-in-out cursor-pointer"
        />
      </div>     
      <div className="relative z-20 px-5  pb-6 text-center ">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-lg text-gray-400">{description}</p>
      </div>
    </div>
  );
}
