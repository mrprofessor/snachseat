import React from "react";
import { Button, Modal } from "react-bootstrap";

const CustomModal = ({
  showModal,
  onClose,
  children,
  title,
  showSaveButton = true
}) => {
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        {showSaveButton && (
          <Button variant="primary" onClick={onClose}>
            Save Changes
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
