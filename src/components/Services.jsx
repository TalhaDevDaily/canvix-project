import React from "react";
import HeaderSecondary from "./common/HeaderSecondary";
import SingleServiceCard from "./common/SingleServiceCard";
import { SlDiamond, SlPencil } from "react-icons/sl";
import { LiaPenNibSolid } from "react-icons/lia";
import { BsMegaphone } from "react-icons/bs";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuSpeech } from "react-icons/lu";

const Services = () => {
  return (
    <section className="serviceSection pt-[106px] pb-[93px]">
      <div className="container">
        <HeaderSecondary
          headerTertiary={"Our Services"}
          HeaderSecondary={"High-impact services for your business"}
        />

        <div className="serviceCards flex flex-wrap items-center gap-[20px] lg:gap-[66px] mt-[91px]">
          <SingleServiceCard
            cardIcon={<SlPencil className="text-[30px]" />}
            cardHeading={"Content Marketing"}
            cardParagraph={
              "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            }
          />
          <SingleServiceCard
            cardIcon={<LiaPenNibSolid className="text-[40px]" />}
            cardHeading={"Graphic Design"}
            cardParagraph={
              "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate."
            }
          />
          <SingleServiceCard
            cardIcon={<BsMegaphone className="text-[35px]" />}
            cardHeading={"Digital Marketing"}
            cardParagraph={
              "Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing"
            }
          />
          <SingleServiceCard
            cardIcon={<IoColorPaletteOutline className="text-[40px]" />}
            cardHeading={"Web Design"}
            cardParagraph={
              "We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional."
            }
          />
          <SingleServiceCard
            cardIcon={<LuSpeech className="text-[40px]" />}
            cardHeading={"IT Consulting"}
            cardParagraph={
              "IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services"
            }
          />
          <SingleServiceCard
            cardIcon={<SlDiamond className="text-[35px]" />}
            cardHeading={"Brand Identity"}
            cardParagraph={
              "It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
