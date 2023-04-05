import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";
import { useSelector } from "react-redux";

export const TransForm = () => {
  const [dt, setDt] = useState({});
  const {user} = useSelector(state =>state.user)

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setDt({
      ...dt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log({...dt, userId: user.uid});
  };

  return (
    <div className="mt-5">
      <Form className="border rounded p-3 shadow-lg" onSubmit={handleOnSubmit}>
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
          <Col md="4">
            <CustomInput
              onChange={handleOnChange}
              name="name"
              placeholder="Salary"
              required={true}
            />
          </Col>
          <Col md="1">
            <CustomInput
              onChange={handleOnChange}
              name="amount"
              type="number"
              placeholder="100"
              required
              min="1"
            />
          </Col>
          <Col md="3">
            <CustomInput
              onChange={handleOnChange}
              name="date"
              type="date"
              required
            />
          </Col>
          <Col md="2">
            <Form.Group className="mb-3 d-grid">
              <Button variant="warning" type="submit">
                Add{" "}
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
