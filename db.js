// could be in the kenxfile 
// returns a pg promise used in server.js file 

const knexfile = require('./knexfile')

const pg = require('pg-promise')()

const db = pg({
  "host": "localhost",
  "port": 5432,
  "database": "lms",
  "user": "shruti"
})

module.exports = db;
