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

  return (
    <>
      <nav id="navbar" className="pt-[2.2rem] hidden lg:block">
        <div className="container">
          <div className="menu-row flex items-center justify-between">
            <Link to={"/"} className="logo-col">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="menu-items flex gap-[3.5rem]">
              {navItems.map((item, i) => {
                return (
                  <ul key={i}>
                    <li className="relative group">
                      <Link
                        to={item.navPath}
                        className="text-xl font-normal text-primary font-dm-sans"
                      >
                        {item.navContent}
                      </Link>

                      {item.dropDown && (
                        <div className="w-[30rem] p-3 rounded-[0.5rem] bg-white absolute top-8 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                          <IoMdArrowDropup className="text-2xl text-white absolute top-[-0.9rem] left-9" />
                          <ul>
                            {item.dropDown.map((item, i) => (
                              <li key={i}>
                                <Link
                                  className="text-lg mb-5 inline-block"
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
                  </ul>
                );
              })}
            </div>
            <button className="menu-button w-[14rem] h-[4.7rem] bg-primary rounded-[2.3rem] font-dm-sans text-lg font-normal text-[#0c0c0c] cursor-pointer">
              Get in touch
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nabvar;
