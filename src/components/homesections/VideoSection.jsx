import React from "react";

const VideoSection = () => (
  <section className="mt-[250px] px-6 lg:px-20">
    {/* Text Content */}
    <div className="text-center text-[#232c35]">
      <h1 className="text-[40px] lg:text-[50px] leading-snug font-bold">
        Meet Our Saver of the Month
      </h1>
      <p className="text-[20px] lg:text-[26px] leading-relaxed mt-4">
        Every month, we shine a spotlight on one saver, asking them about{" "}
        <br className="hidden md:blocks" />
        their savings culture and how Piggyvest has helped them.
      </p>
    </div>

    {/* Video Embed */}
    <div className="mt-[70px] flex justify-center">
      <iframe
        className="w-full md:w-[900px] h-[250px] md:h-[450px] rounded-[20px]"
        src="https://www.youtube.com/embed/2EnGMGxKuII?si=Gc_6Dar3Dcmi32m9"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </section>
);

export default VideoSection;
