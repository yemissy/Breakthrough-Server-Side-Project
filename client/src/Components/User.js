import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import { Button, Table } from 'reactstrap';
import '../App.css'


export default function UserForm(props){

    const [btnClick, setBtnClick] = useState(0)
    
    return(
    <div>
        <h1>Users Table</h1>
        <UserList userData={props.users}/>
        
        {/* <Button onClick={() => setBtnClick(btnClick + 1)} id ="get_user">Get User</Button>
        {btnClick > 0 ? <UserList users={props.users}/> : null} */}

    </div>
    )
}