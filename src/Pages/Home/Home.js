import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Info from "./Info/Info";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div>
      <div className="px-16">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Treatment></Treatment>
      </div>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
