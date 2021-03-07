import React from 'react';
import styled from 'styled-components';
import {Facebook} from '@styled-icons/entypo-social/Facebook';
import {TwitterSquare} from '@styled-icons/fa-brands/TwitterSquare';
import {SocialGooglePlus} from '@styled-icons/foundation/SocialGooglePlus';
import {GithubSquare} from '@styled-icons/fa-brands/GithubSquare';

const Footer = styled.footer`
width:100%;
height:600px;
background-color:black;
padding-top:10px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
@media(min-width: 768px){
    display:grid;
    grid-teamplate-cloumns: 1fr 1fr 1fr;
    grid-teamplate-rows: 200px 200px 200px;
  }
`
const TitleFooter = styled.h5`
width:70%;
height:50px;
color:#fddb00;
font-size:22px;
font-weight:bold;
text-align:center;
@media(min-width: 768px){
   grid-column-start:1;
   grid-column-end:3;
   margin-left:auto;
   margin-right:auto;
  }

`
const TextFooter = styled.p`
width:80%;
height:50px;
color:grey;
font-size:18px;
text-align:center;
@media(min-width: 768px){
    grid-column-start:1;
    grid-column-end:3;
    margin-left:auto;
    margin-right:auto;
   }
`
const FormFooter = styled.form`
width:80%;
height:100px;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction:column;
margin-top:30px;
@media(min-width: 768px){
    grid-column-start:1;
    grid-column-end:3;
    margin-left:auto;
    margin-right:auto;
   }
`

const InputForm = styled.input`
width:90%;
max-width: 700px;
height:40px;
outline:none;
border:0;
border-radius:3px;
font-size:20px;
`

const ButtonForm = styled.button`
width:80px;
height:30px;
border:0;
outline:none;
background-color:#fddb00;
color:black;
cursor:pointer;
border-radius:3px;
font-weight:bold;
text-transform:uppercase;
`
const DivIcons = styled.div`
width:80%;
max-width:500px;
height:100px;
display:flex;
align-items:center;
justify-content:space-around;
@media(min-width: 768px){
    grid-column-start:1;
    grid-column-end:4;
    margin-left:auto;
    margin-right:auto;
   }

` 

const FaceIcon = styled(Facebook)`
width:35px;
color:#fddb00;
transition:all 0.5s easy-in-out;
&:hover{-webkit-box-reflect: below 2px linear-gradient(transparent,#000)};
`
const TwitterIcon = styled(TwitterSquare)`
width:33px;
color:#fddb00;
transition:all 0.5s easy-in-out;
&:hover{-webkit-box-reflect: below 2px linear-gradient(transparent,#000)};
`

const GoogleIcon = styled(SocialGooglePlus)`
width:44px;
color:#fddb00;
transition:all 0.5s easy-in-out;
&:hover{-webkit-box-reflect: below -5px linear-gradient(transparent,#000)};
`

const GitIcon = styled(GithubSquare)`
width:35px;
color:#fddb00;
transition:all 0.5s easy-in-out;
&:hover{-webkit-box-reflect: below 2px linear-gradient(transparent,#000)};
`
const FinalFooter = styled.div`
width:100%;
max-width:500px;
height:100px;
color:white;
background-color:transparent;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-tranform:inherit;
@media(min-width: 768px){
    grid-column-start:1;
    grid-column-end:2;
    
   }
`
const FinalFooter2 = styled.div`
width:100%;
color:white;
max-width:500px;
height:100px;
background-color:transparent;
display:flex;
flex-direction:row;
justify-content:flex;
align-items:center;
text-tranform:inherit;
@media(min-width: 768px){
    grid-column-start:2;
    grid-column-end:3;
    margin-top:-40px;
   }
`
const FooterHome = (props)=>{
return(
    <Footer>
        <TitleFooter>Keep in touch with us</TitleFooter>
        <TextFooter>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</TextFooter>
        <FormFooter>
            <InputForm  type='text' placeholder='Enter your email to update' maxLength='30'/>
            <ButtonForm type='button'>Submit</ButtonForm>
        </FormFooter>
        <DivIcons>
          <FaceIcon/>
          <TwitterIcon/>
          <GoogleIcon/>
          <GitIcon/>
        </DivIcons>
        <FinalFooter>
            <p className='pfooter'>Halovietnam ltd</p>
            <span>66,Dang Van ngu,Dong Da</span>
            <span>Hanoi,Vietnam</span>
            <span>contact@halovietnam.com</span>
            <span>+844 35149182</span>
        </FinalFooter>
        <FinalFooter2>
            <div className='finalfooter'>
                <span>Contact</span>
                <span>About</span>
                <span>Privacy</span>
            </div>
            <div className='finalfooter'>
                <span>Home</span>
                <span>Support</span>
                <span>Blog</span>
            </div>
        </FinalFooter2>
    </Footer>
)
}

export default FooterHome;