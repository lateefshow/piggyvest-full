import React from "react";
import { Link } from "react-router-dom";
import piggybankImg from "../../assets/Piggybank.png";
import safelockImg from "../../assets/safelock.png";
import targetSavingsImg from "../../assets/target-savings.avif";
import flexNairaImg from "../../assets/flex naira.avif";
import flexDollarImg from "../../assets/flex dollar.avif";
import houseMoneyImg from "../../assets/house money.png";

const Card = ({ title, description, label, image, bgClass, textClass }) => (
  <div
    className={`group transition-all duration-300 cursor-pointer bg-white rounded-[20px] shadow-md p-10 h-[454px] ${bgClass}`}
  >
    <div>
      <h2
        className={`text-[40px] font-semibold mb-4 group-hover:text-white ${textClass}`}
      >
        {title}
      </h2>
      <p className="text-[18px] text-[#232c35] mt-2 group-hover:text-white">
        {description}
      </p>
    </div>
    <div className="flex items-end gap-12 mt-10">
      <Link to={`/${label.toLowerCase()}`}>
        <h3 className={`pb-14 font-medium group-hover:text-white ${textClass}`}>
          <span>&#8618;</span> {label}
        </h3>
      </Link>
      <img
        src={image}
        alt={label}
        className="w-[260px] opacity-0 group-hover:opacity-100 transition duration-300 -top-5 relative group-hover:scale-105"
      />
    </div>
  </div>
);
  

const SavingsCards = () => (
  <section className="px-8 lg:px-20 mt-32">
    <div className="text-center mb-16">
      <h1 className="text-[50px] text-[#232c35] font-bold">
        Many ways to build your savings
      </h1>
      <p className="text-[25px] text-[#232c35] leading-loose">
        Earn 12%-22% when you save with any of these PiggyVest plans.
      </p>
    </div>

    {/* Responsive Grid */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
      <Card
        title="Automated Savings"
        description="Build a dedicated savings faster on your terms, automatically or manually."
        label="Piggybank"
        image={piggybankImg}
        bgClass="hover:bg-blue-900"
        textClass="text-blue-900"
      />

      <Card
        title="Fixed Savings"
        description="Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit."
        label="Safelock"
        image={safelockImg}
        bgClass="hover:bg-blue-500"
        textClass="text-blue-500"
      />
      <Card
        title="Goal-oriented Savings"
        description="Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
        label="TargetSavings"
        image={targetSavingsImg}
        bgClass="hover:bg-green-700"
        textClass="text-green-700"
      />
      <Card
        title="Flex Naira"
        description="Save, transfer, manage, organise, and withdraw your money at any time."
        label="FlexNaira"
        image={flexNairaImg}
        bgClass="hover:bg-pink-500"
        textClass="text-pink-500"
      />
      <Card
        title="Flex Dollar"
        description="Save and grow your money in foreign currencies such as Dollars."
        label="FlexDollar"
        image={flexDollarImg}
        bgClass="hover:bg-black"
        textClass="text-black"
      />
      <Card
        title="HouseMoney"
        description="Plan for your rent and household expenses."
        label="HouseMoney"
        image={houseMoneyImg}
        bgClass="hover:bg-orange-600"
        textClass="text-orange-600"
      />
    </div>
  </section>
);

export default SavingsCards;
