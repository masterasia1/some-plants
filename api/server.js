const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')
const restrict = require('./middleware/restricted')

const authRouter = require("./auth/auth-router");
const plantRouter = require('./plants/plants-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use("/api/auth", authRouter);
server.use("/api/plants", plantRouter, restrict);


server.use("/", (req, res,) => {
  res.status(200).json({ message: `Welcome to the plant life!` });
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server

