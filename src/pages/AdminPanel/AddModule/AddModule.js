import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../../shared/Loading";
import { useQuery } from "@tanstack/react-query";

const AddModule = () => {

  const url = `https://server.arifur.xyz/coursename`;
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


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { loading } = useContext(AuthContext);

  const handleModule = (data) => {
    saveData(
      data.courseName,
      data.courseId,
      data.moduleID,
      data.lesson,
      data.url,
      data.assignment
    );
  };

  const saveData = (courseName, courseId, moduleID, lesson, url, assignment) => {
    const user = {
      courseName,
      courseId,
      moduleID,
      lesson,
      url,
      assignment,
    };
    fetch("https://server.arifur.xyz/postlesson", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {});
    toast.success("Data Inserted!");
    reset();
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className=" py-8 lg:py-16">
        <div className="hero-content">
          <div onSubmit={handleSubmit} className="card w-full">
            <h2 className="text-center text-2xl font-semibold">
              Module/Lesson Upload Panel
            </h2>
            <form onSubmit={handleSubmit(handleModule)}>
              <div className="form-control w-full mr-2 mt-5">
                <select
                  {...register("courseName")}
                  className="input input-bordered w-full">
                  {courses.map((course, i) => (
                    <option key={i} value={course.courseName}>{i+1}. {course.courseName}</option>
                    
                  ))}
                </select>
              </div>

              <div className="form-control w-full mr-2 mt-5">
                <select
                  {...register("courseId")}
                  className="input input-bordered w-full">
                  {courses.map((course, i) => (
                    <option key={i} value={course._id}>{i+1}. {course._id}</option>
                    
                  ))}
                </select>
              </div>
              
              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("moduleID", {
                    required: "Module ID is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Module ID"
                />
                {errors.moduleID && (
                  <p className="text-red-600" role="alert">
                    {errors.moduleID?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("lesson", {
                    required: "Lesson Title is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Lesson Title"
                />
                {errors.lesson && (
                  <p className="text-red-600" role="alert">
                    {errors.lesson?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("url", {
                    required: "Lesson URL is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Lesson URL"
                />
                {errors.url && (
                  <p className="text-red-600" role="alert">
                    {errors.url?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("assignment")}
                  className="input input-bordered w-full "
                  placeholder="Assignment URL"
                />
              </div>

              <input
                className="btn btn-accent mt-5 text-white"
                value="Post"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModule;
