import React, { useState } from "react";
import { FaSearchLocation, FaCheckCircle } from "react-icons/fa";
import BookingModal from "./BookingModal";

const PhoneCards = ({ phone,setAvailablePhone }) => {
  const {
    location,
    original_price,
    years_of_use,
    resale_price,
    verified,
    seller_name,
    model,
    brand,
    image_url,
  } = phone;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {model}
          <div
            data-tip="Resale Price"
            className="badge tooltip badge-secondary"
          >
            $ {resale_price}
          </div>
        </h2>
        <div className="card-actions ">
          <div className="badge badge-outline font-bold">
            <FaSearchLocation /> {location}
          </div>
          <div className="badge badge-outline font-bold">
            {" "}
            <span className="text-red-500">
              Original Price $ {original_price}
            </span>
          </div>
        </div>
        <div className="card-actions ">
          <div className="badge font-bold badge-outline">
            used {years_of_use}
          </div>
          <div className="badge badge-outline">Posted on 24 nov</div>
        </div>
        <div className="card-actions ">
          <div className="badge badge-outline">
            {seller_name}{" "}
            {verified && (
              <span className="text-blue-500 mx-1">
                <FaCheckCircle />
              </span>
            )}{" "}
          </div>
          <div htmlFor="booking-modal" className="badge badge-outline">
            Book
          </div>
        </div>
        <label onClick={()=>setAvailablePhone(phone)} htmlFor="booking-modal" className="btn">
          Book
        </label>
      </div>
    </div>
  );
};

export default PhoneCards;
