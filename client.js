const net = require("net");
const { IP, PORT } = require("./constants");
const server = net.createServer();    

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    IP, // IP address here,
    PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

conn.on("connect", () => {

});

conn.on( "connect", () => {
  console.log("Successfully connected to game server");
  conn.write('Name: IB');
  // conn.write('Move: up');

  setInterval(()=>{conn.write('Move: up')}, 1000)
});

conn.on('data', (data) => {
  console.log(data.toString());
});

return conn;
};

module.exports = {
  connect,
};