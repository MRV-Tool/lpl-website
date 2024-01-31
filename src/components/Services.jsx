import React from "react";
import { CardList } from "../common/constants";

const Services = React.forwardRef((props,ref) => {
  return (
    <div ref={ref}>
      <div id="services" className="my-28 max_md:my-14">
        <div className="w-full text-center">
          <div className="w-full F-JC-AI-CENTER flex-col">
            <div className="HeadingText uppercase">Services</div>
            <div className="underline max_md:w-[1.5rem]"></div>
          </div>
          <div className="HeadingText mt-9 text-arrow-blue">
            We build solutions
          </div>
          <div className="F-JC-AI-CENTER">
            <div className="SubHeadingText my-5 w-[40%] max_xl:w-[45%] max_md:w-[50%] max_720:w-[85%]">
              We work with you to understand your business needs and help you
              reach your goals by building solutions
            </div>
          </div>
          <div className="Card-List F-JC-AI-CENTER mt-9 gap-20 flex-col">
            {CardList &&
              CardList.map((cards) => (
                <div
                  className="card grid-cols-2 max_xl:grid-cols-1 relative"
                  key={cards.id}
                >
                  {cards.id % 2 != 0 ? (
                    <>
                      <div className="line upper right absolute max_xl:hidden"></div>
                      <div className="lg:justify-self-start shadow-left p-6 max_xl:justify-self-center">
                        <img
                          className="box-shadow"
                          src={cards.image}
                          alt={cards.alt}
                        />
                      </div>
                      <div className="details lg:justify-self-end text-left max_xl:text-center w-[35rem] max_xl:w-[28rem] max_md:w-[30rem] max_sm:w-[20rem] max_md:mt-5 max_xl:justify-self-center">
                        <div className="CardTitle">{cards.title}</div>
                        <div className="SubHeadingText">{cards.text}</div>
                      </div>
                      <div className="line lower right absolute max_xl:hidden"></div>
                    </>
                  ) : (
                    <>
                      <div className="line upper left absolute max_xl:hidden"></div>
                      <div className="lg:justify-self-start details max_md:mt-5 text-left w-[35rem] max_xl:w-[28rem] max_md:w-[30rem] max_sm:w-[20rem] max_xl:text-center max_xl:row-start-2 max_xl:justify-self-center">
                        <div className="CardTitle">{cards.title}</div>
                        <div className="SubHeadingText">{cards.text}</div>
                      </div>
                      <div className="lg:justify-self-end shadow-right p-5 max_md:row-start-1 max_xl:justify-self-center ">
                        <img
                          className="box-shadow"
                          src={cards.image}
                          alt={cards.alt}
                        />
                      </div>
                      <div className="line lower left absolute max_xl:hidden"></div>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Services;
