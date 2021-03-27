const express = require('express')
// const db = require('./db')

const app = express();

const Site = require("./api/site")
const Users = require("./api/users")

app.use(express.json());

const PORT = process.env.PORT || 3030


// Add routes here
// fat data-models skinny handles 

//TODO: ADD ROUTES FOR SITES
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

//TODO: ADD ROUTES FOR USERS

//Get all users
app.get('/users', async(req, res) => {
  try{
    const users = await Users.getAllUsers(req.params.id);
    res.send(users);
  }
  catch (error) {
    res.status(500).json(error)
  };
});

app.get('/users/:userId', async(req, res) => {
  const userId = req.params.id
  try{
    const user = await Users.getUserWithId(userId);
    res.send(user);
  }
  catch (error) {
    res.status(500).json(error)
  };
});

app.post('/newuser', async(req, res) => {
  console.log(req.body, 'line 64')
  try{
    const newUser = await Users.createUser();
    res.send(newUser);
  }
  catch (error) {
    res.status(500).json(error)
  };
});


app.listen(PORT, () => {
  console.log(`listenining on http://localhost:${PORT}`)
})
