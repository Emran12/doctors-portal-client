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
          <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
          </figure>
          <div className="mt-6">
            <h1>{name}</h1>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetail;
