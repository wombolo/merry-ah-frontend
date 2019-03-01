import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'react-router-dom/es/NavLink';


const NotFound = ({ location }) => (
    <div className='mt-5 pt-5 container-fluid text-center vh-100'>
      <div>
        <img src={require('../assets/images/404.png')} className='w-50'/>
      </div>

      <h3>Specified route does not exist  <code>{location.pathname}</code></h3>

      <i className='fa fa-arrow-right'/>
      <NavLink to={'/arts'} className='text-uppercase'>View All Arts</NavLink>
      <i className='fa fa-arrow-left'/>
    </div>
);
NotFound.propTypes = {
  location: PropTypes.object.isRequired,
};
export default NotFound;
