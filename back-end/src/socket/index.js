module.exports = (io) => io.on('connection', (socket) => {
  socket.on('statusUpdated', () => {
    io.emit('statusUpdated');
  });
});
