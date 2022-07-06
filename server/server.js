const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const path = require("path");

require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());

app.use(cors());

app.use("/blogs", require("./routes/blogs"));

app.use(express.static(path.join(__dirname, "./dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
