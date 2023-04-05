import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import MessageModal from "../Modal/MessageModal";
import MessageList from "./MessageList";

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const { data: messages = [], refetch } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const res = await fetch(
        `https://server.cpc.frii.edu.bd/dashboard/studentsmessage`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-xl text-center pb-2 font-semibold">Message List</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <>
            {messages.length &&
              messages.map((message, i) => (
                <MessageList
                  key={message._id}
                  message={message}
                  i={i}
                  setSelectedMessage={setSelectedMessage}
                ></MessageList>
              ))}
          </>
        </tbody>
      </table>

      <MessageModal
        selectedMessage={selectedMessage}
        refetch={refetch}
        message={messages}
      ></MessageModal>
    </div>
  );
};

export default Messages;
