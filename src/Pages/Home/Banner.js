import React from "react";
import chair from "../../assets/images/chair.png";
import bgImg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-screen bg-white"
        style={{ backgroundImage: `url(${bgImg}) ` }}
      >
        <div class="grid lg:grid-cols-2">
          <div className="px-16">
            <h1 class="text-5xl font-bold ">Your New Smile Starts Here</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
