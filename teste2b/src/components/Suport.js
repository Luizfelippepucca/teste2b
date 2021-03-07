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
const Support = (props)=>{
    return (
      
          <Link to='/Support' style={props.theme?styelLink:styledLink2} onClick={props.click4}>Support</Link>
       
    )
}

export default Support;