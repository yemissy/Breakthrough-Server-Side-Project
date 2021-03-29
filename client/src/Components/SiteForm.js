import React, { useState, useEffect } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
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
                        <Form.Label>Organizaton Name</Form.Label>
                        <Form.Control placeholder="Organization Name" />
                    </Col>
                    <Col>
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Address" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="City" />
                    </Col>
                    <Col>
                        <Form.Label>State</Form.Label>
                        <Form.Control placeholder="State" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control placeholder="Zip Code" />
                    </Col>
                    <Col>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type ="date" placeholder="Start Date" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Status</Form.Label>
                        <Form.Control placeholder="Status" />
                    </Col>
                    <Col>
                        <Form.Label>Vaccine Type</Form.Label>
                        <Form.Control placeholder="Pfizer" />
                    </Col>
                </Row>
            </Form>
        </div>   
    )
}