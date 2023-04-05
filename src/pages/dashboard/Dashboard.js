import React from "react";
import { TransForm } from "../../components/transaction/TransForm";
import { TransTable } from "../../components/transaction/TransTable";

const Dashboard = () => {
  return (
    <div>
      <div className="">
        <TransForm />
      </div>

      <div className="">
        <TransTable />
      </div>
    </div>
  );
};

export default Dashboard;
