import React from "react";
import { ProcessList } from "../common/constants";
import ProcessGrid from "../common/ProcessGrid";

const Process = () => {
  return (
    <div id="process" className="my-28">
      <div className="w-full F-JC-AI-CENTER flex-col">
        <div className="HeadingText uppercase">Process</div>
        <div className="underline max_md:w-[1.5rem]"></div>
        <div className="my-8">
          <div className="mx-auto w-[80%] relative py-8 max_md:w-full">
            <div className="w-[500px] h-[500px] ellipse absolute top-0 -right-[500px] opacity-70"></div>
            <div className="full F-JC-AI-CENTER -mb-2 max_md:block max_md:ml-[24%]">
              <div className="inverted"></div>
            </div>
            <div className="absolute vertical-line h-[100%] border border-classic-dark-bluish left-[50%] z-[-1] max_md:left-[25%]"></div>
            <div className="py-28">
              {ProcessList.map((process, index) => (
                <ProcessGrid
                  image={process.active}
                  heading={process.title}
                  subheading={process.text}
                  index={process.id}
                  altText={process.alt}
                />
              ))}
            </div>
            <div className="w-[230px] h-[230px] ellipse-2 absolute bottom-96 -left-0"></div>
          </div>
        </div>
        <div className="w-[80%] mx-auto F-JC-AI-CENTER max_md:block max_md:ml-[24%]">
          <div className="bg-classic-dark-bluish w-[10px] h-[10px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Process;
