import React, { useState, useEffect } from 'react';
import { Col, Row, Form } from 'react-bootstrap';

export default function UserForm(props){
    
    return (
        <div class= "entity_form">
            <Form>
                <Row>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Enter First name" name="first_name" onChange= {props.change} value={props.val.first_name} />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Enter Last Name" name="last_name" onChange= {props.change} value={props.val.last_name}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder="Mobile Number" name="phone_number"  onChange= {props.change} value={props.val.phone_number}/>
                    </Col>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Email" name ="email" onChange= {props.change} value={props.val.email}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control placeholder="Mobile Number" name="zip_code" onChange= {props.change} value={props.val.zip_code}/>
                    </Col>
                    <Col>
                        <Form.Label>Initial Appointmet</Form.Label>
                        <Form.Control type ="date" placeholder="Pick A Date" name="first_dose_date" onChange= {props.change} value={props.val.first_dose_date} custom/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Desired Location</Form.Label>
                        <Form.Control as="select" placeholder="Choose Location" name="site_id">
                            {props.sites.map(site => (
                                <option key={site.id} value={site.id} onChange= {props.change}>{site.name}</option>
                            ))}
                        </Form.Control>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}