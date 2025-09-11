import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import temporaryButtons from "../assets/images/Frame 149.png";

const Footer = () => {
  return (
    <>
      <section id="footerSection" className="bg-secondary pt-[100px] pb-[60px]">
        <div className="container text-white">
          <div className="upperContent flex justify-between flex-wrap border-b-[1px] border-white pb-[100px]">
            <div className="meta">
              <Link to="#" className="w-[200px]">
                <img src={logo} alt="Canvix Logo" />
              </Link>
              <p className="font-dm-sans text-[18px] tracking-[3%] w-[357px] mt-[24px]">
                We’re a team of strategic creator and digital innovator, united
                focus in our pursuit of mastery and joyful.
              </p>
            </div>

            <div className="pages">
              <h4 className="mb-[24px] font-semibold text-[20px] font-roboto-serif">
                Pages
              </h4>
              <ul className="font-dm-sans tracking-[3%] text-base flex flex-col gap-[16px]">
                <Link to="#">
                  <li>Home</li>
                </Link>

                <Link to="#">
                  <li>Home 2</li>
                </Link>

                <Link to="#">
                  <li>About</li>
                </Link>

                <Link to="#">
                  <li>Contact Us</li>
                </Link>

                <Link to="#">
                  <li>Portfolio</li>
                </Link>

                <Link to="#">
                  <li>Portfolio Single</li>
                </Link>
              </ul>
            </div>

            <div className="Utility Pages">
              <h4 className="mb-[24px] font-semibold text-[20px] font-roboto-serif">
                Utility Pages
              </h4>
              <ul className="font-dm-sans tracking-[3%] text-base flex flex-col gap-[16px]">
                <Link to="#">
                  <li>Style Guide</li>
                </Link>

                <Link to="#">
                  <li>Instruction</li>
                </Link>

                <Link to="#">
                  <li>License</li>
                </Link>

                <Link to="#">
                  <li>Changelog</li>
                </Link>

                <Link to="#">
                  <li>Error 404</li>
                </Link>

                <Link to="#">
                  <li>Password Protected</li>
                </Link>
              </ul>
            </div>

            <div>
              <h4 className="mb-[24px] font-semibold text-[20px] font-roboto-serif">
                Subscribe
              </h4>

              <div className="flex justify-between items-center bg-white w-[433px] h-[67px] rounded-[40px] p-[10px]">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-[250px] placeholder:text-[#777] placeholder:text-[18px] outline-none"
                />
                <button className="w-[118px] h-[47px] rounded-[20px] py-2 px-[15px] bg-secondary opacity-[90%] hover:opacity-[100%] text-[16px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="lowerContent flex justify-between flex-wrap mt-[29px]">
            <div className="copyright">
              <h4 className="mb-[24px] font-semibold text-[20px] font-roboto-serif">
                Copyright by
              </h4>
              <p className="font-dm-sans tracking-[3%] text-base flex flex-col gap-[16px]">
                Designed by Iconstica.com
              </p>
            </div>

            <div className="contactUs">
              <h4 className="mb-[24px] font-semibold text-[20px] font-roboto-serif">
                Contact Us
              </h4>
              <p className="font-dm-sans tracking-[3%] text-base flex flex-col gap-[16px]">
                +0 12 457 4578
              </p>
            </div>

            <div className="address">
              <h4 className="mb-[24px] font-semibold text-[20px] font-roboto-serif">
                Address
              </h4>
              <p className="font-dm-sans tracking-[3%] text-base flex flex-col gap-[16px]">
                119 Tanglewood Lane Gulfport, MS 39503
              </p>
            </div>

            <div>
              <img src={temporaryButtons} alt="Temporary placeholder" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
