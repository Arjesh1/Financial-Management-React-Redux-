import React from "react";
import { TransForm } from "../../components/transaction/TransForm";
import { TransTable } from "../../components/transaction/TransTable";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className=" pt-4">


<Row>
  <Col lg={8}>
  <div className="container_box d-flex gap-5 justify-content-around  ">

<div className=" shadow-lg p-5 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center" >
  <div className=""><i class="fa-solid fa-coins fs-1 text-success"></i></div>
  <div><h3>Income</h3>
  <p className="text-center">$ 2400</p></div>
  
   </div>
   <div className=" shadow-lg p-5 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center" >
  <div className=""><i class="fa-solid fa-comments-dollar fs-1 text-danger"></i></div>
  <div><h3>Spending</h3>
  <p className="text-center">$ 400</p></div>
  
   </div>

</div>
</Col>
  <Col className="pe-5 ">
  {/* <Container> */}
  <div className="transaction_box bg-light fs-1 p-1 pt-2 pb-2 rounded">
    <h4 className="text-center">Transactions</h4>
    <hr/>
        <TransForm/>
      </div>
      {/* </Container> */}
  </Col>
</Row>




      

     





      
    </div>
  );
};

export default Dashboard;
