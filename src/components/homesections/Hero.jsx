import React from "react";
import appleIcon from "../../assets/apple (4).png";
import androidIcon from "../../assets/apps.png";
import heroImg from "../../images/woman-smiling.avif";
import piggybank from "../../images/Frame 1020.png";
import safelock from "../../images/Frame 80.png";
import flexNaira from "../../images/Frame 79.png";
import targetSavings from "../../images/Frame 78.png";
import investify from "../../images/Frame 18.png";
import housemoney from "../../images/Frame 82.png";

const Hero = () => (
  <section className="flex flex-wrap items-center justify-between px-8 lg:px-32 pt-40 pb-10 gap-16">
    {/* Left Content */}
    <div className="flex-1 max-w-xl pr-0 lg:pr-24">
      <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-full">
        📊 The 2024 PiggyVest Savings Report
      </button>

      <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-3 leading-tight text-[#122231]">
        The Better Way to Save & Invest
      </h1>

      <p className="text-[#122231] mb-6">
        Piggyvest helps over 5 million customers achieve their financial goals
        by helping them save and invest with ease.
      </p>

      <div className="flex gap-4 flex-wrap">
        {/* iOS Button */}
        <div className="cursor-pointer bg-[#232c35] hover:bg-black text-white rounded-xl px-4 py-3 flex items-center gap-2 mt-3">
          <img src={appleIcon} alt="Apple" className="w-6" />
          <h4>Get on iPhone</h4>
        </div>

        {/* Android Button */}
        <div className="cursor-pointer bg-[#232c35] hover:bg-black text-white rounded-xl px-4 py-3 flex items-center gap-2 mt-3">
          <img src={androidIcon} alt="Android" className="w-6" />
          <h4>Get on Android</h4>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1 relative flex justify-center mt-6 md:mt-0">
      <img
        src={heroImg}
        alt="Woman smiling"
        className="rounded-xl w-full max-w-md"
      />

      {/* Floating cards */}
      <img
        src={safelock}
        alt="Safelock"
        className="card absolute top-[10%] left-[-10%] w-48 shadow-lg rounded-lg p-2 bg-white text-xs"
      />
      <img
        src={flexNaira}
        alt="Flex Naira"
        className="card absolute top-[40%] left-[-10%] w-48 shadow-lg rounded-lg p-2 bg-white text-xs"
      />
      <img
        src={piggybank}
        alt="Piggybank"
        className="card absolute bottom-[10%] left-[-10%] w-48 shadow-lg rounded-lg p-2 bg-white text-xs"
      />
      <img
        src={targetSavings}
        alt="Target Savings"
        className="card absolute top-[10%] right-[-10%] w-48 shadow-lg rounded-lg p-2 bg-white text-xs"
      />
      <img
        src={investify}
        alt="Investify"
        className="card absolute top-[50%] right-[-10%] w-48 shadow-lg rounded-lg p-2 bg-white text-xs"
      />
      <img
        src={housemoney}
        alt="House Money"
        className="card absolute bottom-[-5%] right-[-10%] w-48 shadow-lg rounded-lg p-2 bg-white text-xs"
      />
    </div>
  </section>
);

export default Hero;
