import styled from 'styled-components';
import {Menu} from '@styled-icons/ionicons-solid/Menu';
import {FingerPrint} from '@styled-icons/ionicons-outline/FingerPrint';

const Container = styled.div`
 width:100%;
 heigth:100vh;
` 
const Header = styled.header`
  width:100%;
  height:100px;
  background-color: #fddb00;
  display: flex;
 
` 
const DivLogo =styled.div`
  width:70%;
  height:100px;
  background-color: transparent;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  font-size:25px;
  text-transform:uppercase;
`
const Nav = styled.div `
width:30%;
height:100px;
background-color: transparent;
display:flex;
align-items:center;
justify-content:center;
`
const ImgLogo = styled(FingerPrint)`
color:black;
width:40px;
`
const ImgMenu = styled(Menu)`
color:black;
width:40px;
cursor:pointer;
`

function App() {  
  return (
    <Container className="App" >
     <Header>
       <DivLogo><ImgLogo></ImgLogo>Agencia 2B</DivLogo>
       <Nav><ImgMenu></ImgMenu></Nav>
     </Header>
    </Container>
  );
}

export default App;
