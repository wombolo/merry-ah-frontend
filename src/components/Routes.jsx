import React from "react";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound"
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route component={NotFound}></Route>
    </Switch>
);

export default Routes;
