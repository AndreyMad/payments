const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const fs = require("fs");
const http = require("http");
const config = require("../config");
// const itopRouter =require('./payments/paymentsRouter')



const httpServer = http.createServer(app);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
    path:"/payments/"

});
//  {path: "http://localhost:80/payments"}




function startServer() {
  app.use(cors());
  app.use(jsonParser);
  // app.use(express.static(path.join(__dirname, "../../mypage-front/build")));


  require('./Payments/Payments')(io)
  


  httpServer.listen(80, () => {
    console.log(`Example  at:${80}`);
  });

  app.get("*", (req, res) => {
    res.send("hello world");
    //  res.sendFile(path.join(__dirname, "../..mypage-front", "build", "index.html"));
  });
}



module.exports = startServer;

