const http = require("http");
const app = require("./backend/app");

app.set("port", port);
const server = http.createServer(app);

const port = process.env.PORT || 3000;
server.listen(port);
