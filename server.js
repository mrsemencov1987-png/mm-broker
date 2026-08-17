const http = require('http');
const aedes = require('aedes')();
const WebSocket = require('ws');
const wsStream = require('websocket-stream');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('MM MQTT broker alive 🕵️');
});
const wss = new WebSocket.Server({ server, path: '/mqtt' });
wss.on('connection', ws => aedes.handle(wsStream(ws)));

const port = process.env.PORT || 8080;
server.listen(port, () => console.log('broker on', port));
