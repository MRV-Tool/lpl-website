import React from "react";

const ProcessGrid = ({ image, heading, subheading, index, altText }) => {
  return (
    <div className="py-6">
      <div className="my-4">
        <div className="grid grid-cols-3 grid-rows-2 w-full items-end max_md:grid-cols-2">
          {index % 2 === 0 ? (
            <>
              <div
                id="center-icon"
                className="items-center justify-self-center col-start-2 row-start-1 bg-white border-2 border-classic-dark-bluish F-JC-AI-CENTER w-[100px] h-[100px] max_md:col-start-1 max_md:w-[58px] max_md:h-[58px]"
              >
                <img src={image} alt={altText} />
              </div>
              <div id="process-heading" className="-mr-16 col-start-1 row-start-1 justify-self-end max_md:col-start-2 max_md:justify-self-start max_md:-ml-16">
                <div className="HeadingText text-right max_md:text-left">{heading}</div>
              </div>
              <div
                id="process-subheading"
                className="-mr-16 justify-self-end col-start-1 row-start-2 max_md:col-start-2 max_md:justify-self-start max_md:-ml-16 "
              >
                <div className="SubHeadingText text-right max_md:text-left ">{subheading}</div>
              </div>
            </>
          ) : (
            <>
              <div
                id="center-icon"
                className="items-center justify-self-center col-start-2 row-start-1 bg-white border-2 border-classic-dark-bluish F-JC-AI-CENTER w-[100px] h-[100px] max_md:w-[58px] max_md:h-[58px] max_md:col-start-1"
              >
                <img src={image} alt={altText} />
              </div>
              <div id="process-heading" className=" -ml-16 col-start-3 row-start-1 justify-self-start max_md:col-start-2">
                <div className="HeadingText">{heading}</div>
              </div>
              <div
                id="process-subheading"
                className="-ml-16 justify-self-start col-start-3 row-start-2 max_md:col-start-2 "
              >
                <div className="SubHeadingText text-left ">{subheading}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessGrid;

{
  /* <div id="center-icon" className="items-center justify-self-center col-start-2 row-start-1 bg-white border-2 border-classic-dark-bluish F-JC-AI-CENTER w-[100px] h-[100px]">
              <img src={image} alt={altText} />
            </div>
            <div id="process-heading" className={`col-start-${index % 2 === 0 ? "3" : "1"} row-start-1`}>
              <div className="HeadingText">{heading}</div>
            </div>
            <div id="process-subheading" className={`col-start-${index % 2 === 0 ? "3" : "1"} row-start-2`}>
              <div className="SubHeadingText">
                {subheading}
              </div>
            </div> */
}
