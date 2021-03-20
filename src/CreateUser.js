import React from 'react';
import { Button, Navbar, Nav, FormControl, Form, Container, Row, Col } from 'react-bootstrap';
function CreateUser() {
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
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" placeholder="Salary" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Age" />
                        </Form.Group>
                     
                        <Button variant="primary">Primary</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default CreateUser