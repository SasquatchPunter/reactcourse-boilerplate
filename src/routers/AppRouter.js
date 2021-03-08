import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// Pages
import LoginPage from '../components/routes/LoginPage';
import DashboardPage from '../components/routes/DashboardPage';
import HelpPage from '../components/routes/HelpPage';
// Error Pages
import NotFoundPage from '../components/routes/NotFoundPage';
// Components

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={DashboardPage} exact />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;