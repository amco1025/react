# 상세페이지 겸 모달찰 ui 만들기
```
<div className="modal">
  <h4>제목</h4>
  <p>날짜</p>
  <p>상세내용</p>
</div>

.modal{
  margin-top : 20px;
  padding : 20px;
  background : #eee;
  text-align : left;
}
```

```
retrun() 안에 두 개의 html 태그를 나란히 적으면 안된다.
만약 그렇게 하고 싶다면
return(
  <div>
    <div></div>
    <div></div>
  </div>
)

또는

return(
  <>
    <div></div>
    <div></div>
  </>
)
이렇게 감싸서 사용해야 하며 이를 fragment 문법이라고 한다.
```

# 복잡한 html을 한 단어로 치환할 수 있는 Component 문법
```
function App (){
  return (
    <div>
      (생략)
      <Modal></Modal>
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

1. function을 이용해서 함수를 하나 만들어주고 작명한다.
2. 그 함수 안에 return()안에 축약을 원하는 html을 담으면 된다.
```

# Component 만들 떄 주의점
```
1. component 작명할 땐 영어대문자로 보통 시작
2. return() 안에 html 태그들이 평행하게 여러개 들어갈 수 없다.
3. function App(){} 내부에서 만들면 안된다.

function Modal(){
  return ( <div></div> )
}

let Modal = () => {
  return ( <div></div>) 
}

arrow function 사용해도 된다.
```

# 어떤 html 들을 component 만드는게 좋을까?
```
1. 사이트에 반복해서 출현하는 html 덩어리들
2. 내용이 매우 자주 변경될 것 같은 html 부분을 잘라서
3. 다른 페이지를 만들고 싶다면 그 페이지의 html 내용을 하나의 component로
4. 