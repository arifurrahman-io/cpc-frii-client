import React from "react";

const CourseCard = ({ course, setSelectedModule }) => {
  const { lesson, moduleID } = course;
  return (
    <div className="card card-compact">
      <div className="card-actions font-pt">
        <label
          className="btn border-1 hover:border-0 border-purple-500 bg-white hover:bg-purple-200 text-black w-full justify-start text-xs"
          htmlFor="my-modal-3"
          onClick={() => setSelectedModule(course)}
        >
          <p className="p-2 m-2 h-8 w-8 bg-purple-700 text-white rounded-full">
            {moduleID}
          </p>
          <p className="font-ubuntu text-base">{lesson}</p>
        </label>
      </div>
    </div>
  );
};

export default CourseCard;
