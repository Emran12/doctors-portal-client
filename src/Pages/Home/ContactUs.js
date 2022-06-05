import React from "react";
import bgImg from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div className="mt-16" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="flex justify-center items-center">
        <div>
          <div className="pt-6">
            <h1 className="text-primary text-3xl">Contact Us</h1>
            <p className="mb-6 text-white">Stay Connected With us</p>
          </div>
          <form className="grid grid-cols-1 gap-5">
            <input
              className="w-96 h-8 border-2 border-black"
              type="email"
              name=""
              id=""
              placeholder="Enter Email Address"
            />
            <input
              className="w-96 h-8 border-2 border-black"
              type="text"
              name=""
              id=""
              placeholder="Enter Subject"
            />
            <textarea
              className="border-2 border-black"
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <p className="text-center pb-6">
              <button className="text-primary border p-3 w-20">Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
