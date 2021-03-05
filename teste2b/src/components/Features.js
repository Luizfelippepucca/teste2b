import React from 'react';
import {Link} from 'react-router-dom';


const Features = (props)=>{
    return (
       
          <Link to='/'  onClick={props.click2}>Home</Link>
      
    )
}

export default Features;