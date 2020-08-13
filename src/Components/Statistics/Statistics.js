import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positiveFeedback,
}) => {
  return (
    <>
      <h2>Statistics</h2>
    {totalFeedbacks === 0 ? "No feedback given" :
      <ul>
        <li>
          <span>Good:</span>
          <span>{good}</span>
        </li>
        <li>
          <span>Neutral:</span>
          <span>{neutral}</span>
        </li>
        <li>
          <span>Bad:</span>
          <span>{bad}</span>
        </li>
        <li>
          <span>Total:</span>
          <span>{totalFeedbacks}</span>
        </li>
        <li>
          <span>Positive feedback:</span>
          <span>
            {isNaN(positiveFeedback) ? 0 : positiveFeedback.toFixed(1)}%
          </span>
        </li>
      </ul>
}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedbacks: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
