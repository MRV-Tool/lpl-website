import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

const ProcessSwiper = ({ processList,setActiveIndex }) => {
    const activeSlideRef = useRef(null);
    const swiperRef = useRef(0);

  useEffect(() => {
    const handleSlideChange = () => {
      if (swiperRef.current) {
        activeSlideRef.current = swiperRef.current.swiper.activeIndex;
        setActiveIndex(activeSlideRef.current);
      }
    };
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", handleSlideChange);
    }
  }, []);

  
  return (
    <div className="mt-8">
      <Swiper
        ref={swiperRef}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {processList.map((process) => (
          <SwiperSlide>
            <div className="mt-3 flex flex-col w-[70%] float-end items-start h-full justify-center">
  
              <div className="">
                <div className="text-left ProcessHeading text-classic-dark-bluish">
                  {process.title}
                </div>
              </div>
              <div className="w-[85%] h-[30%]">
                <div className="text-left ProcessSubHeading text-classic-dark-bluish ">
                  {process.text}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProcessSwiper;
