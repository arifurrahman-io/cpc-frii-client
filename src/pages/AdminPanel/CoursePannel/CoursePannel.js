import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CoursePannel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: courses = [], refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("https://server.arifur.xyz/courses");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const agree = window.confirm(`Are you sure to delete the student?`);
    if (agree) {
      fetch(`https://server.arifur.xyz/course/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Student deleted successfully!");
            refetch();
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-xl text-center pb-2 font-semibold">Course List</h2>
      <div className="card w-full">
        <div onSubmit={handleSubmit} className="mx-auto"></div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses?.map((course, i) => (
              <tr key={course._id}>
                <th>{i + 1}</th>
                <td>{course.courseName}</td>
                <td>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="btn btn-error btn-xs text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursePannel;
