const net = require('net');

const port = 3000;

const server = net.createServer();

server.once('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is in use. Please close the application using this port.`);
    process.exit(1);
  } else {
    console.error("Error checking port availability:", err);
    process.exit(1);
  }
});

server.once('listening', () => {
  console.log(`Port ${port} is available.`);
  server.close();
});

server.listen(port, '127.0.0.1');
