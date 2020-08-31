const http = require("http");
console.log("http", http);
function cb(req, res) {
  console.log("121", 121);
  return res.end("Hello");
}
const server = http.createServer(cb);
server.listen(3000, () => {
  console.log("first server port 3000 ", 12);
});
