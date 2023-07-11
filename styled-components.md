# styled-components
```
스타일을 바로 입혀서 컴포넌트를 만들 수 있다.
styled-components라는 라이브러리 사용하기
```

# 설치
```
import styled from 'styled-components'
```

# styled-components 사용방법
```
import styled from 'styled-components';

let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`;

function Detail(){
  return (
    <div>
      <Box>
        <YellowBtn>버튼임</YellowBtn>
      </Box>
    </div>
  )
}

장점 1 : css 파일 오픈할 필요 없이 js 파일에서 바로 스타일을 넣을 수 있다.
장점 2 : 여기 적은 스타일이 다른 js 파일로 오염되지 않는다.
장점 3 : 페이지 로딩시간 단축된다.
```

# props로 재활용 가능
```
import styled from 'styled-components';

let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : black;
  padding : 10px;
`;

function Detail(){
  return (
    <div>
        <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
        <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
    </div>
  )
}
```