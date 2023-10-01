const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(rateLimit());
app.use(hpp());


app.get("/", (req, res) => {
    res.send("Welcome to my Express js Project Assignment 9");
  });

const apiRoutes = require("./src/Routes/api");
app.use("/", apiRoutes);

  app.use((req, res, next) => {
    res.status(404).json({ status: 'error', message: 'Route not found' });
  });

  module.exports = app;