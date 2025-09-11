import React from "react";
import TestimonialCard from "./common/TestimonialCard";
import Slider from "react-slick";

const Testimonials = () => {
  // For the Slick Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container p-[45px] bg-[#f4f4f4]">
        <Slider {...settings}>
          <div>
            <TestimonialCard />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
