import React from "react";
import { TransForm } from "../../components/transaction/TransForm";
import { TransTable } from "../../components/transaction/TransTable";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setModalShow } from "../../system/SystemSlice";
import { CustomModal } from "../../components/customModal/CustomModal";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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


  const Months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const monthlyTotalIncomes = {};
  const monthlyTotalExpenses = {};
  
  Months.forEach(month => {
    const filteredArray = trans.filter(obj => {
      const objDate = new Date(obj.date);
      return objDate.getMonth() === Months.indexOf(month);
    });
  
    const incomeArray = filteredArray.filter(obj => obj.type === 'income');
    const totalIncome = incomeArray.reduce((acc, obj) => acc + +obj.amount, 0);
    monthlyTotalIncomes[month] = totalIncome;
  
    const expenseArray = filteredArray.filter(obj => obj.type === 'expenses');
    const totalExpenses = expenseArray.reduce((acc, obj) => acc + +obj.amount, 0);
    monthlyTotalExpenses[month] = totalExpenses;
  });
  
  console.log(monthlyTotalIncomes.January);
  console.log(monthlyTotalExpenses);



  const labels = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

  const options = {
    responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Income and Expenses Chart',
    },
  },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: [
          monthlyTotalIncomes.January,
           monthlyTotalIncomes.February, 
           monthlyTotalIncomes.March, 
           monthlyTotalIncomes.April, 
           monthlyTotalIncomes.May, 
           monthlyTotalIncomes.June, 
           monthlyTotalIncomes.July, 
           monthlyTotalIncomes.August, 
           monthlyTotalIncomes.September,
           monthlyTotalIncomes.October,
           monthlyTotalIncomes.November,
           monthlyTotalIncomes.December,],
           borderColor: '#198754',
          backgroundColor: '#198754',
           
        tension:0.4,
        fill: true,
        
      },

      {
        label: 'Expenses',
        data: [
          monthlyTotalExpenses.January,
          monthlyTotalExpenses.February, 
          monthlyTotalExpenses.March, 
          monthlyTotalExpenses.April, 
          monthlyTotalExpenses.May, 
          monthlyTotalExpenses.June, 
          monthlyTotalExpenses.July, 
          monthlyTotalExpenses.August, 
          monthlyTotalExpenses.September,
          monthlyTotalExpenses.October,
          monthlyTotalExpenses.November,
          monthlyTotalExpenses.December,],
          borderColor: 'rgb(255, 99, 132)',
           backgroundColor: 'rgb(255, 99, 132)',
        tension:0.4,
        fill: true,
        
      },
      
    ],
  };

  



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

<div className=" shadow-lg p-5 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top" >
  <div className=""><i class="fa-solid fa-coins fs-1 text-success"></i></div>
  <div>
  <p className="lh-2 fs-4 text-center">Income
              <br/>
              <span className="fw-bold text-center fs-4">${totalIncome}</span>
              </p>
    </div>
   </div>

   <div className=" shadow-lg p-5 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top" >
  <div className=""><i class="fa-solid fa-comments-dollar fs-1 text-danger"></i></div>
  <div>
  <p className="lh-2 fs-4 text-center">Expenses
              <br/>
              <span className="fw-bold text-center fs-4">${totalExpenses}</span>
              </p>
    </div>
   </div>

   <div className=" shadow-lg p-5 pt-2 pb-0 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top" >
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
  {/* charts */}
  <Col lg={9} className="align-self-start">

  <div className=' '>
      
      <Line options={options} data={data} className="pt-3" />
      
      </div>


  
</Col>

  <Col  className="align-self-start">
  
  <div className="transaction_box bg-light  p-1 pt-0 pb-0 rounded-bottom m-auto">
    <Row className="align-items-start ">
      <Col className=""><TransTable/></Col>
      
    </Row>
     
      </div>
    
  </Col>
</Row>







      

     





      
    </div>
    </>
  );
};

export default Dashboard;
