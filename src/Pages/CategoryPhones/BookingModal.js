import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const BookingModal = ({ availablePhone,setAvailablePhone }) => {
  //   const {model} = availablePhone;
  const { user } = useContext(AuthContext);
  console.log(user)

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const phoneId=availablePhone._id
    // [3, 4, 5].map((value, i) => console.log(value))
    const booking = {
      name,
      email,
      price,
      phone,
      location,
      model: availablePhone.model,phoneId
    };
    fetch(`https://assignment-12-server-ten.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setAvailablePhone(null)
          toast.success("Booking confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{availablePhone?.model}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              defaultValue={availablePhone?.resale_price}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
