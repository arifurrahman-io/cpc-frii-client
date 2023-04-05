import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import Loading from "../../shared/Loading";
import { toast } from "react-hot-toast";

const AddCourseDetails = () => {
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
      data.outCome1,
      data.outCome2,
      data.outCome3,
      data.description,
      data.photoURL
    );
  };

  const saveData = (
    courseName,
    courseId,
    outCome1,
    outCome2,
    outCome3,
    description,
    photoURL
  ) => {
    const user = {
      courseName,
      courseId,
      outCome1,
      outCome2,
      outCome3,
      description,
      photoURL,
    };
    fetch("https://server.cpc.frii.edu.bd/postcourse", {
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
              Add a Course with Details
            </h2>
            <form onSubmit={handleSubmit(handleCourse)}>
              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("courseName", {
                    required: "Course Name is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Course Name"
                />
                {errors.courseName && (
                  <p className="text-red-600" role="alert">
                    {errors.courseName?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full mr-2 mt-5">
                <select
                  {...register("courseId")}
                  className="input input-bordered w-full"
                >
                  <option value="n/a">Select Course ID</option>
                  <option value="cpc1">
                    CPC1 - Fundamentals of C Language
                  </option>
                  <option value="cpc2">
                    CPC2 - Fundamentals of HTML and CSS
                  </option>
                  <option value="cpc3">
                    CPC3 - Fundamentals of JavaScript
                  </option>
                </select>
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("outCome1", {
                    required: "Course Outcome is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Course Outcome - 1"
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
                  placeholder="Course Outcome - 2"
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
                  placeholder="Course Outcome - 3"
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
                  {...register("description", {
                    required: "Course Description is Required.",
                  })}
                  className="input input-bordered w-full h-20"
                  placeholder="Course Description"
                />
                {errors.description && (
                  <p className="text-red-600" role="alert">
                    {errors.description?.message}
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
