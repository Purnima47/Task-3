const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const documents = {};

wss.on('connection', ws => {
  ws.on('message', msg => {
    const { room, content } = JSON.parse(msg);
    documents[room] = content;

    // Broadcast to all clients in same room
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ room, content }));
      }
    });
  });
});

server.listen(3001, () => console.log('WS server on http://localhost:3001'));