import React from "react";
import { Link } from "react-router";

const CommonButton = ({ buttonContent }) => {
  return (
    <Link class="cursor-pointer relative bg-primary mt-[32px] mb-[40px] lg:mb-[181px] py-2 rounded-full min-w-[100px] w-[248px] h-[48px] min-h-[29px] group max-w-full flex items-center justify-start hover:bg-brand transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
      <div class="absolute flex px-1 py-0.5 justify-start items-center inset-0">
        <div class="pl-[10px] w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
        <div class="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-[28px] aspect-square bg-black transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-primary">
          <div class="size-[12px] text-white group-hover:text-black group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
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
      <div class="pl-[54px] pr-[11px] group-hover:pl-[21px] group-hover:pr-[34px] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-white text-black text-[20px]">
        {buttonContent}
      </div>
    </Link>
  );
};

export default CommonButton;
