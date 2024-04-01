import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const AddCourseName = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { loading } = useContext(AuthContext);

  const handleCourse = (data) => {
    saveData(data.name);
  };

  const saveData = (courseName) => {
    const user = {
        courseName
    };

    fetch("https://server.arifur.xyz/dashboard/coursename", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {});
    toast.success("Data Inserted Successfuly!");
    reset();
  };


  return (
    <div>
      <div className="py-4 lg:py-8">
        <div className="">
          <div onSubmit={handleSubmit} className="card w-full">
            <h2 className="text-center text-2xl font-semibold">
              Add a Course Name
            </h2>
            <form onSubmit={handleSubmit(handleCourse)}>
              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("name", {
                    required: "Course Name is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Course Name"
                />
                {errors.name && (
                  <p className="text-red-600" role="alert">
                    {errors.name?.message}
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

export default AddCourseName;
