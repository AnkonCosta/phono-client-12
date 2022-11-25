import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h3 className="text-2xl ">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Model</th>
              <th>Location</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {bookings.map((booking, i) => (
              <tr>
                <th>{i+1}</th>
                <td>{booking.name}</td>
                <td>{booking.model}</td>
                <td>{booking.location}</td>
                <td>{booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
