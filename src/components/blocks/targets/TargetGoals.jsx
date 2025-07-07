import React from "react";
import target1 from "../../../assets/images/target1.png";
import target2 from "../../../assets/images/target2.png";

const TargetGoals = () => {
  const piggyCard = [
    {
      title: "Your target(s), your rules",
      desc: "Customise the rules and duration of your target savings as you wish. From public mode, automated savings, to multiple targets, you’re in control.",
      color: "#10b259",
      img: `${target2}`,
    },
    {
      title: "Save with a group",
      desc: "Challenge yourself to meet your goals by saving towards a common goal with a group. No one has access to your funds but you.",
      color: "#10b259",
      img: `${target1}`,
    },
    {
      title: "Daily interest accrued",
      desc: "Earn 12% per annum to help you reach your goal faster. Think of it as a reward for meeting your target.",
      color: "#10b259",
    },
  ];
  return (
    <div className="bg-[#f2f7f8] pt-20 pb-24">
      <div className="  flex flex-col items-center">
        <section className=" text-center">
          <h1 className=" font-bold text-5xl tracking-tighter">
            Save towards multiple goals
          </h1>
          <p className=" text-1xl text-[#4d5966] tracking-tighter">
            Target Savings helps you get there faster. You can even team up with
            others to reach a collective target.
          </p>
        </section>
        <section className=" flex justify-center max-w-[1200px] flex-wrap  gap-8 mt-[5%]">
          {piggyCard?.map((data, i) => (
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
                <p className="text-[#4d5966] text-[15px]">{data.desc}</p>
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

export default TargetGoals;
