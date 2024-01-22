import React, { useState } from "react";
import StarSVG from "../assets/images/star.svg";
import OnArrow from "../assets/images/OnArrow.svg";
import OffArrow from "../assets/images/OffArrow.svg";
const Star = () => {
  return <img src={StarSVG} alt="Star" width="24" height="24" />;
};

const StarRating = ({ starCount }) => {
  const stars = Array.from({ length: starCount }, (_, index) => (
    <Star key={index} />
  ));
  return <div className="flex gap-4 max_md:justify-center max_md:items-center">{stars}</div>;
};
const Carousel = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current !== 0) setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current !== slides.length - 1) setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <div
            key={index}
            className="w-full flex flex-wrap justify-evenly items-center flex-shrink-0"
          >
            <div className="max_md:w-[156px] relative">
              <div className="top-10 left-64 absolute w-[3.75rem] h-[3.75rem] rounded-full grad-cirlce-1 bg-[#E7DFFE] max_md:top-3 max_md:left-28"></div>
              <img
                src={s.image}
                alt={s.alt}
              />
              <div className="absolute w-[3.75rem] bottom-14 -left-10  h-[3.75rem] rounded-tl-full grad-cirlce-1 bg-lavendar max_md:bottom-7 max_md:-left-4"></div>
            </div>
            <div className="content flex flex-col w-[39rem] max_md:text-center  max_xl:w-[32rem] max_md:w-full max_md:px-10">
              <div className="HeadingText text-arrow-blue ">{s.name}</div>
              <div className="SubHeadingText text-arrow-blue">
                {s.text.split("\n").map((paragraph, i) => (
                  <p key={i} className="my-3">
                    {paragraph}
                  </p>
                ))}
              </div>
              <StarRating starCount={s.starCount} />
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-[40px] top-1/2 transform -translate-y-1/2"
        onClick={previousSlide}
      >
        <img src={current == 0 ? OffArrow : OnArrow} className="rotate-180" />
      </button>
      <button
        className="absolute right-[40px] top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <img src={current == slides.length - 1 ? OffArrow : OnArrow} />
      </button>
    </div>
  );
};

export default Carousel;
