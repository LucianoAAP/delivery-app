require('dotenv').config();
const http = require('http');
const socket = require('socket.io');
const socketListener = require('../socket');

const { API_PORT = 3001 } = process.env;
const app = require('./app');

const server = http.createServer(app);

const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

socketListener(io);

server.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
