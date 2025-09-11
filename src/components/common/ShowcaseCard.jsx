import React from "react";

const ShowcaseCard = ({
  showcaseImage,
  showcaseHeader,
  showcaseParagraph,
  classPass,
}) => {
  return (
    <>
      <div className={`singleShowcaseCard ${classPass}`}>
        <div className="w-full lg:w-[663px] rounded-[20px] overflow-hidden">
          <img src={showcaseImage} alt="Showcase Card Image" />
        </div>
        <h2 className="text-base lg:text-[30px] font-semibold font-roboto-serif text-secondary">
          {showcaseHeader}
        </h2>

        <p className="text-[12px] lg:text-lg font-dm-sans text-secondary">
          {showcaseParagraph}
        </p>
      </div>
    </>
  );
};

export default ShowcaseCard;
