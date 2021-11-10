import React from 'react';

class Namefilter extends React.Component {
  render () {

    const { namefilter, onInputChange } = this.props;

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
        <button>Buscar</button>
      </div>
    )
  }
}

export default Namefilter;
