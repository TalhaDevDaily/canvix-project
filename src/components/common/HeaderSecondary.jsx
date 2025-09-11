import React from "react";
import { SlPencil } from "react-icons/sl";

const HeaderSecondary = ({ headerTertiary, HeaderSecondary }) => {
  return (
    <>
      <h3 className="text-[20px] lg:text-[30px] font-semibold font-roboto-serif text-brand text-center">
        {headerTertiary}
      </h3>
      <h2 className="w-full lg:w-[695px] text-[29px] lg:text-[64px] font-roboto-serif font-semibold text-center mx-auto">
        {HeaderSecondary}
      </h2>
    </>
  );
};

export default HeaderSecondary;
