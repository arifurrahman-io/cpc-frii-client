import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import Loading from "../../shared/Loading";

const AddModule = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { loading } = useContext(AuthContext);

  const handleModule = (data) => {
    saveData(
      data.courseId,
      data.module,
      data.moduleID,
      data.lesson,
      data.url,
      data.assignment
    );
  };

  const saveData = (courseId, module, moduleID, lesson, url, assignment) => {
    const user = {
      courseId,
      module,
      moduleID,
      lesson,
      url,
      assignment,
    };
    fetch("https://server.cpc.frii.edu.bd/postlesson", {
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
              <div className="form-control w-full mr-2 mt-5">
                <select
                  {...register("module")}
                  className="input input-bordered w-full"
                >
                  <option value="n/a">Select Module</option>
                  <option value="1: Introduction to Programming">
                    1: Introduction to Programming
                  </option>
                  <option value="2: Data Types and Operators">
                    2: Data Types and Operators
                  </option>
                  <option value="3: Control Structures">
                    3. Control Structures
                  </option>
                  <option value="4: Arrays and Strings">
                    4: Arrays and Strings
                  </option>
                  <option value="5: Functions">5: Functions</option>
                  <option value="6: Pointers">6: Pointers</option>
                  <option value="7: File Handling">7: File Handling</option>
                  <option value="8: Miscellaneous Topics">
                    8: Miscellaneous Topics
                  </option>
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
