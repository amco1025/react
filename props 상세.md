# props을 이용한 상세 페이지 만들기
```
각 글의 제목을 눌렀을 때 그 제목에 맞게 상세페이지를 보고 싶다.

1. state 만들기
let [title, setTitle] = useState(0);

2. map을 사용하여 각 페이지 구현
<div>
	{ 
	글제목.map(function(a, i){
			return (
			<div className="list">
			<h4 onClick={()=>{ setModal(true); setTitle(i); }}>{ 글제목[i] }</h4>
			<p>2월 18일 발행</p>
			</div> )
		}) 
	}
</div>
각각 글제목을 누르면 setTitle(i) 함
map 안에서의 i는 돌 때마다 0,1,2 이렇게 증가
따라서 첫 글제목 클릭시 setTitle(0) , 두 번째 글 제목 클릭시 setTitle(1) ...

3. modal에서 props을 통해 데이터를 받아 사용

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

```