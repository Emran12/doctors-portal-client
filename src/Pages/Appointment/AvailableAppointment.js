import { format } from "date-fns";
import React from "react";
import { useEffect, useState } from "react";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl text-secondary text-center mt-10">
        Available services on {format(date, "PP")}
      </h1>
      <div>{services.length}</div>
    </div>
  );
};

export default AvailableAppointment;
