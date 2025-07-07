import React from "react";
import investImg from "../../assets/investments.avif";

const InvestmentSection = () => (
  <section className="px-8 lg:px-20">
    {/* Heading Text */}
    <div className="text-center my-20 text-[#232c35]">
      <h1 className="text-[40px] lg:text-[50px] leading-snug font-bold">
        Diverse ways to Invest
      </h1>
      <p className="text-[20px] lg:text-[23px] mt-4">
        Grow your money and invest for your future confidently.
      </p>
    </div>

    {/* Investment Container */}
    <div className="bg-violet-700 rounded-[30px] px-6 lg:px-[75px] py-10">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-end gap-10">
        {/* Text Section */}
        <div className="pt-8 text-white">
          <h1 className="text-[32px] lg:text-[40px] font-semibold">
            Earn Up to 35% returns
          </h1>
          <p className="text-[18px] lg:text-[20px] mt-6 leading-relaxed">
            Invest securely and confidently,
            <br />
            on the go. Grow your money
            <br />
            confidently by investing in pre-vetted,
            <br />
            investment opportunities.
          </p>
        </div>

        {/* Image Section */}
        <div className="text-white flex flex-col items-end">
          <h3 className="pb-12 text-right text-[16px] lg:text-[18px] font-medium">
            <span>&#8618;</span> Learn about Investments
          </h3>
          <img
            src={investImg}
            alt="Investments"
            className="w-[300px] lg:w-[400px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default InvestmentSection;
