import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const RespoNav = () => {
  const navItems = [
    {
      navPath: "/",
      navContent: "Home",
    },
    {
      navPath: "/",
      navContent: "About",
    },
    {
      navPath: "/",
      navContent: "Contact Us",
      dropDown: [
        {
          dropContent: "google maps",
          dropLink: "/",
        },
        {
          dropContent: "Phone Nos",
          dropLink: "/",
        },
      ],
    },
  ];

  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="lg:hidden px-2 py-3">
        <div className="container">
          <div className="menu-row flex items-center justify-between">
            <Link className="w-[12rem]" to={"/"}>
              <img src={logo} alt="logo" />
            </Link>

            <button
              onClick={() => setShowNav(!showNav)}
              className="text-3xl text-white"
            >
              <CiMenuBurger />
            </button>
          </div>
        </div>

        {showNav && (
          <div
            onClick={() => setShowNav(!showNav)}
            className="w-full h-screen absolute top-0 left-0"
          ></div>
        )}

        <div
          className={`w-[25rem] h-screen bg-white absolute top-0 right-0 ${
            showNav ? "right-0" : "right-[-100%]"
          } duration-[0.4s] flex justify-center items-center flex-col gap-20`}
        >
          <button
            onClick={() => setShowNav(!showNav)}
            className="text-2xl absolute top-5 right-10"
          >
            <TfiClose />
          </button>
          <ul className="flex flex-col gap-5 items-center">
            {navItems.map((items, i) => (
              <li key={i}>
                <Link
                  className="text-4xl font-dm-sans text-black"
                  to={items.navPath}
                >
                  {items.navContent}
                </Link>

                {/* {items.dropDown.map((item, i) => (
                    
                ))} */}
              </li>
            ))}
          </ul>

          <Link
            className="py-2 px-6 bg-black text-base font-normal font-dm-sans text-white rounded-[0.5rem] text-[1.6rem]"
            to={"/"}
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </>
  );
};

export default RespoNav;
