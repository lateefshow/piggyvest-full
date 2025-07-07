import React from "react";
import target3 from "../../../assets/images/target3.png";

const FlexFun = () => {
  return (
    <div className="bg-[#f2f7f8]">
      <div className="h-[455px] bg-[#0c1825]">
        <div className="flex items-center  max-w-[1200px] mx-auto h-full overflow-hidden justify-between">
          <div>
            <h1 className="font-semibold text-6xl tracking-tighter max-w-[450px] text-white  leading-18 mb-[20px]">
              Preserve the value of your money
            </h1>
            <p className="text-[17px] text-[#ffff] tracking-tighter max-w-[430px]">
              One of the key elements in wealth management is preserving (and
              growing) the value of your savings. In simple terms, this means
              not losing value on your savings. Saving in foreign currencies
              like Dollars helps to hedge against that.
            </p>
          </div>
          <div className="max-w-[593px] h-full items-end">
            <img src={target3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexFun;
