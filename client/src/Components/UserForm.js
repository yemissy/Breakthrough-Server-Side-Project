import React, { useState, useEffect } from 'react';
import { Col, Row, Form, Label, Input, FormGroup } from 'reactstrap';

export default function UserForm(props){
    
    return (
        <div class= "entity_form">
            <Form>
                <Row>
                    <Col>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input placeholder="Enter First name" name="firstName" onChange= {props.change} value={props.val.first_name} />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <Input placeholder="Enter Last Name" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <FormGroup>
                        <Label>Phone Number</Label>
                        <Input placeholder="Mobile Number" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input placeholder="Email" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <FormGroup>
                        <Label>Zip Code</Label>
                        <Input placeholder="Mobile Number" />
                        </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Initial Appointmet</Label>
                        <Input type ="date" placeholder="Pick A Date" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}