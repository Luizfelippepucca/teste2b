import React, {useState} from 'react';
import styled from 'styled-components';
import {Menu} from '@styled-icons/ionicons-solid/Menu';
import {FingerPrint} from '@styled-icons/ionicons-outline/FingerPrint';
import {CloseCircle} from '@styled-icons/ionicons-sharp/CloseCircle';
import Navegation from './rotas/Navegacao';
import  { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/BlogComp';
import Suport from './components/SuportComp';

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
  text-transform:uppercase;
  
 
`

const TitleLogo = styled.p`
font-size:25px;
@media(min-width: 768px){
  font-size:30px;
  margin-left:-20%;
 }

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
@media(min-width: 768px){
  width:50px;
}
`
const ImgMenu = styled(Menu)`
color:black;
width:40px;
cursor:pointer;
@media(min-width: 768px){
  width:50px;
}
`
const Modal = styled.div`
width:100%;
height:100%;
background-color:yellow;
position:absolute;
z-index:1;
top:0px;
`
const ImgMenu2 = styled(CloseCircle)`
color:black;
width:30px;
heigth:auto;
cursor:pointer;
float:right;
margin-top 5px;
margin-right: 10px;
transform:scale(1);
transition: all 0.5s;
&:hover{
  transform:scale(1.1); 
}
@media(min-width: 768px){
  width:40px;
}
` 
function App() {  
  const [MenuOpened,setMenuOpened] = useState(true);

 
       
  const menuOpen = ()=>{
    
    setMenuOpened(false);
  };

  const menuClose = ()=>{
    setMenuOpened(true);
   
  }

 
  return (
    <Router>
      <Container className="App" >
        <Header>
          <DivLogo><ImgLogo/><TitleLogo>Agencia 2B</TitleLogo></DivLogo>
          <Nav ><ImgMenu onClick={()=>menuOpen()} className='imgMenu'/></Nav>
        </Header>
        <Home/>
        <Suport/>
        <Blog/>
       {MenuOpened?'':
        <Modal>
          <ImgMenu2 onClick={()=>menuClose()}/>
          
            <Navegation click={()=>menuClose()}/>
            
        </Modal>}
      
      </Container>
    </Router>
  );
}

export default App;
