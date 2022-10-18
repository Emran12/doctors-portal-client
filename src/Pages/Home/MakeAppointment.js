import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <div>
      <div className="mt-24">
        <div
          className="hero  bg-accent text-white"
          style={{ backgroundImage: `url( ${appointment})` }}
        >
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={doctor}
              className="max-w-sm rounded-lg mt-[-58px]"
              alt=""
            />
            <div className="pl-16">
              <h1 className="text-5xl font-bold text-primary">Appointment</h1>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
