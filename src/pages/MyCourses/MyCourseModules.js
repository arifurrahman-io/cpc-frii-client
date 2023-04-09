import React, { useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import VideoModal from "../Modal/VideoModal";
import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import useFemale from "../../hooks/useFemale";
import { AuthContext } from "../../context/AuthProvider";
import { FaFacebookF } from "react-icons/fa";

const MyCourseModules = () => {
  const modules = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isFemale] = useFemale(user?.email);
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
      {isFemale ? (
        <>
          {
            <p className="mt-5 text-center font-acme">
              Join to Our Facebook Group:
              <Link
                to="https://www.facebook.com/groups/friicpcf"
                className="btn btn-sm btn-primary text-white ml-3"
              >
                <FaFacebookF />
                Join Now!
              </Link>
            </p>
          }
        </>
      ) : (
        <>
          {
            <p className="mt-5 text-center font-acme">
              Join to Our Facebook Group:
              <Link
                to="https://www.facebook.com/groups/friicpc"
                className="btn btn-sm btn-primary text-white ml-3"
              >
                <FaFacebookF />
                Join Now!
              </Link>
            </p>
          }
        </>
      )}

      {<VideoModal selectedModule={selectedModule}></VideoModal>}
    </div>
  );
};

export default MyCourseModules;
