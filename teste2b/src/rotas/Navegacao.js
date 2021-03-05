import React from 'react';
import '../style/style.css';
import Features from '../components/Features';
import Support from '../components/Suport';
import Blog from '../components/Blog';
import {Switch,Route} from 'react-router-dom';



const Navegation = (props)=>{
    return (
       <div className='rotas'>
           
           <Switch>
                <Route  path='/' ><Features click2={props.click} ></Features><Support click4={props.click}></Support><Blog click3={props.click}></Blog></Route>
            </Switch>
          
       </div>
    )
}

export default Navegation;