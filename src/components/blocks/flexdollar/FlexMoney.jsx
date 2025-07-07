import React from "react";
import flexmoney1 from "../../../assets/images/flexmoney1.png";
import flexmoney2 from "../../../assets/images/flexmoney2.png";
import flexmoney3 from "../../../assets/images/flexmoney3.png";
const FlexMoney = () => {
  const flexCard = [
    {
      title: "Diversify your savings",
      desc: "Having different types of savings and investments helps you reach your goals faster, and can protect you against risk and volatility.",
      color: "#000000",
      img: `${flexmoney1}`,
    },
    {
      title: "Withdraw anytime",
      desc: "You can withdraw at anytime.",
      color: "#000000",
      img: `${flexmoney2}`,
    },
    {
      title: "Earn interest",
      desc: "Earn up to 7% p/a paid monthly.",
      color: "#000000",
      img: `${flexmoney3}`,
    },
  ];
  return (
    <div className="bg-[#f2f7f8] pt-20 pb-24">
      <div className="  flex flex-col items-center">
        <section className=" text-center">
          <h1 className=" font-bold text-5xl tracking-tight mb-[10px]">
            Preserve and grow your money
          </h1>
          <p className=" text-[16px] text-[#4d5966] tracking-tighter">
            Target Savings helps you get there faster. You can even team up with
            others to reach a collective target.
          </p>
        </section>
        <section className=" flex justify-center max-w-[1200px] flex-wrap  gap-8 mt-[5%]">
          {flexCard?.map((data, i) => (
            <main
              className=" bg-white h-[550px] w-[360px] pt-9 pl-6 pr-10 rounded-2xl flex flex-col justify-between"
              key={i}
            >
              <div>
                <h1
                  style={{ color: `${data.color}` }}
                  className=" font-bold text-3xl w-[250px] mb-[20px]"
                >
                  {data.title}
                </h1>
                <p className="text-[#4d5966] text-[16px]">{data.desc}</p>
              </div>
              <div>
                <img src={data.img} alt="" />
              </div>
            </main>
          ))}
        </section>
      </div>
    </div>
  );
};

export default FlexMoney;
