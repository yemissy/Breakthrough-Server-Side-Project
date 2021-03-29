import React from 'react';
import { Table } from 'reactstrap';
import '../App.css';

//Show Table with user data 
function SitesList(props){
    return(
        <div class="table_div">
            <Table class="table" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zipcode</th>
                    <th>Start_date</th>
                    <th>Status</th>
                    <th>Vaccine_type</th>
                </tr>
            </thead>
                <tbody>
                    {props.sitesData.map(site => (
                        <tr>
                            <td>{site.name}</td>
                            <td>{site.address}</td>
                            <td>{site.city}</td>
                            <td>{site.state}</td>
                            <td>{site.zip_code}</td>
                            <td>{site.start_date}</td>
                            <td>{site.status}</td>
                            <td>{site.vaccine_type}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default SitesList; 