import React, { useState } from "react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  //for handling user typing functionality
  const handleTyping = () =>
    socket.emit("typing", `${localStorage.getItem("userName")} is typing`);

  //handles when a user sends a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    try {
      if (message.trim() && localStorage.getItem("userName")) {
        socket.emit("message", {
          text: message,
          name: localStorage.getItem("userName"),
          id: `${socket.id}${Math.random()}`,
          socketID: socket.id,
        });
      }
    } catch (error) {
      alert(error);
    }
    setMessage("");
  };
  return (
    <div className="h-[10vh] p-[10px] bg-blue-950">
      <form
        className="w-[100%] h-[100%] flex items-center justify-between"
        onSubmit={handleSendMessage}
      >
        <input
          type="text"
          placeholder="Write message"
          className="w-[100%] h-[100%] rounded-[8px] border-[1px] border-solid border-[#ddd] outline-none p-[15px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="ml-4 w-[150px] h-[100%] bg-green-500 p-[10px] rounded-lg border-none outline-none text-[#eae3d2] cursor-pointer hover:bg-green-800">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
