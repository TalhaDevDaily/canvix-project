import React from "react";
import heroOverlay from "../assets/images/hero-background.png";
import heroStarEl from "../assets/images/heroStarEl.png";
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import brand4 from "../assets/images/brand4.png";
import heroImg from "../assets/images/heroImg.png";
import heroImgBg from "../assets/images/heroImgBg.png";
import heroImgMobo from "../assets/images/heroImgMobo.png";
import test from "../assets/images/test.png";

import { Link } from "react-router";
import CommonButton from "./common/CommonButton";

const Hero = () => {
  return (
    <section className="bg-[#0c0c0c] pt-[100px] lg:pt-[260px] pb-[111px] relative z-1 px-[12px] lg:px-0">
      {/* -----------Hero Content */}
      <div className="container">
        <div className="heroRow flex justify-between">
          <div className="heroText">
            <h1 className="text-[30px] lg:text-[61px] font-semibold font-roboto-serif text-primary w-full lg:w-[608px]">
              Ready to take your
              <span className="text-brand block leading-[40px]">
                Business Growth
              </span>
              to the next level?
            </h1>
            <p className="w-full lg:w-[500px] text-primary text-sm lg:text-[18px] tracking-[3%] mt-6 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero egestas malesuada viverra gravida libero cursus nulla
              leo pulvinar.
            </p>

            {/* Calling Common Button from components/common/CommonButton.jsx */}
            <CommonButton buttonContent={"Start your Free Trial"} />

            {/* Hero Image Mobile */}
            <div className="heroImgMobo 450px] h-[450px] lg:hidden mt-[40px]">
              <img
                src={heroImgMobo}
                alt="Hero Image Mobile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="featuredBrands">
              <p className="text-[20px] font-semibold text-brand font-roboto-serif">
                Trusted by Leading Brands
              </p>
              <div className="featuredImg flex gap-[10px] flex-wrap mt-[13px]">
                <img className="h-[54px]" src={brand1} alt="Brand Image" />
                <img className="h-[54px]" src={brand2} alt="Brand Image" />
                <img className="h-[54px]" src={brand3} alt="Brand Image" />
                <img className="h-[54px]" src={brand4} alt="Brand Image" />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="heroImgBox lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden top-[50px] right-[0] z-20 hidden lg:inline-block relative">
            <img
              src={heroImg}
              alt="Hero Image"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Hero Image Background */}
          <div className="heroImgBg lg:w-[900px] lg:h-[900px] rounded-full overflow-hidden absolute top-[80px] right-[60px] z-20 hidden lg:inline-block duration-[2s]">
            <img
              src={test}
              alt="Hero Image Background"
              className="w-full h-full object-cover object-center animate-spin"
            />
          </div>
        </div>
      </div>

      {/* -----------Overlay */}
      <div
        style={{
          background: `url(${heroOverlay})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full absolute top-0 left-0 z-[-1]"
      ></div>

      <div className="starEl w-[183px] absolute top-[178px] left-[-37px] hidden lg:block">
        <img src={heroStarEl} alt="Hero Star Element" />
      </div>
    </section>
  );
};

export default Hero;
