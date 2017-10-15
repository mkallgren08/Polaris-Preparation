//Requiring backend app dependencies
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//setting port
const PORT = process.env.PORT || 3001;

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Enable CORS
app.use(cors());

//Requiring Mongoose/Mongodb
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//Configuring database models
const Users = require("./models/Users.js");

//Configuring dependency settings
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/uploads", express.static("uploads"));

//configuring database connection
mongoose.connect(
  "mongodb://proj3:ClassProject@ds147544.mlab.com:47544/prepared_db",
  {
    useMongoClient: true
  }
);
// When successfully connected
mongoose.connection.on("connected", function() {
  console.log("Mongoose connection open");
});

// If the connection throws an error
mongoose.connection.on("error", function(err) {
  console.log("Mongoose connection error: " + err);
});

//Requiring routes
const api = require("./routes/api.js");

//Configuring routes
app.use("/api", api);

//Send every request to the React app
// Define any API routes before this run

app.get("/authorized", function(req, res) {
  res.send("Secured Resource");
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send("error");
// });

app.listen(PORT, function() {
  console.log("listening on port" + PORT);
});

module.exports = app;
