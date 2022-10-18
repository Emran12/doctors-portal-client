import React from "react";

const InfoCard = ({ info }) => {
  return (
    <div className={`card lg:card-side  shadow-xl ${info.bgColor}`}>
      <figure>
        <img className="pl-6" src={info.img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{info.title}</h2>
        <p>{info.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
