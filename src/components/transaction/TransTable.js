import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deletTranAction,
  getTransAction,
} from "../../pages/dashboard/transactionAction";

export const TransTable = () => {
  const dispatch = useDispatch();
  const { trans } = useSelector((state) => state.transaction);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    // !trans.length && 
    user.uid && dispatch(getTransAction(user.uid));
  }, [dispatch, user.uid]);

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      dispatch(deletTranAction(id, user.uid));
    }
  };

  const total = trans.reduce((acc, item) => {
    return item.type === "income" ? acc + +item.amount : acc - +item.amount;
  }, 0);

  return (
    <div className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date</th>
            <th>Income</th>
            <th>Expenses</th>
            <th>Deleted</th>
          </tr>
        </thead>

        <tbody>
          {trans.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              {item.type === "income" ? (
                <>
                  <td className="text-success fw-bold">{item.amount}</td>
                  <td></td>
                </>
              ) : (
                <>
                  <td></td>
                  <td className="text-danger fw-bold">{item.amount}</td>
                </>
              )}

              <td>
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item.id)}
                >
                  <i className="fa-sharp fa-solid fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
          <tr className="fw-bold bg-success-subtle">
            <td className="bg-info" colSpan={4}>Total Balance</td>
            <td className="bg-info text-center"colSpan={2}>{total}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
