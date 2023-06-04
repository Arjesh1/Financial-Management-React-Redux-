import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { loginUser } from "../user/userAction"
import { useDispatch, useSelector } from "react-redux";
import login from '../../assets/login.png'


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formDt, setFormDt] = useState({});
  const {user} = useSelector(state => state.user)

  useEffect(()=>{
   
    user?.uid && navigate("/dashboard")
  },[user?.uid, navigate])

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formDt))
  };

  const inputFields = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Smith@emial.com",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "*****",
      required: true,
    },
  ];

  return (
    <div className="">
     

        <Row className="pt-4">
          <Col className="img_col">
          <img src={login}  className="w-100 h-100"/>
          </Col>
          <Col className="bg-transparent align-self-center ">
          <div className="w-100 ">
          <Form onSubmit={handleOnSubmit} className=" p-2  ">
        <h3 className="text-center">Welcome back!</h3>
        <hr />

        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
      
      </div>
      </Col>
        </Row>

    

      
    </div>
  );
};
export default Login;
