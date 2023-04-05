import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const CourseDetails = () => {
  const course = useLoaderData();

  const { user } = useContext(AuthContext);

  const {
    courseName,
    outCome1,
    outCome2,
    outCome3,
    description,
    photoURL,
    mentor,
    photo,
    designation,
  } = course;

  const handleCourse = (course) => {
    const myCourse = {
      productName: course.courseName,
      image: course.photoURL,
      student: user.displayName,
      email: user.email,
      courseId: course.courseId,
    };

    fetch(`https://server.cpc.frii.edu.bd/enrolments/${user.email}`, {
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
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="max-w-[1280px] mx-auto mt-10">
      <div className="mx-5">
        <img src={photoURL} alt="" className="rounded-2xl w-full"></img>
      </div>
      <div className="mx-5">
        <h2 className="text-3xl my-3 font-oswald">{courseName}</h2>

        <div className="flex my-5">
          <img src={photo} alt="" className="w-20 rounded-full mr-2"></img>
          <div className="my-auto">
            <p className="text-xl font-acme">Mentor</p>
            <p className="font-courgette">{mentor}</p>
            <p className="font-ubuntu">{designation}</p>
          </div>
        </div>
        <div className="">
          <p className="text-xl font-acme">Course Objectives</p>
          <li className="list-item list-inside list-image-checkmark text-xl my-2 p-3 font-pt">
            {outCome1}
          </li>
          <li className="list-item list-inside list-image-checkmark text-xl my-2 p-3 font-pt">
            {outCome2}
          </li>
          <li className="list-item list-inside list-image-checkmark text-xl my-2 p-3 font-pt">
            {outCome3}
          </li>
        </div>
        <p className="text-xl font-acme">Short Description</p>
        <p className="text-xl my-5 font-pt">{description}</p>
      </div>
      <label
        className="btn btn-outline btn-primary mb-16 mx-5"
        onClick={() => handleCourse(course)}
      >
        Enroll Now!
      </label>
    </div>
  );
};

export default CourseDetails;
