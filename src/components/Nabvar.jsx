import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";

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
    },
  ];

  return (
    <>
      <nav id="navbar" className="pt-[22px]">
        <div className="container">
          <div className="menu-row flex items-center justify-between">
            <div className="logo-col">
              <img src={logo} alt="Logo" />
            </div>
            <div className="menu-items flex gap-[35px]">
              {navItems.map((item, i) => {
                return (
                  <Link
                    key={i}
                    to={item.navPath}
                    className="text-xl font-normal text-primary font-dm-sans"
                  >
                    {item.navContent}
                  </Link>
                );
              })}
            </div>
            <button className="menu-button w-[140px] h-[47px] bg-primary rounded-[23px] font-dm-sans text-lg font-normal text-[#0c0c0c] cursor-pointer">
              Get in touch
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nabvar;
