import React from "react";
import { Link } from "react-router-dom";

const MyAllCourseCard = ({ course }) => {
  const { image, productName, courseId } = course;
  return (
    <div className="card card-compact shadow-xl">
      <figure className="h-3/5">
        <img src={image} alt="" className="h-[300px] w-full" />
      </figure>
      <div className="card-body h-2/5">
        <h2 className="card-title font-oswald text-center">{productName}</h2>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <Link
            to={`/dashboard/coursemodules/${courseId}`}
            className="btn bg-[#F3E8FF] btn-outline border-0 w-full"
            courseId={courseId}
          >
            Start Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAllCourseCard;
