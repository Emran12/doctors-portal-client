import React from "react";
const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {slots.length < 1 ? (
              <span className="text-red-500">service not available</span>
            ) : (
              <span>{slots[0]}</span>
            )}
          </p>
          <div className="card-actions justify-center">
            <label
              for="booking-modal"
              disabled={slots.length === 0}
              onClick={() => setTreatment(service)}
              className="btn btn-secondary text-white uppercase"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
