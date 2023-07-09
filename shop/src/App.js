/* eslint-disable */

import { useState } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './Detail.js'

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
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
                    return (<Card shoes={shoes[i]} i={i}></Card>
                    )
                  })
                }
              </div>
            </div>
          </>
        }/>

        <Route path="/detail/:id" element={<Detail shoes={shoes} />}/>

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>회원</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>

        <Route path="*" element={<div>없는 페이지입니다.</div>}/>
      </Routes>

    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
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

{/* <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div> */}