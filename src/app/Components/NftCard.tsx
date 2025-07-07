"use client";

import React from "react";

const NftCard = ({  mediaWebm, title }) => {
  return (
    <div className="swiper-bg rounded-2xl h-full flex justify-center items-center">
      <div className="p-2 swiper-bgg bg-[#32422b57] rounded-[30px] nft-card" tabIndex={-1}>
        <div className="bg-dark rounded-3xl ">
          <div className="text-center">
            <video autoPlay loop muted playsInline className="mx-auto rounded-lg w-full h-auto">
              {mediaWebm && <source src={mediaWebm} type="video/webm" />}
              
              Your browser does not support the video tag.
            </video>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
