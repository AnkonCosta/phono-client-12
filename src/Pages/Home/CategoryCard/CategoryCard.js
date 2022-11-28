import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  //   const { data: phones = [],} = useQuery({
  //     queryKey: ["phones"],
  //     queryFn: async () => {
  //       const res = await fetch(`http://localhost:5000/phones`);
  //       const data = await res.json();
  //       return data;
  //     },
  //   });
  const { data: brands = [] } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/brands`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="w-10/12 mx-auto my-12">
      {<h2 className="text-2xl">Browse The categories you want.</h2>}
      <div className="grid md:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <Link to={`/category/${brand.brand}`} className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={brand.img} alt="brands" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title btn btn-primary uppercase">{brand.brand}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
