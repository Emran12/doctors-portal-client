import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
import bgImg from "../../assets/images/bg.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      className="hero min-h-screen bg-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content  flex-col lg:flex-row-reverse justify-between">
        <img
          width={"594px"}
          src={chair}
          classNmae="max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
