// could be in the kenxfile 
// returns a pg promise used in server.js file 

const pg = require('pg-promise')()

const db = pg({
  "host": "localhost",
  "port": 5432,
  "database": "covid-db",
  "user": "shruti"
})

module.exports = db;
