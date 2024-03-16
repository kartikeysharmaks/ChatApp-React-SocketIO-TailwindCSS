import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import ChatPage from './pages/ChatPage.jsx';
import socketIO from 'socket.io-client';

const url = "https://chatapp-node-express-socketio.onrender.com/";
const socket = socketIO.connect(url);
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;