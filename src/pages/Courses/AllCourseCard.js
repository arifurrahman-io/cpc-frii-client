import React from "react";
import { Link } from "react-router-dom";

const AllCourseCard = ({ course }) => {
  const { courseName, photoURL, description, _id, mentor, designation, photo } =
    course;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={photoURL} alt="" className="h-[250px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-oswald">{courseName}</h2>
        <p>{description?.slice(0, 200)}...</p>
        <div className="card-actions justify-between mt-3">
          <div className="flex">
            <img src={photo} alt="" className="w-10 rounded-full mr-2"></img>
            <div>
              <p className="font-courgette">{mentor}</p>
              <p className="font-ubuntu">{designation}</p>
            </div>
          </div>
          <Link to={`/coursedetails/${_id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCourseCard;
