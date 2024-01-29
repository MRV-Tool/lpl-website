import React, { useEffect, useState, useRef } from "react";
import { ProcessList } from "../common/constants";
import ProcessGrid from "../common/ProcessGrid";
import ProcessSwiper from "../common/ProcessSwiper";
const Process = React.forwardRef((props) => {
  const { serviceView, reviewView } = props;
  const [processState, setProcessState] = useState(ProcessList);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [processIsInView, setProcessIsInView] = useState(false);
  const processRef = useRef();
  const [updatedIndex, setUpdatedIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(0);

  const useFeatureObserver = (ref) => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProcessIsInView(true);
        } else {
          // Handle when the entry is not intersecting if needed
        }
      });
    };

    useEffect(() => {
      const target = ref.current;
      if (!target) return;

      const options = {
        root: null,
        threshold: 1,
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(target);

      // Clean up the observer when the component unmounts
      return () => observer.disconnect();
    }, [ref, processIsInView]);
  };

  useFeatureObserver(processRef);

  useEffect(() => {
    const updateProcessList = () => {
      let update = processState.map((process, index) => {
        if (index === updatedIndex) {
          return {
            ...process,
            view: true,
            style: { border: "none", boxShadow: "0px 0px 20px 0px #0000000D" },
          };
        } else if (index < updatedIndex) {
          return {
            ...process,
            view: true,
            style: { border: "#3500D4 2px solid" },
          };
        } else {
          return {
            ...process,
            view: false,
            style: { border: "#BAACE4 2px solid" },
          };
        }
      });
      setProcessState(update);
    };
    if (updatedIndex != -1 && updatedIndex!=4) {
      updateProcessList();
    } else if(updatedIndex==4){
      let updated = processState.map((process) => {
        return {
          ...process,
          view: true,
          style: { border: "#3500D4 2px solid" },
        };
      });
      setProcessState(updated);
    }
    else{
      let updated = processState.map((process) => {
        return {
          ...process,
          view: false,
          style: { border: "#BAACE4 2px solid" },
        };
      });
      setProcessState(updated);
    }
  }, [updatedIndex]);

  const handleScroll = () => {
    const scrollY = window.scrollY - 1900;
    const windowHeight = 1000;
    const scrollHeight = 3000;
    const percentage = (scrollY / (scrollHeight - windowHeight)) * 100;

    if(percentage>0 && percentage<12.5) setUpdatedIndex(-1)
    else if (percentage >= 12.5 && percentage < 34.6) setUpdatedIndex(0);
    else if (percentage >= 34.6 && percentage < 56.55) setUpdatedIndex(1);
    else if (percentage >= 56.55 && percentage < 75.95) setUpdatedIndex(2);
    else if (percentage >= 75.95 && percentage < 99.5) setUpdatedIndex(3);
    else setUpdatedIndex(4)
    
    if (percentage < 100) setScrollPercentage(percentage);
  };

  useEffect(() => {
    if (processIsInView) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [processIsInView]);

  return (
    <div id="process" className="my-28">
      <div className="w-full F-JC-AI-CENTER flex-col">
        <div className="HeadingText uppercase">Process</div>
        <div className="underline max_md:w-[1.5rem]"></div>
        {/* desktop view */}
        <div className="my-9 max_sm:hidden">
          <div
            id="scrollContainer"
            className="mx-auto w-[80%] relative py-8 max_md:w-full"
          >
            <div className="w-[500px] h-[500px] ellipse absolute top-0 -right-[500px] opacity-70"></div>
            <div className="full F-JC-AI-CENTER" ref={processRef}>
              <div className="inverted max_md:mr-0.5 max_720:mr-0"></div>
            </div>
            <div
              className="absolute vertical-line border border-classic-dark-bluish left-[50%] z-[-1] "
              style={{ height: `${scrollPercentage}%` }}
            ></div>
            <div className="absolute vertical-line border border-lavendar left-[50%] z-[-2] h-full "></div>
            <div className="pt-28">
              {processState.map((process, index) => (
                <ProcessGrid
                  key={process.id}
                  active={process.active}
                  inactive={process.inactive}
                  heading={process.title}
                  subheading={process.text}
                  index={process.id}
                  altText={process.alt}
                  iconView={process.view}
                  iconStyle={process.style}
                  processPercent={scrollPercentage}
                />
              ))}
            </div>

            <div className="w-[230px] h-[230px] ellipse-2 absolute bottom-96 -left-0"></div>
          </div>
        </div>
        <div className="w-[80%] mx-auto F-JC-AI-CENTER max_sm:hidden">
          <div className="bg-classic-dark-bluish w-[10px] h-[10px] rounded-full"></div>
        </div>

        {/* mobile view */}

        <div className="relative hidden max_sm:block mt-8 w-full px-2 pb-8">
        <div
          style={{ filter: "blur(200px)" }}
          className="hidden max_sm:block w-[250px] h-[250px] -right-56 bg-button-blue  opacity-50 absolute rounded-full"
        ></div>
        <div
          style={{ filter: "blur(100px)" }}
          className="hidden max_sm:block w-[93px] h-[93px] bottom-10 -left-10 bg-button-blue absolute  opacity-70 rounded-full"
        ></div>
          <div className=" absolute left-[17.5%] inverted"></div>
          <div className="absolute w-[1px] bg-classic-dark-bluish left-[19%] z-[-1] h-full"></div>
          <div
            className="absolute bg-white F-JC-AI-CENTER w-[58px] h-[58px] justify-self-center left-[11%] top-[30%]"
            style={{ boxShadow: "0px 0px 20px 0px #0000000D" }}
          >
            <img src={ProcessList[activeIndex].active} className="w-[40%]" />
          </div>
          <ProcessSwiper
            processList={ProcessList}
            setActiveIndex={setActiveIndex}
          />
          <div className="w-[8px] h-[8px] bg-classic-dark-bluish rounded-full absolute bottom-0 left-[17.8%] "></div>
        </div>
      </div>
    </div>
  );
});

export default Process;
