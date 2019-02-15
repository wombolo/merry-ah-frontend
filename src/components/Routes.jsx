import 'babel-polyfill';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import Profile from './Profile.jsx';
import Login from './authentication/Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import GuestRoute from './GuestRoute.jsx';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <GuestRoute exact path="/login" component={Login}></GuestRoute>
        <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
        <Route component={NotFound}></Route>
    </Switch>
);


export default Routes;
