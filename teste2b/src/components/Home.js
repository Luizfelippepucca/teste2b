import React, {useState } from 'react';
import {Switch,Route} from 'react-router-dom';
import SectionHome from './sectionHome';
import styled from 'styled-components';
import {Apple} from '@styled-icons/boxicons-logos/Apple';
import {Windows} from '@styled-icons/boxicons-logos/Windows';
import {Linux} from '@styled-icons/fa-brands/Linux';
import '../style/style.css';
import Logo from '../img/apple.png';
import Logo2 from '../img/windows.png';
import Logo3 from '../img/linux.png';

const ContSlide = styled.section`
width: 100%;
height: 500px;
background-color: #fddb00;

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
display:flex;
align-tems:center;
justify-content:center;
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
const ImgSlider = styled.img`
 width:300px;
 height:auto;
 margin-left:auto;
 margin:left:auto;
` 




const Home = () => {

    const[Images,setImages] = useState([

        {
          
            img:Logo,
            id:1,
            description:'Imagem1'
            
           
        },
        {   
          
            img:Logo2,
            id:2,
            description:'Imagem2'
        },

        {
            img:Logo3,
            id:3,
            description:'Imagem3'
        }

    ]);

    let[Current,setCurrent]= useState(0);
      
    const endItem = Images.map(item => <Tablet  key={item.id} ><ContTablet><ImgSlider src={item.img}  alt={item.description}/></ContTablet></Tablet>);
    
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
               <SectionHome/>
            </Route>
        </Switch>
        
    )
}

export default Home;