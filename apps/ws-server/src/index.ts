import { WebSocketServer } from 'ws';
const PORT = process.env.PORT || 8081;
const wss = new WebSocketServer({ port: Number(PORT) });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);