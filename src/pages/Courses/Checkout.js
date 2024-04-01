import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const course = useLoaderData();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const { courseName, cFee, photoURL, _id } = course;

    const handleCourse = (data) => {
      const myCourse = {
        courseId: _id,
        courseName: courseName,
        price: cFee,
        image: photoURL,
        student: user?.displayName,
        email: user?.email,
        phone: data.phone,
        TrxID: data.TrxID,
        message: data.message,
        status: "unverified"
      };

      console.log(myCourse);

      fetch(`https://server.arifur.xyz/enrolments/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(myCourse),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Enrollment Confirmed! Go to your dashboard.");
            reset();
            navigate('/');
          } else {
            toast.error(data.message);
          }
        });
    };

  return (
    <div className="max-w-[1280px] mx-auto h-[100vh] px-10">
      <div className="flex flex-col md:flex-row border shadow-sm mt-20">
        <img src={photoURL} alt="course" className="w-60 m-5 rounded-lg shadow-xl" />
        <div className="my-auto m-5">
          <p className="text-2xl">{courseName}</p>
          <p className="text-lg">Course Fee: {cFee} Tk</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="font-pt text-lg">
          Hello {user?.displayName}! Please complete your payment{" "}
          <span className="font-semibold ">({cFee} Tk)</span> with
          bKash/Nagad/Rocket by sending money to +88 01684516151 and then fill
          up the following form.
        </p>
      </div>

      <div onSubmit={handleSubmit} className="mt-10">
        <form onSubmit={handleSubmit(handleCourse)} className="flex flex-col my-auto">
          <div className="form-control w-full mt-5">
            <input
              type="text"
              {...register("phone", { required: "Phone Number is Required." })}
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
              {...register("TrxID", { required: "Transaction ID is Required." })}
              className="input input-bordered w-full "
              placeholder="Transaction ID"
            />
            {errors.TrxID && (
              <p className="text-red-600" role="alert">
                {errors.TrxID?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full mt-5">
            <input
              type="textarea"
              {...register("message")}
              className="input input-bordered w-full "
              placeholder="Your message..."
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="btn btn-primary btn-sm my-2 w-48">
          </input>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
