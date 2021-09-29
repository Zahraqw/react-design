import React from "react";
import { Modal, Button } from "react-bootstrap";

function Dialog(props) {
  const handleClose = () => props.setShow(false);
  return (
    <>
      <Modal show={props.show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>productDescription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Specifications of the product you want to buy
          <ul>
            <li>{props.productDescription[0]}</li>
            <li>{props.productDescription[1]}</li>
            <li>{props.productDescription[2]}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dialog;
