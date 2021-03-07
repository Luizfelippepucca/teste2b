import React from 'react';
import {Link} from 'react-router-dom';

const styelLink = {
    textDecoration:'none',
    color:'white',
    fontWeight:'bold'
}
const styledLink2 = {
    textDecoration:'none',
    color:'black',
    fontWeight:'bold'
}
const Features = (props)=>{
    return (
       
          <Link to='/' style={props.theme?styelLink:styledLink2} onClick={props.click2} >Home</Link>
      
    )
}

export default Features;