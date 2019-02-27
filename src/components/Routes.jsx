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
import SingleArt from './SingleArt.jsx';
import VerifySocialAuthToken from './VerifySocialAuthToken.jsx';

const Routes = () => (
  <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/art/:category" component={DisplayArt}></Route>
      <Route path="/auth" component={VerifySocialAuthToken}></Route>
      <GuestRoute exact path="/login" component={Login}></GuestRoute>
      <GuestRoute exact path="/register" component={SignUp}></GuestRoute>
      <Route exact path="/arts/:slug" component={SingleArt}></Route>
      <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
      <Route component={NotFound}></Route>
  </Switch>
);


export default Routes;
