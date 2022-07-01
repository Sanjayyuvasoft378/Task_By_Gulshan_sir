import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RegistrationPage } from "../redux/action/Action";
export default function Registration() {
  const dispatch = useDispatch();
  const { register, handleSubmit,formState : { errors } } = useForm();
  const onSubmit = (data) => {
    dispatch(RegistrationPage(data))
    console.log("object",data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Your Acount Here </h1>
        <label htmlFor="">Name</label>
        <br />
        <input {...register("name", { required: "enter name" })} />
        {errors.email && <p>Name  is required.</p>}

        <br /><br />
        <label htmlFor="">Email</label>
        <br />
        <input {...register("email", { required: "enter email address" })} />
        {errors.email && <p>Email  is required.</p>}

        <br /><br />
        <label htmlFor="">Phone</label>
        <br />
        <input {...register("phone", { required: "enter phone Number" })} />
        {errors.email && <p>phone Number  is required.</p>}

        <br /><br />
        <label htmlFor="">Password</label>
        <br />
        <input {...register("password", { required: "enter a password" })} />
        {errors.password && <p>Password  is required.</p>}

        <br /><br />
        <label htmlFor="">User Type</label>
        <br />
        <input
          {...register("userType", {
            required: "please User Type",
          })}
        />
         {errors.password_confirmation && <p>password_confirmation  is required.</p>}

        <br />
        <br />
        <br />
        <input type="submit" />
      </form>
      <h2>If you have already an acount </h2>
      <h3>Please signin here  -<Link to="/"><strong>Signin</strong></Link></h3>
     
    </div>
  );
}
