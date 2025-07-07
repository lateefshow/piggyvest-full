import React from "react";

const SafelockHero = () => {
  return (
    <div>
      <div
        className="flex justify-between items-center bg-[#2295F2] px-[50px] pt-[160px] max-md:flex-col  
      max-md:gap-y-[50px]"
      >
        <section className="max-w-[34em] max-md:max-w-[100%] max-md:mx-auto  max-md:flex max-md:flex-col max-md:items-center">
          <h1 className="text-white font-bold text-[50px] py-2">Safelock</h1>

          <main className="bg-white max-w-[180px] rounded-[20px] flex justify-center items-center  py-2.5 px-[12px] max-md:w-[70%] ">
            <img src="" alt="" />
            <p className="text-[#2295F2] 9ext-[20px] py-0.5 text-center">
              Fixed Savings
            </p>
          </main>

          <p className="text-white text-[20px] leading-[32px] font-[400] py-4 max-md:text-center ">
            Lock funds away for a fixed period of time to avoid spending
            temptation. Earn up to 20% p.a. paid upfront.
          </p>

          <main className="flex">
            <div>
              <img src="" alt="" />
              <p className="text-white"> Get on iPhone</p>
            </div>

            <div>
              <img src="" alt="" />
              <p className="text-white"> Get on Android</p>
            </div>
          </main>
        </section>

        <section className="w-[500px] max-md:w-[70%] max-md:mx-auto">
          <img src="../../../SL 22 Big.png" alt="" />
        </section>
      </div>
    </div>
  );
};

export default SafelockHero;
