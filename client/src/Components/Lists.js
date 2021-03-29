// import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import SiteList from './SiteList';
import '../App.css'


export default function Lists(props){
    
    return(
        <div id="list_div">
            <div id ="outter_userList_div">
                <h5>USERS VIEW</h5>
                <UserList userData={props.users}/>
                {/* <Button onClick={() => setBtnClick(btnClick + 1)} id ="get_user">Get User</Button>
                {btnClick > 0 ? <UserList users={props.users}/> : null} */}
            </div>
            <div id ="outter_siteList_div">
                <h5>SITES VIEW</h5>
                <SiteList sitesData={props.sites}/>
                {/* <Button onClick={() => setBtnClick(btnClick + 1)} id ="get_user">Get User</Button>
                {btnClick > 0 ? <UserList users={props.users}/> : null} */}
            </div>
        </div>
    )
}