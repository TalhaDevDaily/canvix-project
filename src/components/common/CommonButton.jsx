import React from "react";
import { Link } from "react-router";

const CommonButton = ({ buttonContent }) => {
  return (
    <Link class="cursor-pointer relative bg-primary mt-[3.2rem] mb-[4rem] lg:mb-[18.1rem] py-2 rounded-full min-w-[10rem] w-[24.8rem] h-[4.8rem] min-h-[2.9rem] group max-w-full flex items-center justify-start hover:bg-brand transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
      <div class="absolute flex px-1 py-0.5 justify-start items-center inset-0">
        <div class="pl-[1rem] w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
        <div class="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-[2.8rem] aspect-square bg-black transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-primary">
          <div class="size-[1.2rem] text-white group-hover:text-black group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              height="100%"
              width="100%"
            >
              <path
                fill="currentColor"
                d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="pl-[5.4rem] pr-[1.1rem] group-hover:pl-[2.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-white text-black text-[2rem]">
        {buttonContent}
      </div>
    </Link>
  );
};

export default CommonButton;
