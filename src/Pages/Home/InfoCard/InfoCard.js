import React from "react";

const InfoCard = ({ info }) => {
  return (
    <div class={`card lg:card-side  shadow-xl ${info.bgColor}`}>
      <figure>
        <img className="pl-6" src={info.img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{info.title}</h2>
        <p>{info.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
