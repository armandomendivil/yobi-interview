import React from 'react';
import PropTypes from 'prop-types';
import Home from '../components/Home';

const Main = (props) => (
  <div>
    <Home />
    <div className="container">
      {props.children}
    </div>
  </div>
);

Main.propTypes = {
  children: PropTypes.element,
};

export default Main;
