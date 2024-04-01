import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="footer footer-center bg-indigo-200 ">
      <div className="grid grid-cols-1 md:grid-cols-5 pt-10 text-lg font-semibold">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/courses" className="link link-hover">
          Courses
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/signin" className="link link-hover">
          Signin
        </Link>
        <Link to="/signup" className="link link-hover">
          Signup
        </Link>
      </div>
      <div className="bg-indigo-300 w-full">
        <p className="text-sm">Copyright © {year} - All right reserved by Arifur Rahman</p>
      </div>
    </footer>
  );
};

export default Footer;
