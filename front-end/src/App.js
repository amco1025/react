/* eslint-disable react/jsx-pascal-case */
import React from "react";
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, BrowserRouter as Router } from 'react-router-dom'
import logo from './assets/image.png';
import Signup from './routes/Signup.js'
import Student_Signup from './routes/Student_Signup.js'
import Teacher_Signup from './routes/Teacher_Signup.js'
import Login from './routes/Login.js'

function App() {
    let navigate = useNavigate();

    return (
      <div className="App">
        <Navbar bg="dark" variant="dark" className="Navbar">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo} 
                className="navbar-logo" 
                alt="Logo"
              />
            </Navbar.Brand>
            <Nav className="me-auto d-flex justify-content-end">
              <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/signup') }}>Sign up</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/login') }}>Log in</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={<h1>메인페이지</h1>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signup/student-signup" element={<Student_Signup/>}/>
            <Route path="/signup/teacher-signup" element={<Teacher_Signup/>}/>
            <Route path="/login" element={ <Login/>}/>
        </Routes>

      </div>
    );
  }
  
export default App;
