import React from "react";
import logo from "../assets/piggyvest logo.svg";
import comp from "../assets/piggy compliance.avif";
import face from "../assets/facebook-app-symbol.png";
import insta from "../assets/instagram (2).png";
import x from "../assets/twitter (3).png";
import tik from "../assets/tik-tok.png";
import you from "../assets/youtube.png";

const Footer = () => {
  return (
    <>
      <section className="flex justify-between py-[100px] px-[50px] max-md:flex-wrap max-md:gap-y-[50px]">
        <main className="max-w-[155px] max-md:max-w-[100%]">
          <img src={logo} alt="PiggyVest Logo" className="my-3" />
          <img src={comp} alt="Compliance" className="max-md:w-[200px]" />
        </main>

        <div className="flex gap-[60px] max-md:flex-wrap max-md:w-[100%]">
          <main className="max-md:w-[40%]">
            <p className="text-[#122231]">Products</p>
            <ul className="text-[#818C97] flex flex-col gap-2.5">
              <li className="hover:text-[#0859AE]">
                <a href="">Piggybank</a>
              </li>
              <li className="hover:text-[#0859AE]">
                <a href="">Invest</a>
              </li>
              <li className="hover:text-[#0859AE]">
                <a href="">Safelock</a>
              </li>
              <li className="hover:text-[#0859AE]">
                <a href="">Target Savings</a>
              </li>
              <li className="hover:text-[#0859AE]">
                <a href="">Flex Naira</a>
              </li>
              <li className="hover:text-[#0859AE]">
                <a href="">Flex Dollar</a>
              </li>
            </ul>
          </main>

          <main className="max-md:w-[40%]">
            <p className="text-[#122231]">Company</p>
            <ul className="text-[#818C97] flex flex-col gap-2.5">
              <li className="hover:text-[#0859AE]">
                <a href="">About</a>
              </li>
              <li className="hover:text-[#0859AE]">
                <a href="">FAQs</a>
              </li>
              <li className="hover:text-[#0859AE]">
                <a href="">Blog</a>
              </li>
            </ul>
          </main>

          <main>
            <p className="text-[#122231]">Legal</p>
            <ul className="text-[#818C97] flex flex-col gap-2.5">
              <li className="hover:text-[#0859AE]">
                <a href="">Terms</a>
              </li>
              <li className="hover:text-[#0859AE]">
                <a href="">Privacy</a>
              </li>
              <li className="hover:text-[#0859AE]">
                <a href="">Security</a>
              </li>
            </ul>
          </main>
        </div>

        <section className="w-[350px] flex flex-col text-[#818C97]">
          <div className="flex gap-[10px] pb-4 justify-end max-md:justify-start">
            <img
              src={face}
              alt="Facebook"
              className="hover:-translate-y-[3px] transition w-[25px] h-[25px]"
            />
            <img
              src={insta}
              alt="Instagram"
              className="hover:-translate-y-[2px] transition w-[25px] h-[25px]"
            />
            <img
              src={x}
              alt="Twitter"
              className="hover:-translate-y-[2px] transition w-[25px] h-[25px]"
            />
            <img
              src={tik}
              alt="TikTok"
              className="hover:-translate-y-[2px] transition w-[25px] h-[25px]"
            />
            <img
              src={you}
              alt="YouTube"
              className="hover:-translate-y-[2px] transition w-[25px] h-[25px]"
            />
          </div>

          <main className="text-[14px] flex flex-col gap-2.5 text-right max-md:text-start">
            <p>
              Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
              Nigeria.
            </p>
            <p className="hover:text-[#0859AE] cursor-pointer">
              contact@piggyvest.com
            </p>
            <p className="hover:text-[#0859AE] cursor-pointer">
              +234 700 933 9339
            </p>
          </main>
        </section>
      </section>

      <main className="py-[50px] border-t border-gray-300 mx-[50px] max-md:w-[90%] max-md:mx-auto">
        <p className="w-[66em] text-[12px] text-[#818C97] max-md:w-[100%]">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 9 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>

        <p className="text-[12px] my-2.5 text-[#0859AE] pt-[30px] pb-[50px]">
          2016 - 2025 PiggyTech Global Limited - RC 1405222
        </p>
      </main>
    </>
  );
};

export default Footer;
