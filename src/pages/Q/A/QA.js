import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useForm } from "react-hook-form";
import Loading from "../../../shared/Loading";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import MessageCard from "./MessageCard";

const QA = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: messages = [], refetch } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const res = await fetch(
        `https://server.cpc.frii.edu.bd/mymessages/${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleText = (data) => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    const currentTime = new Date();

    const time = currentTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    saveData(data.message, user.email, user.displayName, date, time);
    data.target.reset();
  };

  const saveData = (message, email, name, date, time) => {
    const mymessage = {
      message,
      email,
      name,
      date,
      time,
    };

    fetch(`https://server.cpc.frii.edu.bd/postmessage/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mymessage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Message Sent Successfully!");
          reset();
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="py-8 lg:py-16">
      <div className="hero-content flex-col lg:flex-row mx-auto">
        <div className="card w-full">
          <div onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit(handleText)}>
              <div className="form-control w-full">
                <p className="mb-2 ml-2">Hello! {user?.displayName}</p>
                <input
                  type="text"
                  {...register("message", {
                    required: "Message is Required.",
                  })}
                  className="input input-bordered w-full h-20"
                  placeholder="Write your message..."
                />
                {errors.message && (
                  <p className="text-red-600" role="alert">
                    {errors.message?.message}
                  </p>
                )}
              </div>
              <input
                className="btn btn-primary btn-outline mt-5 text-white"
                value="Send"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
      <div>
        {messages?.length &&
          messages.map((msg) => (
            <MessageCard key={msg._key} msg={msg}></MessageCard>
          ))}
      </div>
    </div>
  );
};

export default QA;
