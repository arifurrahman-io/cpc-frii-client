import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navebar from "../shared/Navebar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

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
                    <Link to="/dashboard/manageusers">Student List</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/coursepannel">Courses</Link>
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
                    <Link to="/dashboard/studentsmessage">Messages</Link>
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
