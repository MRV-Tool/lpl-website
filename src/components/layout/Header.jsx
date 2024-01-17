import React from "react";
import Navbar from "../Navbar";
import BackgroundSVG from "../../assets/images/Background.svg";
import ArrowTopLeft from "../../assets/images/ArrowTopLeft.svg";
import Rectangle1 from "../../assets/images/Rectangle1.svg";
import Rectangle2 from "../../assets/images/Rectangle2.svg";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen max_md:h-[1/2] F-JC-AI-CENTER flex-col text-center mb-10">
        <img
          className="z-[-1] absolute w-full top-40 max_md:top-60"
          src={BackgroundSVG}
        />
        <img
          className="z-[-1] absolute  top-0 left-0 max_md:hidden"
          src={Rectangle1}
        />
        <img
          className="z-[-1] absolute  top-[100px] right-0 max_md:hidden"
          src={Rectangle2}
        />
        <div className="MainHeadingText w-[48rem] max_md:w-[23.25rem] max_md:line-height-[38px] line-height-[85px] -mt-32 max_md:mt-0">
          Empowering Your Business Through Innovative Solutions
        </div>
        <div className="SubHeadingText w-[694px] max_md:w-[370px] line-height-[30px] mt-5">
          We specialize in building scalable custom software solutions to
          optimize your processes and streamline workflows
        </div>
        <div className="F-JC-AI-CENTER gap-[10px] GradientButton mt-10 px-6 py-3">
          <p className="font-mont">Contact us</p>
          <img src={ArrowTopLeft} />
        </div>
      </div>
    </>
  );
};

export default Header;
``