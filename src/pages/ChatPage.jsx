import React, { useEffect, useState, useRef } from "react";
import SideBar from "../components/SideBar.jsx";
import Chats from "../components/Chats.jsx";
import SendChat from "../components/SendChat.jsx";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);

  //for getting list of messages
  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  //for fetching last message and made insertion very smooth
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //for getting typing response when a user is typing
  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  return (
    <div className="w-[100%] h-[100vh] flex items-center">
      <SideBar socket={socket} />
      <div className="h-[100%] flex-[0.8]">
        <Chats
          messages={messages}
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
        />
        <SendChat socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
