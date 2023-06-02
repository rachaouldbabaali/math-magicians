import React from 'react';
import PropTypes from 'prop-types';

function Quotes({ quote }) {
  return (
    <div className="quotes">
      <h1>{quote}</h1>
    </div>
  );
}

Quotes.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default Quotes;
