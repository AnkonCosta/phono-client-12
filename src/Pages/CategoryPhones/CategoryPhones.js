import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import PhoneCards from "./PhoneCards";

const CategoryPhones = () => {
  const phones = useLoaderData();
  
  const [availablePhone, setAvailablePhone] = useState(null);
  return (
    <div className="w-10/12 mx-auto ">
      <h2 className="text-3xl fw-bold">
        Get the best {phones[1].brand} second hand phones
      </h2>

      <div className="my-10 grid grid-cols-3 gap-6">
        {phones?.map((phone) => (
          <PhoneCards key={phone._id} setAvailablePhone={setAvailablePhone} phone={phone}></PhoneCards>
        ))}
      </div>
      
      <BookingModal availablePhone={availablePhone}></BookingModal>
    </div>
  );
};

export default CategoryPhones;
