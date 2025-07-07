import React from "react";
import fallbackImg from "../../assets/fallbackImg.png";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import appleLogo from "../../assets/apple-logo.png";
import androidIcon from "../../assets/apps.png";

const Reviews = () => (
  <section className="flex flex-wrap px-6 lg:px-20 items-center justify-center gap-10 py-10">
    {/* Image Side */}
    <div>
      <img src={fallbackImg} alt="Reviews background" className="w-[500px]" />
    </div>

    {/* Text Side */}
    <div className="my-24 space-y-6">
      {/* Avatars */}
      <div className="flex gap-3 items-center">
        <img src={img1} alt="" className="w-[60px] h-[60px] rounded-full" />
        <img src={img2} alt="" className="w-[60px] h-[60px] rounded-full" />
        <img src={img3} alt="" className="w-[60px] h-[60px] rounded-full" />
        <img src={img4} alt="" className="w-[60px] h-[60px] rounded-full" />
        <div className="w-[60px] h-[60px] rounded-full bg-white text-[#232c35] flex items-center justify-center shadow-md font-semibold">
          5m+
        </div>
      </div>

      {/* Heading */}
      <div className="mt-6">
        <h2 className="text-[28px] lg:text-[32px] text-[#232c35] leading-relaxed font-semibold">
          Join 5+ million people who save <br /> and invest with us
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-[10px] text-[#232c35] font-bold text-[15px] cursor-pointer">
          <img src={appleLogo} alt="Apple" className="w-[30px]" />
          <p>Get on iPhone</p>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-[10px] text-[#232c35] font-bold text-[15px] cursor-pointer">
          <img src={androidIcon} alt="Android" className="w-[30px]" />
          <p>Get on Android</p>
        </div>
      </div>
    </div>
  </section>
);

export default Reviews;
