import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl">Payment for {booking?.model}</h2>
      <p>Please pay<span className="text-primary font-bold"> $ {booking?.price},  </span>that was ordered on,<span  className="text-primary font-bold">  {booking?.time.slice(0,11)}</span></p>
    </div>
  );
};

export default Payment;
