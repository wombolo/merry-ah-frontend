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
import VerifySocialAuthToken from './VerifySocialAuthToken.jsx';
import AllArt from './AllArt.jsx';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/art/:category" component={DisplayArt}></Route>
        <Route path="/arts" component={AllArt}></Route>
        <Route path="/auth" component={VerifySocialAuthToken}></Route>
        <GuestRoute exact path="/login" component={Login}></GuestRoute>
        <GuestRoute exact path="/register" component={SignUp}> </GuestRoute>
        <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
        <Route component={NotFound}></Route>
    </Switch>
);


export default Routes;
