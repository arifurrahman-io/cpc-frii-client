import React from "react";

const MessageCard = ({ msg }) => {
  const { message, date, time, replay, replayTime, replayDate } = msg;

  return (
    <div className="hero-content mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="bg-purple-50 shadow w-full rounded-md p-2 grid grid-cols-8 gap-1">
        <div className="bg-purple-400 align-middle rounded-md">
          <h2 className="text-center py-5 font-bold text-white">Q</h2>
        </div>
        <div className="col-span-7">
          <p className="font-signika">{message}</p>
          <div className="flex justify-start text-xs text-gray-400">
            <p>{time}</p> &nbsp;&nbsp;
            <p>{date}</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 shadow w-full rounded-md p-2 grid grid-cols-8 gap-1">
        <div className="bg-green-400 align-middle rounded-md">
          <h2 className="text-center py-5 font-bold text-white">A</h2>
        </div>
        <div className="col-span-7">
          <p className="font-signika">{replay}</p>
          <div className="flex justify-start text-xs text-gray-400">
            <p>{replayTime}</p> &nbsp;&nbsp;
            <p>{replayDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
