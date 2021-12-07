const net = require("net");
const server = net.createServer();    

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:'localhost', // IP address here,
    port:50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

conn.on("connect", () => {

});

conn.on('data', (data) => {
  console.log(data.toString());
  conn.end();
});

return conn;
};
connect();