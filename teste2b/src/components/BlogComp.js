import React from 'react';
import {Switch,Route} from'react-router-dom';

const BlogComp = () => {
    return (
        <Switch>
        <Route exact path='/Blog'>
            <h1>Blog</h1>
        </Route>
        </Switch>
    )
}

export default BlogComp;