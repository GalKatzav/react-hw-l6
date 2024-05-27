import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSub = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Form signup</h1>
      <form onSubmit={handleSubmit(onSub)} className="col-md-6">
        <label>Name:</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          type="text"
          className="form-control"
        />
        {errors.name && (
          <div className="text-danger">* Enter valid name (min 2 chars)</div>
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
