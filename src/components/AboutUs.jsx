import React from "react";
import aboutUsImg from "../assets/images/aboutUs.png";
import HeaderSecondary from "./common/HeaderSecondary";
import CommonButton from "./common/CommonButton";

const AboutUs = () => {
  return (
    <>
      <section className="aboutUsSection py-[10rem] px-[26rem] bg-[#0c0c0c] flex justify-between">
        <div className="aboutUsImgbox w-[74.4rem] h-[70.3rem]">
          <img
            src={aboutUsImg}
            alt="About Us Image"
            className="w-full h-full"
          />
        </div>
        <div className="aboutUsTextbox lg:w-[58.6rem]">
          <h3 className="subHeadingAbout font-roboto-serif font-semibold text-[3rem] text-brand mt-[7.95rem] mb-[2.5rem]">
            About us
          </h3>
          <h2 className="secondaryHeaderAbout font-roboto-serif font-semibold text-[6.4rem] text-primary leading-[1.3] mb-[2.5rem]">
            The core mission behind all our work
          </h2>
          <p className="font-dm-sans text-[1.8rem] tracking-[3%] text-[#f4f4f4] mb-[2.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
            tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
          </p>
          <div className="stats flex gap-[5.9rem] mb-[3.2rem]">
            <div>
              <h3 className="font-roboto-serif font-semibold text-[4.5rem] text-brand">
                330 +
              </h3>
              <p className="font-dm-sans text-[1.6rem] tracking-[3%] text-[#f4f4f4]">
                Companies helped
              </p>
            </div>
            <div>
              <h3 className="font-roboto-serif font-semibold text-[4.5rem] text-brand">
                230 +
              </h3>
              <p className="font-dm-sans text-[1.6rem] tracking-[3%] text-[#f4f4f4]">
                Revenue generated
              </p>
            </div>
          </div>

          <CommonButton buttonContent={"Start your Free Trial"} />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
