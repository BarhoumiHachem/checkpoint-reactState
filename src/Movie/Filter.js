import React from 'react'
import { Form, Button, Navbar, Container } from 'react-bootstrap'
import AddMovie from './AddMovie'

const Filter = (props) => {

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <AddMovie handelAddMovie={props.handelAddMovie}/>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e)=>props.handelFilter(e.target.value)}
                        />
                        <Button variant="outline-success">Search Name</Button>
                    </Form>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e)=>props.handleRating(e.target.value)}
                        />
                        <Button variant="outline-success">Search Star</Button>
                    </Form>
                </Container>
            </Navbar>
        </div >
    )
}

export default Filter