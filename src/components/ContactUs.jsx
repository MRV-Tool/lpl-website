import React, { useState } from "react";
import BackgroundSVG from "../assets/images/FooterBG.svg";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    if (isChecked === false) {
      setLoading(true);
      setTimeout(() => {
        setIsChecked(true);
        setLoading(false);
      }, 1500);
    }
  };
  
  const sendEmail = () => {
    const email = 'xyz@gmail.com';
    const subject = 'Your Subject';
    const body = 'Your email body';
  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact-us" className="my-24 relative">
      {/* <img
          className="z-[-1] absolute w-full"
          src={BackgroundSVG}
        /> */}
      <div className="w-full F-JC-AI-CENTER flex-col">
        <div className="HeadingText uppercase">ContactUs</div>
        <div className="underline max_md:w-[1.5rem]"></div>
      </div>
      <div className="contact-card mt-9 F-JC-AI-CENTER">
        
        <div className="ContactCard gap-4 flex flex-col w-[40%] max_md:w-[80%] ">
          <div>
            <label htmlFor="fname" className="w-full text-arrow-blue">
              Full Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-classic-dark-bluish py-4 F-JC-AI-CENTER border-b border-arrow-blue focus:border-arrow-blue"
              placeholder="Full Name"
            />
          </div>
          <div className="flex gap-4 max_xl:flex-wrap">
            <div className="w-full">
              <label htmlFor="email" className="w-full text-arrow-blue">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-classic-dark-bluish py-4 F-JC-AI-CENTER border-b border-arrow-blue focus:border-arrow-blue"
                placeholder="Email Address"
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="w-full text-arrow-blue">
                Phone Number
              </label>
              <PhoneInput
                name="phone"
                id="phone"
                value={phone}
                onChange={(value) => setPhone(value)}
                className="w-full text-classic-dark-bluish py-4 F-JC-AI-CENTER border-b border-arrow-blue focus:border-arrow-blue"
                placeholder="Phone Number"
                defaultCountry="US"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="Message" className="w-full text-arrow-blue">
              Message
            </label>
            <textarea
              className="w-full text-classic-dark-bluish py-4 border-b border-arrow-blue focus:border-arrow-blue"
              placeholder="Type Message..."
              rows={3}
            />
          </div>
          <div className="button mt-8 w-full">
            <div className="py-3 F-JC-AI-CENTER w-full GradientButton cursor-pointer">
              Submit
            </div>
          </div>
          <div className="w-1/2 m-auto max_md:w-2/3">
            <div className="border-gradient p-3 flex justify-start items-center gap-3">
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-blue-500 border-solid"></div>
                </div>
              ) : (
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  className="w-5 h-5 rounded-none border-1 border-solid border-arrow-blue"
                  checked={isChecked}
                  onChange={handleCheck}
                />
              )}
              <label
                htmlFor="check"
                className="text-arrow-blue max_md:text-VerySmallSize"
              >
                I'm not a robot
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
