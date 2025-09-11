import React from "react";
import HeaderSecondary from "./common/HeaderSecondary";

const Showcase = () => {
  return (
    <>
      <section id="showcaseSection" className="mb-[103px]">
        <div className="container">
          <HeaderSecondary HeaderSecondary={"Recent Showcase"} />
          <div className="showcaseRow grid grid-cols-2">
            <h2>hell0</h2>
            <h2>World</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
