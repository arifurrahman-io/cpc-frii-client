import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Banner.css"

const Banner = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1280px] mx-auto mt-10 md:mt-20 px-0 gap-3">
        <div className="card-body w-[350px] md:w-[400px] lg:w-[500px] mx-auto">
        <img src={logo} className="" alt="" />
        </div>
        <div className="my-auto px-8">
          <p className="text-xl md:text-3xl font-semibold font-signika my-2">
            Hi, I'm <span className="text-indigo-700">Arifur Rahman</span> 
          </p>
          <h2 className="card-title text-2xl md:text-5xl font-semibold font-ubuntu my-2">
            Professional Website Developer
          </h2>
          <p className="text-lg mt-6 text-justify font-signika">
          As a full-stack developer, I am proficient in a wide range of technologies, from HTML, CSS, and JavaScript for front-end development to frameworks like React.js and Angular for building dynamic user interfaces. On the back end, I am skilled in languages such as Node.js, Python, and PHP, along with databases like MySQL, MongoDB, and SQLite.
          </p>
          <div className="card-actions justify-end mt-5">
            <Link to="/contact" className="btn btn-primary font-semibold">
              Hire Me
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Banner;
