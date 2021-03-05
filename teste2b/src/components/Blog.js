import React from 'react';
import {Link} from 'react-router-dom';

const Blog = (props)=>{
    return (
      
          <Link to='/Blog' onClick={props.click3}>Blog</Link>
       
    )
}

export default Blog;