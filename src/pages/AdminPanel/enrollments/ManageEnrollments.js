import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

const ManageEnrollments = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://server.arifur.xyz/enrollments");
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (email, courseId) => {
    fetch(`https://server.arifur.xyz/enrollment/status/verify/${email}/${courseId}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Verified Successfully.");
          refetch();
        }
      });
  };

  const handleUnVerify = (email, courseId) => {
    fetch(`https://server.arifur.xyz/enrollment/status/${email}/${courseId}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Unverified Successfully.");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    const agree = window.confirm(`Are you sure to delete the student?`);
    if (agree) {
      fetch(`https://server.arifur.xyz/enrollment/${id}`, {
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
      <h2 className="text-xl text-center pb-2 font-semibold">Student List</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>TrxID</th>
              <th>Course</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.student}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.TrxID}</td>
                <td>{user.courseName}</td>
                <td>
                  {user.status === "unverified" && (
                    <>
                      <button
                        onClick={() => handleVerify(user?.email, user?.courseId)}
                        className="btn btn-primary btn-xs">
                        Verify
                      </button>
                    </>
                  )}
                  {user.status === "verified" && (
                    <>
                      <button
                        onClick={() => handleUnVerify(user?.email, user?.courseId)}
                        className="btn btn-primary btn-xs">
                        <FaCheckCircle />
                        Verified
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default ManageEnrollments;
