import React, { useState } from "react";
import aboutUsImg from "../assets/images/aboutUs.png";
import HeaderSecondary from "./common/HeaderSecondary";
import CommonButton from "./common/CommonButton";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const [countState, setCountState] = useState(false);

  // useInView hook replaces ScrollTrigger
  const { ref, inView } = useInView({
    threshold: 0.3, // 30% of the section must be visible
    triggerOnce: false, // set to true if you only want it to trigger once
    onChange: (visible) => setCountState(visible),
  });

  return (
    <>
      <section
        ref={ref} // attach the observer here
        className="aboutUsSection py-[100px] px-[260px] bg-[#0c0c0c]"
      >
        <div className="container flex justify-between">
          <div className="aboutUsImgbox w-[744px] h-[703px]">
            <img
              src={aboutUsImg}
              alt="About Us Image"
              className="w-full h-full"
            />
          </div>
          <div className="aboutUsTextbox lg:w-[586px]">
            <h3 className="subHeadingAbout font-roboto-serif font-semibold text-[30px] text-brand mt-[79.5px] mb-[25px]">
              About us
            </h3>
            <h2 className="secondaryHeaderAbout font-roboto-serif font-semibold text-[64px] text-primary leading-[1.3] mb-[25px]">
              The core mission behind all our work
            </h2>
            <p className="font-dm-sans text-[18px] tracking-[3%] text-[#f4f4f4] mb-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
              tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
            </p>
            <div className="stats flex gap-[59px]">
              <div>
                <h3 className="font-roboto-serif font-semibold text-[45px] text-brand">
                  {countState && <CountUp end={330} duration={2}></CountUp>} +
                </h3>
                <p className="font-dm-sans text-[16px] tracking-[3%] text-[#f4f4f4]">
                  Companies helped
                </p>
              </div>
              <div>
                <h3 className="font-roboto-serif font-semibold text-[45px] text-brand">
                  {countState && <CountUp end={230} duration={2}></CountUp>} +
                </h3>
                <p className="font-dm-sans text-[16px] tracking-[3%] text-[#f4f4f4]">
                  Revenue generated
                </p>
              </div>
            </div>

            <CommonButton buttonContent={"Start your Free Trial"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
