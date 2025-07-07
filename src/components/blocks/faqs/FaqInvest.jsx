import React from "react";
import faqImg from "../../../assets/images/faqImg.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import PiggyBtn from "../../reusable/PiggyBtn";

const FaqInvest = () => {
  return (
    <div className="bg-[#f2f7f8]">
      <div className="flex items-center gap-24 mx-auto max-w-[1200px] pt-[17%] pb-[10%]">
        <div className="w-[450px]">
          <img src={faqImg} alt="faqimg" />
        </div>
        <div>
          <div className="w-[500px] mb-[20px]">
            <h1 className=" text-[35px] font-bold tracking-tighter leading-10">
              Join 5+ million people who save and invest with us
            </h1>
          </div>
          <div className="flex gap-2">
            <PiggyBtn
              title="Get on iPhone"
              iconTitle={<FaApple />}
              borderColor="#000"
              textColor="#0c0e1b"
              bgColor="#f2f7f8"
            />
            <PiggyBtn
              title="Get on Android"
              iconTitle={<BiLogoPlayStore />}
              borderColor="#000"
              textColor="#0c0e1b"
              bgColor="#f2f7f8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqInvest;
