import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, FormControl, Form, Container, Row, Col } from 'react-bootstrap';
function Contact() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h3>Contact Component</h3>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                    <Button variant="warning">Warning</Button>{' '}
                    <Button variant="danger">Danger</Button>
                    <Button variant="info">Info</Button>{' '}
                    <Button variant="light">Light</Button>
                    <Button variant="dark">Dark</Button>{' '}
                    <Button variant="link">Link</Button>
                </Col>
            </Row>
        </Container>

    )
}
export default Contact