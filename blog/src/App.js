/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  // jsx 문법1 ) h4의 블로그임이 post로 변경
  // document.querySelector('h4').innerHTML = post;
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [logo, setLogo] = useState('ReactBlog');
  // let [따봉, 따봉변경] = useState(0);
  let [입력값, 입력값변경] = useState('');
  // map 사용할 때 
  let [따봉, 따봉변경] = useState([0,0,0]);
  // a에 남자 코트 추천 할당
  // b는 state 변경을 도와주는 함수
  // ui의 현재상태를 state로 저장하기
  let[modal, setModal] = useState(false);
  // state 변경함수는 set~
  // 각 제목을 누를 때 마다 제목에 맞는 modal을 보여주기 위해 
  let [title, setTitle] = useState(0);

  return (
    // return 안에는 병렬로 태그 2개이상 넣지 않기
    <div className="App">
      <div className="black-nav">
        {/* jsx 문법 3 : 스타일 넣을 땐 style={{스타일명:'값'}} */}
        <h4>{logo}</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>
{/* 
      <div className='list'> */}
        {/* onClick 사용해보기 */}
        {/* 누를 때 마다 변경되는 값이므로 state로 만들기 */}
        {/* state를 변경할거면 state 변경함수 꼭 활용하기 */}
        {/* state 변경함수는 ()안에 입력한걸로 기존 state를 갈아치워준다. */}
        {/* <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>


      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>


      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
      {/* map 사용하여 위의 3개의 div 보여주기 */}
      {/* { 
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4>{ 글제목[i] } 
              <span onClick={()=>{ 
                let copy = [...따봉];
                copy[i] = copy[i]+1;
                따봉변경(copy)
              }}>👍</span> {따봉[i]} 
            </h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      } */}

      {/* map을 사용하여 각 글을 하나씩 모여주며 각 글을 보여준다. */}
      <div>
        { 
          글제목.map(function(a, i){
            return (
            <div className="list">
              <h4 onClick={()=>{ setModal(true); setTitle(i); }}>
                { 글제목[i] }
                <span onClick={()=>{ 
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)  
                }}>👍</span> {따봉[i]} 
              </h4>
              <p>2월 18일 발행</p>
              <button onClick={()=>{ 
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);
           }}>삭제</button>
            </div> )
          }) 
        }
      </div>
  
      
      {/* jsx 문법2 : 변수 넣을 땐 중괄호 */}
      
      {/* state가 true일 때만 보여지게 하기 */}
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
      <button onClick={()=>{ 
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>


      {/* state의 상태에 따라 ui가 어떻게 보일지 결정 */}
      {/* modal이 true라면 보여짐 */}
      {/* 초기값이 false이므로 안보임 */}
      {/* 현재 title에 맞는 값들을 보내줌 */}
      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} color={'yellow'} 글제목={글제목}/> : null
      }
      
      {/* 동적인 ui 만들기 */}
      {/* 1. html css로 미리 디자인 완성 */}
      {/* 2. ui의 현재 상태를 state로 저장 */}
      {/* 3. state에 따라 ui가 어떻게 보일지 작성 */}
    </div>
  );
}

// 부모 -> 자식 state를  전송하는 법
// 1. <자식컴포넌트 작명={state이름}>
// 2. props 파라미터 등록 후 props.작명 사용
function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <h4>날짜</h4>
      <p>상세내용</p>
      <button onClick={()=>{ props.글제목변경(['여자 코트 추천', '강남 우동맛집', '파이썬독학'])}}>글수정</button>
    </div>
  )
}
export default App;

// 중요한 변수는 state에 담아야 한다.
// 일반 변수는 변경되면 html에 자동으로 반영 안됨.
// state쓰던 html은 자동 재렌더링된다.
// 따라서 state는 변동시 자동으로 html에 반영되게 만들고 싶으면 state 사용
// 자주 변경될거 같은 html 부분은 state로 만들어놓기