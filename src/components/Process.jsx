import React from "react";
import HeaderSecondary from "./common/HeaderSecondary";
import ProcessCard from "./common/ProcessCard";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Process = () => {
  return (
    <>
      <section className="processSection mt-[107px] mb-[129px] px-2 lg:px-0">
        <div className="container">
          <HeaderSecondary
            HeaderSecondary={"Process that moves things forward"}
            headerTertiary={"Process"}
          />
          <div className="flex lg:justify-between flex-wrap gap-16 lg:gap-0 justify-center lg:mt-[84px] mt-[60px]">
            <ProcessCard
              processIcon={<HiOutlineLightBulb />}
              processHeader={"Ideate"}
              processParagraph={
                "The ideation process is a crucial phase in the design process where creative thinking and brainstorming"
              }
            />

            <ProcessCard
              processIcon={<CiMail />}
              processHeader={"Reserach"}
              processParagraph={
                "Research is a critical component of the design process, helping designers understand the problem"
              }
            />

            <ProcessCard
              processIcon={<HiOutlineAdjustmentsHorizontal />}
              processHeader={"Create"}
              processParagraph={
                "Designing a process involves several key steps to ensure clarity, efficiency, successful implementation"
              }
            />

            <ProcessCard
              processIcon={<IoCheckmarkDoneCircleOutline />}
              processHeader={"Testing"}
              processParagraph={
                "Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
