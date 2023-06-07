import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';

import { setModalShow } from '../../system/SystemSlice';



export const CustomModal = ({heading, children}) => {
   const dispatch = useDispatch()
    const {modalShow} = useSelector(state =>state.system)

  return (

<>
<Modal
      show={modalShow}
      onHide={()=> dispatch (setModalShow(false))}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=''
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        {children}
      </Modal.Body>
    </Modal>
</>

 
  );
}

