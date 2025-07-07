import React from "react";

const Build = () => {
  return (
    <div>
      <div className="flex items-center justify-between pl-[50px] bg-[#0D60D8]  max-md:flex-col max-md:p-0 ">
        <section className="text-white max-w-[465px] max-md:w-[100%] max-md:p-[10px] max-md:mx-auto">
          <h1 className="font-bold text-[51px] leading-[64px] pb-2.5 ">
            Build your savings small small!
          </h1>

          <p className="leading-7 font-[400] text-[16px]">
            With Piggybank, you can save periodically, automatically or
            manually. You can also save as you go, on your own terms. You’re the
            boss of your savings, choose how you want to save.
          </p>
        </section>

        <section className="h-[460px] max-w-[600px] max-md:max-w-[100%] max-md:h-auto">
          <img
            className="max-md:w-[100%]"
            src="../../../build image.png"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default Build;
