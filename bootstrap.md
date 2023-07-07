# 부트스트랩 설치
```
npm install react-bootstrap bootstrap

index.html
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
/>
```

# bootstrap 사용
```
1.  button 사용해보기

import {Button} from 'react-bootstrap'

function App(){
  return (
    <div>
      <Button variant="primary">Primary</Button>
    </div>
  )
}

2. navbar 만들어보기
import {Button, Navbar, Container, Nav} from 'react-bootstrap'

function App(){
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

```