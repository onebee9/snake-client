let connection;


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data",(key)=> {handleUserInput(key)});
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: left');
  } else if (key === 'a'){
    connection.write('Move: right');
  } else if (key === 's') {
      connection.write('Move: down');
  } else if (key === 'p') {
    connection.write('Move: right');
  }else {
    connection.write('Say: Hello');
  }

};


module.exports = {
  setupInput,
  
};