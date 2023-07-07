# input 다루기 2 : 블로그 글발행 기능 만들기

# 버튼누르면 유저가 입력한 글을 글목록에 추가

```
function App (){
  let [글제목, 글제목변경] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
  let [입력값, 입력값변경] = useState('');
  return (
    <div>
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
      <button onClick={()=>{ 
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>
    </div>
  )
}

1. 버튼누르면 일단 글제목 state를 카피. array 형태의 state 조작은 우선 카피부터 시작
2. 카피한거에 unshift(입력값), array 맨 앞에 자료추가
3. state 변경함수 사용
```

# 글마다 삭제버튼과 기능 만들기

```
1. map 반복문안에 버튼부터 만들기
2. 그 다음 버튼을 누르면 state에서 글을 하나 삭제

function App (){
  let [글제목, 글제목변경] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
  let [입력값, 입력값변경] = useState('');
  return ( 
    <div>
    { 
     글제목.map(function(a, i){
        return (
          <div className="list">
            <h4>{ 글제목[i] }</h4>
            <p>2월 18일 발행</p>
            <button onClick={()=>{ ? }}>삭제</button>
          </div> 
        )
     }) 
    }  
  </div>
  )
}

1. 일단 버튼누르면 글제목 state 사본
2. 글제목 state에서 x번째 데이터를 삭제하고 싶으면 splice(x,1)사용

```