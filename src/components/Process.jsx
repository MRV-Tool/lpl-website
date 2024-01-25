import React, { useEffect, useState, useRef } from 'react';
import { ProcessList } from '../common/constants';
import ProcessGrid from '../common/ProcessGrid';
// import { useInView } from 'react-intersection-observer';

const Process = React.forwardRef((props) => {
  const { serviceView, reviewView } = props;
  const processCard = useRef();
  const [processState, setProcessState] = useState(ProcessList);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  // const [ref1, inView] = useInView({
  //   threshold: 1,
  // });
  const [processIsInView, setProcessIsInView] = useState(false);
  const processRef = useRef();
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

  const handleStyle = (id, data) => {
    let update = data.map((value, index) => {
      console.log('value, index', value, index);
      if (id == index) {
        console.log("111111111111");
        return {
          ...value,
          style: { border: 'none', boxShadow: '0px 0px 20px 0px #0000000D' },
        };
      } else if (id > index) {
        console.log('222222222222');
        return { ...value, view: true, style: { border: '#3500D4 2px solid' } };
      }
      else {
        console.log('333333333333');
        return {
          ...value,
          view: false,
          style: { border: '#BAACE4 2px solid' },
        };
      }
    });
    // console.log('id,data =====',id,data)
    setProcessState(update);
  };

  // const updateProcessList = (view, altText) => {
  //   let id;
  //   let update = processState.map((data, index) => {
  //     if (data.alt === altText) {
  //       if (altText === 'research-icon' && scrollPercentage > 10) {
  //         id = index;
  //         return { ...data, view: view };
  //       }
  //       if (altText === 'design-icon' && scrollPercentage > 30.5) {
  //         id = index;
  //         return { ...data, view: view };
  //       } else if (altText === 'development-icon' && scrollPercentage > 50) {
  //         id = index;
  //         return { ...data, view: view };
  //       } else if (altText === 'deployment-icon' && scrollPercentage > 70) {
  //         id = index;
  //         return { ...data, view: view };
  //       } else {
  //         return { ...data };
  //       }
  //     } else {
  //       return { ...data };
  //     }
  //   });
  //   handleStyle(id, update);
  // };


   const updateProcessList = (view, altText) => {
     let id;
     let update = processState.map((data, index) => {
       if (data.alt === altText) {
         id = index;
         return { ...data, view: view };
       } else {
         return { ...data };
       }
     });
     handleStyle(id, update);
   };

  const handleScroll = () => {
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollY = window.scrollY - 1900;
    const windowHeight = 1000;
    const scrollHeight = 3000;
    const percentage = (scrollY / (scrollHeight - windowHeight)) * 100;
    if (percentage < 100) setScrollPercentage(percentage);
  };

  useEffect(() => {
    if (processIsInView) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [processIsInView]);

  useEffect(() => {
    if (reviewView) {
      let updated = processState.map((process) => {
        return {
          ...process,
          view: true,
          style: { border: '#3500D4 2px solid' },
        };
      });
      setProcessState(updated);
    }
    if (serviceView) {
      let updated = processState.map((process) => {
        return {
          ...process,
          view: false,
          style: { border: '#BAACE4 2px solid' },
        };
      });
      setProcessState(updated);
    }
  }, [serviceView, reviewView]);

  return (
    <div id="process" className="my-28">
      <div className="w-full F-JC-AI-CENTER flex-col">
        <div className="HeadingText uppercase">Process</div>
        <div className="underline max_md:w-[1.5rem]"></div>
        <div className="my-8">
          <div
            // ref={(node) => {
            //   processCard.current = node;
            //   ref1(node);
            // }}
            id="scrollContainer"
            className="mx-auto w-[80%] relative py-8 max_md:w-full"
          >
            <div className="w-[500px] h-[500px] ellipse absolute top-0 -right-[500px] opacity-70"></div>
            <div
              className="full F-JC-AI-CENTER -mb-2 max_md:block max_md:ml-[24%]"
              ref={processRef}
            >
              <div className="inverted"></div>
            </div>
            <div
              className="absolute vertical-line border border-classic-dark-bluish left-[50%] z-[-1] max_md:left-[25%]"
              style={{ height: `${scrollPercentage}%` }}
            ></div>
            <div className="pt-28 max_sm:pt-20">
              {processState.map((process, index) => (
                <ProcessGrid
                  active={process.active}
                  inactive={process.inactive}
                  heading={process.title}
                  subheading={process.text}
                  index={process.id}
                  altText={process.alt}
                  iconView={process.view}
                  handleUpdate={updateProcessList}
                  iconStyle={process.style}
                  processPercent={scrollPercentage}
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
});

export default Process;
