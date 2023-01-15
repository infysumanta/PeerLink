const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

/* Creating an instance of express. */
const app = express();

/* Inbuild Middleware in express app instance */
app.use(express.json());
app.use(cors());
app.use(logger("common"));
app.use(express.static(path.join("client", "build")));

app.use("/api", require("./routes/routes"));

/* This is a route handler. It is a function that is called when a request is made to the specified route. */
app.get("*", (_, res) => {
  res.sendFile(path.join("client", "build", "index.html"));
});

/* Error Handling middleware function that is called when a request is make a error */
app.use(notFound);
app.use(errorHandler);

module.exports = app;
