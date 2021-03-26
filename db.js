// could be in the kenxfile 
// returns a pg promise used in server.js file 

const pg = require('pg-promise')()

const db = pg({
  "host": "localhost",
  "port": 5432,
  "database": "covid-project",
  "user": "missy"
})

module.exports = db;
