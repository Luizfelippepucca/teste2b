import React from 'react';
import {Switch,Route} from 'react-router-dom';

const Home = () => {
    return (
        <Switch>
        <Route exact path='/'>
            <h1>Home</h1>
        </Route>
        </Switch>
        
    )
}

export default Home;