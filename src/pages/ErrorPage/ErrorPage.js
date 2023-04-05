import React from "react";
import img from "../../assets/errorpage.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="card card-compact max-w-[1280px] mx-auto bg-base-100 py-20 lg:py-40">
      <figure>
        <img src={img} alt="Error" />
      </figure>
      <div className="card-body mx-auto">
        <h2 className="card-title ">OPPS! PAGE NOT FOUND</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <div className="card-actions justify-center">
          <Link to="/" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
