import React from "react";

const SafelockTwo = () => {
  return (
    <div>
      <div className="px-[50px]  pb-[100px] bg-[#F2F7F8]">
        <section className="text-center py-[100px]">
          <h1 className="font-bold text-[55px] text-[#122231] max-md:text-[35px]">
            Stay disciplined and avoid temptation.
          </h1>
          <p className="text-[#3D4F60]">
            Lock funds to avoid temptations. Earn your interest upfront and paid
            instantly.
          </p>
        </section>

        <section className="flex gap-[50px] max-md:flex-col ">
          <main
            className="flex flex-col items-center w-[340px] pt-[30px]  px-[30px]  bg-white rounded-[15px] justify-between
           max-md:gap-y-[80px]  max-md:w-[90%] max-md:mx-auto"
          >
            <div>
              <h1 className="text-[#2295F2] font-bold text-[36px] leading-10 pb-5">
                You’re in control
              </h1>
              <p>
                You can lock for as little as 10 days or as much as 365 days.
              </p>
            </div>

            <div>
              <img
                src="../../../safelock-1.png"
                alt=""
                className="max-w-[470px] h-[270px]"
              />
            </div>
          </main>

          <main
            className="flex flex-col justify-between items-center bg-white w-[420px] pt-[30px]  px-[30px]  rounded-[15px]  
          max-md:w-[90%] max-md:mx-auto   max-md:gap-y-[80px]"
          >
            <div>
              <h1 className="text-[#2295F2] font-bold text-[36px] leading-10 pb-5">
                Save on the go
              </h1>
              <p>
                Don’t fancy automatic savings? No problem, you can manually top
                up your Piggybank savings at anytime, anywhere.
              </p>
            </div>

            <div>
              <img
                src="../../../Frame2 safelock.png"
                alt=""
                className="max-w-[390px] h-[225px] "
              />
            </div>
          </main>

          <main
            className="flex flex-col justify-between items-center gap-[80px] bg-white  w-[420px] pt-[30px]  px-[30px]  rounded-[15px] 
           max-md:w-[90%] max-md:mx-auto "
          >
            <div>
              <h1 className="text-[#2295F2] font-bold text-[36px] leading-10 pb-5">
                Earn interest upfront
              </h1>
              <p className="text-[#3D4F60] pb-3">Earn interest upfront</p>
            </div>

            <div>
              <img
                src="../../../interest safelock.png"
                alt=""
                className="max-w-[400px]  h-[450px] pb-[10px]"
              />
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default SafelockTwo;
