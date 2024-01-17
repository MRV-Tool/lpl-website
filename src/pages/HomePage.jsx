import React from "react";
import Layout from "../components/layout/Layout";
import Services from "../components/Services";
import Process from "../components/Process";
import Reviews from "../components/Reviews";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <>
      <Layout>
      <Services/>
      <Process/>
      <Reviews/>
      <ContactUs/>
      </Layout>
    </>
  );
};

export default HomePage;
