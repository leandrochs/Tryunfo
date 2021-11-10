import React from 'react';
import PropTypes from 'prop-types';
import './rarefilter.css';

class Rarefilter extends React.Component {
  render() {
    const { rarefilter, onInputChange } = this.props;
    return (
      <div>
        <select
          type="checkbox"
          data-testid="rare-filter"
          name="rarefilter"
          onChange={ onInputChange }
          value={ rarefilter }
        >
          <option>Raridade</option>
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </div>
    );
  }
}

Rarefilter.propTypes = {
  rarefilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Rarefilter;
