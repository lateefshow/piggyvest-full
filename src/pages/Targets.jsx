import React from "react";
import TargetHero from "../components/blocks/targets/TargetHero";
import TargetGoals from "../components/blocks/targets/TargetGoals";
import TargetFun from "../components/blocks/targets/TargetFun";
import TargetChallenges from "../components/blocks/targets/TargetChallenges";

const Targets = () => {
  return (
    <div>
      <TargetHero />
      <TargetGoals />
      <TargetFun />
      <TargetChallenges />
    </div>
  );
};

export default Targets;
