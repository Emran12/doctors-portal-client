import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "../InfoCard/InfoCard";

const Info = () => {
  const data = [
    {
      id: 1,
      img: clock,
      title: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      bgColor: "bg-primary",
    },
    {
      id: 2,
      img: marker,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      bgColor: "bg-accent",
    },
    {
      id: 3,
      img: phone,
      title: "Contact us now",
      description: "Lorem Ipsum is simply dummy text of the pri",
      bgColor: "bg-primary",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-6">
      {data.map((data) => (
        <InfoCard key={data.id} info={data}></InfoCard>
      ))}
    </div>
  );
};

export default Info;
