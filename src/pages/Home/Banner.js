import React from "react";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="card sticky rounded-none w-full bg-base-100 shadow-xl image-full">
      <figure className="rounded-none">
        <img src={banner} alt="Banner" />
      </figure>
      <div className="card-body my-auto mx-auto">
        <p className="text-xl lg:text-3xl font-semibold font-signika">
          Faizur Rahman Ideal Institute
        </p>
        <h2 className="card-title text-2xl lg:text-5xl font-semibold font-ubuntu">
          Computer And Programming Club
        </h2>
        <div className="card-actions justify-start mt-5 font-pt">
          <Link to="/signup" className="btn btn-primary">
            Be a Member
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
