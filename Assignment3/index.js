const server= require("http");
const fs = require("fs");

server.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        res.write(data)
      return  res.end()
    })
}).listen(3000)
