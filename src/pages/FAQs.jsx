import React from "react";

import { FaChevronDown } from "react-icons/fa";
import FaqHero from "../components/blocks/faqs/FaqHero";
import FaqSection from "../components/blocks/faqs/FaqSection";
import FaqInvest from "../components/blocks/faqs/FaqInvest";

const FAQs = () => {
  return (
    <div>
      <FaqHero />
      <FaqSection />
      <FaqInvest />
    </div>
  );
};

export default FAQs;
