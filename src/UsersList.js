import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { Button, Navbar, Nav, FormControl, Form, Container, Row, Col } from 'react-bootstrap';
import userEvent from '@testing-library/user-event';

function UsersList() {
    const [User, setUser] = useState([])
    // https://jsonplaceholder.typicode.com/todos/
    useEffect(() => {
        fetch("https://dummy.restapiexample.com/api/v1/employees").then((result) => {
            result.json().then(response => {
                setUser(response.data);
            })
        })
    }, [])
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h3>Users List</h3>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="12">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Employee Name</th>
                                <th>Employee Salary</th>
                                <th>Employee Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                User.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.employee_name}</td>
                                        <td>{item.employee_salary}</td>
                                        <td>{item.employee_age}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
export default UsersList