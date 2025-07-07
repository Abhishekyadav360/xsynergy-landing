
'use client'
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import staricon from "@/Assets/images/star.svg";

const Marque = () => {
  const [forexData, setForexData] = useState([]);

  useEffect(() => {
    const fetchForexData = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = await response.json();
        const currencyPairs = ["EUR", "GBP", "JPY", "AUD", "CAD", "CHF"];

        const formattedData = currencyPairs.map((pair) => ({
          pair: `USD/${pair}`,
          rate: data.rates[pair]?.toFixed(4),
        }));

        setForexData(formattedData);
      } catch (error) {
        console.error("Error fetching forex data:", error);
      }
    };

    fetchForexData();
    const interval = setInterval(fetchForexData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="marqueebox backdrop-blur-lg z-10 text-white text-xl font-normal uppercase h-14 relative">
      <Marquee
        direction={"left"}
        className="marqueetop p-3 border-y border-[#67626b] z-10 origin-center !absolute top-0 left-0 bg-black bg-opacity-70 backdrop-blur-md"
      >
        {forexData.length > 0 ? (
          forexData.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-5 mx-2.5">
              <span>{item.pair}: {item.rate}</span>
              <Image className="w-auto h-5" src={staricon} width={50} height={50} alt="slider icon" />
            </div>
          ))
        ) : (
          <span>Loading forex data...</span>
        )}
      </Marquee>
    </section>
  );
};

export default Marque;
