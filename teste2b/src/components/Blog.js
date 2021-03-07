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

const Blog = (props)=>{
    return (
      
          <Link to='/Blog' style={props.theme?styelLink:styledLink2} onClick={props.click3}>Blog</Link>
       
    )
}

export default Blog;