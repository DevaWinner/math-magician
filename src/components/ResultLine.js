import React from 'react';
import PropTypes from 'prop-types';

function ResultLine({ total, operation, next }) {
  return (
    <div className="result-line">
      {total}
      {operation}
      {next}
    </div>
  );
}

ResultLine.propTypes = {
  total: PropTypes.number.isRequired,
  operation: PropTypes.string,
  next: PropTypes.string,
};

ResultLine.defaultProps = {
  operation: null,
  next: null,
};

export default ResultLine;
