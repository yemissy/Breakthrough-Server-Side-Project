const express = require('express')
const db = require('./db')

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3030


// Add routes here

app.listen(PORT, () => {
  console.log(`listenining on http://localhost:${PORT}`)
})
