import React from "react";
import Piggybankhero from "../components/blocks/piggybank/Piggybankhero";
import Savewithout from "../components/blocks/piggybank/Savewithout";
import Build from "../components/blocks/piggybank/Build";

const Piggybank = () => {
  return (
    <div>
      <Piggybankhero />
      <Savewithout />
      <Build />
    </div>
  );
};

export default Piggybank;
