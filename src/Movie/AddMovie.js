import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const AddMovie = (props) => {
  const [show, setShow] = useState(false);

  const [inputs, setInputs]= useState ([
    {
      Title: "",
      posterURL: "",
      Description: "",
      //rating: "",
      Id: uuidv4(),
  },
  ])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
      setInputs({...inputs,[e.target.name]: e.target.value})
    }
    const handleSave = () => {
      props.handelAddMovie(inputs)
      setInputs(
        {
          Title: "",
          posterURL: "",
          Description: "",
          rating: "",
          Id: uuidv4(),
      },
      )
      handleClose()
    }

  return (
    <div>
      <Button variant="outline-success" onClick={handleShow}>Add Movie</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="put the title-movie"
                name="Title"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea" rows={2}
                placeholder="put the Description-movie"
                name="Description"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>posterURL</Form.Label>
              <Form.Control
                type="text"
                placeholder="put the posterURL-movie"
                name="posterURL"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating-Movie</Form.Label>
              <Form.Control
                type="text"
                placeholder="put the rating-movie"
                name="rating"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie