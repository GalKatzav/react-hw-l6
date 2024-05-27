import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/Context";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const { setUserName } = useContext(AppContext);

  const onSub = (data) => {
    setUserName(data.name); // Set the user's name in the context
    console.log(data);
    reset(); // Reset the form fields
  };

  return (
    <div className="container">
      <h1>Form signup</h1>
      <form onSubmit={handleSubmit(onSub)} className="col-md-6">
        <label>Name:</label>
        <input
          {...register("name", {
            required: true,
            minLength: 2,
            pattern: /^[A-Za-z ]+$/,
          })}
          type="text"
          className="form-control"
        />
        {errors.name && (
          <div className="text-danger">
            * Enter valid name (only letters and spaces, min 2 chars)
          </div>
        )}

        <label>Email:</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          type="text"
          className="form-control"
        />
        {errors.email && <div className="text-danger">* Enter valid email</div>}

        <label>Email again:</label>
        <input
          {...register("email2", {
            required: true,
            validate: (val) => val === getValues("email"),
          })}
          type="text"
          className="form-control"
        />
        {errors.email2 && (
          <div className="text-danger">* Emails do not match</div>
        )}

        <label>Password:</label>
        <input
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          type="password"
          className="form-control"
        />
        {errors.password && (
          <div className="text-danger">
            * Enter valid password (min 6 chars)
          </div>
        )}

        <button className="btn btn-info mt-4">Send</button>
      </form>
    </div>
  );
}
