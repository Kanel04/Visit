const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const env = require("env-var");
const dotenv = require("dotenv");
const connectDB = require("./src/db/index")
dotenv.config({path:"config.env"});

const PORT = env.get("PORT").required().asInt();
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./src/routers/index");

// Routes middleware
app.use("/api/v1/auth", authRoutes);


server.listen(PORT, () => {
    console.log("listening on *:", PORT);
    connectDB();
  });
  
  process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
       server.close(() => process.exit(1));
});

