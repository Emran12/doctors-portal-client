import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Info from "./Info/Info";
import Services from "./Services";
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
    </div>
  );
};

export default Home;
