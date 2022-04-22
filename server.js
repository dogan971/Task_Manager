const express = require("express");
const app = express();
const routes = require("./routes/task.js");
const dotenv = require("dotenv");
const connectToDatabase = require("./Database/dbConnect.js");
dotenv.config({
  path: "./config/config.env",
});

connectToDatabase()

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! How Are you ? ");
});

app.use("/api/v1/tasks", routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  return console.log("Server Started");
});
