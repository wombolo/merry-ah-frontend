import 'babel-polyfill';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import DisplayArt from './DisplayArt.jsx';
import store from '../store';
import Profile from './Profile.jsx';
import Login from './authentication/Login.jsx';

const Routes = () => (
    <Provider store={store}>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/art/:category" component={DisplayArt}></Route>
        <Route component={NotFound}></Route>
    </Switch>
    </Provider>
);

export default Routes;
