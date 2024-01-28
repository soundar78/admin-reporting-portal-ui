/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHomeUser,
  faTriangleExclamation,
  faClose
} from '@fortawesome/free-solid-svg-icons'
import { Grid, Row, Column } from 'components/ui/Grid'
import './styles.css'

const Model = ({ cell }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <span>
        <a href="#" onClick={handleShow}>
          {cell}{' '}
        </a>
      </span>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="modal-header">
          <div className="modal-title h4">
            <FontAwesomeIcon icon={faHomeUser} /> Suspension
          </div>

          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        {/* <Modal.Header closeButton>
          <Modal.Title>
            {' '}
            <FontAwesomeIcon icon={faHomeUser} /> Suspension
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Row>
            <Column span={3}>
              {' '}
              <FontAwesomeIcon icon={faTriangleExclamation} />
            </Column>
            <Column span={9}>
              {' '}
              <h4>Are you sure to suspend the company?</h4>
              <p>Legal Name : BadgerToll</p>
              <p>DBA : BGR</p>
              <p>Email : badgertoll@mail.com</p>
            </Column>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Model
