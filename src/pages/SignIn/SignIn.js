import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import img from "../../assets/signin.jpg";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);

  const { loginError, setLoginError } = useState("");

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const navigate = useNavigate();

  const from = "/";

  if (token) {
    navigate(from);
  }

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        setLoginUserEmail(data.email);
        toast.success("Login Successful!");
        reset();
      })
      .catch((e) => {
        console.error(e);
        if (e.code === "auth/user-not-found") {
          toast.error("Make sure you registered with this email address.");
        }
        if (e.code === "auth/wrong-password") {
          toast.error("Wrong Password!");
        }
        setLoginError(e);
      });
  };

  return (
    <div className="py-8 lg:py-16">
      <div className="hero-content flex-col lg:flex-row mx-auto">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <img src={img} alt=""></img>
        </div>
        <div className="card w-full lg:w-1/2">
          <div onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control w-full ">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email Address is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-600" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full mt-2">
                <input
                  type="password"
                  {...register("password", {
                    required: "Password id Required",
                  })}
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-600" role="alert">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              <input
                className="btn bg-green-400 border-0 w-full mt-5 text-white"
                value="Signin"
                type="submit"
              />

              <div className="mt-8 text-center">
                <p>
                  New to FRII CPC? <Link to="/signup">Sign Up Now</Link>
                </p>
              </div>

              <div>{loginError && <p>{loginError} why not?</p>}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
