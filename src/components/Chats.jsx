import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages, lastMessageRef, typingStatus }) => {
  const navigate = useNavigate();

  //when a user leave the chat room
  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  // Format the date for display
  var currentDate = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var currentDateString = currentDate.toLocaleDateString("en-US", options);

  return (
    <>
      <header className="w-[100%] h-[10vh] flex items-center justify-between p-[20px] bg-blue-950 text-gray-100">
        <div>
          <h2 className="text-[18px] lg:text-[24px] text-yellow-400 font-bold ">
            Hangout with Colleagues
          </h2>
          <p className="text-[10px] lg:text-[13px] text-gray-300">
            {typingStatus}
          </p>
        </div>
        <button
          className="p-[6px] lg:p-[10px] w-[100px] lg:w-[150px] text-[12px] lg:text-[18px] border-none outline-none bg-blue-500 rounded-lg cursor-pointer text-[#eae3d2]"
          onClick={handleLeaveChat}
        >
          LEAVE CHAT
        </button>
      </header>

      <div className="w-[100%] h-[80vh] bg-white p-[20px] overflow-y-scroll">
        <p className="text-center  bg-gray-100 w-[40%] lg:w-[20%] m-auto text-[13px] p-2 rounded-md">{currentDateString}</p>
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="text-[13px] my-4" key={message.id}>
              <p className="text-right mr-1">You</p>
              <div className="bg-green-300 w-[300px] p-[10px] rounded-[10px] text-[15px] ml-auto">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="text-[13px] my-4" key={message.id}>
              <p className="ml-1">{message.name}</p>
              <div className="bg-[#f5ccc2] w-[300px] p-[10px] rounded-[10px] text-[15px]">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
