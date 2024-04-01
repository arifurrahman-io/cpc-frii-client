import React from "react";
import { Link } from "react-router-dom";

const MyAllCourseCard = ({ course }) => {
  const { image, courseName } = course;

  console.log(course);

  return (
    <div className="card card-compact shadow bg-violet-200">
      <figure className="h-3/5">
        <img src={image} alt="" className="h-[300px] w-full" />
      </figure>
      <div className="card-body h-2/5">
        <h2 className="card-title font-oswald text-center">{courseName}</h2>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <Link
            to={`/dashboard/coursemodules/${courseName}`}
            className="btn bg-violet-300 border-0 w-full"
            courseName={courseName}
          >
            Start Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAllCourseCard;
