import React, { useState } from 'react';
import BackgroundSVG from '../assets/images/FooterBG.svg';
import PhoneInput from 'react-phone-number-input';
import { mailId, subject } from '../common/constants';
import 'react-phone-number-input/style.css';

const ContactUs = React.forwardRef((props, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errObj, setErrObj] = useState({
    name: false,
    phone: false,
    email: false,
    checked: false,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const verifyInput = () => {
    const prev = {
      name: false,
      phone: false,
      email: false,
      checked: false,
    };
    if (name.trim() == '') prev.name = true;
    if (typeof phone == 'undefined' || phone.trim() == '') prev.phone = true;
    if (email.trim() == '' && !validateEmail(email)) prev.email = true;
    if (!isChecked) prev.checked = true;

    return prev;
  };

  const handleCheck = () => {
    if (isChecked === false) {
      setLoading(true);
      setTimeout(() => {
        setIsChecked(true);
        setLoading(false);
      }, 1500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = verifyInput();
    setErrObj(data);

    if (!Object.values(data).includes(true)) {
      const body = `Full Name: ${name}\nEmail Address: ${email}\nPhone number: ${phone}\n\nMessage: ${message}`;
      const ele = document.createElement('a');
      ele.href = `mailto:${mailId}?subject=${encodeURIComponent(
        subject
      )}!&body=${encodeURIComponent(body)}`;
      document.body.appendChild(ele);
      setTimeout(() => {
        ele.click();
        document.body.removeChild(ele);
      }, 100);
    }
  };

  return (
    <div ref={ref} id="contact-us" className="my-24 relative overflow-clip">
      <img className="z-[-1] absolute w-full" src={BackgroundSVG} />
      <div className="w-full F-JC-AI-CENTER flex-col">
        <div className="HeadingText uppercase">Contact Us</div>
        <div className="underline max_md:w-[1.5rem]"></div>
      </div>
      <div className="contact-card mt-9 F-JC-AI-CENTER">
        <form
          className="ContactCard gap-4 flex flex-col w-[40%] max_xl:w-[45%] max_md:w-[50%] max_720:w-[70%] max_sm:w-[80%]"
          method="post"
        >
          <div>
            <label htmlFor="fname" className="w-full text-arrow-blue">
              Full Name*
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full text-classic-dark-bluish py-4 px-3 F-JC-AI-CENTER border-b focus:border-arrow-blue ${
                errObj.name ? 'border-red' : 'border-arrow-blue'
              }`}
              placeholder="Full Name"
              required={true}
            />
          </div>
          <div className="flex gap-4 max_xl:flex-wrap">
            <div className="w-full">
              <label htmlFor="email" className="w-full text-arrow-blue">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full text-classic-dark-bluish py-4 px-3 F-JC-AI-CENTER border-b ${
                  errObj.email ? 'border-red' : 'border-arrow-blue'
                } focus:border-arrow-blue`}
                placeholder="Email Address"
                required={true}
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="w-full text-arrow-blue">
                Phone Number*
              </label>
              <PhoneInput
                name="phone"
                id="phone"
                value={phone}
                onChange={(value) => setPhone(value)}
                className={`w-full text-classic-dark-bluish py-4 px-3 F-JC-AI-CENTER border-b ${
                  errObj.phone ? 'border-red' : 'border-arrow-blue'
                } focus:border-arrow-blue`}
                placeholder="Phone Number"
                defaultCountry="US"
                required={true}
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="Message" className="w-full text-arrow-blue">
              Message
            </label>
            <textarea
              className="w-full text-classic-dark-bluish py-4 px-3 border-b border-arrow-blue focus:border-arrow-blue"
              placeholder="Type Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
          </div>
          <div className="button mt-8 w-full">
            <button
              type="submit"
              className="py-3 F-JC-AI-CENTER w-full GradientButton cursor-pointer"
              onClick={handleSubmit}
            >
              Submit
            </button>
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
                  className={`w-5 h-5 rounded-none border-1 border-solid ${
                    errObj.checked ? 'border-red' : 'border-arrow-blue'
                  }`}
                  checked={isChecked}
                  onChange={handleCheck}
                />
              )}
              <label
                htmlFor="check"
                className="text-arrow-blue max_md:text-VerySmallSize"
              >
                I'm not a robot*
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

export default ContactUs;
