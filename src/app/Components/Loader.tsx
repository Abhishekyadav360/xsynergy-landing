import Image from "next/image";
import logo from "@/Assets/images/favicon1.webp";

export const Loader = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen w-full bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center ${className}`}
    >
     
      <div className="relative w-[120px] h-[120px] flex justify-center items-center">
        
        <Image
          src={logo}
          alt="Loading Logo"
          width={45}
          height={45}
          className="absolute z-10"
        />

      
        <div className="absolute w-full h-full animate-spin-slow">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="absolute w-full h-full animate-orbit opacity-[calc(1-(0.2*var(--index)))]"
              style={{ "--index": index } as React.CSSProperties}
            >
              <div className="absolute top-0 left-1/2 w-[10px] h-[10px] bg-[#3AE374] shadow-[0px_0px_20px_2px_#3AE374] rounded-full transform -translate-x-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
