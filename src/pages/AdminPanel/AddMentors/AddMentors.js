import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useForm } from "react-hook-form";
import Loading from '../../../shared/Loading';
import toast from 'react-hot-toast';

const AddMentors = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const { loading } = useContext(AuthContext);


      const handleCourse = (data) => {
        saveData(
          data.name,
          data.designation,
          data.description,
          data.email,
          data.phone,
          data.photoURL
        );
      };

      const saveData = (
        name,
        designation,
        description,
        email,
        phone,
        photoURL
      ) => {
        const user = {
        name,
        designation,
        description,
        email,
        phone,
        photoURL
        };

        fetch("https://server.arifur.xyz/postmentor", {
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
              
              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("name", {
                    required: "Mentor's Name is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Mentor's Name"
                />
                {errors.name && (
                  <p className="text-red-600" role="alert">
                    {errors.name?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("designation", {
                    required: "Designation is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Designation"
                />
                {errors.designation && (
                  <p className="text-red-600" role="alert">
                    {errors.designation?.message}
                  </p>
                )}
              </div>
              
              <div className="form-control w-full mt-5">
                <input
                  type="textarea"
                  {...register("description", {
                    required: "Mentor Details is Required.",
                  })}
                  className="input input-bordered w-full h-20"
                  placeholder="Mentors Detail Info"
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
                  {...register("email", {
                    required: "Email is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Email Address"
                />
                {errors.email && (
                  <p className="text-red-600" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full mt-5">
                <input
                  type="text"
                  {...register("phone", {
                    required: "Phone Number is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <p className="text-red-600" role="alert">
                    {errors.phone?.message}
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

export default AddMentors;