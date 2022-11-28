import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";

const Advertise = () => {
//   const [phones, setPhones,] = useState({});
//   useEffect(() => {
//     fetch(`http://localhost:5000/ads`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setPhones(data);
//       });
//   }, []);

  const [singlePhone, setSinglePhone] = useState({});
  const {
    data: phones = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/ads`
      );
      const data = await res.json();
      return data;
    },
  });

if(isLoading){
    return<Loading></Loading>
}
 if(phones.length>0){
    return (
        <div className="w-11/12 mx-auto my-12">
          <h1 className="text-2xl my-5">Advertisements</h1>
          <div className="grid md:grid-cols-3 gap-3">
          {phones &&
            phones?.map((phone) => (
              <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <figure>
                  <img
                    style={{ height: "200px" }}
                    src={phone?.image_url}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">
                      $ {phone?.resale_price}
                    </div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
 }
};

export default Advertise;
