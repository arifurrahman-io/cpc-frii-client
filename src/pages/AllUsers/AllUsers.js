import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://server.cpc.frii.edu.bd/users/student");
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (email) => {
    fetch(`https://server.cpc.frii.edu.bd/user/status/verify/${email}`, {
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

  const handleUnVerify = (email) => {
    fetch(`https://server.cpc.frii.edu.bd/user/status/${email}`, {
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
      fetch(`https://server.cpc.frii.edu.bd/user/${id}`, {
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
              <th>Phone</th>
              <th>Email</th>
              <th>Branch</th>
              <th>Class</th>
              <th>Section</th>
              <th>ID</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length &&
              users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.branch}</td>
                  <td>{user.level}</td>
                  <td>{user.section}</td>
                  <td>{user.id}</td>
                  <td>
                    {user.status === "unverified" && (
                      <>
                        <button
                          onClick={() => handleVerify(user?.email)}
                          className="btn btn-primary btn-xs"
                        >
                          Verify
                        </button>
                      </>
                    )}
                    {user.status === "verified" && (
                      <>
                        <button
                          onClick={() => handleUnVerify(user?.email)}
                          className="btn btn-primary btn-xs"
                        >
                          <FaCheckCircle />
                          Verified
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-error btn-xs text-white"
                    >
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

export default AllUsers;
