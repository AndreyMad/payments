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
const paymentsRouter =require('./Payments/PaymentsRouter')


const httpServer = http.createServer(app);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
    path:"/paymentssocket"

});
//  {path: "http://localhost:80/payments"}




function startServer() {
  app.use(cors());
  app.use(jsonParser);
  // app.use(express.static(path.join(__dirname, "../../mypage-front/build")));
 

  require('./Payments/Payments')(io)
  
const port =80

  httpServer.listen(port, () => {
    console.log(`Example  at:${port}`);
  });
  app.use("/payments", paymentsRouter)
  app.get("/payments",(req,res)=>{
    console.log('%capp.js line:44 payments', 'color: #007acc;', 'payments');
    res.send('payments')
  }
  )
  app.get("*", (req, res) => {
    res.send("hello world");
    //  res.sendFile(path.join(__dirname, "../..mypage-front", "build", "index.html"));
  });
}



module.exports = startServer;

