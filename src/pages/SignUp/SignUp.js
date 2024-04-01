import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import Loading from "../../shared/Loading";
import img from "../../assets/signup.jpg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, loading } = useContext(AuthContext);

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        toast.success("User Created Successfully!");
        const userInfo = {
          displayName: data.name,
          phoneNumber: data.phone,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.phone, data.gender);
          })
          .catch((err) => console.error(err));
      })
      .catch((e) => {
        console.error(e);
        if (e.code === "auth/email-already-in-use") {
          toast.error("You have already registered using this email.");
        }
      });
  };

  const saveUser = (
    name,
    email,
    phone,
    gender,
    userType = "student",
    status = "unverified"
  ) => {
    const user = {
      name,
      email,
      phone,
      gender,
      userType,
      status,
    };
    fetch("https://server.arifur.xyz/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
        reset();
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className=" py-8 lg:py-16">
      <div className="hero-content flex-col lg:flex-row mx-auto">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <img src={img} alt="" />
        </div>
        <div onSubmit={handleSubmit} className="card w-full lg:w-1/2">
          <h2 className="text-center text-2xl font-semibold">
            Registration Form for Students
          </h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full mt-5">
              <input
                type="text"
                {...register("name", { required: "Name is Required." })}
                className="input input-bordered w-full "
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-600" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full mt-5">
              <input
                type="number"
                {...register("phone", {
                  required: "Phone Number is Required.",
                })}
                className="input input-bordered w-full "
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-red-600" role="alert">
                  {errors.phone?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full mt-5">
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is Required.",
                })}
                className="input input-bordered w-full "
                placeholder="E-mail"
              />
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full mt-5">
              <select
                {...register("gender")}
                className="input input-bordered w-full">
                <option value="n/a">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div className="form-control w-full mt-5">
              <input
                type="password"
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 charecters or longer.",
                  },
                })}
                className="input input-bordered w-full"
                placeholder="Set Password"
              />
              {errors.password && (
                <p className="text-red-600" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <input
              className="btn bg-primary border-0 w-full mt-5 text-white"
              value="Register"
              type="submit"
            />
          </form>
          <div className="text-center mt-8">
            <p>
              Alrady a registered student?{" "}
              <Link to="/signin">Please Sign In!</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
