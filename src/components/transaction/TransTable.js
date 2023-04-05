import React from "react";
import { Button, Table } from "react-bootstrap";

//1. fetch all transaction from the database
//2. put all the trans to the redux store
//3. get all the trans from the redux store into the table and display

export const TransTable = () => {
  return (
    <div className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Deleted</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>gkjhlkj</td>
            <td>kjh</td>
            <td>lkhjl</td>
            <td>
              <Button variant="danger">
                <i className="fa-sharp fa-solid fa-trash"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
