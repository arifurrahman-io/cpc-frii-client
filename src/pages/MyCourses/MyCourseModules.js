import React, { useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import VideoModal from "../Modal/VideoModal";
import { useLoaderData } from "react-router-dom";

const MyCourseModules = () => {
  const modules = useLoaderData();
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <div className="my-24 md:mx-10 lg:mx-20">
      <h2 className="text-center font-bold text-4xl my-10 font-ubuntu">
        Modules
      </h2>
      <div>
        {modules?.length ? (
          <span className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {modules.map((course) => (
              <CourseCard
                key={course._id}
                course={course}
                setSelectedModule={setSelectedModule}
              ></CourseCard>
            ))}
          </span>
        ) : (
          <p className="font-pt text-center mx-2">
            The course has not started yet. Once the course starts, you will
            find the course modules here.
          </p>
        )}
      </div>
      {<VideoModal selectedModule={selectedModule}></VideoModal>}
    </div>
  );
};

export default MyCourseModules;
