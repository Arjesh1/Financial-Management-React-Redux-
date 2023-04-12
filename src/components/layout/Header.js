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
        <Navbar.Brand href="#home" className="text-success fw-bolder">
          <i className="fa-solid fa-money-bill-1-wave "></i> Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-4">
            {user?.uid ? (
              <>
              <Link to="#" className="nav-link" onClick={handleOnLogOut}>
                <i
                  className="fa-solid fa-right-from-bracket"
                  title="Log Out" 
                ></i>
              </Link>

              <Link to="/dashboard" className="nav-link" >
                <i
                  className="fa-thin fa-gauge"
                  title="Dashboard" 
                ></i>
                
              </Link>

              <Link to="/dashboard" className="nav-link" >
                <i
                  className="fa-solid fa-user"
                  title="Dashboard" 
                ></i>
                
              </Link>

              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  <i className="fa-solid fa-right-to-bracket" title="Login"></i>
                </Link>
                <Link to="/register" className="nav-link">
                  <i className="fa-solid fa-user-pen" title="Register"></i>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
