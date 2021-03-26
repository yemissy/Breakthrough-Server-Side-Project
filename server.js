const express = require('express')
// const db = require('./db')

const app = express();

const Site = require('./api/site')

app.use(express.json());

const PORT = process.env.PORT || 3030


// Add routes here
// fat data-models skinny handles 

app.get('/sites', async (req, res) => {
  const sites = await Site.getAll(); 
  res.send(sites); 
}); 

// Site.getAll(); 

// console.log(Site.find(13)); 

app.listen(PORT, () => {
  console.log(`listenining on http://localhost:${PORT}`)
})
