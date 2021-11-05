import React from 'react';
import "./form.css"

class Form extends React.Component {
  render() {
    return(
      <form>
        <label htmlFor="name-input">
          Nome da carta
          <input 
            id="name-input"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          descrição da carta
          <textarea
            id="description-input"
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Inserir o primeiro atributo da carta
          <input
            id="attr1-input"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Inserir o segundo atributo da carta
          <input
            id="attr2-input"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Inserir o terceiro atributo da carta
          <input
            id="attr3-input"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Inserir o caminho para imagem da carta
          <input
            id="image-input"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Inserir raridade da carta
          <select
            id="rare-input"
            type="text"
            data-testid="rare-input"
            >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label id="trunfo-input-container" htmlFor="trunfo-input">
          Selecionar se a carta for o Super Trunfo
          <input
            id="trunfo-input"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <label id="save-button-container" htmlFor="save-button">
          Confirme os dados
          <button
            id="save-button"
            type="submit"
            data-testid="save-button"
            >
            Salvar
          </button>
        </label>
      </form>
    );
  }
}

export default Form;
