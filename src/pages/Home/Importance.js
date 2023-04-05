import React from "react";
import img1 from "../../assets/about.png";
import { Link } from "react-router-dom";

const Importance = () => {
  return (
    <div className="card lg:card-side max-w-[1280px] mx-auto my-20 lg:my-36">
      <figure className="lg:w-2/5">
        <img src={img1} alt="Album" />
      </figure>
      <div className="card-body lg:w-3/5 md:my-auto">
        <h2 className="card-title text-2xl lg:text-4xl my-4 font-ubuntu">
          Importance of Programming Skills
        </h2>
        <p className="text-lg lg:text-xl text-justify font-signika">
          With the increasing demand for digitalization in almost all
          industries, programming skills have become one of the most in-demand
          job skills. Many companies are looking for employees who have the
          ability to code, develop software, and create new technologies.
        </p>
        <p className="text-lg lg:text-xl text-justify font-signika">
          Programming skills enable individuals to automate tasks, making them
          more efficient and effective. This can be applied to a wide range of
          fields, from manufacturing and transportation to healthcare and
          finance.
        </p>
        <p className="text-lg lg:text-xl text-justify font-signika">
          With programming skills, individuals can develop new technologies,
          applications, and software that can transform and improve the world in
          which we live. Programming skills are essential for the development of
          new technologies such as artificial intelligence, machine learning,
          and the Internet of Things.
        </p>
        <div className="card-actions justify-end">
          <Link to="/courses" className="btn btn-primary font-pt">
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Importance;
