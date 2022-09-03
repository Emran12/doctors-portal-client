import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Info from "./Info/Info";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Treatment from "./Treatment";
import MakeAppointment from "./MakeAppointment";

const Home = () => {
  return (
    <div>
      <div className="px-16">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Treatment></Treatment>
      </div>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
