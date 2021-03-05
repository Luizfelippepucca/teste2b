import React from 'react';
import {Switch,Route} from 'react-router-dom';

const SupportComp = () => {
    return (
        <Switch>
        <Route exact path='/Support'>
            <h1>Support</h1>
        </Route>
        </Switch>
    )
}

export default SupportComp;