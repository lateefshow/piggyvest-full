import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Statement of Account",
      answer: (
        <>
          <h2 className="text-lg font-semibold mb-2">
            Can I Get a Piggyvest Statement of Account?
          </h2>
          <p className="mb-4">Yes, you can!</p>

          <p className="mb-4 text-sm text-gray-600">
            <strong>Note:</strong> This can be used as proof of funds.
          </p>

          <h2 className="text-lg font-semibold mb-2">
            How can I get a Piggyvest Statement of Account?
          </h2>
          <p className="mb-4">
            To get your Piggyvest statement of account, please log into your
            Piggyvest app and click on <strong>'Account'</strong>, select{" "}
            <strong>'Generate Account Statement'</strong> and follow the prompt.
          </p>
          <p className="mb-4">
            You can also send an email to{" "}
            <a
              href="mailto:contact@piggyvest.com"
              className="text-blue-600 underline"
            >
              contact@piggyvest.com
            </a>
            stating your registered email address and the preferred duration of
            your statement of account.
          </p>
          <p className="mb-4">
            A well-detailed, signed, and stamped statement of account will be
            automatically generated from the app within minutes.
          </p>
          <p className="mb-4 text-sm text-gray-600">
            <strong>Note:</strong> This will have your preferred start date till
            the exact date you initiated the request.
          </p>

          <h2 className="text-lg font-semibold mb-2">
            Are there any charges when requesting for a statement of account?
          </h2>
          <p className="mb-1">
            No! It's completely <strong>FREE</strong>.
          </p>
          <p>There are no charges on softcopies of a statement of account.</p>
        </>
      ),
    },

    {
      question: "HouseMoney",
      answer: (
        <>
          <div className="space-y-6">
            <div>
              <h5 className="text-md font-semibold mb-1">
                What is House Money?
              </h5>
              <p>
                This is a <strong>Semi-strict wallet</strong> that helps you
                save for your rent, with access to withdraw at your scheduled
                maturity date (Anytime in the Maturity Month).
              </p>
            </div>

            <div>
              <h5 className="text-md font-semibold mb-1">
                How To Create Your HouseMoney?
              </h5>
              <p>
                To create your House Money, log into your Piggyvest account,
                click on <strong>Savings</strong>, and select{" "}
                <strong>House Money</strong>. Click on{" "}
                <em>'What is your rent'</em>, input your preferred amount and
                rent due date, then complete the prompts to create your own
                House Money.
              </p>
            </div>

            <div>
              <h5 className="text-md font-semibold mb-1">
                How Can You Fund Your HouseMoney?
              </h5>
              <p>
                To fund your House Money wallet, log into your Piggyvest app,
                click on <strong>Savings</strong>, select{" "}
                <strong>HouseMoney</strong>, and copy your account number shown
                on the HouseMoney dashboard.
              </p>
              <p>
                Go to your banking app, initiate a transfer, and credit the
                copied account number with your preferred amount.
              </p>
              <p className="text-sm font-medium text-red-600">
                NOTE: You can also top up your HouseMoney from your Flex Naira
                and Pocket Wallet.
              </p>
            </div>

            <div>
              <h5 className="text-md font-semibold mb-1">
                Do I Earn Interest?
              </h5>
              <p>Yes, you do!</p>
              <p>
                You earn an interest of <strong>14% per annum</strong> on your
                funds in this wallet.
              </p>
              <p>
                <strong>Note:</strong> Interest is paid on the 1st day of every
                new month. If you withdraw before the 1st, you’ll lose that
                month’s interest.
              </p>
            </div>
          </div>
        </>
      ),
    },
    
      {
        question: "Safelock Dollar",
        answer: (
          <>
            <h5 className="text-md font-semibold mb-1">What is SafeLock Dollar?</h5>
            <p>
              SafeLock Dollar is a fixed savings option in USD, allowing you to earn competitive returns in foreign currency by locking your funds for a chosen period.
            </p>
          </>
        ),
      },
      {
        question: "Next of Kin",
        answer: (
          <>
            <h5 className="text-md font-semibold mb-2">Who is a Next of Kin?</h5>
            <p>
              Your Next of Kin is the person you designated to manage your funds in the event of your passing. This could be a family member or a trusted individual.
            </p>
    
            <h5 className="text-md font-semibold mb-2 mt-4">Can I update the Next of Kin Information on my account?</h5>
            <p>
              Yes, you can! Log into your account &gt; Click on Account &gt; Account Settings &gt; Next of Kin &gt; Input the details &gt; Update Next of Kin.
            </p>
    
            <h5 className="text-md font-semibold mb-2 mt-4">
              How can a Next of Kin access funds in a deceased user's account?
            </h5>
            <p>
              Send an email to <a className="text-blue-600 underline" href="mailto:finance@piggyvest.com">finance@piggyvest.com</a> with your inquiry/request.
            </p>
    
            <h5 className="text-md font-semibold mb-2 mt-4">
              What documents are required to access a deceased user's account?
            </h5>
            <p>If no will:</p>
            <ul className="list-disc ml-5">
              <li>Death certificate</li>
              <li>Letter of administration issued by a court</li>
            </ul>
            <p>If there's a valid will:</p>
            <ul className="list-disc ml-5">
              <li>Grant of probate</li>
              <li>Valid government-issued ID</li>
              <li>Clear selfie holding the ID</li>
              <li>Proof of address (e.g., utility bill)</li>
            </ul>
          </>
        ),
      },
    
    
    {
      question: "Accountability Partner",
      answer:
        "An Accountability Partner is someone you trust, like a family member, friend, or financial advisor, who helps you stay committed to your financial goals.They’ll receive gentle alerts when you take certain actions on your PiggyVest account, such as:Breaking a savings target early. Missing regular savings commitments. Making frequent withdrawals. Disabling automatic savings. Breaking savings streaks",
    },
    {
      question: "What is PiggyVest",
      answer:
        "PiggyVest helps you save and invest with ease. With PiggyVest, you can stop spending excessively and put away (and grow!) funds that you do not want to touch.",
    },
    {
      question: "Safety & Security",
      answer:
        "Yes! We are located at Tesmot House, 3 Abdulrahman Okene Close, off Ligali Ayorinde, Victoria Island, Lagos.",
    },
    {
      question: "PiggyBank Savings",
      answer:
        "This is a feature that helps you build financial discipline by allowing you to automatically save any amount daily, weekly or monthly. You also have an option to save manually.",
    },
    {
      question: "Investify",
      answer:
        "Investify is a PiggyVest feature that allows users to earn more on their savings by investing in pre-vetted, low-medium risk, primary and secondary investment opportunities.",
    },
    {
      question: "BVN",
      answer:
        "Your BVN is required to validate your identity and kick against identity theft. This ensures another level of safety for your funds and transactions.",
    },
    {
      question: "SafeLock",
      answer:
        "SafeLock is a fixed savings option that allows you to earn up to 20% per annum, usually paid upfront.",
    },
    {
      question: "Target Savings",
      answer:
        "P.S: You cannot break a locked target. Funds can only be accessed at the maturity date. In cases where you may want to close your account completely, you'll have to wait until your target matures.",
    },
    {
      question: "Interests",
      answer:
        "Our operational costs are relatively low - we do not operate multiple branches or hire a lot of staff to manage operations. We are also able to negotiate premium rates due to volumes. ",
    },
    {
      question: "Flex Naira",
      answer:
        "A Flex Naira account is a flexible savings wallet where interests earned on all other PiggyVest wallets are paid.",
    },
    {
      question: "Flex Dollar",
      answer:
        "Flex Dollar is a feature that lets you save, invest and transfer funds in Dollars. ",
    },
    {
      question: "Withdrawals",
      answer:
        "There are two(2) wallets you can withdraw from Piggyvest; your Piggybank wallet and your Flex wallet. ",
    },
    {
      question: "PiggyPoints",
      answer:
        "You can convert your Piggy Points to cash in your Flex Naira account. 1 Piggy Point = N10.",
    },
    {
      question: "Referral Program(Stories)",
      answer: "",
    },
    {
      question: "Mobile Apps",
      answer: "Yes! The mobile app is available ONLY on Android and iOS. ",
    },
  ];
  return (
    <div>
      <div className="bg-[#f2f7f8] flex justify-center">
        <div className="w-[30%] h-max border bg-[#fff] rounded-[15px]  p-[20px] text-[17px[#7c7878] text-black ">
          <div className="bg-blue-600 text-white hover:scale-105 transition-all duration-300 ease-in-out p-4 rounded-[10px]">
            Statement Of Account
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            House Money
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Safelock Dollar
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Next of kin
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Accountability Partner
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            What is PiggyVest
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            safety & Security
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            PiggyBank Savings
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Investify
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            BVN
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            SafeLock
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Target Savings
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Interests
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Flex Naira
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Flex Dollar
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Withdrawals
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            PiggyPoints
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Referall Program(Storm)
          </div>
          <div className="hover:bg-[#cac8c8] text-black p-4 hover:rounded-[10px] hover:scale-x-90 transition-all duration-300 ease-in-out">
            Mobile App
          </div>
        </div>
        <div className="w-[60%]">
          <div className="max-w-2xl pl-[50px] mt-5">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-[32px] font-normal text-[#122231]">
                    {faq.question}
                  </h3>
                  <FaChevronDown
                    size={23}
                    color="#122231"
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-2 mb-[70px] text-gray-700 transition duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
