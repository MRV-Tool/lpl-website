import React, { useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import Services from "../components/Services";
import Process from "../components/Process";
import Reviews from "../components/Reviews";
import ContactUs from "../components/ContactUs";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactUsRef = useRef(null);

  const [ref1, servicesInView] = useInView({ threshold: 0.5 });
  const [ref2, processInView] = useInView({ threshold: 0.5 });
  const [ref3, reviewsInView] = useInView({ threshold: 0.5 });
  const [ref4, contactUsInView] = useInView({ threshold: 0.5 });

  return (
    <>
      <Layout>
        {/* Use the useRef to get the ref value */}
        <Services
          ref={(node) => {
            servicesRef.current = node;
            ref1(node);
          }}
        />
        <Process
          serviceView={servicesInView}
          reviewView={reviewsInView}
          ref={(node) => {
            processRef.current = node;
            ref2(node);
          }}
        />
        <Reviews
          ref={(node) => {
            reviewsRef.current = node;
            ref3(node);
          }}
        />
        <ContactUs
          ref={(node) => {
            contactUsRef.current = node;
            ref4(node);
          }}
        />
      </Layout>
    </>
  );
};

export default HomePage;
