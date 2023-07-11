import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap'
import { addItem } from './../store.js'
import { useDispatch } from 'react-redux';

function Detail(props){
  
  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)
  let { id } = useParams();
  let [탭, 탭변경] = useState(0)
  let 찾은상품 = props.shoes.find(x => x.id == id)
  let dispatch = useDispatch()

  useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(찾은상품.id)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, [])

  useEffect(()=>{ 
    let a = setTimeout(()=>{ setAlert(false) }, 2000)
    return ()=>{
      clearTimeout(a)
    }
  }, [])
  

  return (  
    <div className="container">
      {
        alert == true
        ? <div className="alert alert-warning">
            2초이내 구매시 할인
          </div>
        : null
      }
      <div className="alery alert-warning">
        2초이내 구매시 할인
      </div>
      {count}
      <button onClick={()=>{ setCount(count+1) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (찾은상품.id+1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem( {id : 1, name : 'Red Knit', count : 1}))
          }}>주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{ 탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ 탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ 탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭}/>

  </div>  
  )
};

function TabContent({탭}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)
  return ()=>{
    setFade('')
  }
  }, [탭])


  return (
    <div className={'start ' + fade}>
      { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>
  )
}


export default Detail 