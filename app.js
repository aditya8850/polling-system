import express from "express"
import http from "http"
import {Server} from "socket.io"
import cors from "cors"
import { connectToDB } from "./src/config/db.config.js";
import questionRouter from "./src/routes/question.route.js";
import optionRouter from "./src/routes/option.route.js"

const app = express();
// create an HTTP server instance using Node.js's built-in http module, with Express application app as its request handler.
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// create socket server
const io = new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
});
io.on('connection',(socket)=>{
    console.log("user connected");
    socket.on('disconnect',()=>{
        console.log("user disconnected")
        })
});
//middleware to integrate socket.io to our reqs.
app.use((req,res,next)=>{
    req.io = io;
    next()
});
//ROUTES
app.use('/questions', questionRouter);
app.use('/options', optionRouter);

/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
    return res.status(404).json({
      success: false,
      message: 'API endpoint does not exist',
    });
  });

// start http server
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
    connectToDB()
})