import React, { Component } from 'react';

const NotFound = ({ location }) => (
    <div>
        <h3>Specified route does not exist  <code>{location.pathname}</code></h3>
    </div>
);

export default NotFound;
