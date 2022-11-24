import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../Home/CategoryCard/CategoryCard";
import PhoneCards from "./PhoneCards";

const CategoryPhones = () => {
  const phones = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl fw-bold">Get the best {phones[1].brand} second hand phones</h2>

      {
        phones.map(phone=><PhoneCards key={phone._id} phone={phone}></PhoneCards>)
      }
    </div>
  );
};

export default CategoryPhones;
