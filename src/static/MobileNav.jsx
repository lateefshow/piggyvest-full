import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function MobileNav() {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <div className="w-[100%] flex justify-between items-center p-[20px] fixed bg-white   min-md:hidden">
        <div>
          <img
            className="bg-transparent"
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg"
            alt=""
          />
        </div>

        <div
          onClick={() => {
            setNav(!nav);
          }}
        >
          {nav ? (
            <FaTimes className="w-[50px] h-[50px]" />
          ) : (
            <IoMenu className="w-[50px] h-[50px]" />
          )}
        </div>
      </div>

      <div
        className={
          !nav
            ? "hidden"
            : "w-[100%] h-screen bg-[#f2f7f8]  space-y-[30px] px-[10px]"
        }
      >
        <div className=" flex flex-col items-center pt-[50px]   gap-y-[30px] ">
          <span className="flex items-center gap-x-[2px]">
            Save <MdKeyboardArrowDown />{" "}
          </span>
          <span>Invest</span>
          <span>Stories</span>
          <span>FAQS</span>{" "}
          <span className="flex items-center gap-x-[2px]">
            Resources <MdKeyboardArrowDown />
          </span>
          <span>Shop</span>
        </div>
        <div className="w-[100%]  border space-y-[20px]">
          <button className="w-[100%] p-[10px] rounded-[30px]">Sign In</button>

          <button className="w-[100%] p-[10px] rounded-[30px]">
            create free account
          </button>
        </div>
      </div>
    </div>
  );
}
