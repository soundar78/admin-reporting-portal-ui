/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useRef } from 'react'
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

const Model = ({ cell, data }) => {
  const ref = useRef(null)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const [currentId, setCurrentId] = useState()

  const handleShow = (event) => {
    // console.log(event.currentTarget.id);
    setShow(true)
    setCurrentId(ref.current.id)
  }

  // const handleShow = () => setShow(true)

  const arrayDataItems = data.map((data1) =>
    data1?.legalname === currentId ? (
      <>
        <p>Legal Name : {data1.legalname}</p>
        <p>DBA : {data1?.dba}</p>
        <p>Email : {data1?.email}</p>
      </>
    ) : (
      ''
    )
  )

  return (
    <>
      <span>
        <a href="#" ref={ref} id={cell} onClick={handleShow}>
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
            aria-label="Close"
            onClick={handleClose}
            className="btn-cls-cus"
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
              <>
                <h4>Are you sure to suspend the company? </h4>

                {arrayDataItems}
              </>
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
