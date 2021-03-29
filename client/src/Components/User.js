import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import UserList from './UserList';


export default function UserForm(props){
    const [btnClick, setBtnClick] = useState(0)

    return(
        <div>
            <Button onClick={() => setBtnClick(btnClick + 1)} id ="get_user">Get User</Button>
            {btnClick > 0 ? <UserList users={props.users}/> : setBtnClick(btnClick + 1)}

        </div>
    )
}