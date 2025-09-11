import React from "react";
import author from "../../assets/images/Author.png";

const TestimonialCard = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="imgbox w-[150px] h-[150px] rounded-full overflow-hidden">
          <img src={author} alt="Author" />
        </div>
        <h3 className="font-roboto-serif font-bold text-[25px] text-center my-[35px]">
          “Be genuine in your assessment, and provide constructive feedback to
          benefit both potential customers and the company providing the product
          or service.”
        </h3>

        <h4 className="font-roboto-serif font-semibold text-[20px]">
          Jacqueline Miller
        </h4>
        <p className="font-dm-sans text-base tracking-[3%]">
          CEO of an eduport
        </p>
      </div>
    </>
  );
};

export default TestimonialCard;
