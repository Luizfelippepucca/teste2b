import React from 'react';
import styled from 'styled-components';
import {Mobile2} from 'styled-icons';

const Section = styled.section`
width:100%;
height:auto;
background-color:grey;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const SectionTitle = styled.h1`
width:100%;
height:50px;
background-color:brown;
text-align:center;
padding-top:80px;
text-transform:capitalize;
font-size: 25px;
`
const SectionText = styled.p`
width:100%;
height:70px;
background-color:salmon;
text-align:center;
padding-top:15px;
font-size:18px;
color:black;
font-weight:300;
`
const SectionCards = styled.div`
width:300px;
height: 200px;
background-color:black;
margin-top:30px;
`

const SectionHome = () =>{
 return (
     <Section>
        <SectionTitle>Agência 2B features</SectionTitle>
        <SectionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</SectionText>
        <SectionCards>eae</SectionCards>
        <SectionCards>eae</SectionCards>
        <SectionCards>eae</SectionCards>
        <SectionCards>eae</SectionCards>
        <SectionCards>eae</SectionCards>
        <SectionCards>eae</SectionCards>
     </Section>
 
 )
}

export default SectionHome;