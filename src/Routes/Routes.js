import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Pages/Home/Home';
import Favourite from '../Pages/Favourite/Favourite';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/search/:category/:query' render={
            props => (<Home {...props} />
            )} />
        <Route exact path="/favourite" component={Favourite} />
        <Redirect to="/" />
    </Switch>
)

export default Routes
