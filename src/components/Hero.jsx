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
    <section className="bg-[#0c0c0c] pt-[10rem] lg:pt-[26rem] pb-[11.1rem] relative z-1 px-[1.2rem] lg:px-0">
      {/* -----------Hero Content */}
      <div className="container">
        <div className="heroRow relative">
          <div className="heroText">
            <h1 className="text-[3rem] lg:text-[6.1rem] font-semibold font-roboto-serif text-primary w-full lg:w-[60.8rem]">
              Ready to take your
              <span className="text-brand block leading-[4rem]">
                Business Growth
              </span>
              to the next level?
            </h1>
            <p className="w-full lg:w-[50rem] text-primary text-sm lg:text-[1.8rem] tracking-[3%] mt-6 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero egestas malesuada viverra gravida libero cursus nulla
              leo pulvinar.
            </p>

            {/* Calling Common Button from components/common/CommonButton.jsx */}
            <CommonButton buttonContent={"Start your Free Trial"} />

            {/* Hero Image Mobile */}
            <div className="heroImgMobo 45rem] h-[45rem] lg:hidden mt-[4rem]">
              <img
                src={heroImgMobo}
                alt="Hero Image Mobile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="featuredBrands">
              <p className="text-[2rem] font-semibold text-brand font-roboto-serif">
                Trusted by Leading Brands
              </p>
              <div className="featuredImg flex gap-[1rem] flex-wrap mt-[1.3rem]">
                <img className="h-[5.4rem]" src={brand1} alt="Brand Image" />
                <img className="h-[5.4rem]" src={brand2} alt="Brand Image" />
                <img className="h-[5.4rem]" src={brand3} alt="Brand Image" />
                <img className="h-[5.4rem]" src={brand4} alt="Brand Image" />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="heroImgBox lg:w-[45rem] lg:h-[45rem] rounded-full overflow-hidden absolute top-[5rem] right-[-25%] z-20 hidden lg:inline-block">
            <img
              src={heroImg}
              alt="Hero Image"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Hero Image Background */}
          <div className="heroImgBg lg:w-[90rem] lg:h-[90rem] rounded-full overflow-hidden absolute top-[-25%] right-[-49%] z-20 hidden lg:inline-block duration-[2s]">
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

      <div className="starEl w-[18.3rem] absolute top-[17.8rem] left-[-3.7rem] hidden lg:block">
        <img src={heroStarEl} alt="Hero Star Element" />
      </div>
    </section>
  );
};

export default Hero;
