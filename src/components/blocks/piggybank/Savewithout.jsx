import React from "react";

const Savewithout = () => {
  return (
    <div>
      <div className="px-[50px]  pb-[100px] bg-[#F2F7F8]">
        <section className="text-center py-[100px]">
          <h1 className="font-bold text-[55px] text-[#122231]">
            Save without thinking about it.
          </h1>
          <p className="text-[#3D4F60]">
            Enjoy automated savings, quick manual savings top up and competitive
            interest rates.
          </p>
        </section>

        <section className="flex gap-[50px] max-md:flex-col ">
          <main
            className="flex flex-col items-center w-[340px] pt-[30px]  px-[30px]  bg-white rounded-[15px] max-md:w-[90%] max-md:mx-auto
          max-md:pb-[100px]"
          >
            <div>
              <h1 className="text-[#0D60D8] font-bold text-[36px] leading-10 pb-5">
                Save automatically
              </h1>
              <p>
                Choose between automatic daily, weekly or monthly savings. Once
                you choose, our system does the rest for you. You’re in control,
                and can always change your settings anytime.
              </p>
            </div>

            <div>
              <img
                src="../../../piggy-1.png"
                alt=""
                className="max-w-[320px]  pt-[30px] max-md:w-[100%]"
              />
            </div>
          </main>

          <main className="flex flex-col justify-between items-center bg-white w-[420px] pt-[30px]  px-[30px]  rounded-[15px]  max-md:w-[90%] max-md:mx-auto">
            <div>
              <h1 className="text-[#0D60D8] font-bold text-[36px] leading-10 pb-5">
                Save on the go
              </h1>
              <p>
                Don’t fancy automatic savings? No problem, you can manually top
                up your Piggybank savings at anytime, anywhere.
              </p>
            </div>

            <div>
              <img
                src="../../../pigy-2.png"
                alt=""
                className="max-w-[390px] h-[225px] "
              />
            </div>
          </main>

          <main className="flex flex-col justify-between items-center gap-[80px] bg-white  w-[420px] pt-[30px]  px-[30px]  rounded-[15px] max-md:w-[90%] max-md:mx-auto">
            <div>
              <h1 className="text-[#0D60D8] font-bold text-[36px] leading-10 pb-5">
                Build discipline
              </h1>
              <p className="text-[#3D4F60] pb-3">
                With four free withdrawal days in the year, you are less tempted
                to spend your savings and meet your savings goals faster.
              </p>
            </div>

            <div>
              <img
                src="../../../piggy-3.png"
                alt=""
                className="max-w-[300px]  h-[250px]"
              />
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Savewithout;
