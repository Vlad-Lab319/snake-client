const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', //'localhost',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Connected!");
    conn.write('Name: V15');
    conn.write("Move: up");
    setTimeout(()=> {
      conn.write("Move: left");
      
    }, 1000)
    setInterval(() => {
      conn.write("Move: up");
      
    }, 1000);
    // conn.write("Move: left");
    // conn.write("Move: down");
    
    
  });
  
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log("Data received!", data);
  });
  

  return conn;
};

module.exports = connect;