import React from "react";

const TestimonialDetail = ({ testimonial }) => {
  const { img, name, address, description } = testimonial;
  return (
    <div>
      <div class="card w-96 bg-white shadow-xl">
        <div class="card-body items-center text-center">
          <p>{description}</p>
        </div>
        <div className="flex justify-center items-center pb-6">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="pl-6">
            <h1>{name}</h1>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetail;
