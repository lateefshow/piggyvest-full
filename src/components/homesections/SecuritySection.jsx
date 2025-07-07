import React from "react";
import padlock from "../../assets/padlock.png";

const SecuritySection = () => (
  <section className="flex flex-wrap gap-8 px-8 lg:px-20 py-10 items-center">
    {/* Image Container */}
    <div className="bg-white shadow-md p-8 rounded-2xl text-center">
      <img src={padlock} alt="Padlock" className="w-8 mx-auto" />
    </div>

    {/* Text Content */}
    <div className="flex-1 max-w-xl">
      <h3 className="text-[22px] text-[#232c35] font-semibold mb-4">
        Your security is our priority
      </h3>
      <p className="text-[17px] text-gray-600 leading-relaxed">
        PiggyVest uses the highest level of internet Security and it is secured by 256 bit SSL
        <br />
        security encryption to ensure that your information is completely
        protected from fraud
      </p>
      <h4 className="mt-4 text-lg font-medium text-blue-600 cursor-pointer">
        <span className="inline-blocks mr-2">&#8618;</span> More on our security
        measures
      </h4>
    </div>
  </section>
);

export default SecuritySection;
