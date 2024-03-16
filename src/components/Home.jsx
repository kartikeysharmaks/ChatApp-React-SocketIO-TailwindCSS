import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("userName", userName);
      //sends the username and socket ID to the Node.js server
      socket.emit("newUser", { userName, socketID: socket.id });
      navigate("/chat");
    } catch (error) {
      alert(error);
    }
 
  };
  return (
    <form
      className="w-[100%] h-[100vh] flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-[32px] text-blue-950">
        CHAT<span className="text-yellow-500">On</span>
      </h2>
      <p className="mb-[20px] text-[15px] text-gray-600">
        Sign in to chat with your friends
      </p>
      <label htmlFor="username" className="text-gray-800">
        Username
      </label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        required="true"
        placeholder="Enter your name"
        className="w-[300px] mt-2 p-[12px] bg-gray-200 border-none outline-none rounded-lg"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="w-[200px] my-6 p-[10px] text-[16px] bg-blue-950 border-none outline-none text-[#f9f5eb] rounded-[5px] cursor-pointer">
        SIGN IN
      </button>
    </form>
  );
};

export default Home;
