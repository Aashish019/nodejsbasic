// var http=require('http')

// http.createServer(server).listen(7000)

// function server(req, res) {
//     res.write('TESTING')
//     res.end()
// }

var fs = require("fs");
var http = require("http");
var url = require("url");
http
  .createServer(function (req, res) {
    var q = url.parse(req.url,true)
   console.log( q.pathname)

    if (q.pathname === "/") {
      fs.readFile("sample.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/login") {
      fs.readFile("signup.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/signupaction") {
        res.writeHead(200, { "Content-Type": "text/html" });
        console.log(q.query)
        // console.log(q.query.fname)
        // console.log(q.query.uname)
        // console.log(q.query.email)
        // console.log(q.query.phone)
      res.write('<h1>'+q.query.fname+'<h1>');
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("error");
      res.end();
    }
  })
  .listen(7000, () => console.log("server listening on 7000"));
