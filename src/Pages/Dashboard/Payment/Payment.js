import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Shared/Loading/Loading";
import UseTitle from "../../../Hooks/useTitle";

const stripePromise = loadStripe(process.env.REACT_APP_PK_KEY);
console.log(stripePromise);

const Payment = () => {
  UseTitle('Payment')
  const booking = useLoaderData();
  const navigation = useNavigation();
  if(navigation.state==='loading'){
    return <Loading></Loading>
  }
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
