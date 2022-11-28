import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import UseTitle from "../../../Hooks/useTitle";

const SellerProducts = () => {
  UseTitle('My Products')
  const { user } = useContext(AuthContext);
  const [singlePhone, setSinglePhone] = useState({});
  const {
    data: phones = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-ten.vercel.app/phones?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://assignment-12-server-ten.vercel.app/phones/${id}`, {
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

  const handleAdvertise = (singlePhone) => {
    fetch(`https://assignment-12-server-ten.vercel.app/ads`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singlePhone),
    })
      .then((res) => res.json())
      .then((data) => {
       console.log(data)
      });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {phones.map((phone) => (
              <tr key={phone._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={phone?.image_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{phone?.model}</div>
                      <div className="text-sm opacity-50">
                        {phone?.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>$ {phone?.resale_price}</td>
                <td>
                  {phone?.sold ? (
                    <>
                      <button className="btn btn-primary text-yellow-50 btn-sm">
                        Sold
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-primary text-yellow-50 btn-sm">
                        Available
                      </button>
                    </>
                  )}
                </td>
                <td>
                  {phone?.sold ? (
                    <>
                      {" "}
                      <button className="btn btn-outline btn-primary text-yellow-50 btn-sm">
                        Unavailable
                      </button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <button
                        onClick={() => handleAdvertise(phone)}
                        className="btn btn-outline btn-primary text-yellow-50 btn-sm"
                      >
                        Advertise
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(phone?._id)}
                    className="btn btn-circle btn-sm btn-primary btn-outline"
                  >
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerProducts;
