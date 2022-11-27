import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AddPhones = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);

  const imgHostKey = process.env.REACT_APP_IMGBB_KEY;

  console.log(imgHostKey);

  const handleAddPhone = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const phoneInfo = {
            location: data.location,
            original_price: data.originalPrice,
            years_of_use: data.used,
            resale_price: data.resalePrice,
            verified: false,
            seller_name: user?.displayName,
            email: user?.email,
            model: data.model,
            image_url: imgData.data.url,
            brand:data.brand
          };
          console.log(phoneInfo);
          // save phone info to database
          fetch(`http://localhost:5000/phones`,{
            method:'POST',
            headers:{
              'content-type':'application/json',
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(phoneInfo)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            toast.success(`Phone added successfully`);
          })
        }
      });
  };
  return (
    <div className=" p-7">
      <h2 className="text-4xl">Add A Phone</h2>
      <form onSubmit={handleSubmit(handleAddPhone)}>
        <div className="flex gap-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              disabled
              {...register("name")}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              value={user?.email}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Years of Use</span>
            </label>
            <input
              type="text"
              {...register("used", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              {...register("originalPrice", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Model</span>
              </label>
              <input
                type="text"
                {...register("model", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Brand</span>
              </label>
              <select
                {...register("brand", {
                  required: true,
                })}
                className="select input-bordered w-full max-w-xs"
              >
                <option value="apple">apple</option>
                <option value="xiaomi">xiaomi</option>
                <option value="oneplus">oneplus</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Phone"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddPhones;
