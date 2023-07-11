# 코드가 길어지면 import & export

```
(data.js 파일)

let a = 10;
export default a;

코드가 길어질 경우 파일을 새로 만들어 다른 파일에 보관했다가 import해올 수 있다.

위 코드는 data.js 라는 파일이 있는데 거기 있던 변수를 App.js에서 가져와서 사용

export default 변수명;  이렇게 쓰면 원하는 변수를 밖으로 내보낼 수 있다.

(유의점)
- 변수, 함수, 자료형 전부 export 가능
- 파일마다 export default 라는 키워드는 하나만 사용 가능 
- 파일경로는 ./ 부터 시작
```

# export{} / import {} 문법

```
여러개의 변수들을 내보내고 싶으면 export default 말고 아래 문법 사용

(data.js 파일)

var name1 = 'Kim';
var name2 = 'Park';
export { name1, name2 }

- 원하는 변수, 함수 등을 여러개 내보낼 수 있다.

(App.js 파일)

import { name1, name2 } from './data.js';

- export {}로 내보냈다면 가져다가 쓸 때는 import {} 사용

유의점
- export{} 했던 것들은 import{} 쓸 때 자유작명이 불가능. export 했던 변수명 그대로 적아야 함.

따라서 export default / import를 사용하거나
export {} / import 사용해야 함
```