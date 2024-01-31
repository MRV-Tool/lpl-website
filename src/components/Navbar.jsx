import React, { useEffect, useState } from "react";
import Logo from "../assets/images/LogoSVG.svg";
import Hamburger from "../assets/images/HamburgerSVG.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  useEffect(() => {
    setMenuClass(
      toggleMenu
        ? "transition-opacity ease-in-out duration-300 transform-translate-y-0 opacity-100"
        : "transition-opacity ease-in-out duration-300 transform-translate-y-full opacity-0"
    );
  }, [toggleMenu]);
  return (
    <>
      <section className="w-full absolute top-0 text-arrow-blue flex items-center justify-between px-10 py-5 max_sm:justify-center">
        <img
          src={Hamburger}
          className="hidden absolute left-5 max_sm:block"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        <div className="brand-logo">
          <img src={Logo} className="max_sm:fl" alt="LPL" />
        </div>
        <div className="max_sm:hidden flex justify-end items-center gap-2">
          <ul className="flex justify-center items-center gap-10">
            <li>
              <a
                className="text-arrow-blue text-MediumSize cursor-pointer"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="border-gradient px-5 py-2">
              <a
                className="text-classic-dark-bluish font-medium text-MediumSize cursor-pointer"
                href="#contact-us"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </section>
      {toggleMenu && (
        <div
          id="mob-menu"
          className={`lg:hidden absolute top-20 bg-white w-full h-[30px] ${menuClass}`}
        >
          <div className="flex flex-col justify-center items-center mt-3">
          <ul className="flex justify-center items-center gap-2 flex-col">
            <li>
              <a
                className="text-arrow-blue text-MediumSize cursor-pointer"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="border-gradient px-5 py-2">
              <a
                className="text-classic-dark-bluish font-medium text-MediumSize cursor-pointer"
                href="#contact-us"
              >
                Contact us
              </a>
            </li>
          </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
