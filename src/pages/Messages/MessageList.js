import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const MessageList = ({ message, i, setSelectedMessage }) => {
  const handleDelete = () => {};

  return (
    <tr className="overflow-x-auto">
      <th>{i + 1}</th>
      <td>{message?.name}</td>
      <td>{message?.email}</td>
      <td>{message?.message}</td>
      <td>{message?.time}</td>
      <td>{message?.date}</td>
      <td>
        {message?.status === "unanswered" && (
          <>
            <label
              htmlFor="message-modal"
              onClick={() => setSelectedMessage(message)}
              className="btn btn-primary btn-xs"
            >
              Replay
            </label>
          </>
        )}
        {message?.status === "answered" && (
          <div className="flex">
            <FaCheckCircle className="text-green-500" />
            <h2 className="text-green-500">Replaied</h2>
          </div>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(message?._id)}
          className="btn btn-error btn-xs text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MessageList;
