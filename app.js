require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routes/index");

app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(process.env.PORT, () => {
  console.log(`Quiz app listening on PORT ${process.env.PORT}`);
});

module.exports = app;
