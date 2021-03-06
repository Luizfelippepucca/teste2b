import React, {useState } from 'react';
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
cursor:pointer;
` 
const ImgWindows = styled(Windows)`
color: black;
width:50px;
cursor:pointer;
`
const ImgLinux = styled(Linux)`
color: black;
width:40px;
cursor:pointer;
`

const Tablet =  styled.li`
 width:280px;
 height:380px;
 background-color:black;
 border-Radius: 20px;
 display:flex;
 align-items:center;
 justify-content:center;
 margin-left:auto;
 margin-right:auto;
 margin-top:10px;
position:absolute;

` 
const ContTablet = styled.div `
width:240px;
height:300px;
background-color:white;
color:black;
`

const DivImgs = styled.div`
width:260px;
height:auto;
background-color:transparent;
margin-left:auto;
margin-right:auto;
display:flex;
align-tems:center;
justify-content:space-evenly;
margin-top:10px;
`

const Home = () => {

    const[Images,setImages] = useState([

        {
            name:'Apple',
            id:1
           
        },
        {   
            name:'Windows',
            id:2
            
        },

        {
            name:'Linux',
            id:3
           
        }

    ]);

    let[Current,setCurrent]= useState(0);
      
    const endItem = Images.map(item => <Tablet className='slide' key={item.id} ><ContTablet>{item.name} {item.id}</ContTablet></Tablet>);
    
    const transitionImg = () =>{ 
        setInterval(()=>{
            const filtrado = Images.filter((item,index)=>{
                if(Current === index){
                    return true; 
                }else{
                    return false;
                }
                });
               
                if(Current<=2){
                    setCurrent(Current++);
                    setImages(filtrado); 
                }else if(Current >=2){
                        
                        Current=0;
                    
                }
               
         },2000);
         
     }  
     
     window.addEventListener('load',transitionImg);
     

    return (
        <Switch>
            <Route exact path='/'>
                <ContSlide >
                    <ul className='slider'>
                       {endItem}
                      
                    </ul>
                        <DivImgs>
                            <ImgApple  />
                            <ImgWindows />
                            <ImgLinux />
                        </DivImgs>
                    
                    
                </ContSlide>
              
            </Route>
        </Switch>
        
    )
}

export default Home;