import React, { useState, useEffect } from 'react';
import UserForm from './Components/User';
// import UserList from './Components/UserList';

const BASE_URL = "http://localhost:3030/"

//List of Routes
///sites/:siteId/getUsers
//sites/:siteId
//users/:userId


// create a user/site
// delete a user/site

function App (){
  const [users, setUsers] = useState([])
  const[sites, setSites] = useState([])
  
  
  //Define the GeAllUsers function 

  const getAllUsers = async () => {
    const response = await fetch(`${BASE_URL}users`);
    const usersData = await response.json();
    setUsers(usersData)
  }

  const getAllSites = async () => {
    const response = await fetch(`${BASE_URL}sites`);
    const sitesData = await response.json();
    console.log(sites)
    setSites(sitesData)
  }

  useEffect(() => {
    getAllUsers()
    // getAllSites()
  })

  return (
    <div className="App">
        <UserForm users={users}/>
    </div>
  );
}

export default App;
