import React from "react";
import {ProcessList} from "../common/constants"

const Process = () => {
  return (
    <div id="process" className="my-20">
      <div className="w-full F-JC-AI-CENTER flex-col">
        <div className="HeadingText uppercase">Process</div>
        <div className="underline max_md:w-[1.5rem]"></div>
        <div className="my-8 relative ">
        <div className="absolute vertical-line h-[100%] border border-classic-dark-bluish left-[50%] z-[-1] max_md:left-[30%]"></div>
          <div className="flex flex-col mx-auto w-[80%] gap-16">
            
            {
              ProcessList.map((list)=>(
                <>
                <div>
                <div className="grid grid-cols-3 items-end w-full gap-0 max_md:grid-cols-2">
                  <div className="bg-white justify-self-center image-box w-[100px] h-[100px] p-4 F-JC-AI-CENTER border-2 border-classic-dark-bluish col-start-2 max_md:col-start-1 max_md:w-[50px] max_md:h-[50px]">
                    <img src={list.image} alt={`process-${list.id}`} />
                  </div>
                  <div className={`justify-self-${list.id%2!=0?'start':'end'} process-content col-start-${list.id%2!=0?3:1} row-start-1 max_md:justify-self-start max_md:col-start-2`}>
                    <div className="HeadingText ">{list.title}</div>
                  </div>
                  <div className={`col-start-${list.id%2!=0?3:1} justify-self-${list.id%2!=0?'start':'end'} row-start-2 max_md:justify-self-start max_md:col-start-2`}>
                    <div className={`SubHeadingText text-${list.id%2!=0?"left":"right"} max_md:text-left`}>{list.text}</div>
                  </div>
                </div>
                </div>
                </>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Process;
