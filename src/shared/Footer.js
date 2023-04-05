import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/courses" className="link link-hover">
          Courses
        </Link>
        <Link to="/signin" className="link link-hover">
          Signin
        </Link>
        <Link to="/signup" className="link link-hover">
          Signup
        </Link>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by FRII CPC</p>
      </div>
    </footer>
  );
};

export default Footer;
