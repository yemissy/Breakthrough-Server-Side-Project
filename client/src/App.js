import React, { useState, useEffect } from 'react';
import UserForm from './Components/User';
import UserList from './Components/UserList';
import './App.css';

const BASE_URL = "http://localhost:3030/"


function App (){
  const [users, setUsers] = useState([])
  const[sites, setSites] = useState([])
  const [newUser, setNewUser] = useState({
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone_number": "",
    "first_dose-date": "",
    "second_dose_date": "",
    "site_id": ""
  })
  
  
  //Define the GeAllUsers function 

  const getAllUsers = async () => {
    const response = await fetch(`${BASE_URL}users`);
    const usersData = await response.json();
    setUsers(usersData)
  }
  const getAllSites = async () => {
    const response = await fetch(`${BASE_URL}sites`);
    const sitesData = await response.json();
    setSites(sitesData)
  }

  //Get User Details 
  const handleUserChange = (e) => {
    const {key, value} = e.target
    setNewUser({
      [key]: value
    })
  }
  const createNewUser = async (e) => {
    await fetch(
      `${BASE_URL}sites/:siteId/newuser`, {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
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
