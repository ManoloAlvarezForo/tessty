import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {AuthRoute} from '../Routes/AuthRoute';

// Components.
import Error404 from '../components/Error404/Error404';
import AuthenticationPage from '../containers/AuthenticationPage/AuthenticationPage';

// Containers.
import DashboardPage from '../containers/DashboardPage/DashboardPage';
import ApplicantsPage from '../containers/ApplicantsPage/ApplicantsPage';
import CustomDrawer from '../containers/Drawer/CustomDrawer';

const Routes = () => {
    return (
        <Switch>
            <Route  path="/authentication" component={AuthenticationPage} />
            <AuthRoute exact path="/" component={DashboardPage} container={CustomDrawer}  />
            <AuthRoute exact  path="/applicants" component={ApplicantsPage} container={CustomDrawer}  />
            <AuthRoute component={Error404} />
        </Switch>
    )
}

export default Routes;