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
                <Route exact path='/' ><Features click2={props.click} theme={props.theme} ></Features><Support click4={props.click} theme={props.theme}></Support><Blog click3={props.click} theme={props.theme}></Blog></Route>
                <Route exact path='/Support' ><Features click2={props.click} theme={props.theme}></Features><Support click4={props.click}theme={props.theme}></Support><Blog click3={props.click} theme={props.theme}></Blog></Route>
                <Route exact path='/Blog' ><Features click2={props.click} theme={props.theme} ></Features><Support click4={props.click} theme={props.theme}></Support><Blog click3={props.click} theme={props.theme}></Blog></Route>
            </Switch>
          
       </div>
    )
}

export default Navegation;