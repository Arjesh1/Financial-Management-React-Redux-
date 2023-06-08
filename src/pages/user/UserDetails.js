import React from 'react'
import user from "../../assets/no-profile.jpg"
import { useSelector } from 'react-redux'
import { Col, Container, Form, Row } from 'react-bootstrap'

const UserDetails = () => {

    const {fName, lName, email}  = useSelector((state) => state.user.user)
    const { trans } = useSelector((state) => state.transaction);

    const total = trans.reduce((acc, item) => {
      return item.type === "income" ? acc + +item.amount : acc - +item.amount;
    }, 0);

    
  return (

    <Container className='d-flex align-items-center justify-content-center user_cont  '>
    
<div className="container mt-5 px-4 pb-2 mb-4 shadow bg-body-tertiary rounded  align-self-center">

  <Row>
    <h1 className='text-center p-3 pt-5'>Profile</h1>
    <Col md={6}> <div className=" d-flex justify-content-center">
     <div className="p-3 mt-5"><img src={user}/></div>
    </div></Col>
    <Col className=' align-self-center'>

    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control value={fName} disabled={true} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control value={lName} disabled={true}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control value={email} disabled={true} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Balance Amount</Form.Label>
          <Form.Control disabled={true} value={"$" + " " + total}/>
        </Form.Group>
        </Row>

      
    </Form>
    
  
</Col>
  </Row>
  
</div>
</Container>
      
    
  )
}

export default UserDetails
