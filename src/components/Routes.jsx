import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import ForgotPassword from "./ForgotPassword";
import CompletePasswordReset from './CompletePasswordReset';

const Routes = () => (
    <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/forgot-password" component={ForgotPassword}></Route>
      <Route path="/complete-password-reset" component={CompletePasswordReset}></Route>
      <Route component={NotFound}></Route>
    </Switch>
    </Provider>
);

export default Routes;
