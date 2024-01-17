import React from 'react'
import LogoSVG from "../../assets/images/LogoSVG.svg"
import BackgroundSVG from "../../assets/images/FooterBG.svg";

const Footer = () => {
  return (
    <>
    <div id="footer" className="my-10">
      <div className='w-full F-JC-AI-CENTER flex-col mt-36 gap-3 max_md:mb-4'>
        <img src={LogoSVG} alt="LPL"/>
        <div className="FooterText">Copyright ©2024 Lincoln park labs.</div>
        <div className="footer-navigation mt-1 F-JC-AI-CENTER">
          <ul className="flex justify-center items-center gap-2 max_md:gap-1">
          <li><a className="text-arrow-blue FooterText" href="/">Legal Stuff  |</a></li>
          <li><a className="text-arrow-blue FooterText" href="/">Privacy policy  |</a></li>
            <li><a className="text-arrow-blue FooterText" href="/">Security</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer