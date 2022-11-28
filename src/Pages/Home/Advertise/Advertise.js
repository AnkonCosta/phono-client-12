import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";

const Advertise = () => {
//   const [phones, setPhones,] = useState({});
//   useEffect(() => {
//     fetch(`https://assignment-12-server-ten.vercel.app/ads`)
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
        `https://assignment-12-server-ten.vercel.app/ads`
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
                    {phone?.model}
                    <div className="badge badge-secondary">
                      $ {phone?.resale_price}
                    </div>
                  </h2>
                 
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{phone?.seller_name}</div>
                    <div className="badge badge-outline"> {phone?.location}</div>
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
