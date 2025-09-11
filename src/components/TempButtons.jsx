import React from "react";
import ButtonV1 from "./common/ButtonV1";
import ButtonV2 from "./common/ButtonV2";

const TempButtons = () => {
  return (
    <div className="container py-[100px]">
      <div className="buttonV1 flex justify-between">
        <ButtonV1 buttonContentv1={"Hello"} />
        <ButtonV1 buttonContentv1={"My"} />
        <ButtonV1 buttonContentv1={"Guy"} />
        <ButtonV1 buttonContentv1={"How"} />
        <ButtonV1 buttonContentv1={"Are"} />
      </div>
      <div className="buttonV2 flex justify-between mt-[200px]">
        <ButtonV2 buttonContentV2={"You"} />
        <ButtonV2 buttonContentV2={"Doing"} />
        <ButtonV2 buttonContentV2={"Man"} />
        <ButtonV2 buttonContentV2={"Hello"} />
        <ButtonV2 buttonContentV2={"World"} />
      </div>
    </div>
  );
};

export default TempButtons;
