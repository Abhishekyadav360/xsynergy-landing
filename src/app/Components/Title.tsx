import React from "react";

const Title = ({ title, highlightedText, subtitle = "", className = "" }) => {
  return (
    <div className={`titlebox relative ${className}`}>
      <h2 className="text-4xl md:text-6xl font-bold leading-[0.8] text-span-gradient ">
        <span className="block ">{title}</span>
        {highlightedText}
      </h2>
      {subtitle && <p className="text-lg md:text-xl text-gray-400 mt-2 ">{subtitle}</p>}

    </div>
  );
};

export default Title;

