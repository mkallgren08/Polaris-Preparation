const express = require("express");
const router = express.Router();
const multer = require("multer");
path = require("path");
const Users = require("../models/Users.js");
const jwt = require("express-jwt");
const jwtAuthz = require("express-jwt-authz");
const jwksRsa = require("jwks-rsa");
const geocoding = require("google-geocoding");
const usersController = require("../controllers/usersController.js")

//Setting environment variable so it does not call dotenv in production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//Creating middleware for checking the JSON Web Token
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://" + process.env.AUTH0_DOMAIN + "/.well-known/jwks.json"
  }),

  //validate the audience and the issuer
  audience: process.env.AUTH0_AUDIENCE,
  issuer: "https://" + process.env.AUTH0_DOMAIN + "/",
  algorithms: ["RS256"]
});

//Creating the variable to check user scopes
const checkScopes = jwtAuthz(['read:profile', 'write:profile', 'update:profile']);
router.get('/api/users', checkJwt, checkScopes, function(req, res) {
  res.json({ message: 'Hello from the users endpoint! you need to be authenticated to see this'});
});

router.get(
  "/users/:id",
  function(req, res) {
    res.json({
      name: "Joe",
      address: "1725 Main St."
    });
  }
);

router.post("/users/profile", function(req , res) {
  res.status(201).send({message: "This is the POST /profile endpoint"});
});


router.route("/users/post", checkJwt, checkScopes).post(function(req, res) {
  const users = new Users(req.body);
  users
    .save()
    .then(users => {
      res.redirect("/");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

router.post("/", multer({ dest: "./uploads/" }).single("upl"), function(
  req,
  res
) {
  console.log(req.body);
  console.log(req.file);
  res.status(204).end();
});


router.route("/api/users")
  .get(usersController.findAll)
  .post(usersController.create)


module.exports = router;
