import React from 'react';
import PropTypes from 'prop-types';
import './trunfofilter.css';

class Trunfofilter extends React.Component {
  render() {
    const { trunfofilter, onInputChange } = this.props;

    return (
      <label
        className="label-container"
        htmlFor="trunfo-imput"
        data-testid="trunfo-filter"
      >
        Super Trunfo
        <input
          type="checkbox"
          id="trunfo-imput"
          name="trunfofilter"
          onChange={ onInputChange }
          value={ trunfofilter }
        />
      </label>
    );
  }
}

Trunfofilter.propTypes = {
  trunfofilter: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Trunfofilter;
