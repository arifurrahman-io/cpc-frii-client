import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const MessageModal = ({ selectedMessage, refetch }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleReplay = (data) => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    const currentTime = new Date();

    const time = currentTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    sendReplay(data.answer, date, time);
  };

  const sendReplay = (replay, replayDate, replayTime) => {
    const adminReplay = { replay, replayDate, replayTime };
    fetch(`https://server.arifur.xyz/replay/${selectedMessage?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminReplay),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("You replaied succcessfully!");
        refetch();
        reset();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <input type="checkbox" id="message-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="message-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{selectedMessage?.message}</h3>
          <div className="flex flex-col">
            <form onSubmit={handleSubmit(handleReplay)}>
              <div className="form-control w-full ">
                <input
                  type="text"
                  {...register("answer", {
                    required: "Answer is Required.",
                  })}
                  className="input input-bordered w-full "
                  placeholder="Answer"
                />
                {errors.answer && (
                  <p className="text-red-600" role="alert">
                    {errors.answer?.message}
                  </p>
                )}
              </div>

              <input
                value="Replay"
                type="submit"
                className="btn btn-sm mt-3"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
