
const router = require('express').Router();
const { BCRYPT_ROUNDS,JWT_SECRET } = require('../../config/index');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const database = require ('../data/db-config')


//function getAllUsers() { return db('users') }

//async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
 // const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  //return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
//}

function passwordUsernameRequired (req, res, next) {
    if (!req.body.password || !req.body.username) {
      res.json({
        message: "username and password required",
        status: 400
      }) 
    } else {
      next()
    }
  }
 
 //add register message
  router.post('/register', passwordUsernameRequired, (req, res) => {
    const user = req.body
    const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS)
    user.password = hash
    database('users')
      .insert(user)
      .then((ids) => {
        res.status(201).json(ids);
      })
      .catch((err) => res.status(400).json(err));
  });
  
  //invalid credentials message 
  router.post('/login', passwordUsernameRequired, (req, res, next) => {
    let { username, password } = req.body
    database('users')
      .where({ username: username })
      .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = makeToken(user)
        res.status(200).json({
          message: `Welcome back, ${user.username}...`
        })
      } else {
        next(res.status(401).json({
          message: `Invalid credentials`
        }))
      }
    })
    .catch(next)
  })
  function makeToken(user){
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role
  }
  const options = {
    expiresIn: "500s"
  }
  return jwt.sign(payload,JWT_SECRET,options)
  }
  
  module.exports = router;
  