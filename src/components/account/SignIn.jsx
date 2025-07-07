import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full h-[100%] bg-white">
      <div className="flex flex-col max-w-[600px] mx-auto px-20 py-28 gap-10 max-mobile:px-8 max-mobile:py-24 max-mobile:gap-5">
        {/* Header */}
        <div className="flex justify-between items-center-safe">
          <div>
            <h1 className="mb-2 text-[35px] font-[600] text-[#222936]">
              Login
            </h1>
            <p className="text-[13px] font-[600] text-[#595b61]">
              Securely login to your Piggyvest
            </p>
          </div>
          <div className="p-3 h-fit rounded-full bg-[#0d60d8]">
            <IoPersonOutline color="white" size={20} />
          </div>
        </div>

        {/* Email/Phone Input */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email/phone"
            className="text-[13px] font-[600] text-[#666d7c]"
          >
            Email/Phone Number
          </label>
          <input
            type="text"
            name="email/phone"
            id="email/phone"
            placeholder="08123******"
            className="p-4 rounded-2xl bg-[#666d7c3d] text-black placeholder:text-[13px] placeholder:font-bold placeholder-[#999999]"
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-[13px] font-[600] text-[#666d7c]"
          >
            Your Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="******"
            className="p-4 rounded-2xl bg-[#666d7c3d] placeholder:text-[13px] placeholder:font-bold placeholder-[#999999]"
          />
        </div>

        {/* Login Button */}
        <div>
          <button className="w-full p-4 rounded-2xl bg-[#0d60d8] text-white">
            Login
          </button>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Link to="/create-account">
            <p className="text-[15px] font-[600] text-[#0d60d8] cursor-pointer">
              Don't have an account? Register!
            </p>
          </Link>
          <p className="text-[15px] font-[600] text-[#595b61] cursor-pointer">
            Forgot Password? Tap Here!
          </p>
          <Link to="/">
            <p className="text-[15px] font-[600] text-[#0d60d8] cursor-pointer">
              back
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
