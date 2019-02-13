import 'babel-polyfill';
import React from "react";
import Home from "./Home";
import NotFound from "./NotFound"
import store from '../store';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import Auth from "./authentication/Auth";
import Profile from './Profile';

const Routes = () => (
    <Provider store={store}>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/auth" component={Auth}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route component={NotFound}></Route>
    </Switch>
    </Provider>
);

export default Routes;
