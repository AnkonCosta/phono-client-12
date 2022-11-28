import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/july/ovaltine/10T-M.jpg.thumb.webp")` }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Phono</h1>
            <h1 className="mb-5 text-3xl ">Get the best second hand phones</h1>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
