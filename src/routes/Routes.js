import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddModule from "../pages/AdminPanel/AddModule/AddModule";
import AllUsers from "../pages/AdminPanel/AllUsers/AllUsers";
import Blog from "../pages/Blog/Blog";
import Dashboard from "../pages/AdminPanel/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRouter from "./PrivateRouter";
import VerifiedUserRouter from "./VerifiedUserRouter";
import Courses from "../pages/Courses/Courses";
import CoursePannel from "../pages/AdminPanel/CoursePannel/CoursePannel";
import AddCourseDetails from "../pages/AdminPanel/AddCourseDetails/AddCourseDetails";
import CourseDetails from "../pages/Courses/CourseDetails";
import MyAllCourses from "../pages/MyCourses/MyAllCourses";
import MyCourseModules from "../pages/MyCourses/MyCourseModules";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Messages from "../pages/Messages/Messages";
import Contact from "../pages/contact/Contact";
import QA from "../pages/QuestionAnswer/QA";
import AddMentors from "../pages/AdminPanel/AddMentors/AddMentors";
import Checkout from "../pages/Courses/Checkout";
import ManageEnrollments from "../pages/AdminPanel/enrollments/ManageEnrollments";
import AddCourseName from "../pages/AdminPanel/AddCourseDetails/AddCourseName";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/coursedetails/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://server.arifur.xyz/coursedetails/${params.id}`),
      },

      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`https://server.arifur.xyz/checkout/${params.id}`),
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/manageusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageenrollment",
        element: (
          <AdminRoute>
            <ManageEnrollments></ManageEnrollments>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addmentor",
        element: (
          <AdminRoute>
            <AddMentors></AddMentors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/coursename",
        element:(
          <AdminRoute>
            <AddCourseName></AddCourseName>
          </AdminRoute>
        )
      },
      {
        path: "/dashboard/addcoursedetails",
        element: (
          <AdminRoute>
            <AddCourseDetails></AddCourseDetails>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addmodule",
        element: (
          <AdminRoute>
            <AddModule></AddModule>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addmodule",
        element: (
          <AdminRoute>
            <AddModule></AddModule>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myallcourses",
        element: (
          <VerifiedUserRouter>
            <MyAllCourses></MyAllCourses>
          </VerifiedUserRouter>
        ),
      },
      {
        path: "/dashboard/coursemodules/:courseId",
        element: <MyCourseModules></MyCourseModules>,
        loader: ({ params }) =>
          fetch(
            `https://server.arifur.xyz/dashboard/coursemodules/${params.courseId}`
          ),
      },
      {
        path: "/dashboard/coursepannel",
        element: <CoursePannel></CoursePannel>,
      },
      {
        path: "/dashboard/qa",
        element: <QA></QA>,
      },
      {
        path: "/dashboard/studentsmessage",
        element: <Messages></Messages>,
      },
    ],
  },
]);

export default router;
