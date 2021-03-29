import React from 'react';
import { Table } from 'reactstrap';

//Show Table with user data 
function UserList(props){
    
    return(
        <div>
            <Table>
            <thead>
                <tr>
                <th>First Name</th>
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
            {/* function called here to add rows of data */}
                </tbody>
            </Table>
        </div>
    )
}

export default UserList; 