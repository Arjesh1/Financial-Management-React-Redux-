import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../pages/user/userSlice";
import { setTrans } from "../../pages/dashboard/transactionSlice";
import logo from "../../assets/Management1.png"

export const Header = () => {
  const navigate = useNavigate()
const dispatch = useDispatch()
const {user} = useSelector((state)=> state.user)
  
const handleOnLogOut = () =>{
    signOut(auth).then(()=>{
      dispatch(setTrans([]))
      dispatch(setUser({}))
      //clear trans state.
      toast.success("User loged out")
    
      navigate("/")
      
    }).catch(err=>console.log(err))

  }
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/" className="text-success fw-bolder">
          <img src= {logo} className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto ">
            {user?.uid ? (
              <div className="d-flex gap-1 fs-4">
              <Link to="/dashboard" className="nav-link" >
                Dashboard
                
              </Link>

              <Link to="/user" className="nav-link" >
                Profile
                
              </Link>

              <Link to="#" className="nav-link" onClick={handleOnLogOut}>
                Log Out
              </Link>

              

              </div>
            ) : (
              <div className="d-flex gap-1 fs-4 ">
                <Link to="/" className="nav-link">
                   Login
                </Link>
                <Link to="/register" className="nav-link">
                 Register
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
