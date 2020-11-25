import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';

import Form from 'react-bootstrap/Form';

function ModalPopUp(props) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
      Edit
      </Button>
        {handleShow}
      <Modal show={show} onHide={handleShow} animation={true}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title> Your title: {props.popUpCard.title}</Modal.Title>

          </Modal.Header>
    <Form>
        <Form.Control type="text" placeholder="Change title" />
    </Form>
    
        <Modal.Body>
            Your note: {props.popUpCard.note}
            </Modal.Body>
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        {/* <Form.Label>Change note:</Form.Label> */}
        <Form.Control placeholder="Change note" as="textarea" rows={3} />
        </Form.Group>
        <span>Created: {props.popUpCard.date}</span>
    </Form>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} >
          Cancel
          </Button>
          <Button variant="warning" onClick={handleClose} >
          Change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }

  export default ModalPopUp;