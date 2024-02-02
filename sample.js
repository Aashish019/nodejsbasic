// var http=require('http')

// http.createServer(server).listen(7000)

// function server(req, res) {
//     res.write('TESTING')
//     res.end()
// }

var fs = require("fs");
var http = require("http");
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.readFile("sample.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
} else if (req.url === "/login") {
    res.write("login");
    res.end();
} else {
        res.writeHead(404, { "Content-Type": "text/html" });
      res.write("error");
      res.end();
    }
  })
  .listen(7000, () => console.log("server listening on 7000"));
