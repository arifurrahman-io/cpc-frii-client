import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const CourseDetails = () => {
  const { user } = useContext(AuthContext);
  const course = useLoaderData();

  const url = `https://server.arifur.xyz/mentors`;
  const { data: mentors = [] } = useQuery({
    queryKey: ["mentors"],
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
    courseName,
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
    _id,
  } = course;

  const url_2 = `https://server.arifur.xyz/enrollments/${_id}`;
  const { data: enrollment = [], refetch } = useQuery({
    queryKey: ["enrollment"],
    queryFn: async () => {
      const res = await fetch(url_2, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleCourse = () => {
    const myCourse = {
      courseName: courseName,
      image: photoURL,
      student: user?.displayName,
      email: user?.email,
      courseId: _id,
      status: "verified",
    };

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
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  const url_3 = `https://server.arifur.xyz/enrollments/${user?.email}/${course?._id}`;
  const { data: mycourse = [] } = useQuery({
    queryKey: ["mycourse"],
    queryFn: async () => {
      const res = await fetch(url_3, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="max-w-[1280px] mx-auto mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="mx-5 col-span-2">
          <img
            src={photoURL}
            alt=""
            className="rounded-2xl w-full shadow-lg"></img>
        </div>
        <div className="mx-5 my-auto">
          <div className="">
            <h2 className="text-3xl my-3 font-oswald">{courseName}</h2>
            <p className="text-lg my-3 font-oswald">
              Course Level: <span className="text-blue-700">{cLevel}</span>
            </p>
            <p className="text-lg my-3 font-oswald">
              Course Type: <span className="text-blue-700">{cType}</span>
            </p>

            {cType === "Paid" && (
              <p className="text-lg my-3 font-oswald">
                Course Fee: <span className="text-blue-700">{cFee} Tk</span>
              </p>
            )}
            <p className="text-lg my-3 font-oswald">
              Enrolled:{" "}
              <span className="text-blue-700">{enrollment?.length}</span>
            </p>
            
            <FacebookShareButton url={`https://arifur.xyz/coursedetails/${course._id}`}>
              <FacebookIcon className="rounded-full w-8 h-8 mr-2"/>
            </FacebookShareButton>
            <WhatsappShareButton url={`https://arifur.xyz/coursedetails/${course._id}`}>
              <WhatsappIcon className="rounded-full w-8 h-8 mr-2"/>
            </WhatsappShareButton>
            <TwitterShareButton url={`https://arifur.xyz/coursedetails/${course._id}`}>
              <TwitterIcon className="rounded-full w-8 h-8 mr-2"/>
            </TwitterShareButton>
            <TelegramShareButton url={`https://arifur.xyz/coursedetails/${course._id}`}>
              <TelegramIcon className="rounded-full w-8 h-8 mr-2"/>
            </TelegramShareButton>
            <EmailShareButton url={`https://arifur.xyz/coursedetails/${course._id}`}>
              <EmailIcon className="rounded-full w-8 h-8 mr-2"/>
            </EmailShareButton>

          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-5 mt-10">
        <div className="col-span-2">
          <p className="text-xl font-acme">Short Description</p>
          <p className="text-xl my-5 font-pt text-justify">{description1}</p>
          <p className="text-xl my-5 font-pt text-justify">{description2}</p>
          <p className="text-xl my-5 font-pt text-justify">{description3}</p>
        </div>

        <div>
          <div>
            <p className="text-xl font-acme">Course Objectives</p>
            <li className="list-item list-inside list-image-checkmark text-xl p-3 font-pt">
              {outCome1}
            </li>
            <li className="list-item list-inside list-image-checkmark text-xl p-3 font-pt">
              {outCome2}
            </li>
            <li className="list-item list-inside list-image-checkmark text-xl p-3 font-pt">
              {outCome3}
            </li>
          </div>
          <div>
            <p className="text-xl font-acme">Course Audience</p>
            <li className="list-item list-inside list-image-checkmark text-xl p-3 font-pt">
              {audience1}
            </li>
            <li className="list-item list-inside list-image-checkmark text-xl p-3 font-pt">
              {audience2}
            </li>
          </div>
          {user ? (
            cType === "Paid" ? (
              mycourse.courseId === course?._id ? (
                <>
                  <label className="btn btn-primary mb-16 mx-5 mt-8 animate-pulse">
                    Already Enrolled
                  </label>
                </>
              ) : (
                <>
                  <Link
                    to={`/checkout/${_id}`}
                    className="btn btn-primary mb-16 mx-5 mt-8 animate-pulse">
                    Buy Now!
                  </Link>
                </>
              )
            ) : mycourse.courseId === course?._id ? (
              <>
                <label className="btn btn-primary mb-16 mx-5 mt-8 animate-pulse">
                  Already Enrolled
                </label>
              </>
            ) : (
              <>
                <label
                  className="btn btn-primary mb-16 mx-5 mt-8 animate-pulse"
                  onClick={() => handleCourse(course)}>
                  Enroll Now!
                </label>
              </>
            )
          ) : (
            <>
              <p className="text-lg text-indigo-500 mx-5 py-10">
                Please Sign in to Enroll to the course.{" "}
                <Link to="/signin" className="btn btn-primary btn-sm">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
      <div className="flex mb-10 mx-5">
        <img
          src={mentors[0]?.photoURL}
          alt=""
          className="w-20 h-20 rounded-full mr-2"></img>
        <div className="my-auto">
          <p className="text-xl font-acme">Instructor-</p>
          <p className="font-courgette">{mentors[0]?.name}</p>
          <p className="font-ubuntu underline">{mentors[0]?.designation}</p>
          <p className="font-ubuntu">{mentors[0]?.phone}</p>
          <p className="font-ubuntu">{mentors[0]?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
