let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;

};


const handleUserInput = function (key) {
  
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
    // setInterval(() => {
    //   connection.write("Move: up");
      
    // }, 1000);
  }

  if (key === 'a') {
    connection.write("Move: left");
    // setInterval(() => {
    //   connection.write("Move: left");
      
    // }, 1000);
  }
  
  if (key === 'd') {
    connection.write("Move: right");
    // setInterval(() => {
    //   connection.write("Move: right");
      
    // }, 1000);
  }

  if (key === 's') {
    connection.write("Move: down");
    // setInterval(() => {
    //   connection.write("Move: down");
      
    // }, 1000);
  }

  console.log(key);

};

module.exports = setupInput;