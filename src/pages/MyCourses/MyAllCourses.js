import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyAllCourseCard from "./MyAllCourseCard";
import { Link } from "react-router-dom";

const MyAllCourses = () => {
  const { user } = useContext(AuthContext);

  const url = `https://server.arifur.xyz/mycourses/${user?.email}`;
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
    <div>
      <div>
        {courses?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {courses.filter((item) => item.status === "verified").map((course) => (
              <MyAllCourseCard
                key={course._id}
                course={course}
              ></MyAllCourseCard>
            ))}
          </div>
        ) : (
          <>
            <p className="text-xl font-pt text-center">
              You are not enrolled in any courses yet. Go to
              <Link to="/courses">
                <span className="btn btn-outline btn-sm ml-2">course page</span>
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default MyAllCourses;
