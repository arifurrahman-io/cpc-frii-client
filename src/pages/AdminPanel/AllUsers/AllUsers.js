import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

const AllUsers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [searchData, setSearchData] = useState();

  const handleSearch = (data) => {
    const url = `https://server.arifur.xyz/search/${data.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchData(data);
        refetch();
      });
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://server.arifur.xyz/users/student");
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (email) => {
    fetch(`https://server.arifur.xyz/user/status/verify/${email}`, {
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
    fetch(`https://server.arifur.xyz/user/status/${email}`, {
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
      fetch(`https://server.arifur.xyz/user/${id}`, {
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
      <div className="card w-full">
        <div onSubmit={handleSubmit} className="mx-auto">
          <form
            onSubmit={handleSubmit(handleSearch)}
            className="grid grid-cols-2 gap-2 mb-2 justify-start">
            <div className="form-control w-full h-8">
              <input
                type="text"
                {...register("email", {
                  required: "Email is Required.",
                })}
                className="input input-bordered w-full "
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <input
              className="btn btn-primary btn-sm border-0 w-full text-white"
              value="Search"
              type="submit"
            />
          </form>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {searchData ? (
              <>
                {searchData?.map((user, i) => (
                  <tr key={user._id}>
                    <th>{i + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                      {user.status === "unverified" && (
                        <>
                          <button
                            onClick={() => handleVerify(user?.email)}
                            className="btn btn-primary btn-xs">
                            Verify
                          </button>
                        </>
                      )}
                      {user.status === "verified" && (
                        <>
                          <button
                            onClick={() => handleUnVerify(user?.email)}
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
              </>
            ) : (
              <>
                {users?.map((user, i) => (
                  <tr key={user._id}>
                    <th>{i + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                      {user.status === "unverified" && (
                        <>
                          <button
                            onClick={() => handleVerify(user?.email)}
                            className="btn btn-primary btn-xs">
                            Verify
                          </button>
                        </>
                      )}
                      {user.status === "verified" && (
                        <>
                          <button
                            onClick={() => handleUnVerify(user?.email)}
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
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
