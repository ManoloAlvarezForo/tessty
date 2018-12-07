import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AUTH_TOKEN } from '../Utils/Constans/Communication'
import WithMain from '../Hoc/WithMain';

function isAuthenticated() {
    return localStorage.getItem(AUTH_TOKEN) ? true : false;
}

export const AuthRoute = ({ component: Component, ...rest }) => {
    const Main = WithMain(Component);
    return (
        <Route {...rest} render={() => (
            isAuthenticated() === true
                ? <Main />
                : <Redirect to="/authentication" />
        )} />
    )
}
