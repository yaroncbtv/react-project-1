import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function Modal2(props) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>
        {handleShow}
      <Modal show={show} onHide={handleShow} animation={true}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Notes App Said</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose} >
            Close
          </Button>
          <Button variant="danger" onClick={handleClose} onClick={props.removeNote}>
            Delete Note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }

  export default Modal2;