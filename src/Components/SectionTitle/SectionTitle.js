import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ children }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      {children}
    </>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  children: PropTypes.node,
};
