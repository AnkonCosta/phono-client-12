import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyOrders = () => {
  const { user,setLoading } = useContext(AuthContext);
  console.log(user);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
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
            {bookings &&
              bookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking?.name}</td>
                  <td>{booking?.model}</td>
                  <td>{booking?.location}</td>
                  <td>{booking?.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
