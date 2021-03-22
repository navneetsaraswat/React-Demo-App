import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { Button, Navbar, Nav, FormControl, Form, Container, Row, Col } from 'react-bootstrap';
function CreateUser() {

    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");

    function CreateNewUser() {
        let data = { name, salary, age };
        console.warn("calling", data);
        // useEffect(() => {
            const dataObject =
            {
                method: 'POST',
                Headers: { 'Contant-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            fetch("https://dummy.restapiexample.com/api/v1/create", dataObject).then((result)=>{
                result.json().then(response=>{
                    console.warn(response.data);
                    setMessage("User created Successfully");
                })
            })
        // }, []);

    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h3>
                        Create User
                  </h3>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <Form className="justify-content-md-center">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" onChange={(e) => setSalary(e.target.value)} value={salary} placeholder="Salary" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" onChange={(e) => setAge(e.target.value)} value={age} placeholder="Age" />
                        </Form.Group>
                        <Button variant="primary" onClick={CreateNewUser}>Primary</Button>
                    </Form>
                    <span>{message}</span>
                </Col>
            </Row>
        </Container>
    )
}
export default CreateUser