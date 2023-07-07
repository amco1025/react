# 중요한 데이터는 변수말고 state에 담아야 한다.

```
import { useState } from 'react';
import './App.css'

function App(){
 
  let [a,b] = useState('남자 코트 추천');
  let posts = '강남 우동 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  )
}
```

# 변수 말고 state에 데이터 저장해서 쓰는 이유
```
state는 변동사항이 생기면 state쓰는 html 자동으로 재렌더링 해준다.

자주변경될 것 같은 데이터들은 state에 저장했다가 html에 {데이터바인딩}

변경할 일이 없는 데이터들이나 굳이 html에 표기가 필요없는 데이터들은 그냥 변수에 저장해도 된다.
```