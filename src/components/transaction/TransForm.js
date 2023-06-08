import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { addTransactionAction } from "../../pages/dashboard/transactionAction";

export const TransForm = () => {
  const dispatch = useDispatch()
  const [dt, setDt] = useState({});
  const {user} = useSelector((state) =>state.user)

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setDt({
      ...dt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransactionAction({...dt, userId: user.uid}))
    
  };

  return (
    <div className="">
      <Form className="border rounded p-3 shadow-lg m-auto" onSubmit={handleOnSubmit}>
        <Row>
          <Col md="2">
            <Form.Group className="mb-3 ">
              <Form.Select name="type" required onChange={handleOnChange}>
                <option value="">Select</option>
                <option value="income">Income</option>
                <option value="expenses">Expenses</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="3">
            <CustomInput
              onChange={handleOnChange}
              name="name"
              placeholder="Salary"
              required={true}
            />
          </Col>
          <Col md="2">
            <CustomInput
              onChange={handleOnChange}
              name="amount"
              type="number"
              placeholder="$ 100"
              required
              min="1"
            />
          </Col>
          <Col md="3">
            <CustomInput
              onChange={handleOnChange}
              name="date"
              type="date"
              placeholder='Date'
              required
            />
          </Col>
          <Col md="2">
            <Form.Group className="mb-3 d-grid ">
              <Button variant="warning fw-bold" type="submit">
                Add{" "}
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      
    </div>
  );
};
