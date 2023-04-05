import React from "react";

const CourseCard = ({ course, setSelectedModule }) => {
  const { lesson, moduleID } = course;
  return (
    <div className="card card-compact">
      <figure></figure>
      <div className="card-actions font-pt">
        <label
          className="btn bg-[#fc7ce4] border-0 w-full justify-start text-xs"
          htmlFor="my-modal-3"
          onClick={() => setSelectedModule(course)}
        >
          <p className="p-2 m-2 h-8 w-8 bg-[#9A208C] text-white rounded-full">
            {moduleID}
          </p>
          {lesson}
        </label>
      </div>
    </div>
  );
};

export default CourseCard;
