# How to install and run this project?

Clone this git repository on your device.\
Then open the project folder on Code Editor(VS Code).\
Run this command to install all the dependencies inside the projcet - npm install.\
Now to run this project use command - npm start.

### Configuratiom for server url update this.

```
const socket = socketIO.connect('http://localhost:4000');
```

with

```
const url = "https://chatapp-node-express-socketio.onrender.com/";
const socket = io(url, {
  transports: ['websocket'],
});

```

## NOTE : Keep both projects running simultaneously.
Link for Backend Git Repo - [https://github.com/kartikeysharmaks/ChatApp-Node-Express-SocketIO](https://github.com/kartikeysharmaks/ChatApp-Node-Express-SocketIO)
