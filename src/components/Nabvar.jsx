import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import { IoMdArrowDropup } from "react-icons/io";

const Nabvar = () => {
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
          dropContent: "Our Location on Maps",
          dropLink: "/",
        },
        {
          dropContent: "Call Us Directly at: 1-800-CANVIX",
          dropLink: "/",
        },
      ],
    },
  ];

  return (
    <>
      <nav
        id="navbar"
        className="pt-[22px] hidden lg:block w-full absolute top-0 left-0 z-20"
      >
        <div className="container">
          <div className="menu-row flex items-center justify-between">
            <Link to={"/"} className="logo-col">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="menu-items">
              <ul className="flex gap-[35px]">
                {navItems.map((item, i) => {
                  return (
                    <li key={i} className="relative group">
                      <Link
                        to={item.navPath}
                        className="text-xl font-normal text-primary font-dm-sans text-[20px] hover:text-brand duration-[0.6s]"
                      >
                        {item.navContent}
                      </Link>

                      {item.dropDown && (
                        <div className="w-[300px] p-3 rounded-[5px] bg-white absolute top-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 text-[10px] duration-[0.4s]">
                          <IoMdArrowDropup className="text-2xl text-white absolute top-[-9px] left-9" />
                          <ul>
                            {item.dropDown.map((item, i) => (
                              <li key={i}>
                                <Link
                                  className="text-lg mt-3 inline-block hover:text-brand"
                                  to={item.dropLink}
                                >
                                  {item.dropContent}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <button className="menu-button w-[140px] h-[47px] bg-primary rounded-[23px] font-dm-sans text-lg font-normal text-[#0c0c0c] cursor-pointer text-[18px] hover:text-white hover:bg-brand duration-[0.4s]">
              Get in touch
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nabvar;
