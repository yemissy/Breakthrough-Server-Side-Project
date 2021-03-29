import React from 'react'
 
export default function UserForm(props){
    console.log('button is clicking')
    console.log(props.users, 'line 5')
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