import React from "react";
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet, BrowerRouter as Router } from 'react-router-dom'
import logo from './assets/image.png';
import Signup from './routes/Signup.js'

function App() {
    let navigate = useNavigate();

    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo} // Use imported image here
                className="navbar-logo" // Add class here
                alt="Logo"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
                <Nav.Link onClick={()=>{ navigate('/signup') }}>Sign up</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={<h1>메인페이지</h1>}/>
            <Route path="/Signup" element={ <Signup/>}/>

        </Routes>

      </div>
    );
  }
  
  export default App;
