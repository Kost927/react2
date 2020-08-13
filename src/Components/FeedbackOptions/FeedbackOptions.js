import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button type="button" onClick={() => onLeaveFeedback("good")} name="good">
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback("neutral")} name="neutral">
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback("bad")} name="bad">
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
};
