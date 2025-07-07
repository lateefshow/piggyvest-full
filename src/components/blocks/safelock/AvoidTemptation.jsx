import React from "react";

const AvoidTemptation = () => {
  return (
    <div>
      <div className="flex items-center justify-between pl-[50px] bg-[#2295F2]  max-md:flex-col max-md:pl-0">
        <section className="text-white max-w-[450px] max-md:py-[50px]">
          <h1 className="font-bold text-[51px] leading-[64px] pb-2.5 max-md:text-center max-md:text-[40px]">
            Avoid temptations & lock your money.
          </h1>

          <p className="leading-7 font-[400] text-[16px] max-md:text-center">
            Safelock allows you to set money aside for a fixed period of time
            without having access to it until maturity. It’s like having your
            own custom fixed deposit.
          </p>
        </section>

        <section className="h-[460px] max-w-[600px] max-md:h-auto">
          <img src="../../../imgi_41_image_2baa78cfe9.png" alt="" />
        </section>
      </div>
    </div>
  );
};

export default AvoidTemptation;
