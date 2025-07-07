import React from "react";
import Hero from "../components/homesections/Hero";
import SecuritySection from "../components/homesections/SecuritySection";
import SavingCards from "../components/homesections/SavingCards";  
import InvestmentSection from "../components/homesections/InvestmentSection";
import VideoSection from "../components/homesections/VideoSection";
import Reviews from "../components/homesections/Reviews";
import TechLogos from "../static/TechLogos";

export default function Home() {
  return (
    <div>
      <Hero />
      <SecuritySection />
      <SavingCards />
      <InvestmentSection />
      <VideoSection />
      <Reviews />
      <TechLogos />
      
    </div>
  );
}
