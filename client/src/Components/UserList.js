import React from 'react'
 
export default function UserForm(props){
    return(
        <div >
            {props.users.map(user => (
                <div>
                    <ul>
                        <li key= {user.id}>
                         First Name : {user.first_name}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}