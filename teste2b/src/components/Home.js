import React from 'react';
import {Switch,Route} from 'react-router-dom';
import styled from 'styled-components';
import {Apple} from '@styled-icons/boxicons-logos/Apple';
import {Windows} from '@styled-icons/boxicons-logos/Windows';
import {Linux} from '@styled-icons/fa-brands/Linux';
import '../style/style.css';

const ContSlide = styled.section`
width: 100%;
height: 500px;
background-color: yellow;
padding-top:30px;

` 
const ImgApple = styled(Apple)`
color: black;
width:50px;
` 
const ImgWindows = styled(Windows)`
color: black;
width:50px;
`
const ImgLinux = styled(Linux)`
color: black;
width:40px;
`

const Tablet =  styled.div`
 width:280px;
 height:380px;
 background-color:black;
 border-Radius: 20px;
 display:flex;
 align-items:center;
 justify-content:center;
 margin-left:auto;
 margin-right:auto;
 position:absolute;
 
` 
const ContTablet = styled.div `
width:240px;
height:300px;
background-color:white;
`

const DivImgs = styled.div`
width:260px;
height:auto;
background-color:transparent;
margin-left:auto;
margin-right:auto;
display:flex;
align-tems:center;
justify-content:center;
margin-top:10px;
`



const Home = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <ContSlide>
                    <div className='slider'>
                        <Tablet className='slide01'>
                            <ContTablet>
                                <ImgApple/>
                            </ContTablet>
                        </Tablet>
                       
                        <Tablet className='slide02'>
                            <ContTablet>
                                <ImgWindows/>
                            </ContTablet>
                        </Tablet>

                        <Tablet className='slide03'>
                            <ContTablet>
                                <ImgLinux/>
                            </ContTablet>
                        </Tablet>
                    </div>
                        <DivImgs>
                            <ImgApple/>
                            <ImgWindows/>
                            <ImgLinux/>

                        </DivImgs>
                    
                    
                </ContSlide>
              
            </Route>
        </Switch>
        
    )
}

export default Home;