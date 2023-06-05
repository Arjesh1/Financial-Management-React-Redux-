import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { Col, Row } from "react-bootstrap";



const initialState = {
  password: "Aa12345",
  confirmPassword: "Aa12345",
};

const Register = () => {
  const navigate = useNavigate();
  const [frmDt, setFrmDt] = useState(initialState);
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setError("");
      value.length < 6 && setError("Password is too short");

      !/[0-9]/.test(value) && setError("Must include number");
      !/[A-Z]/.test(value) && setError("Must include uppercase");
      !/[a-z]/.test(value) && setError("Must include lowercase");
    }

    setFrmDt({
      ...frmDt,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {

    try {

    e.preventDefault();

    const { confirmPassword, password, email } = frmDt;

    if (confirmPassword !== password) {
      return toast.error("Password do not match!");
    }

    const pendingState = createUserWithEmailAndPassword(auth, email, password)
    toast.promise(pendingState, {
      pending: "Please wait..."
    })

    const {user} = await pendingState
    console.log(user);
    if (user?.uid){
      toast.success("User has been registered. Redirecting to dashboard.")
      navigate("/dashboard")

      const userObj = {
        fName: frmDt.fName,
        lName: frmDt.lName,
        email: frmDt.email,
        uid: user.uid,
        
      }

      await setDoc(doc(db, "users", user.uid), userObj)

      
// navigate("/dashboard")
    } 

  } catch (error){
    toast.error(error.message)
  }

  };

  const inputFields = [
    { label: "First Name", name: "fName", placeholder: "Sam", required: true },

    { label: "Last Name", name: "lName", placeholder: "Smith", required: true },
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
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      placeholder: "*****",
      required: true,
      
    },
  ];

  return (
    <div className="container register_con pb-3 pt-3">
      <Row>
        <Col md={6}>
          <Form onSubmit={handleOnSubmit} className="border p-5  rounded shadow-lg">
        <h3 className="text-center">Join Our Community</h3>
        <hr />

        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}
        <div className="p3">
          <Form.Text>
            Password should be longer than 6 charcters contain at least one
            number, one uppercase and one lowercase.
            {error && (
              <ul>
                <li className="text-danger fw-bolder">{error}</li>
              </ul>
            )}
          </Form.Text>
        </div>
        <div className="d-grid mt-3">
        <Button variant="primary" type="submit" disabled={error}>
          Submit
        </Button>
        </div>
      </Form></Col>
      </Row>
      
    </div>
  );
};

export default Register;
