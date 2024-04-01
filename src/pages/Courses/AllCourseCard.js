import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaChartLine,FaTags, FaMoneyCheck } from "react-icons/fa";
import "./CardStyle.css";
const AllCourseCard = ({ course }) => {
  const { courseName, photoURL, description1, _id, cFee, cType, cLevel } =
    course;

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

  return (
    <div className="card card-compact bg-base-100 shadow">
      <figure>
        <img src={photoURL} alt="" className="h-[250px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-oswald">{courseName}</h2>
        <p>{description1?.slice(0, 200)}...</p>

        {
          <div className="card-actions justify-between mt-3">
            <div className="flex">
              <img
                src={mentors[0]?.photoURL}
                alt=""
                className="w-16 h-16 rounded-full mr-2"></img>
              <div>
                <p className="font-oswald">Instructor</p>
                <p className="font-courgette">{mentors[0]?.name}</p>
                <p className="font-ubuntu">{mentors[0]?.designation}</p>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="grid grid-cols-3 gap-2 mx-5">
        <p className="icon"><FaChartLine className="mr-2 text-fuchsia-700"/> {cLevel}</p>
        <p className="icon text-fuchsia-700"><FaTags className="mr-2"/> {cType}</p> 
        <p className="icon text-fuchsia-700"><FaMoneyCheck className="mr-2"/> {cFee} Tk</p>
        </div>
      <div className="grid grid-cols-2 gap-2 mx-5">
        <p></p>
        <Link
          to={`/coursedetails/${_id}`}
          className="btn bg-white hover:bg-white text-black border-0 shadow-0 my-auto">
          Read More <FaLongArrowAltRight className="ml-3 text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default AllCourseCard;
