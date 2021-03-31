import React, { useState, useEffect } from 'react';
import { Col, Row, Form, Label, Input, FormGroup, FormText } from 'reactstrap';

export default function UserForm(props){

    function getId(){

        let optionTemplate = this.state.values.map(v => (
            <option value={v.id}>{v.name}</option>
        ));
        return (
            <label>
            Pick your favorite Number:
                <select value={this.state.value} onChange={this.handleChange}>
                  {optionTemplate}
                </select>
              </label>
            );
    }

    return (
        <div class= "entity_form">
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input placeholder="Enter First name" name="first_name" onChange= {props.change} value={props.val.first_name} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input placeholder="Enter Last Name" name="last_name" onChange= {props.change} value={props.val.last_name}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Phone Number</Label>
                            <Input placeholder="Mobile Number" name= "phone_number" onChange= {props.change} value={props.val.phone_number}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input placeholder="Email" name="email" onChange={props.change} value={props.val.email}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Zip Code</Label>
                            <Input placeholder="Mobile Number" name="zip_code" onChange ={props.change} value={props.val.zip_code}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Initial Appointmet</Label>
                            <Input type ="date" placeholder="Pick A Date" name= "first_dose_date" onChange= {props.change} value={props.val.first_dose_date} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Location</Label>
                            <Input type="select" name="site_id" onChange={props.change} value={props.val.site_id} >
                                {props.sites.map(site => (
                                    <option key={site.id} value={site.id}>{site.name}</option>
                                ))}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}