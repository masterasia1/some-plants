const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')
const authRouter = require("./auth/auth-router");

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use("/api/auth", authRouter);

server.use("/", (req, res,) => {
  res.status(200).json({ message: `Welcome to the plant life!` });
});


module.exports = server
