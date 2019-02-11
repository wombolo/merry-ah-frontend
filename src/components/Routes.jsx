import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import ForgotPassword from "./ForgotPassword";

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/forgot-password" component={ForgotPassword}></Route>
      <Route component={NotFound}></Route>
    </Switch>
);

export default Routes;
