import React from "react";
import tclogo from "../assets/tclogo.png";
import output from "../assets/output.png";
import techcrunch from "../assets/techcrunch.png";
import pymnts from "../assets/pymnts.svg";
import fastcompany from "../assets/fastcompany.svg";
import cio from "../assets/cio.svg";

const TechLogos = () => (
  <section className="px-6 lg:px-20 my-[70px]">
    {/* Heading */}
    <main className="text-center mb-10">
      <h2 className="text-[28px] lg:text-[35px] text-[#232c35] font-semibold">
        As featured in
      </h2>
    </main>

    {/* Logos */}
    <main className="flex flex-wrap items-center justify-between gap-y-6">
      <div>
        <img src={tclogo} alt="TechCrunch" className="w-[170px]" />
      </div>
      <div>
        <img src={output} alt="Output" className="w-[170px]" />
      </div>
      <div>
        <img src={techcrunch} alt="TechCrunch" className="w-[180px]" />
      </div>
      <div>
        <img src={pymnts} alt="PYMNTS" className="w-[100px]" />
      </div>
      <div>
        <img src={fastcompany} alt="Fast Company" className="w-[155px]" />
      </div>
      <div>
        <img src={cio} alt="CIO" className="w-[75px]" />
      </div>
    </main>
  </section>
);

export default TechLogos;
