# onClick 사용

```
function App(){
  
  function 함수임(){
    console.log(1)
  }
  return (
     <div onClick={함수임}> 안녕하세요 </div>
  )
}

div를 클릭시 함수안에 있던 자바스크립트가 실행.
리액트에서 어떤 html 요소 클릭시 원하는 코드실행하는 방법

<div onClick={ () => { 실행할코드 } }>
위 방법으로 작성해도 괜찮다.
```

# state 변경하는 방법
```
function App(){
  
  let [ 따봉 ] = useState(0);
  return (
    <h4> { 글제목[0] } <span onClick={ ()=>{ 따봉 = 따봉 + 1 } } >👍</span> { 따봉 }</h4>
  )
}

변수에 +1 해주고 싶으면 변수 = 변수 +1 해주면 된다.
하지만 저건 변수가 아니라 state이다. 따라서 state는 state 변경함수를 써서 state를 변경해야 한다. 그렇지 않으면 html에 재렌더링 되지 않는다.

let [ 따봉, 따봉변경 ] = useState(0); 
여기서 따봉변경은 state 변경을 도와주는 함수

function App(){
  
  let [ 따봉, 따봉변경 ] = useState(0);
  return (
      <h4> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 }</h4>
  )
}
위 방법으로 state 변경함수를 사용하여 변경하여 변경된다.
```
