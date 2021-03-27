const express = require('express')
// const db = require('./db')

const app = express();

const Site = require('./api/site');
const sites_data = require('./seed_data/sites_data');

app.use(express.json());

const PORT = process.env.PORT || 3030

app.get('/sites', async (req, res) => {
  try {
    const sites = await Site.getAll(); 
    res.send(sites); 
  } catch (err) {
  res.status(500).json(err)
  }
}); 

app.post('/sites', async (req, res) => {
  try {
      // console.log(req.body); 
      const newSite = new Site(req.body); 
      // console.log(newSite); 
      const message = newSite.addSite(); 

      res.send(message); 
      
  } catch (err) {
    res.status(500).json(err);
  }

})

app.get('/sites/:siteId', async(req, res) => {
    const siteId = req.params.siteId
    try {
      const site = await Site.find(siteId); 
      return res.send(site);
    } catch (err) {
      return res.status(500).send(err); 
    }
});

/*
  put replaces object - looks inside 
*/
app.get('/sites/:siteId/users', async(req, res) => {
  const siteId = req.params.siteId; 
  try {
    const users = await Site.getUser(siteId); 
    return res.send(users); 
  } catch (err) {
    return res.status(500).send(err); 
  }
})

app.get('/sites/status/:siteStatus', async(req, res) => {
  const siteStatus = req.params.siteStatus
  try {
    const users = await Site.filter(siteStatus); 
    return res.json(users);
  } catch (err) {
    return res.status(500).send(err); 
  }
});

app.delete('/sites/:siteId', async(req, res) => {
  const siteId = parseInt(req.params.siteId, 10)
  try {
      await Site.delete(siteId); 
      res.status(204).json({
      message: "success", 
    })
  } catch (err) {
    return res.status(500).send(err); 
  }

})


app.listen(PORT, () => {
  console.log(`listenining on http://localhost:${PORT}`)
})
