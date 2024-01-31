import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ProcessGrid = ({
  active,
  inactive,
  heading,
  subheading,
  index,
  altText,
  iconStyle,
  iconView,
  handleUpdate,
  processPercent,
}) => {
  const [style, setStyle] = useState({});
  const processRef = useRef();
  const iconRef = useRef();

  const [ref, inView] = useInView({
    threshold: 1,
  });

 useEffect(() => {
   if (iconView) {
     setStyle({ animation: 'colorSwap 0.5s ease-in-out', color: '#3500D4' });
   } else {
     setStyle({
       animation: 'reverseColorSwap 0.5s ease-in-out',
       color: '#BAACE4',
     });
   }
 }, [iconView]);

  // useEffect(() => {
  //   if (inView) {
  //     handleUpdate(inView, altText);
  //   }
  // }, [inView]);

  return (
    <div className="py-2 max_md:px-2">
      <div className="my-4 max_sm:my-2">
        <div
          ref={(node) => {
            iconRef.current = node;
            ref(node);
            // ref3(node)
          }}
          className="grid items-end grid-cols-3 max_720:grid-rows-1 w-full"
        >
          {index % 2 === 0 ? (
            <>
              <div
                className="center-icon justify-self-center col-start-2 row-start-1 bg-white border-2 F-JC-AI-CENTER w-[100px] h-[100px] max_md:w-[80px] max_md:h-[80px]"
                style={iconStyle}
              >
                <img
                  className="max_md:w-[40%]"
                  src={iconView ? active : inactive}
                  alt={altText}
                />
              </div>
              <div
                id="process-heading"
                className="-mr-16 col-start-1 row-start-1 justify-self-end"
              >
                <div
                  id={heading}
                  className="ProcessHeading text-right"
                  style={style}
                >
                  {heading}
                </div>
              </div>
              <div
                id="process-subheading"
                className="-mr-16 justify-self-end col-start-1 row-start-2"
              >
                <div
                  id={subheading}
                  className="ProcessSubHeading text-right "
                  style={style}
                >
                  {subheading}
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="center-icon items-center justify-self-center col-start-2 row-start-1 bg-white border-2 F-JC-AI-CENTER w-[6.25rem] h-[6.25rem] max_md:w-[80px] max_md:h-[80px]"
                style={iconStyle}
              >
                <img
                  className="max_md:w-[40%]"
                  src={iconView ? active : inactive}
                  alt={altText}
                />
              </div>
              <div
                id="process-heading"
                className=" -ml-16 col-start-3 row-start-1 justify-self-start "
              >
                <div id={heading} className="ProcessHeading" style={style}>
                  {heading}
                </div>
              </div>
              <div
                id="process-subheading"
                className="-ml-16 justify-self-start col-start-3 row-start-2 "
              >
                <div
                  id={subheading}
                  className="ProcessSubHeading text-left"
                  style={style}
                >
                  {subheading}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessGrid;

