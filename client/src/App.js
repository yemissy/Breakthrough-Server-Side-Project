import React, { useState, useEffect } from 'react';
import Lists from './Components/Lists';
import Forms from './Components/Forms';

const BASE_URL = "http://localhost:3030/"
let site_name = ""

// create a user/site
// delete a user/site

function App (){
  const [users, setUsers] = useState([])
  const[sites, setSites] = useState([])
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    first_dose_date: "",
    zip_code: "",
    first_dose_date: "", //initial appointment
    site_id: "" //Desired Location
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

  //Get the ID of the site
  const getSiteId = (site_name) =>{
    console.log(site_name)
    for(let key in sites){
      console.log(sites[key], site_name)
    }

  }
  //Get User Details 
  const handleUserChange = (e) => {
    console.log(e.value)
    const {name, value} = e.target
    console.log(name, value)

    setNewUser({
      ...newUser,
      [name]: value
      //calculate second dose date
    })
    console.log(newUser)
  }


  const createNewUser = async () => {
    console.log(newUser)
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

      setNewUser({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        first_dose_date: "",
        zip_code: "",
        first_dose_date: "", //initial appointment
        site_id: "" //Desired Location
      })
  }

  useEffect(() => {
    getAllUsers()
    getAllSites()
  })

  return (
    <div className="App">
      <h1 className="header">COVID-19 Vaccine Matcher</h1>
      <Forms handleChange={handleUserChange} value={newUser} sites={sites} onClick={createNewUser}/>
      <Lists users={users} sites={sites}/>
    </div>
  );
}

export default App;
