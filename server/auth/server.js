const express = require('express')
const app = express()
const mongoose = require('mongoose')
//const routesUrls = require('./routes/routes')
const cors = require('cors')
const passport = require("passport/lib");
const users = require("./routes/api/users");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

require('dotenv').config({ path: './server/auth/.env' });

// Connect to MongoDB
mongoose
  .connect(
    process.env.DATABASE_ACCESS,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

app.use(cors())
//app.use('/app', routesUrls) //appended to /app 

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = 4000
app.listen(port, () => console.log("Server is up and running at port " + port))

//connect application to a mongodb database

