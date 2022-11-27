import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js'
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PK_KEY);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl">Payment for {booking?.model}</h2>
      <p>
        Please pay
        <span className="text-primary font-bold"> $ {booking?.price}, </span>
        that was ordered on,
        <span className="text-primary font-bold">
          {" "}
          {booking?.time.slice(0, 11)}
        </span>
      </p>

      <div className="w-96  my-12">
      <Elements stripe={stripePromise}>
      <CheckoutForm booking={booking} />
    </Elements>
      </div>
    </div>
  );
};

export default Payment;
