# map : 많은 div들을 반복문으로 줄이고 싶을 때

# map 함수 사용 법
```
1. array에 들어있는 자료 수 만큼 그 안에 코드를 반복실행
var 어레이 = [2,3,4];
어레이.map(function(){
  console.log(1)
});

console.log(1)이 3번 실행 된다.

2. 콜백함수에 파라미터 아무렇게나 작성하면 그 파라미터는 어레이 안에 있던 모든 자료를 하나씩 출력

var 어레이 = [2,3,4];
어레이.map(function(a){
  console.log(a)
});

2,3,4,가 출력 된다.

3. return 오른쪽에 무엇을 적으면 array로 담아준다.

var 어레이 = [2,3,4];
var newArray = 어레이.map(function(a){
  return a * 10
});
console.log(newArray)

newArray는 [20,30,40]이 출력
```

# map 활용하여 div 축약
```
function App (){
  return (
    <div>
      (생략)
      { 
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4>{ 글제목[i] }</h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      }
    </div>
  )
}

여기서 a에는 array안에 있던 자료를 i에는 0부터 1씩 증가하는 정수

따라서 위는 글 제목이 하나씩 출력
```

# map을 사용하여 좋아요
```
let [따봉, 따봉변경] = useState([0,0,0]);


{ 
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
}

useState를 3개 만드는 이유는 그렇지 않으면 어떤 버튼을 누르던 모두 같이 증가

```