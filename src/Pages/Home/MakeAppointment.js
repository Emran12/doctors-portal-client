import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <div>
      <div className="mt-24">
        <div
          class="hero  bg-accent text-white"
          style={{ backgroundImage: `url( ${appointment})` }}
        >
          <div class="hero-content flex-col lg:flex-row">
            <img src={doctor} class="max-w-sm rounded-lg mt-[-58px]" alt="" />
            <div className="pl-16">
              <h1 class="text-5xl font-bold text-primary">Appointment</h1>
              <h1 class="text-5xl font-bold">Box Office News!</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
