const http = require("http");

http
    .createServer((req, res) => {
        res.writeHead(200, {"Content-Type": "text.html; charset=utf-8"});
        res.write("<h1>Hello node!</h1>");
        res.end("<p><strong>Hello</strong> Server!</p>");
    })
    .listen(8080, ()=>{
        console.log("8080번 포트에서 서버 연결 대기 중");
    })