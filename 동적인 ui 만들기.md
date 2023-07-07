# 리액트에서 동적인 ui 만드는 과정
```
1. html css로 미리 ui 디자인을 다 해놓고

2. ui의 현재 상태를 state로 저장
let[modal, setModal] = useState(false);

3. state에 따라서 ui가 어떻게 보일지 조건문 등으로 작성
<div className='list'>
  <h4 onClick={()=>{ setModal(!modal)}}>{글제목[2]}</h4>
  <p>2월 17일 발행</p>
</div>

{
  modal == true ? <Modal/> : null
}

처음 useState를 false로 설정했기 때문에 처음에 modal은 안보이다가 글 제목을 누르면 setModal이 true로 변경되어 보이게 된다.
!modal은 버튼을 누르면 modal의 상태를 바꿔주기 때문에 다시 누르면 또 안보이게 된다.
```