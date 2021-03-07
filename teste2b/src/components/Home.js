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
import FooterHome from '../components/Rodape';

const ContSlide = styled.section`
width: 100%;
height: 500px;
background-color: #fddb00;
@media(min-width: 768px){
    display:grid;
    grid-teamplate-cloumns: 1fr 1fr;
    grid-teamplate-rows: 200px 200px 200px;
  }
 
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
 @media(min-width: 1440px){
    margin-left:-40px;
   }


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
@media(min-width: 768px){
    grid-column-start:1;
    grid-column-end:3;
   grid-row-start:1;
 
  }
  @media(min-width: 1440px){
   margin-right:280px;
  }
  @media(min-width: 1920px){
    margin-right:319px;
     }
 
`
const DivTextLeft = styled.div`
width:100px;
background-color:transparent;
display:none;
@media(min-width:768px){
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:300px;
    height:200px;
    grid-column-start:1;
    grid-column-end:3;
    grid-row-start:1;
    margin-left:100px;
  }
  @media(min-width: 1024px){
   margin-left:200px;
 }
 @media(min-width: 1440px){
    margin-left:300px;
  }
  @media(min-width: 1920px){
 grid-column-start:2;
  }
`
const TitleDivLeft =  styled.h4`
 width:80%;
 height:50px;
 color:black;
 text-align:justify;
 font-size: 22px;
` 

const ParagraphDivLeft = styled.p`
width:80%;
height:50px;
text-align:justify;
color:#434434;
font-size:17px;
`

const ParagraphDivLeft2 = styled.p`
width:80%;
height:50px;
text-align:justify;
color:#817742;
`
const ImgSlider = styled.img`
 width:300px;
 height:auto;
 margin-left:auto;
 margin:left:auto;
` 
const styleH = {
    backgroundColor:'black',
    color:'#fddb00',
}

const styleImgH={
    color:'#fddb00',
}

const styleTablet={
    backgroundColor:'white'
}
const styleContTablet={
    backgroundColor:'black'
}
const Home = (props) => {
    

    const[Images,setImages] = useState([

        {
          
            img:Logo,
            id:1,
            description:'Imagem1',
            
            
           
        },
        {   
          
            img:Logo2,
            id:2,
            description:'Imagem2',
            
        },

        {
            img:Logo3,
            id:3,
            description:'Imagem3'
            
        }

    ]);

    let[Current,setCurrent]= useState(0);
      
    const endItem = Images.map(item =><Tablet  key={item.id} style={props.theme?styleTablet:styleContTablet}><ContTablet style={props.theme?styleContTablet:styleTablet}><ImgSlider src={item.img}  alt={item.description}/></ContTablet></Tablet>);
    
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
                {props.theme? 
                    <ContSlide style={styleH}>
                        <ul className='slider' style={styleH}>
                            {endItem}
                       </ul>
                       <DivTextLeft style={styleH}>
                            <TitleDivLeft style={styleH}>
                                Inspire your inspiration
                            </TitleDivLeft>
                            <ParagraphDivLeft style={styleH}>
                                Simple to use for app,products showcase and your inspiration
                            </ParagraphDivLeft>
                            <ParagraphDivLeft2>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                            </ParagraphDivLeft2>
                    </DivTextLeft>
                    <DivImgs>
                            <ImgApple style={styleImgH} />
                            <ImgWindows style={styleImgH}/>
                            <ImgLinux style={styleImgH}/>
                        </DivImgs>
                    </ContSlide>:
                <ContSlide >
                    <ul className='slider'>
                       {endItem}
                    </ul>
                    <DivTextLeft>
                       <TitleDivLeft>
                           Inspire your inspiration
                       </TitleDivLeft>
                       <ParagraphDivLeft>
                           Simple to use for app,products showcase and your inspiration
                       </ParagraphDivLeft>
                       <ParagraphDivLeft2>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                       </ParagraphDivLeft2>
                    </DivTextLeft>
                        <DivImgs>
                            <ImgApple  />
                            <ImgWindows />
                            <ImgLinux />
                        </DivImgs>
                </ContSlide>}
               <SectionHome theme={props.theme}/>
               <FooterHome />
            </Route>
        </Switch>
        
    )
}

export default Home;