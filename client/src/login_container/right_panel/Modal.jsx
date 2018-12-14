import React from "react";
import BootstrapModal from "react-bootstrap-modal";

const Modal = props => (
  <BootstrapModal
    show={props.open}
    onHide={props.onClose}
    aria-labelledby="ModalHeader"
  >
    <BootstrapModal.Body>
      {/* what is showing in the modal body - this.props.children */}
      {props.children}
    </BootstrapModal.Body>
  </BootstrapModal>
)

export default Modal
