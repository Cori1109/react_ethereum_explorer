import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';

const Main = props => {

  const { children } = props;
  const classes = useStyles();


  return (
    <div
      className={classes.root}
    >
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
