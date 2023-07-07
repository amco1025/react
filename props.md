# props 사용

```
<Modal>내부에 다른 함수에서 만든 state를 넣고 싶을 때
다른 함수에 있는 변수를 마음대로 가져다 사용 x 

컴포넌트가 부모 자식 관계일 때 부모 컴포넌트의 state를 자식 컴포넌트로 전송하기 위해 props 문법 사용
```

# props로 부모 -> 자식 state 전송하는 법

```
1. 자식컴포넌트 사용하는 곳에 가서 <자식컴포넌트 작명 = {state이름}/>

{
    modal == true ? <Modal 글제목변경={글제목변경} color={'yellow'} 글제목={글제목}/> : null
}


2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props작명 사용

function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[0]}</h4>
      <h4>날짜</h4>
      <p>상세내용</p>
      <button onClick={()=>{ props.글제목변경(['여자 코트 추천', '강남 우동맛집', '파이썬독학'])}}>글수정</button>
    </div>
  )
}
```