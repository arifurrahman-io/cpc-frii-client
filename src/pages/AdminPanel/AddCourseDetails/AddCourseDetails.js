import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../../shared/Loading";

const AddCourseDetails = () => {
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

  const handleCourse = (data) => {
    saveData(
      data.courseName,
      data.courseId,
      data.cLevel,
      data.cType,
      data.cFee,
      data.audience1,
      data.audience2,
      data.outCome1,
      data.outCome2,
      data.outCome3,
      data.description1,
      data.description2,
      data.description3,
      data.photoURL
    );
  };

  const saveData = (
    courseName,
    courseId,
    cLevel,
    cType,
    cFee,
    audience1,
    audience2,
    outCome1,
    outCome2,
    outCome3,
    description1,
    description2,
    description3,
    photoURL,
  ) => {
    const user = {
      courseName,
      courseId,
      cLevel,
      cType,
      cFee,
      audience1,
      audience2,
      outCome1,
      outCome2,
      outCome3,
      description1,
      description2,
      description3,
      photoURL,
    };
    fetch("https://server.arifur.xyz/postcourse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Data Inserted Successfuly!");
        reset();
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="py-4 lg:py-8">
        <div className="">
          <div onSubmit={handleSubmit} className="card w-full">
            <h2 className="text-center text-2xl font-semibold">
              Add a Course with Details
            </h2>
            <form onSubmit={handleSubmit(handleCourse)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="form-control w-full mt-5">
                <select
                  {...register("courseName")}
                  className="input input-bordered w-full">
                  {courses.map((course, i) => (
                    <option key={i} value={course.courseName} >{i+1}. {course.courseName}</option>
                  ))}
                </select>
              </div>

              <div className="form-control w-full mt-5">
                <select
                  {...register("courseId")}
                  className="input input-bordered w-full">
                  {courses.map((course, i) => (
                    <option key={i} value={course._id} >{i+1}. {course._id}</option>
                  ))}
                </select>
              </div>
              </div>
              

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="form-control w-full mr-2 mt-5">
                  <select
                    {...register("cLevel")}
                    className="input input-bordered w-full">
                    <option value="n/a">Select Course Level</option>
                    <option value="All Levels">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermedium">Intermedium</option>
                    <option value="Advance">Advance</option>
                  </select>
                </div>

                <div className="form-control w-full mr-2 mt-5">
                  <select
                    {...register("cType")}
                    className="input input-bordered w-full">
                    <option value="n/a">Course Type</option>
                    <option value="Paid">Paid</option>
                    <option value="Free">Free</option>
                  </select>
                </div>

                <div className="form-control w-full mt-5">
                  <input
                    type="text"
                    {...register("cFee")}
                    className="input input-bordered w-full "
                    placeholder="Course Fee"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="form-control w-full mt-5">
                  <input
                    type="text"
                    {...register("audience1", {
                      required: "Audience is Required.",
                    })}
                    className="input input-bordered w-full "
                    placeholder="Audience I"
                  />
                  {errors.audience1 && (
                    <p className="text-red-600" role="alert">
                      {errors.audience1?.message}
                    </p>
                  )}
                </div>
                <div className="form-control w-full mt-5">
                  <input
                    type="text"
                    {...register("audience2", {
                      required: "Audience is Required.",
                    })}
                    className="input input-bordered w-full "
                    placeholder="Audience II"
                  />
                  {errors.audience2 && (
                    <p className="text-red-600" role="alert">
                      {errors.audience2?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("outCome1", {
                    required: "Course Outcome is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Course Outcome I"
                />
                {errors.outCome1 && (
                  <p className="text-red-600" role="alert">
                    {errors.outCome1?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("outCome2", {
                    required: "Course Outcome is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Course Outcome II"
                />
                {errors.outCome2 && (
                  <p className="text-red-600" role="alert">
                    {errors.outCome2?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("outCome3", {
                    required: "Course Outcome is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Course Outcome III"
                />
                {errors.outCome3 && (
                  <p className="text-red-600" role="alert">
                    {errors.outCome3?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="textarea"
                  {...register("description1", {
                    required: "Course Description is Required.",
                  })}
                  className="input input-bordered w-full h-20"
                  placeholder="Course Description I"
                />
                {errors.description1 && (
                  <p className="text-red-600" role="alert">
                    {errors.description1?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="textarea"
                  {...register("description2", {
                    required: "Course Description is Required.",
                  })}
                  className="input input-bordered w-full h-20"
                  placeholder="Course Description II"
                />
                {errors.description2 && (
                  <p className="text-red-600" role="alert">
                    {errors.description2?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="textarea"
                  {...register("description3", {
                    required: "Course Description is Required.",
                  })}
                  className="input input-bordered w-full h-20"
                  placeholder="Course Description III"
                />
                {errors.description3 && (
                  <p className="text-red-600" role="alert">
                    {errors.description3?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("photoURL", {
                    required: "Photo URL is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Featured Photo URL"
                />
                {errors.photoURL && (
                  <p className="text-red-600" role="alert">
                    {errors.photoURL?.message}
                  </p>
                )}
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

export default AddCourseDetails;
