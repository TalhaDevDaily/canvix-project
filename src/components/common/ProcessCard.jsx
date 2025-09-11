import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi2";

const ProcessCard = ({ processIcon, processHeader, processParagraph }) => {
  return (
    <>
      <div id="processCard" className="flex flex-col gap-4 lg:gap-[32px]">
        <div className="headerText flex items-center gap-5 lg:gap-[28.8px] lg:ml-[22px]">
          <div className="w-[50px] lg:w-[82px] h-[50px] lg:h-[82px] rounded-full bg-secondary text-[#fbfbfb] flex justify-center items-center text-4xl">
            {processIcon}
          </div>
          <h2 className="text-[16px] lg:text-[30.1px] font-semibold font-roboto-serif text-secondary">
            {processHeader}
          </h2>
        </div>

        <p className="text-[12px] lg:text-base font-dm-sans text-secondary w-[180px]">
          {processParagraph}
        </p>
      </div>
    </>
  );
};

export default ProcessCard;
