import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="w-full h-[100vh] bg-white">
      <div className="flex flex-col max-w-[600px] mx-auto px-20 py-28 gap-7 max-mobile:px-10 max-mobile:py-24 max-mobile:gap-5">
        {/* Header */}
        <div>
          <h1 className="mb-2 text-[35px] font-[600] text-[#222936] max-mobile:text-[30px]">
            Let's get started
          </h1>
          <p className="text-[13px] font-[600] text-[#595b61]">
            Register to start saving and investing with Piggyvest today!
          </p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col gap-16 max-mobile:gap-10">
          {/* Name Input */}
          <div className="flex flex-col gap-3">
            <label
              htmlFor="name"
              className="text-[13px] font-[600] text-[#666d7c]"
            >
              First & Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="password"
              id="name"
              placeholder="e.g Untitled Dev"
              className="p-4 rounded-2xl bg-[#666d7c0c] placeholder:text-[13px] placeholder:font-bold placeholder-[#999999b6]"
            />
          </div>

          {/* Button */}
          <button className="w-full p-4 rounded-2xl bg-[#0d62d8c8] text-white">
            Create Free Account
          </button>

          {/* Back Link */}
          <Link to="/sign-in">
            <p className="text-center text-[15px] font-[600] text-[#0d60d8] cursor-pointer">
              back
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
