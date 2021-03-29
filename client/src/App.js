import React, { useState, useEffect } from 'react';
import UserForm from './Components/User';
import UserList from './Components/UserList';
import './App.css';

const BASE_URL = "http://localhost:3030/"

//List of Routes
///sites/:siteId/getUsers
//sites/:siteId
//users/:userId
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
    getAllSites()
  })

  return (
    <div className="App">
      <header className="App-header">
        <UserForm users={users}/>
      </header>
    </div>
  );
}

export default App;
