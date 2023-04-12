import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { loginUser } from "../user/userAction"
import { useDispatch, useSelector } from "react-redux";


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
    <div className="mt-5">
      <Form onSubmit={handleOnSubmit} className="border p-5 rounded shadow-lg">
        <h3>Welcome back!</h3>
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
  );
};
export default Login;
