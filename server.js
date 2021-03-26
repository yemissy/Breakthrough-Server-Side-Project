const express = require('express')
// const db = require('./db')

const app = express();

const Site = require('./api/site')

app.use(express.json());

const PORT = process.env.PORT || 3030


// Add routes here
// fat data-models skinny handles 

app.get('/sites', async (req, res) => {
  try {
    const sites = await Site.getAll(); 
    res.send(sites); 
  } catch (err) {
  res.status(500).json(err)
  }
}); 

// Site.getAll(); 

app.get('/sites/:siteId', async(req, res) => {
    const siteId = req.params.siteId
    try {
      const site = await Site.find(siteId); 
      return res.send(site);
    } catch (err) {
      return res.status(500).send(err); 
    }
});

app.get('/sites/status/:siteStatus', async(req, res) => {
  const siteStatus = req.params.siteStatus
  try {
    const sites = await Site.filter(siteStatus); 
    return res.send(sites);
  } catch (err) {
    return res.status(500).send(err); 
  }
});




app.listen(PORT, () => {
  console.log(`listenining on http://localhost:${PORT}`)
})
