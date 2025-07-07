import React from "react";
import FlexDollar from "../../../assets/images/flexdollar.png";
import PiggyBtn from "../../reusable/PiggyBtn";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple, FaDollarSign } from "react-icons/fa";

const FlexHero = () => {
  return (
    <div className="max-h-[100vh] bg-[#0c1825] pt-[100px] overflow-hidden">
      <div className=" flex items-center max-w-[1200px] mx-auto h-full ">
        <div className="flex items-center justify-between w-full mt-[7.5%]">
          <div className="text-white w-[500px]">
            <h1 className="text-[50px] font-semibold tracking-tighter ">
              Flex Dollar
            </h1>
            <div className="flex items-center w-[150px] h-[40px] bg-[#ffffff] gap-1 rounded-full text-[#0c1825] justify-center mb-[20px]">
              <span>
                <FaDollarSign size={25} />
              </span>
              <span className="font-normal">Dollar Savings</span>
            </div>
            <p className="text-[20px] mb-[20px] leading-7">
              Save and grow your money in foreign currencies such as Dollars.
            </p>
            <div className="flex gap-2">
              <PiggyBtn
                title="Get on iPhone"
                iconTitle={<FaApple />}
                bgColor="#ffffff"
                textColor="#0c1825"
              />
              <PiggyBtn
                title="Get on Android"
                iconTitle={<BiLogoPlayStore />}
                bgColor="#ffffff"
                textColor="#0c1825"
              />
            </div>
          </div>

          <div className="w-[400px] ">
            <img src={FlexDollar} alt="flexDollar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexHero;
