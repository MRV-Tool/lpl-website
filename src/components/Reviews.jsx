import Carousel from "../common/Carousel";
import React from "react";
import { CarouselContent } from "../common/constants";

const Reviews = () => {
  return (
    <>
      <div id="reviews" className="my-20">
        <div className="w-full F-JC-AI-CENTER flex-col">
          <div className="HeadingText uppercase">Client Reviews</div>
          <div className="underline max_md:w-[1.5rem]"></div>
        </div>
        <div className="w-full mt-12">
          <Carousel slides={CarouselContent} />
        </div>
      </div>
    </>
  );
};

export default Reviews;
