import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import SiteForm from './SiteForm';
import Button from 'react-bootstrap/Button';

export default function UserForms(props){
    const [btnClick, setBtnClick] = useState(0)
    return(
        <div id="forms_div">
            <div id="user_form">
                <h5 class="heading_text"> CREATE NEW USER</h5>
                <Button onClick={() => setBtnClick(btnClick + 1)} id="user_btn">Enter User</Button>
                <UserForm change={props.handleChange} val ={props.value}/>
            </div>
            <div id="site_form">
                <h5 class="heading_text">CREATE NEW USER</h5>
                <Button onClick={() => setBtnClick(btnClick + 1)} id="user_btn">Enter User</Button>
                <SiteForm />
            </div>   
        </div>
    )
}