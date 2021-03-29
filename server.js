const express = require('express')
const app = express();
const cors = require('cors')

const Site = require("./api/site")
const Users = require("./api/users")
app.use(express.json());
app.use(cors())

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

app.post('/sites', async (req, res) => {
  try {
      // console.log(req.body); 
      const newSite = new Site(req.body); 
      // console.log(newSite); 
      newSite.addSite(); 
      res.status(200).json({ message: "success"}); 
      
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

//filter by status
app.get('/sites/status/:siteStatus', async(req, res) => {
  const siteStatus = req.params.siteStatus
  try {
    const users = await Site.filterStatus(siteStatus); 
    return res.json(users);
  } catch (err) {
    return res.status(500).send(err); 
  }
});

//filter by zipcode

app.get('/sites/zipCode/:siteZipCode', async(req, res) => {
  const siteZipCode = req.params.siteZipCode
  try {
    const users = await Site.filterZipCode(siteZipCode); 
    return res.json(users);
  } catch (err) {
    return res.status(500).send(err); 
  }
});

// filter by state
app.get('/sites/state/:siteState', async(req, res) => {
  const siteZipCode = req.params.siteState
  try {
    const users = await Site.filterState(siteZipCode); 
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

app.patch('/sites/:siteId', async (req, res) => {
  const siteId = parseInt(
    req.params.siteId, 10);
  const newStatus = req.body.status; 
  try {
    Site.changeStatus(siteId, newStatus); 
    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    res.status(500).send(err); 
  }
})

app.get('/sites/:siteId/getUsers', async(req, res) => {
  const siteId = req.params.siteId;
  try {
//    console.log(siteId);
    const users = await Site.getUsers(siteId);  
    return res.send(users); 
  } catch (err) {
    return res.status(500).send(err); 
  }
});




//TODO: ADD ROUTES FOR USERS

//Get all users
app.get('/users', async(req, res) => {
  // console.log(req.params, 'line 105')
  try{
    const users = await Users.getAllUsers(req.params.id);
    res.send(users);
  }
  catch (error) {
    res.status(500).json(error)
  };
});

app.get('/users/:userId', async(req, res) => {
  // console.log(req, 'line 115')
  const userId = parseInt(req.params.userId)
  try{
    const user = await Users.getUserWithId(userId);
    res.send(user);
  }
  catch (error) {
    res.status(500).json(error)
  };
});

app.post('/sites/:siteId/newuser', async(req, res) => {
  //instantiate new user
  const newUser = new Users(req.body)
  const site_id = parseInt(req.params.siteId)
  try{
    await newUser.createUser(site_id);
    res.status(200).json({
      message: "User sucessfully created"
    })
  }
  catch (error) {
    res.status(500).json(error)
  };
});

app.delete('/users/:userId', async(req, res) => {
  const id = parseInt(req.params.userId)
  try{
    await Users.deleteUser(id);
    res.status(200).json({
      message: "User sucessfully deleted"
    })
  }
  catch (error) {
    res.status(500).json(error)
  };
})
app.patch('/users/:userId', async (req, res) => {
  const id = parseInt(req.params.userId);
  const theUpdate = req.body; 
  try {
    await Users.updateUser(id, theUpdate); 
    res.status(200).json({
      message: "Successfully updated user",
    });
  } catch (err) {
    res.status(500).send(err); 
  }

})

app.listen(PORT, () => {
  console.log(`listenining on http://localhost:${PORT}`)
})
