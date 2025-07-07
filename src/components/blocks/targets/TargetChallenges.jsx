import React from "react";
import targetHouse from "../../../assets/images/targetHouse.png";
import targetChall from "../../../assets/images/targetChall.png";
import targetTravel from "../../../assets/images/targetTravel.png";
import targetBusiness from "../../../assets/images/targetBusiness.png";
import targetPeople from "../../../assets/images/targetPeople.png";

const TargetChallenges = () => {
  const targetCards = [
    {
      title: "House Rent",
      member: "1",
      cash: "#300k",
      daysLeft: "330",
      img: `${targetHouse}`,
    },
    {
      title: "DECEMBER SAVINGS",
      member: "3",
      cash: "#250k",
      daysLeft: "176",
      img: `${targetBusiness}`,
    },
    {
      title: "fyb week",
      member: "3",
      cash: "#100k",
      daysLeft: "269",
      img: `${targetPeople}`,
    },
    {
      title: "Hardcore savings",
      member: "6",
      cash: "#1000k",
      daysLeft: "179",
      img: `${targetChall}`,
    },
    {
      title: "Atitebi house upgrade",
      member: "3",
      cash: "#10k",
      daysLeft: "158",
      img: `${targetHouse}`,
    },
    {
      title: "December CashOut",
      member: "6",
      cash: "#1000k",
      daysLeft: "156",
      img: `${targetTravel}`,
    },
  ];

  return (
    <div className="max-h-[1700px] bg-[#f2f7f8] ">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center mt-[7%] w-full">
          <h1 className="font-bold text-[55px] tracking-normal">
            Recent Public Saving Challenges
          </h1>
          <div className="flex flex-wrap gap-[3rem] items-center justify-center mt-[6%]">
            {targetCards.map((data, i) => (
              <div
                className="h-[350px] w-[365px] rounded-[20px] overflow-hidden flex flex-col justify-between shadow-md shadow-gray-400"
                key={i}
              >
                <div className="max-h-[110px] ">
                  <img src={data.img} alt="" className="h-full w-full flex-1" />
                </div>
                <div className="flex flex-col p-[30px] flex-2/3">
                  <h1 className="mb-[20px] font-semibold text-[22px] mt-[20px]">
                    {data.title}
                  </h1>
                  <div className="flex gap-5 mb-[30px]">
                    <div>
                      <div>{data.member}</div>
                      <div>members</div>
                    </div>
                    <div>
                      <div>{data.cash}</div>
                      <div>per member</div>
                    </div>
                    <div>
                      <div>{data.daysLeft}</div>
                      <div>days left</div>
                    </div>
                  </div>
                  <div>
                    <span>0%</span>
                    <div className="w-full h-2.5  rounded-full bg-[#cfd1d2] overflow-hidden">
                      <hr className="w-[2%] h-full bg-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetChallenges;
