import React from "react";
import target3 from "../../../assets/images/target3.png";

const TargetFun = () => {
  return (
    <div className="bg-[#f2f7f8]">
      <div className="h-[455px] bg-[#10b259]">
        <div className="flex items-center  max-w-[1200px] mx-auto h-full justify-between">
          <div>
            <h1 className="font-semibold text-4xl tracking-tight text-white w-[510px] leading-12 mb-[20px]">
              Saving ‘just because’ is great, but saving for something special
              is a lot of fun.
            </h1>
            <p className="text-1xl text-[#ffff] tracking-tighter w-[350px]">
              Got a savings goal in mind? We’ll help you reach it! Saving for a
              new phone? Check. Dad’s surprise birthday? Check. A new car,
              special vacation? Check and check. Target Savings helps you reach
              all your savings goals easily and faster.
            </p>
          </div>
          <div className="w-[593px] h-full">
            <img src={target3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetFun;
