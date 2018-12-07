import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {AuthRoute} from '../Routes/AuthRoute';

// Components.
import Error404 from '../components/Error404/Error404';
import AuthenticationPage from '../containers/AuthenticationPage/AuthenticationPage';

// Containers.
import HomePage from '../containers/HomePage/HomePage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/authentication" component={AuthenticationPage} />
            <AuthRoute exact path="/" component={HomePage} />
            <AuthRoute component={Error404} />
        </Switch>
    )
}

export default Routes;