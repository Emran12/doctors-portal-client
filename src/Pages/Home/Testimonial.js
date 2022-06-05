import React from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import TestimonialDetail from "./TestimonialDetail";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: people1,
    },
    {
      id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: people2,
    },
    {
      id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: people3,
    },
  ];
  return (
    <div className="mt-12 px-16">
      <h1 className="text-3xl text-primary font-bold">Testimonial</h1>
      <p className="text-2xl mb-6">What our patients Says</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {data.map((data) => (
          <TestimonialDetail
            key={data.id}
            testimonial={data}
          ></TestimonialDetail>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
