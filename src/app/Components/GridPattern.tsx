// components/GridPattern.tsx
import React from "react";

const GridPattern = ({
  size = 40,
  stroke = "rgba(255, 255, 255, 0.06)",
  className = "",
}: {
  size?: number;
  stroke?: string;
  className?: string;
}) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="smallGrid"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke={stroke} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#smallGrid)" />
    </svg>
  );
};

export default GridPattern;
