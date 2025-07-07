import React from "react";
import housemoney from "../../../assets/images/housemoney.png";
import PiggyBtn from "../../reusable/PiggyBtn";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple, FaHome } from "react-icons/fa";

const HouseHero = () => {
  return (
    <div className="max-h-[100vh] bg-[#0c0e1b] pt-[100px] overflow-hidden">
      <div className=" flex items-center max-w-[1200px] mx-auto h-full ">
        <div className="flex items-center justify-between w-full mt-[7.5%]">
          <div className="text-white w-[500px]">
            <h1 className="text-[50px] font-semibold tracking-tighter ">
              House Money
            </h1>
            <div className="flex items-center w-[180px] h-[40px] bg-[#ffffff] gap-2 rounded-full text-[#0c0e1b] justify-center mb-[20px]">
              <span>
                <FaHome size={10} color="hotpink" />
              </span>
              <span className="font-normal">Semi Strict Wallet</span>
            </div>
            <p className="text-[20px] mb-[20px] leading-7">
              Semi-strict wallet to save for your house rent and bills. Earn up
              to 14% interest p.a
            </p>
            <div className="flex gap-2">
              <PiggyBtn
                title="Get on iPhone"
                iconTitle={<FaApple />}
                bgColor="#ffffff"
                textColor="#0c0e1b"
              />
              <PiggyBtn
                title="Get on Android"
                iconTitle={<BiLogoPlayStore />}
                bgColor="#ffffff"
                textColor="#0c0e1b"
              />
            </div>
          </div>

          <div className="w-[400px]  ">
            <img src={housemoney} alt="housemoney" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseHero;
