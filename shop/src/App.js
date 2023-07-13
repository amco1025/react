/* eslint-disable */

import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet, BrowerRouter as Router } from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios'
import Cart from './routes/Cart.js'
import Login from './routes/Login.js'
import Signup from './routes/Signup.js'

function App() {

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]))
  },[])

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [재고] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>CART</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/login') }}>Log in</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/signup') }}>Sign up</Nav.Link>
          </Nav>
        </Container>  
      </Navbar>



      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
              { shoes.map((a, i)=>{
                  return <Card shoes={shoes[i]} i={i} key={i}></Card>
                })}
              </div>
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과)=>{ 
                let copy = [...shoes, ...결과.data];
                setShoes(copy);
               })
               
            }}>더보기</button>
          </>
        }/>

        <Route path="/detail/:id" element={<Detail shoes={shoes} />}/>

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>회원</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>

        <Route path="/cart" element={ <Cart/> } />

        <Route path="/login" element={ <Login/>}/>
        <Route path="/signup" element={ <Signup/>}/>
        <Route path="*" element={<div>없는 페이지입니다.</div>}/>
      </Routes>

    </div>
  );
}

function Card(props){
  const navigate = useNavigate(); 

  return (
    <div className="col-md-4">
      <img 
        src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} 
        width="80%" 
        onClick={()=> navigate('/detail/' + props.i)}
      />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
