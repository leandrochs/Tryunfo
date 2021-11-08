import React from 'react';
import './form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, onInputChange, isSaveButtonDisabled,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="cardName">
          Nome da carta
          <input
            data-testid="name-input"
            id="cardName"
            name="cardName"
            onChange={ onInputChange }
            type="text"
            value={ cardName }
          />
        </label>
        <label htmlFor="description-input">
          descrição da carta
          <textarea
            id="description-input"
            type="textarea"
            data-testid="description-input"
            name="cardDescription"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>
        <label htmlFor="attr1-input">
          Inserir o primeiro atributo da carta
          <input
            id="attr1-input"
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="attr2-input">
          Inserir o segundo atributo da carta
          <input
            id="attr2-input"
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="attr3-input">
          Inserir o terceiro atributo da carta
          <input
            id="attr3-input"
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="image-input">
          Inserir o caminho para imagem da carta
          <input
            id="image-input"
            type="text"
            data-testid="image-input"
            name="cardImage"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="rare-input">
          Inserir raridade da carta
          <select
            id="rare-input"
            type="text"
            data-testid="rare-input"
            name="cardRare"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label id="trunfo-input-container" htmlFor="trunfo-input">
          Selecionar se a carta for o Super Trunfo
          <input
            className="trunfo-input"
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
        </label>
        <div className="button-container">
          <button
            id="save-button"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
