import 'babel-polyfill';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import DisplayArt from './DisplayArt.jsx';
import Profile from './Profile.jsx';
import Login from './authentication/Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import GuestRoute from './GuestRoute.jsx';
import SignUp from './authentication/SignUp.jsx';
import CreateArt from './CreateArt.jsx';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/art/:category" component={DisplayArt}/>
        <GuestRoute exact path="/login" component={Login}/>
        <GuestRoute exact path="/register" component={SignUp}/>
        <PrivateRoute path="/profile" component={Profile}/>
        <PrivateRoute path="/create-art" component={CreateArt}/>
        <Route component={NotFound}/>
    </Switch>
);


export default Routes;
