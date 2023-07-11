# html 긴 부분 컴포넌트로 만들기
```
function App(){
  return (
    <div className="App">
      (생략)
      <div className="container">
        <div className="row">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

function Card(){
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
      <h4>상품명</h4>
      <p>상품정보</p>
    </div>
  )
}

Card 라는 컴포넌트를 만들고 거기에 축약할 html 담기.
그리고 <Card>
```

# shoes에 있던거 Card 컴포넌트에 넣기
```
shoes라는 state는 App 컴포넌트에 있다.
그걸 App의 자식인 Card 컴포넌트가 사용하고 싶다면 App -> Card 이렇게 props 전송해주면 된다.

(function App 내부)

<Card shoes={shoes}/>
<Card shoes={shoes}/>
<Card shoes={shoes}/>

function Card(props){
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
      <h4>{ props.shoes[0].title }</h4>
      <p>{ props.shoes[0].price }</p>
    </div>
  )
}


위에서 보내고 props.보낸거 
부모에 있던 shoes라는 state 사용가능하다. 
```
# 다른 상품 보여주기
```
(function App 내부)

<Card shoes={shoes[0]} i={1} />
<Card shoes={shoes[1]} i={2} />
<Card shoes={shoes[2]} i={3} />

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}
```