import React from "react";
import { TransForm } from "../../components/transaction/TransForm";
import { TransTable } from "../../components/transaction/TransTable";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setModalShow } from "../../system/SystemSlice";
import { CustomModal } from "../../components/customModal/CustomModal";

const Dashboard = () => {
  const dispatch =  useDispatch()
  const { trans } = useSelector((state) => state.transaction);

  const total = trans.reduce((acc, item) => {
    return item.type === "income" ? acc + +item.amount : acc - +item.amount;
  }, 0);

  const totalIncome = trans.reduce((acc, obj) => {
    if (obj.type === 'income') {
      return acc + +obj.amount;
    }
    return acc;
  }, 0);

  const totalExpenses = trans.reduce((acc, obj) => {
    if (obj.type === 'expenses') {
      return acc + +obj.amount;
    }
    return acc;
  }, 0);

  



  const handleOnAddTransaction = () =>{
dispatch(setModalShow(true))
  }
  return (
    <>
    <CustomModal heading="Add transaction">
      <TransForm />
    </CustomModal>

    <div className=" pt-4 pb-5">


<Row className="d-flex felx-wrap gap-3 m-auto justify-content-center align-items-center ">
  <Col lg={9} className="">
  <div className="container_box d-flex gap-5 justify-content-around flex-wrap">

<div className=" shadow-lg p-5 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center" >
  <div className=""><i class="fa-solid fa-coins fs-1 text-success"></i></div>
  <div>
  <p className="lh-2 fs-4 text-center">Income
              <br/>
              <span className="fw-bold text-center fs-4">${totalIncome}</span>
              </p>
    </div>
   </div>

   <div className=" shadow-lg p-5 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center" >
  <div className=""><i class="fa-solid fa-comments-dollar fs-1 text-danger"></i></div>
  <div>
  <p className="lh-2 fs-4 text-center">Expenses
              <br/>
              <span className="fw-bold text-center fs-4">${totalExpenses}</span>
              </p>
    </div>
   </div>

   <div className=" shadow-lg p-5 pt-2 pb-0 bg-light rounded d-flex justify-content-between gap-4 align-items-center" >
  <div className="">
  {total >= 0?(
  <i class="fa-solid fa-scale-unbalanced fs-1 text-success"></i>
  ):(
    <i class="fa-solid fa-scale-unbalanced fs-1 text-danger"></i>
  )}
    
    </div>
  <div>
  <p className="lh-2 fs-4 text-center">Balance
              <br/>
             
              <span className="fw-bold text-center fs-4">${total}</span>
              </p>
    </div>
   </div>

</div>
</Col>
  <Col className=" ">
  {/* <Container> */}
  <div className="transaction_box bg-light fs-1 p-1 pt-3 pb-3 rounded-top m-auto">
    <Row className="align-items-center">
      <Col lg={9}><h4 className="text-center  ">Transactions</h4></Col>
      <Col className="d-flex justify-content-end  ">
      <Button variant="warning" className="" onClick={handleOnAddTransaction}> 
      Add
      </Button>
      </Col>
    </Row>
    <hr/> 
      </div>
      {/* </Container> */}
  </Col>
</Row>

{/* charts and transaction history */}

<Row className="d-flex felx-wrap gap-3 m-auto justify-content-center align-items-center ">
  <Col lg={9} className="">
  
</Col>

  <Col className="">
  
  <div className="transaction_box bg-light  p-1 pt-0 pb-0 rounded-bottom m-auto">
    <Row className="align-items-center">
      <Col><TransTable/></Col>
      
    </Row>
     
      </div>
    
  </Col>
</Row>







      

     





      
    </div>
    </>
  );
};

export default Dashboard;
