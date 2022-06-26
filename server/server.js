const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose
  .connect("mongodb://localhost/mevn-db-test")
  .then((db) => {
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

app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
