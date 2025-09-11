import React from "react";
import { SlPencil } from "react-icons/sl";

const SingleServiceCard = ({ cardIcon, cardHeading, cardParagraph }) => {
  return (
    <>
      <div className="w-full lg:w-[422px] p-[45px] rounded-[20px] bg-[#f4f4f4] hover:bg-[#0c0c0c] duration-[0.4s] group hover:translate-y-[-20px]">
        <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-[#0c0c0c] text-white group-hover:bg-[#f4f4f4] group-hover:text-[#0c0c0c] duration-[1s]">
          {cardIcon}
        </div>

        <h2 className="text-[25px] font-roboto-serif font-medium text-[#0c0c0c] mt-[62px] group-hover:text-[#f4f4f4] duration-[0.8s]">
          {cardHeading}
        </h2>
        <p className="text-[18px] font-dm-sans text-[#0c0c0c] tracking-[3%] mt-[15px]  group-hover:text-[#f4f4f4] duration-[0.8s]">
          {cardParagraph}
        </p>
      </div>
    </>
  );
};

export default SingleServiceCard;
