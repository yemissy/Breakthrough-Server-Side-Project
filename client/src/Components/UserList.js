import React from 'react';
import { Table } from 'reactstrap';
import '../App.css';

//Show Table with user data 
function UserList(props){
    return(
        <div class="table_div">
            <Table class="table" striped bordered hover size="sm">
            <thead>
                <tr>
                <th colspan="2">First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>First Dose Date</th>
                <th>Second Dose Date</th>
                <th>Site Id </th>
                <th>Zip Code</th>
                </tr>
            </thead>
                <tbody>
                    {props.userData.map(user => (
                        <tr>
                            <td colSpan = "2">{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone_number}</td>
                            <td>{user.first_dose_date}</td>
                            <td>{user.second_dose_date}</td>
                            <td>{user.site_id}</td>
                            <td>{user.zip_code}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default UserList; 