import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import logo from "../assets/logo.png";
import useAdmin from "../hooks/useAdmin";

const Navebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
    navigate("/");
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

      {user?.uid ? (
        (!isAdmin && (
          <>
            <li tabIndex={1}>
              <Link>
                Dashboard
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="mt-0 w-40 absolute left-0 z-10 p-2 shadow bg-[#165daf] text-white">
                <li>
                  <Link to="/dashboard/myallcourses">My Courses</Link>
                </li>
                <li>
                  <Link to="/dashboard/qa">Q/A</Link>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={handleLogOut}>Sign Out</button>
            </li>
          </>
        )) ||
        (isAdmin && (
          <>
            <li tabIndex={0}>
              <Link>
                Dashboard
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              {/* menu menu-compact dropdown-content mt-2 w-40 absolute right-0 z-10
              p-2 shadow bg-[#364F6B] text-white */}
              <ul className="menu menu-compact dropdown-content mt-2 w-40 absolute left-0 top-7 z-10 p-2 rounded-lg shadow bg-[#165daf] text-white">
                <li>
                  <Link to="/dashboard/manageusers">Student List</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageenrollment">Manage Enrollments</Link>
                </li>
                <li>
                  <Link to="/dashboard/addmentor">Add Mentor Details</Link>
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
              </ul>
            </li>
            <li>
              <button onClick={handleLogOut}>Sign Out</button>
            </li>
          </>
        ))
      ) : (
        <>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );

  return (
    <div className="bg-indigo-700 px-5">
      <div className="navbar flex justify-between">
        <div className="navbar-start">
          {/* <label
            tabIndex={2}
            htmlFor="dashboard-drawer"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label> */}

          <div className="flex text-white">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-lg md:text-xl"
            >
              <img src={logo} className="w-6 md:w-8 mx-2" alt="" />
              Arifur Rahman
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex text-white">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-2 w-40 absolute right-0 z-10 p-2 shadow bg-[#364F6B] text-white"
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
