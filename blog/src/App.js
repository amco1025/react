/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  // jsx 문법1 ) h4의 블로그임이 post로 변경
  // document.querySelector('h4').innerHTML = post;
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [logo, setLogo] = useState('ReactBlog');
  let [따봉] = useState(0);
  // a에 남자 코트 추천 할당
  // b는 state 변경을 도와주는 함수

  return (
    // return 안에는 병렬로 태그 2개이상 넣지 않기
    <div className="App">
      <div class="black-nav">
        {/* jsx 문법 3 : 스타일 넣을 땐 style={{스타일명:'값'}} */}
        <h4>{logo}</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]} <span>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {/* jsx 문법2 : 변수 넣을 땐 중괄호 */}
    </div>
  );
}

export default App;

// 중요한 변수는 state에 담아야 한다.
// 일반 변수는 변경되면 html에 자동으로 반영 안됨.
// state쓰던 html은 자동 재렌더링된다.
// 따라서 state는 변동시 자동으로 html에 반영되게 만들고 싶으면 state 사용
// 자주 변경될거 같은 html 부분은 state로 만들어놓기