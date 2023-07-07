# <input> 태그 사용하기
```
유저의 입력을 받을 수 있는 박스를 생성할 때 사용 가능한 태그들 
<input type="text"/>
<input type="range"/>
<input type="date"/>
<input type="number"/>
<textarea></textarea>
<select></select>

이 외에도 다양한 종류의 인풋 박스가 있다.
```

# <input>에 뭔가 입력시 코드를 실행하려면
```
유저가 <input>에 뭔가 입력시 코드를 실행해주고 싶다면 onChange 아니면 onInput 이벤트핸들러를 부착하면 된다.

<input onChange={()=>{ 실행할코드 }}/>

이벤트 핸들러의 종류도 다양하다.
onMouseOver={ } 이건 이 요소에 마우스를 댔을 때 안의 코드를 실행해줍니다.

onScroll={ } 이건 이 요소를 스크롤했을 때 안의 코드를 실행해줍니다.
```

# <input>에 입력한 값을 가져오는 법
```
<input onChange={(e)=>{ console.log(e.target.value) }}/>

e라는 파라미터를 추가해주고 e.target.value라고 적으면 현재 <input>에 입력된 값을 가져올 수 있다.

이벤트핸들러에 들어가는 함수에 저렇게 파라미터 e를 추가하면 e는 이벤트 객체 라고 부르는데 현재 발생하는 이벤트와 관련한 유용한 기능들을 제공하는 일종의 변수

e.target : 현재 이벤트가 발생한 곳을 알려줌
e.prevenDefault() : 이벤트 기본 동작을 막아줌
e.stopPropagation : 이벤트 버블링 막아줌
```

# 사용자가 input에 입력한 데이터 저장하기

```
사용자가 input에 입력한 데이터는 state 아니면 변수에 저장해서 사용하는게 일반적.

function App (){

  let [입력값, 입력값변경] = useState('');
  return (
    <input onChange={(e)=>{ 
      입력값변경(e.target.value) 
      console.log(입력값)
    }} />
  )
}

state를 하나 만들어주고 onChange될 때 마다 state에 e.target.value 넣어줌.
입력값이라는 state를 필요한 곳에서 사용
```