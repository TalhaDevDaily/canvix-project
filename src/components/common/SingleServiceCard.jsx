import React from "react";
import { SlPencil } from "react-icons/sl";

const SingleServiceCard = ({ cardIcon, cardHeading, cardParagraph }) => {
  return (
    <>
      <div className="w-full lg:w-[42.2rem] p-[4.5rem] rounded-[2rem] bg-[#f4f4f4] hover:bg-[#0c0c0c] duration-[0.4s] group hover:translate-y-[-2rem]">
        <div className="w-[8rem] h-[8rem] rounded-full flex justify-center items-center bg-[#0c0c0c] text-white group-hover:bg-[#f4f4f4] group-hover:text-[#0c0c0c] duration-[1s]">
          {cardIcon}
        </div>

        <h2 className="text-[2.5rem] font-roboto-serif font-medium text-[#0c0c0c] mt-[6.2rem] group-hover:text-[#f4f4f4] duration-[0.8s]">
          {cardHeading}
        </h2>
        <p className="text-[1.8rem] font-dm-sans text-[#0c0c0c] tracking-[3%] mt-[1.5rem]  group-hover:text-[#f4f4f4] duration-[0.8s]">
          {cardParagraph}
        </p>
      </div>
    </>
  );
};

export default SingleServiceCard;
