import React from "react";
import { SlPencil } from "react-icons/sl";

const HeaderSecondary = ({ headerTertiary, HeaderSecondary }) => {
  return (
    <>
      <h3 className="text-[2rem] lg:text-[3rem] font-semibold font-roboto-serif text-brand text-center">
        {headerTertiary}
      </h3>
      <h2 className="w-full lg:w-[69.5rem] text-[2.9rem] lg:text-[6.4rem] font-roboto-serif font-semibold text-center mx-auto">
        {HeaderSecondary}
      </h2>
    </>
  );
};

export default HeaderSecondary;
