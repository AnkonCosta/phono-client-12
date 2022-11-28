import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyOrders = () => {
  const { user, setLoading } = useContext(AuthContext);
  console.log(user);
  const url = `https://assignment-12-server-ten.vercel.app/bookings?email=${user?.email}`;

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
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

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://assignment-12-server-ten.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Deleted Successfully");
            refetch();
          }
        });
    }
  };

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
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking?.name}</td>
                  <td>{booking?.model}</td>
                  <td>{booking?.location}</td>

                  <td>{booking?.price}</td>
                  <td>
                    {booking?.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking?._id}`}>
                        {" "}
                        <btn className="btn btn-xs btn-primary">Pay</btn>
                      </Link>
                    )}
                    {booking?.price && booking.paid && (
                      <btn className="btn btn-xs btn-success">Paid</btn>
                    )}
                  </td>
                  <td onClick={() => handleDelete(booking?._id)}>
                    <td>
                      <button className="btn btn-circle btn-sm btn-primary btn-outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
