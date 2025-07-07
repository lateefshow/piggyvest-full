import React from "react";
import PiggyBtn from "../../reusable/PiggyBtn";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import Targets from "../../../assets/images/targets.png";
import { BsBullseye } from "react-icons/bs";

const TargetHero = () => {
  return (
    <div className="max-h-[100vh] bg-[#10b259] pt-[100px] overflow-hidden">
      <div className=" flex items-center max-w-[1200px] mx-auto h-full ">
        <div className="flex items-center justify-between w-full mt-[7.5%]">
          <div className="text-white w-[500px]">
            <h1 className="text-[50px] font-semibold tracking-tighter ">
              Target Savings
            </h1>
            <div className="flex items-center w-[220px] h-[40px] bg-[#ffffff] gap-2 rounded-full text-[#0c1825] justify-center mb-[20px]">
              <span>
                <BsBullseye size={15} color="#10b259" />
              </span>
              <span className="font-normal text-emerald-400">
                Goal-oriented Savings
              </span>
            </div>
            <p className="text-[20px] mb-[20px] leading-7">
              Reach all your unique savings goals individually, or as a group.
              Earn up to 12% p.a.
            </p>
            <div className="flex gap-2">
              <PiggyBtn
                title="Get on iPhone"
                iconTitle={<FaApple />}
                bgColor="#000000"
                textColor="#ffffff"
              />
              <PiggyBtn
                title="Get on Android"
                iconTitle={<BiLogoPlayStore />}
                bgColor="#000000"
                textColor="#ffffff"
              />
            </div>
          </div>

          <div className="w-[400px] ">
            <img src={Targets} alt="Targets" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetHero;
