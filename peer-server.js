const http = require("http");

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/myapp"
});

app.use("/peerjs", peerServer);

server.listen(9000);
