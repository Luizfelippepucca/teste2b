import React from 'react';
import styled from 'styled-components';
import {Mobile2} from '@styled-icons/icomoon/Mobile2';
import {Lemon} from '@styled-icons/fa-regular/Lemon';
import {Folder} from '@styled-icons/boxicons-regular/Folder';
import {Reactjs} from '@styled-icons/remix-line/Reactjs';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {Download} from '@styled-icons/boxicons-regular/Download';
 
const Section = styled.section`
width:100%;
height:auto;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media(min-width: 768px){
  display:grid;
  grid-teamplate-cloumns: 1fr 1fr 1fr 1fr;
  grid-teamplate-rows: 200px 200px 200px 200px;
}
`
const SectionTitle = styled.h1`
width:100%;
height:50px;
background-color:transparent;
text-align:center;
padding-top:50px;
text-transform:capitalize;
font-size: 25px;
@media(min-width: 768px){
  grid-column-start:1;
  grid-column-end:3;
}

`
const SectionText = styled.p`
width:100%;
height:70px;
background-color:transparent;
text-align:center;
padding-top:15px;
font-size:18px;
color:black;
font-weight:300;
@media(min-width: 768px){
  grid-column-start:1;
  grid-column-end:3;
}
`
const SectionCards = styled.div`
width:270px;
height: 180px;
background-color:white;
margin-top:10px;
display:flex;
transition: all 0.3s;
transform:scale(0.9);
&:hover{
    transform:scale(1);
    box-shadow: -5px 15px 20px grey;
  }
  
 
`
const CardsLeft = styled.div `
width:30%;
height:100%;
background-color:transparent;
display:flex;
align-items:flex-start;
justify-content:center;
`

const IconMobile = styled(Mobile2)`
 width:40px;
 height:auto;
 padding-top:32px;
`
const IconLemon = styled(Lemon)`
 width:40px;
 height:auto;
 padding-top:32px;
`
const IconFolder = styled(Folder)`
 width:42px;
 height:auto;
 padding-top:32px;
`
const IconReact = styled(Reactjs)`
 width:42px;
 height:auto;
 padding-top:32px;
`
const IconMail = styled(EmailOutline)`
 width:42px;
 height:auto;
 padding-top:32px;
`
const IconDown = styled(Download)`
 width:42px;
 height:auto;
 padding-top:32px;
`
const CardsRight = styled.div`
width:70%;
height:100%;
background-color:transparent;

`

const styleSection={
  backgroundColor:'black',
  color:'white',
}
const styleSection2={
  backgroundColor:'white',
  color:'black',
}



const SectionHome = (props) =>{
 return (
      
     <Section className="sectionHome"  style={props.theme?styleSection:styleSection2}>
        <SectionTitle style={props.theme?styleSection:styleSection2}>Agência 2B features</SectionTitle>
        <SectionText  style={props.theme?styleSection:styleSection2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</SectionText>
        <SectionCards style={props.theme?styleSection:styleSection2}><CardsLeft><IconMobile/></CardsLeft><CardsRight><h3>Fully Responsive</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></CardsRight></SectionCards>
        <SectionCards style={props.theme?styleSection:styleSection2}><CardsLeft><IconLemon/></CardsLeft><CardsRight><h3>Fully Layered PSD</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></CardsRight></SectionCards>
        <SectionCards style={props.theme?styleSection:styleSection2}><CardsLeft><IconFolder/></CardsLeft><CardsRight><h3>Styled Icons</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></CardsRight></SectionCards>
        <SectionCards style={props.theme?styleSection:styleSection2}><CardsLeft><IconReact/></CardsLeft><CardsRight><h3>React JS</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></CardsRight></SectionCards>
        <SectionCards style={props.theme?styleSection:styleSection2}><CardsLeft><IconMail/></CardsLeft><CardsRight><h3>Email Teamplate</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></CardsRight></SectionCards>
        <SectionCards style={props.theme?styleSection:styleSection2}><CardsLeft><IconDown/></CardsLeft><CardsRight><h3>Free To Download</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></CardsRight></SectionCards>
     </Section>
    
 )
}

export default SectionHome;