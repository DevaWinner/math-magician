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


