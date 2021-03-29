import React, { useState, useEffect } from 'react';
import { Col, Row, Form, Label, Input, FormGroup } from 'reactstrap';
// import Button from 'react-bootstrap/Button';


export default function SiteForm(props){
    const [btnClick, setBtnClick] = useState(0)
    return(
        <div class="entity_form">
            <Form>
                {/* <Form.Label>Create New Site</Form.Label> */}
                {/* <Button onClick={() => setBtnClick(btnClick + 1)} id="site_btn">Enter User</Button> */}
                {/* {btnClick === 1 ? <UserList users={props.users}/> :setBtnClick(btnClick = 0)} */}
                <Row>
                    <Col>
                    <FormGroup> 
                        <Label>Organizaton Name</Label>
                        <Input placeholder="Organization Name" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup> 
                        <Label>Address</Label>
                        <Input placeholder="Address" />
                    </FormGroup> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <FormGroup>
                        <Label>City</Label>
                        <Input placeholder="City" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>State</Label>
                        <Input placeholder="State" />
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <FormGroup>
                    <Label>Zip Code</Label>
                        <Input placeholder="Zip Code" />
                    </FormGroup>
                    </Col>
                    <Col>
                        <Label>Start Date</Label>
                        <Input type ="date" placeholder="Start Date" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Status</Label>
                        <Input placeholder="Status" />
                    </Col>
                    <Col>
                        <Label>Vaccine Type</Label>
                        <Input placeholder="Pfizer" />
                    </Col>
                </Row>
            </Form>
        </div>   
    )
}