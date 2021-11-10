import React from 'react';
import PropTypes from 'prop-types';

class Namefilter extends React.Component {
  render() {
    const { namefilter, onInputChange, filterButton } = this.props;

    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          name="namefilter"
          placeholder="Buscar pelo nome"
          onChange={ onInputChange }
          value={ namefilter }
        />
        <button type="button" onClick={ filterButton }>Buscar</button>
      </div>
    );
  }
}

Namefilter.propTypes = {
  namefilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  filterButton: PropTypes.func.isRequired,
};

export default Namefilter;
