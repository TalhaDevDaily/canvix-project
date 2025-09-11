import React from "react";
import HeaderSecondary from "./common/HeaderSecondary";
import ShowcaseCard from "./common/ShowcaseCard";
import ShowcaseImg from "../assets/images/ShowcaseImg3.jpg";
import ShowcaseImg2 from "../assets/images/ShowcaseImg2.jpg";
import ShowcaseImg3 from "../assets/images/ShowcaseImg4.jpg";
import ShowcaseImg4 from "../assets/images/ShowcaseImg.jpg";
import CommonButton from "./common/CommonButton";

const Showcase = () => {
  return (
    <>
      <section id="showcaseSection" className="mb-[60px] lg:mb-[103px]">
        <div className="container">
          <HeaderSecondary HeaderSecondary={"Recent Showcase"} />
          <div className="showcaseRow grid grid-cols-2">
            <div className="mt-[85px]">
              <ShowcaseCard
                showcaseImage={ShowcaseImg}
                showcaseHeader={"Web UI design"}
                showcaseParagraph={"Creative  UI design"}
              />

              <ShowcaseCard
                showcaseImage={ShowcaseImg2}
                showcaseHeader={"UI Design"}
                showcaseParagraph={"Creative Rebranding for logo"}
                classPass={"mt-[88px]"}
              />
            </div>
            <div className="mt-[159px]">
              <CommonButton
                buttonContent={"Start your Free Trial"}
                classPass={"justify-self-end lg:mb-[51px]"}
              />
              <ShowcaseCard
                showcaseImage={ShowcaseImg3}
                showcaseHeader={"Web UI design"}
                showcaseParagraph={"Creative  UI design"}
              />

              <ShowcaseCard
                showcaseImage={ShowcaseImg4}
                showcaseHeader={"UI Design"}
                showcaseParagraph={"Creative Rebranding for logo"}
                classPass={"mt-[93px]"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
