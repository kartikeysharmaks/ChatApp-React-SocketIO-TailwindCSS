import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  //for fetching the list of users in the chat room
  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="h-[100%] bg-blue-950 flex-[0.2] p-2 lg:p-8 border-r-[1px] border-solid border-[#fdfdfd]">
      <h2 className='font-bold text-[24px] lg:text-[32px] text-white'>CHAT<span className='text-yellow-500'>On</span></h2>
      <div>
        <h4 className="text-gray-300 text-[12px] lg:text-[18px] p-3 bg-gray-900 rounded-xl">ACTIVE USERS</h4>
        <div className="text-gray-100 text-[10px] lg:text-[14px]">
          {users.map((user) => (
            <p key={user.socketID} className='bg-blue-600 p-2 m-2 rounded-lg'>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;