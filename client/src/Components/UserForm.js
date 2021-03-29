import React, { useState, useEffect } from 'react';
import { Col, Row, Form } from 'react-bootstrap';

export default function UserForm(props){
    
    return (
        <div class= "entity_form">
            <Form>
                <Row>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Enter First name" name="firstName" onChange= {props.change} value={props.val.first_name} />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Enter Last Name" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder="Mobile Number" />
                    </Col>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Email" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control placeholder="Mobile Number" />
                    </Col>
                    <Col>
                        <Form.Label>Initial Appointmet</Form.Label>
                        <Form.Control type ="date" placeholder="Pick A Date" />
                    </Col>
                </Row>
            </Form>
        </div>
    )
}