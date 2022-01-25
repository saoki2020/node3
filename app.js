require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`QuizApp listening on port ${PORT}`);
});

module.exports = app;
