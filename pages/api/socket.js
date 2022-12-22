// https://codedamn.com/news/nextjs/how-to-use-socket-io

// This file will handle the WebSocket connection by guaranteeing that there is only one WebSocket instance, 
// which we will access via a client request to /api/socket.
import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io
  }
  res.end()
}

export default SocketHandler