import React from "react";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import DisplayArt from "./DisplayArt";
import store from '../store';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

const Routes = () => (
    <Provider store={store}>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/art/:category" component={DisplayArt}></Route>
        <Route component={NotFound}></Route>
    </Switch>
    </Provider>
);

export default Routes;
