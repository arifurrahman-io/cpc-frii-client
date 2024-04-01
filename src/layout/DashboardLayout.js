import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navebar from "../shared/Navebar";
import { useQuery } from "@tanstack/react-query";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const url = `https://server.arifur.xyz/unreadsmessages`;
  const { data: unreadmessages = [] } = useQuery({
    queryKey: ["unreadmessages"],
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

  const url2 = `https://server.arifur.xyz/unverifiedstudents`;
  const { data: unverified = [] } = useQuery({
    queryKey: ["unverified"],
    queryFn: async () => {
      const res = await fetch(url2, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <Navebar></Navebar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content px-5 py-10">
          <Outlet></Outlet>
        </div>
        <ul className="drawer-side font-pt">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <div className="menu bg-[#E6E6FA] pt-10 text-base-content">
            <div className="px-5">
              {user?.photoURL && (
                <img src={user.photoURL} alt="" className="w-20 rounded-3xl" />
              )}
              {isAdmin && (
                <h4 className="font-bold">
                  Wecome {user?.displayName} | Admin
                </h4>
              )}
              {!isAdmin && (
                <h4 className="text-lg font-bold">
                  Wecome {user?.displayName} | Student
                </h4>
              )}
            </div>
            <div className="px-2">
              {!isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/myallcourses">My Courses</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/qa">Q/A</Link>
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/manageusers">
                      Student List
                      {unverified?.length ? (
                        <span className="ml-2 bg-rose-500 rounded-full px-2 text-white">
                          {unverified?.length}
                        </span>
                      ) : (
                        <span></span>
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageenrollment">
                      Manage Enrollments
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/coursepannel">Courses</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addmentor">
                      Add Mentor Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/coursename">
                      Add Course Name
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addcoursedetails">
                      Add Course Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addmodule">Add Module</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/studentsmessage">
                      Messages
                      {unreadmessages?.length ? (
                        <span className="ml-2 bg-rose-500 rounded-full px-2 text-white">
                          {unreadmessages?.length}
                        </span>
                      ) : (
                        <p className="ml-2 bg-white rounded-full p-1 text-white hidden"></p>
                      )}
                    </Link>
                  </li>
                </>
              )}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
