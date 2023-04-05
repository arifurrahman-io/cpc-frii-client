import { useQuery } from "@tanstack/react-query";
import React from "react";
import AllCourseCard from "./AllCourseCard";

const Courses = () => {
  const url = `https://server.cpc.frii.edu.bd/courses`;
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="my-10 max-w-[1280px] mx-auto">
      <h2 className="text-center font-bold text-4xl my-10 font-ubuntu">
        Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 mb-40">
        {courses?.length &&
          courses.map((course) => (
            <AllCourseCard key={course._id} course={course}></AllCourseCard>
          ))}
      </div>
    </div>
  );
};

export default Courses;
